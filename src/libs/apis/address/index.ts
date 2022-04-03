import { AxiosInstance } from 'axios';
import { IAddressDto } from './types';

export class AddressApi {
  constructor(private axiosInstance: AxiosInstance) {}

  async getProvinceApis(): Promise<IAddressDto> {
    const { data } = await this.axiosInstance.get('/address/provinces');
    return data;
  }

  async getDistrictApis(province_id: string): Promise<IAddressDto> {
    const { data } = await this.axiosInstance.get(
      `/address/districts/${province_id}`,
    );
    return data;
  }

  async getWardApis(district_id: string): Promise<IAddressDto> {
    const { data } = await this.axiosInstance.get(
      `/address/wards/${district_id}`,
    );
    return data;
  }
}
