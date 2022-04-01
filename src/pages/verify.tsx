import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getServerSideWithPublicRoute } from '../libs/hocs/getServerSideWithPublicRoute';
import { handleVerifyEmail } from '../redux/auth/action';

const Verify: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleVerifyEmail({ code: String(code) }));
    router.push('/login');
  }, [code]);

  return null;
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default Verify;
