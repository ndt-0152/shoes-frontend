import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';
import { IAuthLocal, IProfile, IVerifyEmail } from '../../libs/apis/auth/types';
import { removeToken, setToken } from '../../libs/utils/';

export const loginLocal = createAsyncThunk(
  'auth/loginLocal',
  async (user: IAuthLocal, { dispatch }) => {
    const token = await apiSdk.authApis.loginLocal(user);
    setToken(token);
    dispatch(authorized());
  },
);

export const registerLocal = createAsyncThunk(
  'auth/registerLocal',
  async (user: IAuthLocal, {}) => {
    await apiSdk.authApis.registerLocal(user);
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  // await apiSdk.authApis.logout();
  removeToken();
  window?.location?.replace('/');
});

export const authorized = createAction('auth/authorized', () => {
  return {
    payload: {},
  };
});

export const handleVerifyEmail = createAsyncThunk(
  'auth/handleVerifyEmail',
  async (data: IVerifyEmail) => {
    await apiSdk.authApis.verifyEmail(data);
  },
);

export const getProfile = createAsyncThunk('auth/getProfile', async () => {
  const profile = await apiSdk.authApis.profile();
  return profile;
});

export const updateProfileAction = createAsyncThunk(
  'auth/updateProfile',
  async (info: IProfile) => {
    const profile = await apiSdk.authApis.updateInfoProfile(info);
    return profile;
  },
);
