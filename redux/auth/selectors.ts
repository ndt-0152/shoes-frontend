import { TRootState } from "..";

export const authSelector = (state: TRootState): boolean =>
  !!state?.auth?.isAuthenticated;
