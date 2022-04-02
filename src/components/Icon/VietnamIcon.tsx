import React from 'react';

export interface IVietnamIcon {
  width: number;
  height: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const VietnamIcon: React.FC<IVietnamIcon> = React.memo(
  ({ width, height, onClick, style }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        onClick={onClick}
        style={style}
      >
        <g>
          <path
            d="M16.001 32.0004C24.8372 32.0004 32.0003 24.8372 32.0003 16.0011C32.0003 7.1649 24.8372 0.00177693 16.001 0.00177693C7.16484 0.00177693 0.00170898 7.1649 0.00170898 16.0011C0.00170898 24.8372 7.16484 32.0004 16.001 32.0004Z"
            fill="white"
          />
          <path
            d="M31.0853 10.6653C31.0836 10.6603 31.082 10.656 31.0803 10.6514C29.0325 4.87767 23.7654 0.629682 17.437 0.0657916C19.8858 1.40826 20.6009 5.66159 21.2275 10.6654C21.6555 14.0833 21.6582 17.8492 21.2356 21.2714C20.6144 26.3023 19.8962 30.5856 17.4371 31.9337C23.7771 31.3688 29.0518 27.1061 31.0915 21.3168C31.0968 21.3014 31.1013 21.2863 31.1069 21.2714C31.6829 19.6204 31.9999 17.8475 31.9999 16.0002C31.9996 14.1287 31.6755 12.334 31.0853 10.6653Z"
            fill="#E12A28"
          />
          <path
            d="M22.0511 10.6653C21.4248 5.66146 19.8858 1.40821 17.4368 0.065732C16.9631 0.0237797 16.4841 0 15.9996 0C9.0394 0 3.12028 4.44539 0.919302 10.6514C0.917546 10.6559 0.915992 10.6603 0.914236 10.6653C0.324134 12.334 0 14.1287 0 16.0001C0 17.8476 0.31704 19.6203 0.893023 21.2712C0.89836 21.2862 0.903156 21.3013 0.908426 21.3167C3.10075 27.5387 9.02798 31.9997 15.9996 31.9997C16.4841 31.9997 16.9631 31.9759 17.4367 31.9335C19.8959 30.5854 21.4379 26.3021 22.0591 21.2712C22.4818 17.8489 22.4791 14.0832 22.0511 10.6653Z"
            fill="#ED3432"
          />
          <path
            d="M15.8566 7.79964L17.7571 13.6495H23.9084L18.9318 17.2643L20.8326 23.1148L15.8566 19.4991L10.8802 23.1148L12.7811 17.2643L7.80469 13.6495H13.9558L15.8566 7.79964Z"
            fill="#FDCE0C"
          />
        </g>
        <defs>
          <clipPath>
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default VietnamIcon;