import * as React from 'react';

import { Message } from '../Message';

type NotificationTypes = 'neutral' | 'success' | 'error';

interface IMessage {
  actionText?: string;
  content?: string;
  title: string;
}

interface IOptions {
  type: NotificationTypes;
}

export interface IProps {
  id: string;
  style: React.CSSProperties;
  message: IMessage;
  options: IOptions;
  close: () => void;
}

export const NotificationTemplate: React.FC<IProps> = ({
  message,
  options,
  close,
}) => {
  return (
    <Message
      actionText={message.actionText}
      status={options.type}
      title={message.title}
      onClick={close}
    >
      {message.content}
    </Message>
  );
};
