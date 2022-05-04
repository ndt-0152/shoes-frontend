export interface ICartApi {
  id: string;
  item: IItem;
  quantity: number;
}

export interface ICartApiUpload {
  variantId: string;
  quantity: number;
}

export interface IItem {
  color: {
    id: string;
    name: string;
  };
  size: {
    id: string;
    name: string;
  };
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    default_price: number;
  };
  quantity: number;
  id: string;
}
