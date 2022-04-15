import { TRootState } from '..';
import { IVariantFilter } from '../../libs/types';

export const colorSelector = (state: TRootState): IVariantFilter[] =>
  state.color.colors?.items || [];
