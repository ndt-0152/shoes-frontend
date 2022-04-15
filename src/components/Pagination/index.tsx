import React, { useState } from 'react';
import { ITEMS_PER_PAGE } from '../../configs';

export interface IPagination {
  total: number;
  handlePagination: (page: number) => void;
}

export const Pagination: React.FC<IPagination> = React.memo(
  ({ total, handlePagination }) => {
    const total_pagination = React.useMemo(() => {
      const _arr = [];
      for (let i = 0; i <= Math.floor(total / ITEMS_PER_PAGE); i++)
        _arr.push(i);
      return _arr;
    }, [total]);

    const [active, setActive] = useState(0);

    return (
      <nav>
        <ul className="pagination justify-content-center">
          {total_pagination.map((item, idx) => {
            return (
              <li
                className={`page-item${idx === active ? ' active' : ''}`}
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(idx);
                  handlePagination(idx);
                }}
              >
                <span className="page-link">{item + 1}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

export default Pagination;
