import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiSdk } from '../../libs/apis';
import { IBaseQuery, IProductQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { IProductState } from './types';

type TProductVariant = {
  productId?: string;
  queries?: IBaseQuery;
};

export const getListProducts = createAsyncThunk(
  'getListProducts',
  async (queries?: IProductQuery) => {
    const products = apiSdk.productApis.getListProducts(queries);
    return products;
  },
);

export const getProductDetail = createAsyncThunk(
  'getProductDetail',
  async ({ queries, productId }: TProductVariant) => {
    const product = apiSdk.productApis.productDetail(queries, productId);
    return product;
  },
);

export const initialState: IProductState = {};

export const productSlice = createGenericSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
