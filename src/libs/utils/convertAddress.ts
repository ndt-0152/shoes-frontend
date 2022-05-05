import { IAddressDto } from '../apis/address/types';

export const convertAddresses = (data: IAddressDto[]) => {
  const _data = data.map((item) => {
    return { id: item.value, name: item.label };
  });
  return _data;
};

export const convertAddressesCheckout = (data: IAddressDto[]) => {
  const _data = data.map((item) => {
    return { code: Number(item.value), name: item.label };
  });
  return _data;
};
