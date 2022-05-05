import type { NextPage } from 'next';
import LayoutPages from '../../components/LayoutPages';
import PaymentContainer from '../../containers/PaymentContainer';
import { getServerSideWithPublicRoute } from '../../libs/hocs/getServerSideWithPublicRoute';

const PaymentPage: NextPage = () => {
  return (
    <LayoutPages hasFooter>
      <PaymentContainer />
    </LayoutPages>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default PaymentPage;
