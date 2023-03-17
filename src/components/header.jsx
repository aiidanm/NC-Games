import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import { userContext } from "../contexts/user"

const Header = () => {

    
  return (
    <Link to="/home">
      <h1 tabIndex="1">NC GAMES</h1>
    </Link>
  );
};

export default Header;
