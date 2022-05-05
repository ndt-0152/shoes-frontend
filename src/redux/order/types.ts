import { IOrderOutput } from '../../libs/apis/order/types';
import { IPaginationOutput } from '../../libs/types';

export interface IOrderState {
  ordersByStatus?: IPaginationOutput<IOrderOutput>;
}
