import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { IVariantFilter } from '../../libs/types';

export interface IFilter {
  genders: IVariantFilter[];
  colors: IVariantFilter[];
  sizes: IVariantFilter[];
  handleColor: (color: string) => void;
  handleSize: (size: string) => void;
  handleGender: (gender: string) => void;
}

export const Filter: React.FC<IFilter> = React.memo(
  ({ genders, colors, sizes, handleColor, handleSize, handleGender }) => {
    const { t } = useTranslation();

    const [color, setColor] = useState<undefined | number>();

    return (
      <div className="filter-box">
        <div className="title-gender">{t('gender')}</div>
        <div className="wrap-group-checkbox">
          {genders.map((_item, index) => {
            return (
              <div className="wrap-checkbox" key={index}>
                <input
                  type="radio"
                  name="gender"
                  defaultValue="gender"
                  onChange={() => handleGender(_item.id)}
                />
                <label htmlFor={_item.id}>{_item.name}</label>
              </div>
            );
          })}
        </div>
        <div className="title-gender">{t('size')}</div>
        <div className="wrap-group-checkbox">
          {sizes.map((_item, index) => {
            return (
              <div className="wrap-checkbox" key={index}>
                <input
                  type="radio"
                  name="size"
                  defaultValue="size"
                  onChange={() => handleSize(_item.id)}
                />
                <label htmlFor={_item.id}>{_item.name}</label>
              </div>
            );
          })}
        </div>
        <div className="title-gender">{t('colour')}</div>
        <div className="row">
          {colors.map((item, idx) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-4" key={idx}>
                <div style={{ textAlign: 'center' }}>
                  <S.WrapColor isSelected={idx === color} color={item.name}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 6 7"
                      fill="none"
                      width={28}
                      height={28}
                      onClick={() => {
                        setColor(idx);
                        handleColor(item.id);
                      }}
                    >
                      <circle cx="3" cy="3.5" r="3" fill={item.name} />
                    </svg>
                  </S.WrapColor>
                </div>
                <div style={{ textAlign: 'center' }}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

export default Filter;
