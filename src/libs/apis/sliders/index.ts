import { AxiosInstance } from 'axios';
import { IBaseQuery, IPaginationOutput } from '../../types';
import { ISlider } from './types';

export class SliderApi {
  constructor(private axiosInstance: AxiosInstance) {}

  async getListSliders(
    queries?: IBaseQuery,
  ): Promise<IPaginationOutput<ISlider>> {
    const { data } = await this.axiosInstance.get('/slider', {
      params: { ...queries },
    });
    return data;
  }
}
