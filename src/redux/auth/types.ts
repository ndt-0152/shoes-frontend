import { IProfile } from '../../libs/apis/auth/types';

export interface IAuthState {
  isAuthenticated?: boolean;
  isVerifyEmailSuccess?: boolean;
  isResetPasswordSuccess?: boolean;
  isUpdateProfileSuccess?: boolean;
  profile?: IProfile;
}
