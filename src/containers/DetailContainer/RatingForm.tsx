import Link from 'next/link';
import React from 'react';
import Rating from '../../components/Rating';
import MessageError from './MessageError';

export interface IRatingForm {}

export const RatingForm: React.FC<IRatingForm> = React.memo(() => {
  return (
    <div className="row my-5">
      <div className="col-md-6">
        <h6 className="mb-3">REVIEWS</h6>
        <MessageError variant={'alert-info mt-3'}>No Reviews</MessageError>
        <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
          <strong>ndt</strong>
          <Rating />
          <span>Jan 12 2021</span>
          <div className="alert alert-info mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h6>WRITE A CUSTOMER REVIEW</h6>
        <div className="my-4"></div>

        <form>
          <div className="my-4">
            <strong>Rating</strong>
            <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
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
            ></textarea>
          </div>
          <div className="my-3">
            <button className="col-12 bg-black border-0 p-3 rounded text-white">
              SUBMIT
            </button>
          </div>
        </form>
        <div className="my-3">
          <MessageError variant={'alert-warning'}>
            Please
            <Link href="/login">
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
