import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput } from '../../types';

import { IReviewApi, IReviewCreate } from './types';

export class ReviewApi {
  constructor(private axiosInstance: AxiosInstance) {}

  async createReview(input: IReviewCreate): Promise<any> {
    const { data } = await this.axiosInstance.post('/reviews', input);
    return data;
  }

  async getReviewOnProduct(
    productId: string,
    queries?: IBaseQuery,
  ): Promise<IPaginationOutput<IReviewApi>> {
    const { data } = await this.axiosInstance.get(`/reviews/${productId}`, {
      params: { ...queries },
    });
    return data;
  }
}
