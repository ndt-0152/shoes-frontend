import React from 'react';
import Rating from '../../components/Rating';

export interface IProductInfomation {}

export const ProductInfomation: React.FC<IProductInfomation> = React.memo(
  () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="single-image">
            <img
              src="https://previews.123rf.com/images/inxti/inxti1801/inxti180100127/94623091-cute-little-baby-shoes-on-wood-background.jpg"
              alt="Women Red Heels Sandal"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">Women Red Heels Sandal</div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>

            <div className="product-count col-lg-7 ">
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>Price</h6>
                <span>$150</span>
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>Status</h6>
                {5 > 0 ? <span>In Stock</span> : <span>unavailable</span>}
              </div>
              <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>Reviews</h6>
                <Rating value={3} text={`${2} reviews`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default ProductInfomation;
