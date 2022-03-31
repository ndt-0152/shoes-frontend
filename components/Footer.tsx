import React from "react";

export interface IFooter {}

const Footer: React.FC<IFooter> = React.memo(() => {
  return <div>Footer</div>;
});

export default Footer;
