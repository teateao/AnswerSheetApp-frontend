import React from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { URLContext } from "./Contexts";
const Header = () => {
  const { URLData, setURLData } = useContext(URLContext);
  return (
    <header>
      <div>ここは{URLData}です</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
          <li>
            <Link to="/start">start</Link>
          </li>
          <Timer time="60"></Timer>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
