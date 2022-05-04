import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutPages from '../../../components/LayoutPages';
import DetailContainer from '../../../containers/DetailContainer';
import { getServerSideWithPublicRoute } from '../../../libs/hocs/getServerSideWithPublicRoute';
import { getProductDetail } from '../../../redux/product';
import { getAllReviewOnProduct } from '../../../redux/review';

const ProductDetail: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch(
      getProductDetail({ productId: String(id || ''), queries: undefined }),
    );
    dispatch(getAllReviewOnProduct({ idProduct: String(id || '') }));
  }, []);

  return (
    <LayoutPages hasFooter>
      <DetailContainer />
    </LayoutPages>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default ProductDetail;
