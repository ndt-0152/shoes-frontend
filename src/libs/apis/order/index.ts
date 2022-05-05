import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput } from '../../types';
import { IOrderInput, IOrderOutput } from './types';

export class OrderApi {
  constructor(private axiosInstance: AxiosInstance) {}

  async createOrder(dataCreate: IOrderInput): Promise<any> {
    const { data } = await this.axiosInstance.post('/order', { ...dataCreate });
    return data;
  }

  async getOrderByStatus(
    queries?: IBaseQuery,
  ): Promise<IPaginationOutput<IOrderOutput>> {
    const { data } = await this.axiosInstance.get('/order', {
      params: { ...queries },
    });
    return data;
  }
}
