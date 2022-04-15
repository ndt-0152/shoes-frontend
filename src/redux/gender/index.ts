import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';
import { IBaseQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { IGenderState } from './types';

export const fetchGenders = createAsyncThunk(
  'fetchGenders',
  async (queries?: IBaseQuery) => {
    const genders = apiSdk.genderApis.getListGenders(queries);
    return genders;
  },
);

export const initialState: IGenderState = {};

export const genderSlice = createGenericSlice({
  name: 'gender',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenders.fulfilled, (state, action) => {
      state.genders = action.payload;
    });
  },
});

export default genderSlice.reducer;
