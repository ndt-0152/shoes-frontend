import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { ROUTERS } from "../configs/navigators";
import { authSelector } from "../redux/auth/selectors";

const UnAuthContainer: React.FC = ({ children }) => {
  const isAuthenticated = useSelector(authSelector);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push((router.query.redirect_uri as string) ?? ROUTERS.home.path);
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default UnAuthContainer;
