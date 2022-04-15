import React from 'react';
import { useSelector } from 'react-redux';
import { productDetailSelectors } from '../../redux/product/selectors';
import ProductInfomation from './ProductInfomation';
import RatingForm from './RatingForm';

export const DetailContainer: React.FC = React.memo(() => {
  const detailProduct = useSelector(productDetailSelectors);

  return (
    <div className="container single-product">
      <ProductInfomation />
      <RatingForm />
    </div>
  );
});

export default DetailContainer;
