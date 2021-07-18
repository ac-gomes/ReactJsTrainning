import './Header.css'
import React from "react";

const Header = (props) => {
  return (
    <div className="menu">
      <div className="titulo">
        <h1>{props.titulo}</h1>
      </div>
    </div>
  );
};

export default Header;
