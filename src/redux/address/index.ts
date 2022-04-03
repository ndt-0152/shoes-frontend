import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { getDistrict, getProvinces, getWard } from './actions';

const addressSlice = createGenericSlice({
  name: 'address',
  initialState: {},
  reducers: {},
  extraReducers: () => {},
});

export { getProvinces, getDistrict, getWard };
export default addressSlice.reducer;
