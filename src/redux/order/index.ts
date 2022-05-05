import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiSdk } from '../../libs/apis';
import { IOrderInput } from '../../libs/apis/order/types';
import { IBaseQuery } from '../../libs/types';
import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { IOrderState } from './types';

export const initialState: IOrderState = {};

export const createOrder = createAsyncThunk(
  'createOrder',
  async (orderInput: IOrderInput) => {
    try {
      const data = await apiSdk.orderApis.createOrder(orderInput);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getOrderByStatus = createAsyncThunk(
  'getOrderByStatus',
  async (queries?: IBaseQuery) => {
    try {
      const data = await apiSdk.orderApis.getOrderByStatus(queries);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const orderSlice = createGenericSlice({
  name: 'order',
  initialState,
  reducers: {
    updateStatusMyOrder(state, action) {
      const _newOrders = state.ordersByStatus?.items?.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, status: action.payload.status };
        return item;
      });
      state.ordersByStatus = {
        items: _newOrders || [],
        total: _newOrders?.length || 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrderByStatus.fulfilled, (state, action) => {
      state.ordersByStatus = action.payload;
    });
  },
});

export const { updateStatusMyOrder } = orderSlice.actions;

export default orderSlice.reducer;
