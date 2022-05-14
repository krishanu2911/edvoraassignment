import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={`${style.navbar}`}>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <h1>Nearest Ride</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/futurerides"}>
        <h1>Future Ride</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/pastrides"}>
        <h1>Past Ride</h1>
      </Link>
    </div>
  );
}
export default Navbar;
