import React from 'react';

export interface IMessageError {
  variant: string;
}

export const MessageError: React.FC<IMessageError> = React.memo(
  ({ variant, children }) => {
    return <div className={`alert ${variant}`}>{children}</div>;
  },
);

MessageError.defaultProps = {
  variant: 'alert-info',
};

export default MessageError;
