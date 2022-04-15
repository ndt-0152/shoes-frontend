import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTERS } from '../../configs/navigators';
import { IProduct } from '../../libs/apis/products/types';
import { IVariantFilter } from '../../libs/types';
import { moneyFormat } from '../../libs/utils/moneyFormat';
import Filter from '../Filter';
import Pagination from '../Pagination';
import Rating from '../Rating';

export interface IShopSection {
  genders: IVariantFilter[];
  colors: IVariantFilter[];
  sizes: IVariantFilter[];
  products: IProduct[];
  totalData: number;
  handleColor: (color: string) => void;
  handleSize: (size: string) => void;
  handleGender: (gender: string) => void;
  handlePagination: (page: number) => void;
}

export const ShopSection: React.FC<IShopSection> = React.memo(
  ({
    genders,
    colors,
    sizes,
    products,
    totalData,
    handleColor,
    handleSize,
    handleGender,
    handlePagination,
  }) => {
    const router = useRouter();

    return (
      <div className="container-custom">
        <Filter
          genders={genders}
          colors={colors}
          sizes={sizes}
          handleColor={handleColor}
          handleSize={handleSize}
          handleGender={handleGender}
        />
        <div className="container-data">
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

                            <Rating value={3} text={`${2} reviews`} />
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
        </div>
      </div>
    );
  },
);

export default ShopSection;
