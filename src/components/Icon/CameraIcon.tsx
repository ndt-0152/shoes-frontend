import React from 'react';

export interface ICameraIcon {
  width: number;
  height: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const CameraIcon: React.FC<ICameraIcon> = React.memo(
  ({ width, height, onClick, style }) => {
    return (
      <svg
        viewBox="0 0 26 26"
        fill="none"
        width={width}
        height={height}
        onClick={onClick}
        style={style}
      >
        <circle cx="13.3331" cy="13.3333" r="12.5714" fill="#F9153E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6363 8.14761L10.601 9.29999H8.8077C8.18541 9.29999 7.67627 9.81857 7.67627 10.4524V17.3667C7.67627 18.0005 8.18541 18.519 8.8077 18.519H17.8591C18.4814 18.519 18.9906 18.0005 18.9906 17.3667V10.4524C18.9906 9.81857 18.4814 9.29999 17.8591 9.29999H16.0658L15.0306 8.14761H11.6363ZM13.3327 16.7897C11.7713 16.7897 10.5041 15.4991 10.5041 13.9088C10.5041 12.3185 11.7713 11.0278 13.3327 11.0278C14.894 11.0278 16.1612 12.3185 16.1612 13.9088C16.1612 15.4991 14.894 16.7897 13.3327 16.7897ZM15.1418 13.9081C15.1418 14.9262 14.3315 15.7515 13.3319 15.7515C12.3324 15.7515 11.5221 14.9262 11.5221 13.9081C11.5221 12.89 12.3324 12.0648 13.3319 12.0648C14.3315 12.0648 15.1418 12.89 15.1418 13.9081Z"
          fill="white"
        />
      </svg>
    );
  },
);

export default CameraIcon;
