import styled from 'styled-components';

export const WrapImages = styled.div`
  width: 100%;
  padding: 20px;
`;

export const WrapColor = styled.div<{ isSelected?: boolean; color: string }>`
  display: inline-flex;
  border-radius: 33px;
  border: ${(props) =>
    props.isSelected ? `2px solid ${props.color}` : 'none'};
`;

export const WrapSize = styled.span<{ isSelected?: boolean }>`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background: #006ed2;
  }
  background: ${(props) => (props.isSelected ? '#006ed2' : 'none')};
`;

export const WrapMinus = styled.span`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 7px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  cursor: pointer;
`;

export const WrapQuantity = styled.span`
  padding: 7px 10px;
  border: 1px solid black;
`;

export const WrapPlus = styled.span`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 7px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  cursor: pointer;
`;

export const WrapButton = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #1f91fa;
  border: 0;
  color: white;
  padding: 10px 0;
`;
