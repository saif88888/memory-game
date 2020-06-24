import React from "react";

const Navbar = (props) => (
  <li className="nav-item">
    <div onClick={() => props.newGame()}>Reset</div>
  </li>
);

export default Navbar;
