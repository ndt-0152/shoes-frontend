import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import {
  authorized,
  getProfile,
  loginLocal,
  logout,
  registerLocal,
  updateProfileAction,
} from './action';
import { IAuthState } from './types';

export const initialState: IAuthState = {
  isUpdateProfileSuccess: false,
};

const authSlice = createGenericSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginLocal.rejected, () => {
      console.error('Login Failed');
    });

    builder.addCase(authorized, (state) => {
      state.isAuthenticated = true;
    });

    builder.addCase(logout.fulfilled, () => initialState);

    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });

    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.isUpdateProfileSuccess = true;
    });
  },
});

export {
  authorized,
  loginLocal,
  registerLocal,
  getProfile,
  updateProfileAction,
};
export default authSlice.reducer;
