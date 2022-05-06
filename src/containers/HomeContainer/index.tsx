import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalltoActionSection from '../../components/CallToActionSection';
import ContactInfo from '../../components/ContactInfo';
import ShopSection from '../../components/ShopSection';
import CustomSlider from '../../components/Slider';
import { ITEMS_PER_PAGE } from '../../configs';
import { IProductQuery } from '../../libs/types';
import { colorSelector } from '../../redux/color/selectors';
import { genderSelector } from '../../redux/gender/selectors';
import { getBestProducts, getListProducts } from '../../redux/product';
import {
  bestProductsSelector,
  productSelector,
} from '../../redux/product/selectors';
import { sizeSelector } from '../../redux/size/selectors';
import { sliderSelector } from '../../redux/slider/selectors';
import BestProducts from './BestProducts';

export const HomeContainer: React.FC<{ search?: string }> = React.memo(
  ({ search }) => {
    const [filter, setFilter] = useState<undefined | IProductQuery>({
      offset: 0,
      limit: ITEMS_PER_PAGE,
    });
    const [bestFilter, setBestFilter] = useState<undefined | IProductQuery>();
    const dispatch = useDispatch();
    const slidersSelector = useSelector(sliderSelector);
    const colorsSelector = useSelector(colorSelector);
    const gendersSelector = useSelector(genderSelector);
    const sizesSelector = useSelector(sizeSelector);
    const productsSelector = useSelector(productSelector);
    const bestProducts = useSelector(bestProductsSelector);

    const handleFilterColor = useCallback(
      (color: string) => {
        setFilter((filter) => {
          return { ...filter, color };
        });
      },
      [filter],
    );

    const handleFilterSize = useCallback(
      (size: string) => {
        setFilter((filter) => {
          return { ...filter, size };
        });
      },
      [filter],
    );
    const handleFilterGender = useCallback(
      (gender: string) => {
        setFilter((filter) => {
          return { ...filter, gender };
        });
      },
      [filter],
    );

    const handleFilterPagination = useCallback(
      (page: number) => {
        setFilter((filter) => {
          return {
            ...filter,
            offset: page * ITEMS_PER_PAGE,
            limit: ITEMS_PER_PAGE,
          };
        });
      },
      [filter],
    );

    const handleBestFilterPagination = useCallback(
      (page: number) => {
        setBestFilter((filter) => {
          return { ...filter, offset: page * ITEMS_PER_PAGE };
        });
      },
      [bestFilter],
    );

    useEffect(() => {
      dispatch(getListProducts(filter));
    }, [filter]);

    useEffect(() => {
      dispatch(getBestProducts(bestFilter));
    }, [bestFilter]);

    useEffect(() => {
      setFilter((filter) => {
        return { ...filter, search };
      });
    }, [search]);

    return (
      <>
        <CustomSlider sliders={slidersSelector} />
        <ShopSection
          colors={colorsSelector}
          genders={gendersSelector}
          sizes={sizesSelector}
          products={productsSelector.items}
          totalData={productsSelector.total}
          handleColor={handleFilterColor}
          handleGender={handleFilterGender}
          handleSize={handleFilterSize}
          handlePagination={handleFilterPagination}
        />
        <BestProducts
          products={bestProducts.items}
          totalData={bestProducts.total}
          handlePagination={handleBestFilterPagination}
        />
        <CalltoActionSection />
        <ContactInfo />
      </>
    );
  },
);

export default HomeContainer;
