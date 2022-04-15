import { TRootState } from '..';
import { ISlider } from '../../libs/apis/sliders/types';

export const sliderSelector = (state: TRootState): ISlider[] =>
  state.slider.sliders?.items || [];
