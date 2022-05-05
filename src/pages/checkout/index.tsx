import type { NextPage } from 'next';
import LayoutPages from '../../components/LayoutPages';
import CheckoutContainer from '../../containers/CheckoutContainer';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';

const CheckoutPage: NextPage = () => {
  return (
    <LayoutPages hasFooter>
      <CheckoutContainer />
    </LayoutPages>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default CheckoutPage;
