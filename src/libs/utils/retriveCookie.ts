import { GetServerSidePropsContext } from "next";

import { COOKIE_KEYS } from "../../configs";
import { apiSdk } from "../apis";
import { getCookies } from "./cookies";
import { setToken } from "./token";

export const retrieveToken = async (ctx: GetServerSidePropsContext | null) => {
  const cookies = getCookies(ctx);

  if (
    cookies[COOKIE_KEYS.REFRESH_TOKEN] &&
    !cookies[COOKIE_KEYS.ACCESS_TOKEN]
  ) {
    const token = await apiSdk.authApis.refreshToken(
      cookies[COOKIE_KEYS.REFRESH_TOKEN]
    );
    setToken(token, ctx);
  }
};
