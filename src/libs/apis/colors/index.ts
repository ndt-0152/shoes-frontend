import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput, IVariantFilter } from '../../types';

export class ColorApis {
  constructor(private axiosInstance: AxiosInstance) {}

  async getListColos(
    queries?: IBaseQuery,
  ): Promise<IPaginationOutput<IVariantFilter>> {
    const { data } = await this.axiosInstance.get('/color', {
      params: { ...queries },
    });
    return data;
  }
}
