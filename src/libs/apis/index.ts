import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { GetServerSidePropsContext } from 'next';

import { API_BASE_URL, COOKIE_KEYS, HTTP_STATUS } from '../../configs';
import { ROUTERS } from '../../configs/navigators';
import { getCookies, removeCookie } from '../utils';
import { AddressApi } from './address';
import { AuthApi } from './auth';
import { ColorApis } from './colors';
import { GenderApis } from './genders';
import { ProductApis } from './products';
import { SizeApis } from './sizes';
import { SliderApi } from './sliders';

class KingSportApi {
  private nextContext: GetServerSidePropsContext | null = null;
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
    });
    this.instance.interceptors.request.use(
      this.onRequestFullfilled,
      this.onRequestReject,
    );
    this.instance.interceptors.response.use(
      this.onResponseFullfilled,
      this.onResponseReject,
    );
  }

  setApiContext = (context: GetServerSidePropsContext): void => {
    this.nextContext = context;
  };

  onResponseFullfilled = (response: AxiosResponse): AxiosResponse => {
    return response;
  };
  onResponseReject = async (error: AxiosError) => {
    if (error.response) {
      switch (error.response?.status) {
        case HTTP_STATUS.UNAUTHORIZED: {
          const originalRequest: any = error.config;
          if (!originalRequest._retry) {
            originalRequest._retry = true;

            const _cookies = getCookies(null);
            if (_cookies[COOKIE_KEYS.REFRESH_TOKEN]) {
              const { data } = await this.instance.post('/auth/refresh-token', {
                refreshToken: _cookies[COOKIE_KEYS.REFRESH_TOKEN],
              });
              if (data.access_token) {
                originalRequest.headers.authorization = `Bearer ${data.access_token}`;
              }
            }
            return this.instance(originalRequest);
          }

          removeCookie(COOKIE_KEYS.ACCESS_TOKEN, this.nextContext);
          removeCookie(COOKIE_KEYS.REFRESH_TOKEN, this.nextContext);
          if (process.browser)
            window?.location.replace(
              ROUTERS.login.path + '?redirect_uri=' + window?.location.pathname,
            );
          break;
        }
        case HTTP_STATUS.FORBIDDEN: // navigate to page 403
          break;
        default:
          throw {
            statusCode: error.response.status,
            message: this.getErrorMessage(error),
          };
      }
    } else {
      throw error;
    }
  };

  onRequestFullfilled = async (
    config: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig> => {
    const cookies = getCookies(this.nextContext);
    if (cookies[COOKIE_KEYS.ACCESS_TOKEN]) {
      const bearerToken = `Bearer ${cookies[COOKIE_KEYS.ACCESS_TOKEN]}`;
      config.headers = {
        ...(config.headers ?? {}),
        ['Authorization']: bearerToken,
      };
    }

    return config;
  };
  onRequestReject = (error: any) => {
    return Promise.reject(error);
  };

  getErrorMessage = (error: AxiosError) => {
    if (error.response && error.response.data) {
      if (Array.isArray(error.response.data.message)) {
        return error.response.data.message[0];
      }
      return error.response.data.message;
    }
    return 'An error has occurred, please try again';
  };
}
const { instance, setApiContext } = new KingSportApi();

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace apiSdk {
  export const authApis = new AuthApi(instance);
  export const addressApis = new AddressApi(instance);
  export const sliderApis = new SliderApi(instance);
  export const colorApis = new ColorApis(instance);
  export const sizeApis = new SizeApis(instance);
  export const genderApis = new GenderApis(instance);
  export const productApis = new ProductApis(instance);
}

export { setApiContext };
