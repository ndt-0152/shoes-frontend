import React from 'react';
import UnAuthContainer from '../components/UnAuthenticated';
import LoginContainer from '../containers/LoginContainer';

import { getServerSideWithPublicRoute } from '../libs/hocs/getServerSideWithPublicRoute';

const LoginPage: React.FC = () => {
  return (
    <UnAuthContainer>
      <LoginContainer />
    </UnAuthContainer>
  );
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default LoginPage;
