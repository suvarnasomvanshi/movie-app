import React from "react";
import Style from "./Header.Module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={Style.header}>

      <Link to="/" style={{textDecoration:"none"}}>
        <img className={Style.icon} src=""/><span>HOME</span>
      </Link>
      <Link to="movies/popular" style={{textDecoration:"none"}}><span>POPULAR</span></Link>
      <Link  to="/movies/upcoming" style={{textDecoration:"none"}}><span>UPCOMING</span></Link>
      <Link  to="/movie/top_rated" style={{textDecoration:"none"}}><span>TOP RATED</span></Link>

    </div>
  );
}
export default Header;
