import styled from 'styled-components';
import { IProps } from '.';

const borderColors = () => ({
  action: '#c22d74',
  error: '#c22d74',
  neutral: '#06a09e',
  success: '#3ed256',
});

export const Wrapper = styled.div<{ status: IProps['status'] }>`
  width: 25rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  box-shadow: 0px 6px 15px 3px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-left: 0.4rem solid;
  border-color: ${(props) => borderColors()[props.status!]};
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0 1.5rem 0 0;
`;

export const CloseButton = styled.button`
  cursor: pointer;

  path {
    transition: 0.3s;
  }

  &:hover {
    path {
      fill: #13bebb;
    }
  }
`;

export const Content = styled.div`
  margin: 1rem 0 0;
`;

export const ActionButton = styled.button`
  color: rgb(33, 18, 94);
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
`;
