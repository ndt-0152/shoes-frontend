import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput, IVariantFilter } from '../../types';

export class GenderApis {
  constructor(private axiosInstance: AxiosInstance) {}

  async getListGenders(
    queries?: IBaseQuery,
  ): Promise<IPaginationOutput<IVariantFilter>> {
    const { data } = await this.axiosInstance.get('/gender', {
      params: { ...queries },
    });
    return data;
  }
}
