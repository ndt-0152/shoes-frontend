import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput } from '../../types';

import { ICartApi, ICartApiUpload } from './types';

export class CartApi {
  constructor(private axiosInstance: AxiosInstance) {}

  async createCartItem(input: ICartApiUpload): Promise<ICartApi> {
    const { data } = await this.axiosInstance.post('/cart', input);
    return data;
  }

  async getAllCart(query?: IBaseQuery): Promise<IPaginationOutput<ICartApi>> {
    const { data } = await this.axiosInstance.get('/cart', {
      params: { ...query },
    });
    return data;
  }

  async removeItem(id: string): Promise<any> {
    const { data } = await this.axiosInstance.delete(`/cart/${id}`);
    return data;
  }

  async updateQuantity(id: string, quantity: number): Promise<any> {
    const { data } = await this.axiosInstance.put(`/cart/${id}`, {
      quantity: quantity,
    });
    return data;
  }
}
