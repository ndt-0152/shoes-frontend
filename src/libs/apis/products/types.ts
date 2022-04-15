import { IVariantFilter } from '../../types';

export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  default_price: number;
}

export interface IOutputVariant {
  color: IVariantFilter;
  size: IVariantFilter;
  quantity: number;
  images: string[];
}

export interface IProductWithVariants extends IProduct {
  gender: IVariantFilter;
  variants: IOutputVariant[];
}
