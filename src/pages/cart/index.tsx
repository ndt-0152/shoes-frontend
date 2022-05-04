import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutPages from '../../components/LayoutPages';
import CartContainer from '../../containers/CartContainer';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';
import { getAllCart } from '../../redux/cart';

const CartPage: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart());
  }, []);

  return (
    <LayoutPages hasFooter>
      <CartContainer />
    </LayoutPages>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default CartPage;
