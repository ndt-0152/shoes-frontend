import { AxiosInstance } from 'axios';

import { IAuthenticated, IAuthLocal, IProfile, IVerifyEmail } from './types';

export class AuthApi {
  constructor(private axiosInstance: AxiosInstance) {}

  async refreshToken(refreshToken: string): Promise<IAuthenticated> {
    const { data } = await this.axiosInstance.post('/auth/refresh-token', {
      refreshToken,
    });
    return data;
  }

  async loginLocal(user: IAuthLocal): Promise<IAuthenticated> {
    const { data } = await this.axiosInstance.post('/auth/login', user);
    return data;
  }

  async logout(): Promise<void> {
    await this.axiosInstance.post('/auth/logout');
  }

  async providers(
    params?: Record<string, any>,
  ): Promise<Record<string, string>> {
    const { data } = await this.axiosInstance.get('/auth/providers', {
      params,
    });
    return data;
  }

  async registerLocal(user: IAuthLocal): Promise<void> {
    await this.axiosInstance.post('/auth/register', user);
  }

  async verifyEmail(data: IVerifyEmail): Promise<void> {
    await this.axiosInstance.post('/auth/verify-email', data);
  }

  async profile(): Promise<IProfile> {
    const { data } = await this.axiosInstance.get('/auth/profile');
    return data;
  }

  async updateInfoProfile(user: IProfile): Promise<any> {
    const { data } = await this.axiosInstance.put('/auth/update-profile', user);
    return data;
  }
}
