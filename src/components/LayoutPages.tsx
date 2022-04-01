import React from 'react';
import Footer from './Footer';
import Header from './Header';
import * as S from './styled/styles';

export interface ILayoutPages {
  hasFooter?: boolean;
}

const LayoutPages: React.FC<ILayoutPages> = React.memo(
  ({ children, hasFooter = false }) => {
    return (
      <React.Fragment>
        <Header />
        <S.Box width="100%">{children}</S.Box>
        {hasFooter && <Footer />}
      </React.Fragment>
    );
  },
);

export default LayoutPages;
