import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../../components/Rating';
import { authSelector } from '../../redux/auth/selectors';
import { createReviewOnBook } from '../../redux/review';
import { allReviewOnBook } from '../../redux/review/selectors';
import MessageError from './MessageError';

export interface IRatingForm {}

export const RatingForm: React.FC<IRatingForm> = React.memo(() => {
  const isAuthenticated = useSelector(authSelector);
  const getListReviews = useSelector(allReviewOnBook);
  const alert = useAlert();
  const dispatch = useDispatch();
  const router = useRouter();
  const [comment, setComment] = useState<string | undefined>();
  const [rating, setRating] = useState<number | undefined>();

  const handleChangeComment = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.target.value);
    },
    [comment],
  );

  const handleChangeRating = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRating(Number(e.target.value));
    },
    [rating],
  );

  const handleCreateReview = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (!isAuthenticated)
        alert.show(
          { title: 'Cần phải đăng nhập để tiếp tục' },
          { type: 'error' },
        );
      else {
        dispatch(
          createReviewOnBook({
            comment: comment || '',
            productId: String(router.query.id),
            rating: rating || 0,
          }),
        );
      }
    },
    [router.query, comment, rating],
  );

  return (
    <div className="row my-5">
      <div className="col-md-6">
        <h6 className="mb-3">REVIEWS</h6>
        <MessageError variant={'alert-info mt-3'}>
          {getListReviews.total
            ? `${getListReviews.total} Reviews`
            : 'No Reviews'}
        </MessageError>
        {getListReviews.items.map((item, idx) => {
          return (
            <div
              className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
              key={idx}
            >
              <strong>{`${item.user.firstName} ${item.user.lastName}`}</strong>
              <Rating />
              <span>{dayjs(item.createdAt).format('DD/MM/YYYY')}</span>
              <div className="alert alert-info mt-3">{item.comment}</div>
            </div>
          );
        })}
      </div>
      <div className="col-md-6">
        <h6>WRITE A CUSTOMER REVIEW</h6>
        <div className="my-4"></div>

        <form>
          <div className="my-4">
            <strong>Rating</strong>
            <select
              className="col-12 bg-light p-3 mt-2 border-0 rounded"
              onChange={(e) => handleChangeRating(e)}
              value={rating}
            >
              <option value="">Select...</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="my-4">
            <strong>Comment</strong>
            <textarea
              rows={3}
              className="col-12 bg-light p-3 mt-2 border-0 rounded"
              value={comment}
              onChange={(e) => handleChangeComment(e)}
            ></textarea>
          </div>
          <div className="my-3">
            <button
              className="col-12 bg-black border-0 p-3 rounded text-white"
              onClick={(e: any) => handleCreateReview(e)}
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className="my-3">
          <MessageError variant={'alert-warning'}>
            Please
            <Link
              href={`/login?redirect_uri=product/${String(router.query.id)}`}
            >
              <a>
                " <strong>Login</strong> "
              </a>
            </Link>
            <a>to write a review</a>
          </MessageError>
        </div>
      </div>
    </div>
  );
});

export default RatingForm;
