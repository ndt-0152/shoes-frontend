import { TRootState } from '..';
import { ICartApi } from '../../libs/apis/cart/types';
import { IPaginationOutput } from '../../libs/types';

export const allCart = (state: TRootState): IPaginationOutput<ICartApi> => {
  return state.cart?.cartItems ?? { total: 0, items: [] };
};
