import React, { useEffect } from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";

import { COOKIE_KEYS } from "../configs";
import { getCookies } from "../libs/utils";
import {
  authorized,
  // getProfile
} from "../redux/auth";
// import { authSelector } from "../redux/auth/selectors";
// import { fetchNotifications } from "../redux/notification";

export const AuthContainer = React.memo(function AuthContainer({ children }) {
  const dispatch = useDispatch();
  //   const isAuthenticated = useSelector(authSelector);

  useEffect(() => {
    const cookies = getCookies(null);
    if (cookies[COOKIE_KEYS.ACCESS_TOKEN]) {
      dispatch(authorized());
    }
  }, [dispatch]);

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //   dispatch(getProfile());
  //   dispatch(fetchNotifications());
  //     }
  //   }, [dispatch, isAuthenticated]);

  return <>{children}</>;
});
