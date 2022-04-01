import React from 'react';

import * as S from './styles';

export interface IProps {
  title: string;
  status?: 'neutral' | 'success' | 'error';
  onClick: () => void;
  children?: React.ReactNode;
  actionText?: string;
}

export const Message: React.FC<IProps> = ({
  title,
  status = 'neutral',
  children,
  onClick,
  actionText,
}: IProps) => {
  const isAction = !!actionText;

  return (
    <S.Wrapper status={status} data-test="alert">
      <S.TopWrapper>
        <S.Title>{title}</S.Title>
      </S.TopWrapper>
      {children && <S.Content>{children}</S.Content>}
      {children && isAction && (
        <S.ActionButton onClick={onClick} style={{ marginTop: '1rem' }}>
          {actionText}
        </S.ActionButton>
      )}
    </S.Wrapper>
  );
};
