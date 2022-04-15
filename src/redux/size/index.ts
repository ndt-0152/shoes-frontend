import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';
import { IBaseQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { ISizeState } from './types';

export const fetchSizes = createAsyncThunk(
  'fetchSizes',
  async (queries?: IBaseQuery) => {
    const sizes = apiSdk.sizeApis.getListSizes(queries);
    return sizes;
  },
);

export const initialState: ISizeState = {};

export const sizeSlice = createGenericSlice({
  name: 'size',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSizes.fulfilled, (state, action) => {
      state.sizes = action.payload;
    });
  },
});

export default sizeSlice.reducer;
