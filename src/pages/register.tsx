import RegisterContainer from '../containers/RegisterContainer';
import { getServerSideWithPublicRoute } from '../libs/hocs/getServerSideWithPublicRoute';

const RegisterPage: React.FC = () => {
  return <RegisterContainer />;
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default RegisterPage;
