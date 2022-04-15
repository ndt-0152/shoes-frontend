import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';
import { IBaseQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { ISliderState } from './types';

export const fetchSliders = createAsyncThunk(
  'fetchSliders',
  async (queries?: IBaseQuery) => {
    const sliders = apiSdk.sliderApis.getListSliders(queries);
    return sliders;
  },
);

export const initialState: ISliderState = {};

export const sliderSlice = createGenericSlice({
  name: 'slider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSliders.fulfilled, (state, action) => {
      state.sliders = action.payload;
    });
  },
});

export default sliderSlice.reducer;
