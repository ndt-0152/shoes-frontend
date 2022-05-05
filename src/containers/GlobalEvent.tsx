import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '../redux/auth/selectors';
import { updateStatusMyOrder } from '../redux/order';
import { insertNewReview } from '../redux/review';
import socket, { EventNames } from '../socket-sdk';

export const GlobalEvent: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  const handleNewReview = useCallback(
    (data: any) => {
      dispatch(
        insertNewReview({
          id: data.id,
          comment: data.comment,
          rating: data.rating,
          user: {
            avatar:
              data.user.avatar ||
              'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png',
            firstName: data.user.firstName,
            lastName: data.user.lastName,
          },
        }),
      );
    },
    [dispatch],
  );

  const handleUpdateStatusOrder = useCallback(
    (data: any) => {
      dispatch(
        updateStatusMyOrder({
          id: data.id,
          status: data.status,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    socket.connect();
    socket.joinRoom(profile?.id ?? '');
    socket.registerListener(EventNames.NewReview, handleNewReview);
    socket.registerListener(EventNames.UpdateStatus, handleUpdateStatusOrder);
    return () => {
      socket.leaveRoom(profile?.id ?? '');
      socket.unregisterListener(EventNames.NewReview, handleNewReview);
      socket.unregisterListener(
        EventNames.UpdateStatus,
        handleUpdateStatusOrder,
      );
    };
  }, [handleNewReview, handleUpdateStatusOrder, profile?.id]);

  return <>{children}</>;
};

export default GlobalEvent;
