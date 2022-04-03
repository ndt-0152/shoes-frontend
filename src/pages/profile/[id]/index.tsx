import React from 'react';
import ProfileContainer from '../../../containers/ProfileContainer';
import { getServerSideWithProtectedRoute } from '../../../libs/hocs/getServerSideWithProtectedRoute';

const ProfilePage: React.FC = () => {
  return <ProfileContainer />;
};

export const getServerSideProps = getServerSideWithProtectedRoute(async () => {
  return {
    props: {},
  };
});

export default ProfilePage;
