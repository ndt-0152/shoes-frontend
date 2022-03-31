import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { getItemStorage } from "../libs/utils/localStorage";
import i18n from "../languages/i18n";
import { I18nextProvider } from "react-i18next";
import { AuthContainer } from "../components/AuthContainer";
import { wrapper } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lang = getItemStorage("language");
    if (lang) i18n.changeLanguage("vi");
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <AuthContainer>
        <Component {...pageProps} />
      </AuthContainer>
    </I18nextProvider>
  );
}

export default wrapper.withRedux(MyApp);
