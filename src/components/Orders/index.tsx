import dayjs from 'dayjs';
import React, { useState } from 'react';
import { IOrderLineOutput, IOrderOutput } from '../../libs/apis/order/types';
import { moneyFormat } from '../../libs/utils/moneyFormat';

export interface IOrders {
  orders: IOrderOutput[];
}

export const Orders: React.FC<IOrders> = React.memo(({ orders }) => {
  const [rowSelected, setRowSelected] = useState(false);
  const [orderLine, setOrderLines] = useState<IOrderLineOutput[]>([]);

  const handleClickRows = (id: string) => {
    const _order = orders.find((item) => item.id === id);

    setOrderLines(_order?.orderLines || []);

    setRowSelected((rowSelected) => !rowSelected);
  };

  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <>
                <tr
                  key={idx}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleClickRows(order.id)}
                >
                  <td>{idx + 1}</td>
                  <td>{order.status}</td>
                  <td>{dayjs(order.createdAt).format('DD/MM/YYYY')}</td>
                  <td>{moneyFormat(order.totalMoney, '$')}</td>
                </tr>
                {rowSelected ? (
                  <>
                    {orderLine.map((line, idx) => (
                      <tr key={idx}>
                        <td>Name: {line.product.product.name}</td>
                        <td>
                          Image:
                          <img
                            src={line.product.product.image}
                            alt=""
                            width={50}
                            height={50}
                          />
                        </td>
                        <td>Quantity: {line.quantity}</td>
                        <td>Price: {line.price}</td>
                      </tr>
                    ))}
                  </>
                ) : null}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Orders;
