import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Pagination from '../../components/Pagination';
import Rating from '../../components/Rating';
import { ROUTERS } from '../../configs/navigators';
import { IProduct } from '../../libs/apis/products/types';
import { moneyFormat } from '../../libs/utils/moneyFormat';

export interface IBestProducts {
  products: IProduct[];
  totalData: number;
  handlePagination: (page: number) => void;
}

export const BestProducts: React.FC<IBestProducts> = React.memo(
  ({ products, totalData, handlePagination }) => {
    const router = useRouter();

    return (
      <>
        <h2 style={{ padding: '20px 0', textAlign: 'center' }}>
          Best Products
        </h2>
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col-lg-12 col-md-12 article">
                <div className="shopcontainer row">
                  {products.map((product) => (
                    <div
                      className="shop col-lg-4 col-md-6 col-sm-6 "
                      key={product.id}
                      onClick={() => {
                        router.push({
                          pathname: ROUTERS.product_detail.path,
                          query: {
                            id: product.id,
                          },
                        });
                      }}
                    >
                      <div className="border-product">
                        <Link href="">
                          <div className="shopBack">
                            <img src={product.image} alt={product.name} />
                          </div>
                        </Link>

                        <div className="shoptext">
                          <p>
                            <Link href="">{product.name}</Link>
                          </p>

                          <Rating
                            value={
                              product.reviews.length
                                ? product.reviews.reduce(
                                    (a, c) => a + c.rating,
                                    0,
                                  ) / product.reviews.length
                                : 0
                            }
                            text={`${product.reviews.length} reviews`}
                          />
                          <h3>{moneyFormat(product.default_price, '$')}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Pagination
                    total={totalData}
                    handlePagination={handlePagination}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
);

export default BestProducts;
