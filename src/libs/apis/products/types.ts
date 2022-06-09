import { IVariantFilter } from '../../types';

export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  default_price: number;
  reviews: IReview[];
}

export interface IOutputVariant {
  id: string;
  color: IVariantFilter;
  size: IVariantFilter;
  quantity: number;
  images: string[];
}

interface IReview {
  rating: number;
}

export interface IProductWithVariants extends IProduct {
  gender: IVariantFilter;
  variants: IOutputVariant[];
  reviews: IReview[];
}
