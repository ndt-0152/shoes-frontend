import { TRootState } from '..';
import { IProfile } from '../../libs/apis/auth/types';

export const authSelector = (state: TRootState): boolean =>
  !!state?.auth?.isAuthenticated;

export const profileSelector = (state: TRootState): IProfile | undefined =>
  state.auth.profile;

export const isUpdateProfileSuccess = (
  state: TRootState,
): boolean | undefined => state.auth.isUpdateProfileSuccess;
