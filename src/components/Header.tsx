import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT_DEFAULT, EMAIL_DEFAULT } from '../configs';
import { setItemStorage } from '../libs/utils';
import { EnglishIcon, VietnamIcon } from './Icon';
import * as S from './styled/styles';

export interface IHeader {}

const Header: React.FC<IHeader> = React.memo(() => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setItemStorage('language', language);
  };

  const active = (language: string) => (currentLanguage === language ? 1 : 0.5);

  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>{CONTACT_DEFAULT}</p>
              <p>{EMAIL_DEFAULT}</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <div style={{ marginRight: 0 }}>
                <VietnamIcon
                  width={24}
                  height={24}
                  onClick={() => handleChangeLanguage('vi')}
                  style={{ opacity: active('vi'), cursor: 'pointer' }}
                />
              </div>
              <div style={{ marginRight: 0, marginLeft: 12 }}>
                <EnglishIcon
                  width={24}
                  height={24}
                  onClick={() => handleChangeLanguage('en')}
                  style={{ opacity: active('en'), cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link href="/">
                  <a>
                    <S.Box display="flex" alignItems="center">
                      <img
                        alt="logo"
                        src="https://cdn-icons-png.flaticon.com/512/5499/5499206.png"
                        width={83}
                        height={63}
                      />
                      <span style={{ marginLeft: 10, fontSize: 20 }}>
                        KingSport
                      </span>
                    </S.Box>
                  </a>
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder={t('search')}
                  />
                  <button type="submit" className="search-button">
                    {t('search')}
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, ndt
                  </button>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <Link href="/profile">
                        <a>{t('profile')}</a>
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/">
                        <a>{t('logout')}</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/cart">
                  <a>
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
