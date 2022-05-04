import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './styles';
import { ROUTERS } from '../../configs/navigators';
import { useDispatch, useSelector } from 'react-redux';
import { allCart } from '../../redux/cart/selectors';
import { moneyFormat } from '../../libs/utils/moneyFormat';
import {
  deleteItem,
  removeItem,
  updateQuantityCart,
  updateQuantityItem,
} from '../../redux/cart';
import { useAlert } from 'react-alert';

export const CartContainer: React.FC = () => {
  const listCarts = useSelector(allCart);
  const dispatch = useDispatch();
  const alert = useAlert();

  const [data, setData] = useState<any[]>([]);

  const handleChangeDownQuantity = (id: string) => {
    const _newData = data.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity - 1 };
      return item;
    });
    setData(_newData);
  };

  const handleChangeUpQuantity = (id: string) => {
    const _newData = data.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    setData(_newData);
  };

  const totalPrice = React.useMemo(() => {
    const price = data.reduce(
      (a, c) => a + c.quantity * c.item.product.default_price,
      0,
    );
    return price;
  }, [data]);

  const handleUpdateCart = (id: string) => {
    const _item = data.find((item) => item.id === id);
    dispatch(updateQuantityItem({ id, quantity: _item?.quantity || 1 }));
    dispatch(updateQuantityCart({ id, quantity: _item?.quantity || 1 }));
    alert.show(
      { title: 'Your cart have been updated successfully' },
      { type: 'success' },
    );
  };

  const handleRemoveCart = React.useCallback(
    (id: string) => {
      dispatch(removeItem(id));
      dispatch(deleteItem(id));
      alert.show(
        { title: 'Your cart have been deleted successfully' },
        { type: 'success' },
      );
    },
    [listCarts],
  );

  useEffect(() => {
    setData(listCarts.items);
  }, [listCarts]);

  return (
    <div className="container">
      {listCarts.total ? (
        <>
          <div className=" alert alert-info text-center mt-3">
            Total Cart Products
            <Link href={`${ROUTERS.cart.path}`}>
              <a className="text-success mx-2">{listCarts.total}</a>
            </Link>
          </div>
          <S.Wrapper>
            <S.Box
              width="100%"
              pb={16}
              borderBottom={`1px solid #58AFFF`}
              display="flex"
            >
              <S.Box width="5%" display="flex" alignItems="center">
                ID
              </S.Box>
              <S.Box width="20%" display="flex" justifyContent="center">
                Name
              </S.Box>
              <S.Box width="20%" display="flex" justifyContent="center">
                Image
              </S.Box>
              <S.Box width="5%" display="flex" justifyContent="center">
                Size
              </S.Box>
              <S.Box width="5%" display="flex" justifyContent="center">
                Color
              </S.Box>
              <S.Box width="10%" display="flex" justifyContent="center">
                Price
              </S.Box>
              <S.Box width="20%" display="flex" justifyContent="center">
                Quantity
              </S.Box>
              <S.Box width="15%" display="flex" justifyContent="center">
                Action
              </S.Box>
            </S.Box>
            {data.map((item, idx) => {
              return (
                <S.Box
                  key={idx}
                  pt={24}
                  pb={24}
                  display="flex"
                  alignItems="center"
                  borderBottom={
                    idx === data.length - 1 ? '1px solid #58AFFF' : 'none'
                  }
                >
                  <S.Box width="5%" display="flex" justifyContent="center">
                    {idx + 1}
                  </S.Box>
                  <S.Box width="20%" display="flex" justifyContent="center">
                    {item.item.product.name}
                  </S.Box>
                  <S.Box width="20%" display="flex" justifyContent="center">
                    <img
                      src={item.item.product.image}
                      alt="product"
                      width={80}
                      height={80}
                    />
                  </S.Box>
                  <S.Box width="5%" display="flex" justifyContent="center">
                    {item.item.size.name}
                  </S.Box>
                  <S.Box width="5%" display="flex" justifyContent="center">
                    {item.item.color.name}
                  </S.Box>
                  <S.Box width="10%" display="flex" justifyContent="center">
                    {moneyFormat(item.item.product.default_price, '$')}
                  </S.Box>
                  <S.Box width="20%" display="flex" justifyContent="center">
                    <S.WrapMinus
                      onClick={
                        item.quantity !== 1
                          ? () => handleChangeDownQuantity(item.id)
                          : undefined
                      }
                    >
                      -
                    </S.WrapMinus>
                    <S.WrapQuantity>{item.quantity}</S.WrapQuantity>
                    <S.WrapPlus
                      onClick={
                        item.quantity + 1 > item.item.quantity
                          ? undefined
                          : () => handleChangeUpQuantity(item.id)
                      }
                    >
                      +
                    </S.WrapPlus>
                  </S.Box>
                  <S.Box width="15%" display="flex" justifyContent="center">
                    <S.UpdateButton onClick={() => handleUpdateCart(item.id)}>
                      Update
                    </S.UpdateButton>
                    <S.DeleteButton onClick={() => handleRemoveCart(item.id)}>
                      Delete
                    </S.DeleteButton>
                  </S.Box>
                </S.Box>
              );
            })}
            <S.Box
              width="100%"
              display="flex"
              justifyContent="flex-end"
              pt={24}
            >
              Total: {moneyFormat(totalPrice, '$')}
            </S.Box>
          </S.Wrapper>
          <div className="cart-buttons d-flex align-items-center row">
            <Link href="/">
              <a className="col-md-6 ">
                <button>Continue To Shopping</button>
              </a>
            </Link>
            <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
              <button>
                <Link href="/shipping">
                  <a className="text-white">Checkout</a>
                </Link>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className=" alert alert-info text-center mt-3">
          Your cart is empty
          <Link href="/">
            <a className="btn btn-success mx-5 px-5 py-3">SHOPPING NOW</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
