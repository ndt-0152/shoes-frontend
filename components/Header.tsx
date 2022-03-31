import React from "react";

export interface IHeader {}

const Header: React.FC<IHeader> = React.memo(() => {
  return <div>Header</div>;
});

export default Header;
