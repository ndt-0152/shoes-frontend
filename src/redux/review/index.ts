import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiSdk } from '../../libs/apis';
import { IReviewCreate } from '../../libs/apis/review/types';
import { IBaseQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { IReviewState } from './types';

export const initialState: IReviewState = {};

export const getAllReviewOnProduct = createAsyncThunk(
  'getAllReviewOnProduct',
  async ({
    idProduct,
    queries,
  }: {
    idProduct: string;
    queries?: IBaseQuery;
  }) => {
    const data = await apiSdk.reviewApis.getReviewOnProduct(idProduct, queries);
    return data;
  },
);

export const createReviewOnBook = createAsyncThunk(
  'createReviewOnProduct',
  async (input: IReviewCreate) => {
    const data = await apiSdk.reviewApis.createReview(input);
    return data;
  },
);

export const reviewSlice = createGenericSlice({
  name: 'review',
  initialState,
  reducers: {
    insertNewReview(state, action) {
      state.reviewOnBook = {
        items: [action.payload, ...(state.reviewOnBook?.items ?? [])],
        total: (state.reviewOnBook?.total ?? 0) + 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllReviewOnProduct.fulfilled, (state, action) => {
      state.reviewOnBook = {
        items: action.payload.items,
        total: action.payload.total,
      };
    });
  },
});

export const { insertNewReview } = reviewSlice.actions;

export default reviewSlice.reducer;
