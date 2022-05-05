import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useMemo, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { convertAddressesCheckout } from '../../libs/utils/convertAddress';
import { getDistrict, getProvinces, getWard } from '../../redux/address';
import { allCart } from '../../redux/cart/selectors';
import { createOrder } from '../../redux/order';

interface IOption {
  code: number;
  name: string;
}

interface IProfileForm {
  firstName?: string;
  lastName?: string;
  province?: IOption;
  district?: IOption;
  ward?: IOption;
  phoneNumber?: string;
  email?: string;
  privateHome?: string;
}

const SchemaSe = yup.object().shape({
  firstName: yup.string().nullable(),
  lastName: yup.string().nullable(),
});

export const CheckoutContainer: React.FC = () => {
  const [provinces, setProvincesList] = useState<IOption[]>([]);
  const [districtList, setDistrictList] = useState<IOption[]>([]);
  const [wardList, setWardList] = useState<IOption[]>([]);
  const currentCart = useSelector(allCart);

  const alert = useAlert();

  const dispatch = useDispatch();

  const values: IProfileForm = {
    firstName: '',
    privateHome: '',
    email: '',
    lastName: '',
    district: {
      name: '',
      code: 0,
    },
    phoneNumber: '',
    province: {
      name: '',
      code: 0,
    },
    ward: {
      name: '',
      code: 0,
    },
  };
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<IProfileForm>({
    defaultValues: values,
    resolver: yupResolver(SchemaSe),
  });

  const firstName = useMemo(() => register('firstName'), [register]);
  const lastName = useMemo(() => register('lastName'), [register]);
  const district = useMemo(() => register('district'), [register]);
  const privateHome = useMemo(() => register('privateHome'), [register]);
  const email = useMemo(() => register('email'), [register]);
  const phoneNumber = useMemo(() => register('phoneNumber'), [register]);
  const province = useMemo(() => register('province'), [register]);
  const ward = useMemo(() => register('ward'), [register]);

  const watchProvince = watch('province');
  const watchDistrict = watch('district');

  const onSubmit = (data: IProfileForm) => {
    const variants = currentCart.items.map((item) => {
      return {
        variantId: item.item.id,
        quantity: item.quantity,
        price: item.item.product.default_price * item.quantity,
      };
    });

    const _totalMoney = variants.reduce((a, c) => a + c.price, 0);

    dispatch(
      createOrder({
        orderLines: variants,
        totalMoney: _totalMoney,
        shippingMethod: data,
      }),
    );

    alert.show(
      { title: 'Your cart have been ordered successfully.' },
      { type: 'success' },
    );
  };

  useEffect(() => {
    const _fetchProvinces = async () => {
      const _data: any = await dispatch(
        getDistrict(String(watchProvince?.code || 0)),
      );
      if (_data?.payload) {
        const _convertList = convertAddressesCheckout(_data?.payload || []);
        setDistrictList(_convertList);
      }
    };
    _fetchProvinces();
  }, [watchProvince?.code]);

  useEffect(() => {
    const _fetchProvinces = async () => {
      const _data: any = await dispatch(
        getWard(String(watchDistrict?.code || 0)),
      );
      if (_data?.payload) {
        const _convertList = convertAddressesCheckout(_data?.payload || []);
        setWardList(_convertList);
      }
    };
    _fetchProvinces();
  }, [watchDistrict?.code]);

  useEffect(() => {
    const _fetchProvinces = async () => {
      const _data: any = await dispatch(getProvinces());
      if (_data?.payload) {
        const _convertList = convertAddressesCheckout(_data?.payload || []);
        setProvincesList(_convertList);
      }
    };
    _fetchProvinces();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center login-center">
      <form
        className="Login col-md-8 col-lg-8 col-11"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h6>DELIVERY ADDRESS</h6>
        <div style={{ padding: '15px 0' }}>
          <select
            className="form-control"
            onChange={(e) => {
              const event: any = {};
              event.target = {};
              event.target.name = 'province';
              event.target.value = JSON.parse(e.target.value);
              province.onChange(event);
            }}
          >
            {provinces.map((item, idx) => {
              return (
                <option
                  value={JSON.stringify({ code: item.code, name: item.name })}
                  key={idx}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ padding: '15px 0' }}>
          <select
            className="form-control"
            onChange={(e) => {
              const event: any = {};
              event.target = {};
              event.target.name = 'district';
              event.target.value = JSON.parse(e.target.value);
              district.onChange(event);
            }}
          >
            {districtList.map((item, idx) => {
              return (
                <option
                  value={JSON.stringify({ code: item.code, name: item.name })}
                  key={idx}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ padding: '15px 0' }}>
          <select
            className="form-control"
            onChange={(e) => {
              const event: any = {};
              event.target = {};
              event.target.name = 'ward';
              event.target.value = JSON.parse(e.target.value);
              ward.onChange(event);
            }}
          >
            {wardList.map((item, idx) => {
              return (
                <option
                  value={JSON.stringify({ code: item.code, name: item.name })}
                  key={idx}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <input
          className="form-control"
          type="text"
          {...lastName}
          placeholder="LastName"
        />
        <input
          className="form-control"
          type="text"
          {...firstName}
          placeholder="FirstName"
        />
        <input
          className="form-control"
          type="text"
          {...privateHome}
          placeholder="PrivateHome"
        />
        <input
          className="form-control"
          type="text"
          {...email}
          placeholder="Email"
        />
        <input
          className="form-control"
          type="text"
          {...phoneNumber}
          placeholder="PhoneNumber"
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
function Schema(Schema: any) {
  throw new Error('Function not implemented.');
}
