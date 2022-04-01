import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import * as S from './styles';
import LayoutPages from '../../components/LayoutPages';
import { translate } from '../../libs/utils';
import { registerLocal } from '../../redux/auth';

interface ICredential {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required(
      translate('validations.required', {
        field: translate('fields.firstname'),
      }),
    )
    .min(2, translate('validations.minLength', { length: 2 })),
  lastName: yup
    .string()
    .required(
      translate('validations.required', {
        field: translate('fields.lastname'),
      }),
    )
    .min(2, translate('validations.minLength', { length: 2 })),
  email: yup.string().required(
    translate('validations.required', {
      field: translate('fields.email'),
    }),
  ),
  password: yup
    .string()
    .required(
      translate('validations.required', {
        field: translate('fields.password'),
      }),
    )
    .min(6, translate('validations.minLength', { length: 6 })),
});

export const RegisterContainer: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredential>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const firstName = useMemo(() => register('firstName'), [register]);
  const lastName = useMemo(() => register('lastName'), [register]);
  const email = useMemo(() => register('email'), [register]);
  const password = useMemo(() => register('password'), [register]);

  const onSubmit = async (
    data: ICredential,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: React.BaseSyntheticEvent<Record<string, any>, any, any> | undefined,
  ) => {
    e?.preventDefault();
    const _data: any = await dispatch(registerLocal(data));
    if (_data.error)
      alert.show({ title: t(`${_data.error?.message}`) }, { type: 'error' });
    else alert.show({ title: t(`verify.email`) }, { type: 'success' });
  };

  return (
    <LayoutPages>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" placeholder={t('firstname')} {...firstName} />
          {errors?.firstName?.message && (
            <S.WrapError>{errors?.firstName?.message}</S.WrapError>
          )}
          <input type="text" placeholder={t('lastname')} {...lastName} />
          {errors?.lastName?.message && (
            <S.WrapError>{errors?.lastName?.message}</S.WrapError>
          )}
          <input type="email" placeholder={t('email')} {...email} />
          {errors?.email?.message && (
            <S.WrapError>{errors?.email?.message}</S.WrapError>
          )}
          <input type="password" placeholder={t('password')} {...password} />
          {errors?.password?.message && (
            <S.WrapError>{errors?.password?.message}</S.WrapError>
          )}
          <button type="submit">{t('register')}</button>
          <p>
            <Link href="/login">
              <a>
                {t('have-account')} <strong>{t('login')}</strong>
              </a>
            </Link>
          </p>
        </form>
      </div>
    </LayoutPages>
  );
});

export default RegisterContainer;
