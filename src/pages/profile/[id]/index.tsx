import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProfileContainer from '../../../containers/ProfileContainer';
import { getServerSideWithProtectedRoute } from '../../../libs/hocs/getServerSideWithProtectedRoute';
import { getOrderByStatus } from '../../../redux/order';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderByStatus());
  }, []);

  return <ProfileContainer />;
};

export const getServerSideProps = getServerSideWithProtectedRoute(async () => {
  return {
    props: {},
  };
});

export default ProfilePage;
