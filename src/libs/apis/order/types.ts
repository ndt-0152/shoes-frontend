import { IVariantFilter } from '../../types';
import { IProduct } from '../products/types';

interface IAddressApi {
  name: string;
  code: number;
}

export interface ShippingMethod {
  firstName?: string;
  lastName?: string;
  province?: IAddressApi;
  district?: IAddressApi;
  wards?: IAddressApi;
  privateHome?: string;
  phoneNumber?: string;
  email?: string;
  amount?: number;
}

export interface IOrderLine {
  variantId: string;
  quantity: number;
  price: number;
}

export interface IOrderInput {
  totalMoney: number;
  shippingMethod: ShippingMethod;
  orderLines: IOrderLine[];
}

export interface IOrderLineOutput {
  price: number;
  quantity: number;
  product: IOrderLines;
}

export interface IOrderOutput {
  id: string;
  totalMoney: number;
  status: string;
  shippingMethod: ShippingMethod;
  orderLines: IOrderLineOutput[];
  createdAt: Date;
}

interface IOrderLines {
  id: string;
  color: IVariantFilter;
  size: IVariantFilter;
  quantity: number;
  product: IProduct;
}
