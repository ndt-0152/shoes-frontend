import styled from 'styled-components';

export const WrapColor = styled.div<{ isSelected?: boolean; color: string }>`
  display: inline-flex;
  border-radius: 33px;
  border: ${(props) =>
    props.isSelected ? `2px solid ${props.color}` : 'none'};
`;
