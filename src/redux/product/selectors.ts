import { TRootState } from '..';
import { IProduct, IProductWithVariants } from '../../libs/apis/products/types';
import { IPaginationOutput } from '../../libs/types';

export const productSelector = (
  state: TRootState,
): IPaginationOutput<IProduct> =>
  state.product.products || { items: [], total: 0 };

export const productDetailSelectors = (
  state: TRootState,
): IProductWithVariants | undefined => state.product.product;
