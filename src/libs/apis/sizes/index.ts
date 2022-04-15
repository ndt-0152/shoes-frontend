import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput, IVariantFilter } from '../../types';

export class SizeApis {
  constructor(private axiosInstance: AxiosInstance) {}

  async getListSizes(
    queries?: IBaseQuery,
  ): Promise<IPaginationOutput<IVariantFilter>> {
    const { data } = await this.axiosInstance.get('/size', {
      params: { ...queries },
    });
    return data;
  }
}
