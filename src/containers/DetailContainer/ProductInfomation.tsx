import React, { useCallback, useMemo, useState } from 'react';
import { useAlert } from 'react-alert';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import CustomSlider from '../../components/Slider';
import { IProductWithVariants } from '../../libs/apis/products/types';
import { moneyFormat } from '../../libs/utils/moneyFormat';
import { createCartItem } from '../../redux/cart';
import * as S from './styles';

export interface IProductInfomation {
  product?: IProductWithVariants;
}

export const ProductInfomation: React.FC<IProductInfomation> = React.memo(
  ({ product }) => {
    const { t } = useTranslation();
    const alert = useAlert();
    const dispatch = useDispatch();

    const [color, setColor] = useState<string | undefined>();
    const [size, setSize] = useState<string | undefined>();
    const [quantity, setQuantity] = useState<number>(1);

    const images = useMemo(() => {
      const _images = product?.variants?.[0]?.images?.map((item, idx) => {
        return { id: `${product?.id}-${idx}`, image: item };
      });
      return _images || [];
    }, [product]);

    const colors = useMemo(() => {
      const _colors: string[] = [];
      product?.variants?.map((item) => {
        if (!_colors.includes(item.color.name)) _colors.push(item.color.name);
      });
      return _colors;
    }, [product]);

    const sizes = useMemo(() => {
      const _sizes: string[] = [];
      product?.variants?.map((item) => {
        if (!_sizes.includes(item.size.name)) _sizes.push(item.size.name);
      });
      return _sizes;
    }, [product, color]);

    const remainQuantity = useMemo(() => {
      let _quantity =
        product?.variants?.find(
          (item) => item.color.name === color && item.size.name === size,
        )?.quantity || 0;
      return _quantity;
    }, [color, size]);

    const handleAddToCart = useCallback(() => {
      if (!color || !size || (quantity && quantity > remainQuantity))
        alert.show(
          {
            title:
              'You have to pick a size, a color, and the amount of quantity must be less than the remaining quantity',
          },
          { type: 'error' },
        );
      else {
        const _item = product?.variants?.find(
          (item) => item.color.name === color && item.size.name === size,
        );

        dispatch(createCartItem({ variantId: _item?.id || '', quantity }));

        alert.show({ title: t('success.add-to-cart') }, { type: 'success' });
      }
    }, [color, size, quantity, remainQuantity]);

    return (
      <div className="row">
        <div className="col-md-6">
          <S.WrapImages>
            <CustomSlider sliders={images} />
          </S.WrapImages>
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{product?.name}</div>
            </div>
            <p>{product?.description}</p>
            <div className="product-count col-lg-7 ">
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>{t('colour')}</h6>
                <div className="row">
                  {colors.map((item, idx) => {
                    return (
                      <div className="col-lg-4 col-md-4 col-sm-4" key={idx}>
                        <div style={{ textAlign: 'center' }}>
                          <S.WrapColor isSelected={item === color} color={item}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 7"
                              fill="none"
                              width={28}
                              height={28}
                              onClick={() => {
                                setColor(item);
                              }}
                            >
                              <circle cx="3" cy="3.5" r="3" fill={item} />
                            </svg>
                          </S.WrapColor>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>{t('size')}</h6>
                <div className="row">
                  {sizes.map((item, idx) => {
                    return (
                      <div className="col-lg-4 col-md-4 col-sm-4" key={idx}>
                        <div style={{ textAlign: 'center', margin: '10px' }}>
                          <S.WrapSize
                            isSelected={size === item}
                            onClick={() => setSize(item)}
                          >
                            {item}
                          </S.WrapSize>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>{t('product.quantity')}</h6>
                <div>
                  <S.WrapMinus
                    onClick={
                      quantity - 1
                        ? () => {
                            setQuantity(quantity - 1);
                          }
                        : undefined
                    }
                  >
                    -
                  </S.WrapMinus>
                  <S.WrapQuantity>{quantity}</S.WrapQuantity>
                  <S.WrapPlus
                    onClick={
                      quantity + 1 <= remainQuantity
                        ? () => {
                            setQuantity(quantity + 1);
                          }
                        : undefined
                    }
                  >
                    +
                  </S.WrapPlus>
                </div>
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>{t('product.price')}</h6>
                <span>
                  {moneyFormat((product?.default_price || 1) * quantity, '$')}
                </span>
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                {color && size ? (
                  <>
                    <h6>{t('product.remain-quantity')}</h6>
                    <div>{remainQuantity}</div>
                  </>
                ) : (
                  <div>{t('product.message.remain-quantity')}</div>
                )}
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                <S.WrapButton onClick={handleAddToCart}>
                  {t('product.add-to-cart')}
                </S.WrapButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default ProductInfomation;
