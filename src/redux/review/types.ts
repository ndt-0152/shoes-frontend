import { IReviewApi } from '../../libs/apis/review/types';
import { IPaginationOutput } from '../../libs/types';

export interface IReviewState {
  reviewOnBook?: IPaginationOutput<IReviewApi>;
}
