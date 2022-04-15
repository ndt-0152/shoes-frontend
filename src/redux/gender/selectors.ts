import { TRootState } from '..';
import { IVariantFilter } from '../../libs/types';

export const genderSelector = (state: TRootState): IVariantFilter[] =>
  state.gender.genders?.items || [];
