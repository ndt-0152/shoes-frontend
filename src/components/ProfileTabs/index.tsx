import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useMemo, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { IProfile } from '../../libs/apis/auth/types';
import { translate } from '../../libs/utils';
import { convertAddresses } from '../../libs/utils/convertAddress';
import { getDistrict, getProvinces, getWard } from '../../redux/address';
import { updateProfileAction } from '../../redux/auth';
import { isUpdateProfileSuccess } from '../../redux/auth/selectors';

export interface IProfileTabs {
  urlUpload?: File;
  profile?: IProfile;
}

interface IOption {
  id: string;
  name: string;
}

interface IProfileForm {
  firstName?: string;
  lastName?: string;
  province: IOption;
  district: IOption;
  ward: IOption;
  phoneNumber: string;
}

const Schema = yup.object().shape({
  firstName: yup.string().nullable(),
  lastName: yup.string().nullable(),
  province: yup.object().required(
    translate('validations.required', {
      field: translate('field.province'),
    }),
  ),
  district: yup.object().required(
    translate('validations.required', {
      field: translate('field.district'),
    }),
  ),
  ward: yup.object().required(
    translate('validations.required', {
      field: translate('field.ward'),
    }),
  ),
  phoneNumber: yup.string().required(
    translate('validations.required', {
      field: translate('field.phone'),
    }),
  ),
});

export const ProfileTabs: React.FC<IProfileTabs> = React.memo(
  ({ urlUpload, profile }) => {
    const [provinces, setProvincesList] = useState<IOption[]>([]);
    const [districtList, setDistrictList] = useState<IOption[]>([]);
    const [wardList, setWardList] = useState<IOption[]>([]);
    const isUpdateProfile = useSelector(isUpdateProfileSuccess);
    const dispatch = useDispatch();
    const alert = useAlert();
    const { t } = useTranslation();
    const values: IProfileForm = {
      firstName: profile ? profile.firstName : '',
      lastName: profile ? profile.lastName : '',
      district: {
        id: profile ? profile.address?.district_id || '' : '',
        name: profile ? profile.address?.district_name || '' : '',
      },
      phoneNumber: profile ? profile.phoneNumber || '' : '',
      province: {
        id: profile ? profile.address?.province_id || '' : '',
        name: profile ? profile.address?.province_name || '' : '',
      },
      ward: {
        id: profile ? profile.address?.ward_id || '' : '',
        name: profile ? profile.address?.ward_name || '' : '',
      },
    };
    const {
      handleSubmit,
      watch,
      register,
      formState: { errors },
    } = useForm<IProfileForm>({
      defaultValues: values,
      resolver: yupResolver(Schema),
    });

    const firstName = useMemo(() => register('firstName'), [register]);
    const lastName = useMemo(() => register('lastName'), [register]);
    const district = useMemo(() => register('district'), [register]);
    const phoneNumber = useMemo(() => register('phoneNumber'), [register]);
    const province = useMemo(() => register('province'), [register]);
    const ward = useMemo(() => register('ward'), [register]);

    const watchProvince = watch('province');
    const watchDistrict = watch('district');

    const handleUploadFirebase = () => {};

    const onSubmit = (data: IProfileForm) => {
      dispatch(
        updateProfileAction({
          address: {
            province_id: data.province.id,
            district_id: data.district.id,
            district_name: data.district.name,
            province_name: data.province.name,
            ward_id: data.ward.id,
            ward_name: data.ward.name,
          },
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        }),
      );
    };

    if (isUpdateProfile)
      alert.show({ title: t('update.profile') }, { type: 'success' });

    useEffect(() => {
      const _fetchProvinces = async () => {
        const _data: any = await dispatch(getDistrict(watchProvince.id));
        if (_data?.payload) {
          const _convertList = convertAddresses(_data?.payload || []);
          setDistrictList(_convertList);
        }
      };
      _fetchProvinces();
    }, [watchProvince.id]);

    useEffect(() => {
      const _fetchProvinces = async () => {
        const _data: any = await dispatch(getWard(watchDistrict.id));
        if (_data?.payload) {
          const _convertList = convertAddresses(_data?.payload || []);
          setWardList(_convertList);
        }
      };
      _fetchProvinces();
    }, [watchDistrict.id]);

    useEffect(() => {
      const _fetchProvinces = async () => {
        const _data: any = await dispatch(getProvinces());
        if (_data?.payload) {
          const _convertList = convertAddresses(_data?.payload || []);
          setProvincesList(_convertList);
        }
      };
      _fetchProvinces();
    }, []);

    console.log(profile);

    return (
      <>
        <form className="row  form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-fn">{t('fields.firstname')}</label>
              <input className="form-control" type="text" {...firstName} />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-ln">{t('fields.lastname')}</label>
              <input className="form-control" type="text" {...lastName} />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-email">{t('fields.email')}</label>
              <input
                className="form-control"
                type="email"
                disabled
                value={profile?.email}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-province">
                {t('field.province')} <span style={{ color: 'red' }}>*</span>
              </label>
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
                      value={JSON.stringify({ id: item.id, name: item.name })}
                      key={idx}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-district">
                {t('field.district')} <span style={{ color: 'red' }}>*</span>
              </label>
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
                      value={JSON.stringify({ id: item.id, name: item.name })}
                      key={idx}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-ward">
                {t('field.ward')} <span style={{ color: 'red' }}>*</span>
              </label>
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
                      value={JSON.stringify({ id: item.id, name: item.name })}
                      key={idx}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: '15px 0' }}>
              <label htmlFor="account-phone">
                {t('field.phone')} <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                required
                {...phoneNumber}
              />
            </div>
          </div>
          <button type="submit">{t('field.update-profile')}</button>
        </form>
      </>
    );
  },
);

export default ProfileTabs;
