import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import * as S from './styles';
import LayoutPages from '../../components/LayoutPages';
import { translate } from '../../libs/utils';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { loginLocal } from '../../redux/auth';

interface ICredential {
  email: string;
  password: string;
}

const schema = yup.object().shape({
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

export const LoginContainer: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredential>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const email = useMemo(() => register('email'), [register]);
  const password = useMemo(() => register('password'), [register]);

  const onSubmit = async (
    data: ICredential,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: React.BaseSyntheticEvent<Record<string, any>, any, any> | undefined,
  ) => {
    e?.preventDefault();
    const _data: any = await dispatch(loginLocal(data));
    if (_data.error)
      alert.show({ title: t(`${_data.error?.message}`) }, { type: 'error' });
    else alert.show({ title: t(`success.login`) }, { type: 'success' });
  };

  return (
    <LayoutPages>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="email" placeholder={t('email')} {...email} />
          {errors?.email?.message && (
            <S.WrapError>{errors?.email?.message}</S.WrapError>
          )}
          <input type="password" placeholder={t('password')} {...password} />
          {errors?.password?.message && (
            <S.WrapError>{errors?.password?.message}</S.WrapError>
          )}
          <button type="submit">{t('login')}</button>
          <p>
            <Link href="/register">
              <a>{t('create-account')}</a>
            </Link>
          </p>
        </form>
      </div>
    </LayoutPages>
  );
});

export default LoginContainer;
