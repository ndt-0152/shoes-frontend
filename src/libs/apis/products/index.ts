import { AxiosInstance } from 'axios';
import { IPaginationOutput, IProductQuery } from '../../types';
import { IProduct, IProductWithVariants } from './types';

export class ProductApis {
  constructor(private axiosInstance: AxiosInstance) {}

  async getListProducts(
    queries?: IProductQuery,
  ): Promise<IPaginationOutput<IProduct>> {
    const { data } = await this.axiosInstance.get('/product', {
      params: { ...queries },
    });
    return data;
  }

  async productDetail(
    queries?: IProductQuery,
    productId?: string,
  ): Promise<IProductWithVariants> {
    const { data } = await this.axiosInstance.get(`/product/${productId}`, {
      params: { ...queries },
    });
    return data;
  }
}
