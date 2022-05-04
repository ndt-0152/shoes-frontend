import { ICartApi } from '../../libs/apis/cart/types';
import { IPaginationOutput } from '../../libs/types';

export interface ICartState {
  cartItems?: IPaginationOutput<ICartApi>;
}
