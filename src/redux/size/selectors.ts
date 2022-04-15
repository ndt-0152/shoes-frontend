import { TRootState } from '..';
import { IVariantFilter } from '../../libs/types';

export const sizeSelector = (state: TRootState): IVariantFilter[] =>
  state.size.sizes?.items || [];
