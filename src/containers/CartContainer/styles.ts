import styled from 'styled-components';

interface IPropsBox {
  width?: string;
  p?: number;
  m?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  borderBottom?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Box = styled.div<IPropsBox>`
  width: ${(props) => (props.width ? props.width : 'auto')};
  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : 'none'};
  display: ${(props) => (props.display ? props.display : 'block')};
  margin: ${(props) => (props.m ? props.m : 0)}px;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
`;

export const Wrapper = styled.div`
  border-radius: 5px;
  background: white;
  padding: 32px 32px 24px 32px;
  margin-top: 24px;
`;

export const UpdateButton = styled.button`
  padding: 10px;
  border: 0;
  background: green;
  color: white;
  border-radius: 5px;
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  border: 0;
  background: red;
  color: black;
  border-radius: 5px;
  font-weight: 500;
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
