import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';
import { IBaseQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { IColorState } from './types';

export const fetchColors = createAsyncThunk(
  'fetchColors',
  async (queries?: IBaseQuery) => {
    const colors = apiSdk.colorApis.getListColos(queries);
    return colors;
  },
);

export const initialState: IColorState = {};

export const colorSlice = createGenericSlice({
  name: 'color',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.colors = action.payload;
    });
  },
});

export default colorSlice.reducer;
