import '../../styles/globals.css';
import '../../styles/style.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
// import { getItemStorage } from '../libs/utils/localStorage';
import i18n from '../languages/i18n';
import { I18nextProvider } from 'react-i18next';
import { AuthContainer } from '../components/AuthContainer';
import { wrapper } from '../redux';
import { Provider as AlertProvider, positions, transitions } from 'react-alert';
import { NotificationTemplate } from '../components/Notifications';

function MyApp({ Component, pageProps }: AppProps) {
  const options = {
    timeout: 3000,
    position: positions.BOTTOM_RIGHT,
    offset: '30px',
    transition: transitions.SCALE,
  };

  useEffect(() => {
    // const lang = getItemStorage('language');
    // if (lang)
    i18n.changeLanguage('vi');
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <AuthContainer>
        <AlertProvider template={NotificationTemplate as any} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </AuthContainer>
    </I18nextProvider>
  );
}

export default wrapper.withRedux(MyApp);
