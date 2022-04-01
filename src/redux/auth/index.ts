import { createGenericSlice } from "../../libs/utils/createGenericSlice";
import { authorized, loginLocal, logout, registerLocal } from "./action";
import { IAuthState } from "./types";

export const initialState: IAuthState = {
  isUpdateProfileSuccess: false,
};

const authSlice = createGenericSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginLocal.rejected, () => {
      console.error("Login Failed");
    });

    builder.addCase(authorized, (state) => {
      state.isAuthenticated = true;
    });

    builder.addCase(logout.fulfilled, () => initialState);
  },
});

export { authorized, loginLocal, registerLocal };
export default authSlice.reducer;
