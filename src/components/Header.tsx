import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CONTACT_DEFAULT, EMAIL_DEFAULT } from '../configs';
import { ROUTERS } from '../configs/navigators';
import { setItemStorage } from '../libs/utils';
import { profileSelector } from '../redux/auth/selectors';
import { EnglishIcon, VietnamIcon } from './Icon';
import * as S from './styled/styles';

export interface IHeader {
  getSearch?: (value?: string) => void;
}

const Header: React.FC<IHeader> = React.memo(({ getSearch }) => {
  const { i18n, t } = useTranslation();
  const profile = useSelector(profileSelector);
  const currentLanguage = i18n.language;
  const [search, setSearch] = useState<undefined | string>();

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setItemStorage('language', language);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getSearch?.(search);
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
                    value={search}
                    onChange={handleInputSearch}
                  />
                  <button
                    type="submit"
                    className="search-button"
                    onClick={(e) => handleSearch(e)}
                  >
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
                    {t('hello')}, {`${profile?.firstName} ${profile?.lastName}`}
                  </button>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <Link
                        href={{
                          pathname: ROUTERS.profile.path,
                          query: {
                            id: profile?.id,
                          },
                        }}
                      >
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
