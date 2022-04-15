import { IProduct, IProductWithVariants } from '../../libs/apis/products/types';
import { IPaginationOutput } from '../../libs/types';

export interface IProductState {
  products?: IPaginationOutput<IProduct>;
  product?: IProductWithVariants;
}
