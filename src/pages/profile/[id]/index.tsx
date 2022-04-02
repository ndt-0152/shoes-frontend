import React from 'react';
import ProfileContainer from '../../../containers/ProfileContainer';
import { getServerSideWithPublicRoute } from '../../../libs/hocs/getServerSideWithPublicRoute';
// import { getServerSideWithProtectedRoute } from '../../../libs/hocs/getServerSideWithProtectedRoute';

const ProfilePage: React.FC = () => {
  return <ProfileContainer />;
};

export const getServerSideProps = getServerSideWithPublicRoute(async () => {
  return {
    props: {},
  };
});

export default ProfilePage;
