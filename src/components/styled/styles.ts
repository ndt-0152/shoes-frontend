import styled from 'styled-components';

interface IBoxProps {
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

export const Box = styled.div<IBoxProps>`
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
