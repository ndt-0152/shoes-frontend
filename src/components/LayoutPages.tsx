import React from 'react';
import Footer from './Footer';
import Header from './Header';
import * as S from './styled/styles';

export interface ILayoutPages {
  hasFooter?: boolean;
  getSearch?: (value?: string) => void;
}

const LayoutPages: React.FC<ILayoutPages> = React.memo(
  ({ children, hasFooter = false, getSearch }) => {
    return (
      <React.Fragment>
        <Header getSearch={getSearch} />
        <S.Box width="100%">{children}</S.Box>
        {hasFooter && <Footer />}
      </React.Fragment>
    );
  },
);

export default LayoutPages;
