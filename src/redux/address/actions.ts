import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';

export const getProvinces = createAsyncThunk('address/province', async () => {
  const data = await apiSdk.addressApis.getProvinceApis();
  return data;
});

export const getDistrict = createAsyncThunk(
  'address/district',
  async (province_id: string) => {
    const data = await apiSdk.addressApis.getDistrictApis(province_id);
    return data;
  },
);

export const getWard = createAsyncThunk(
  'address/ward',
  async (district_id: string) => {
    const data = await apiSdk.addressApis.getWardApis(district_id);
    return data;
  },
);
