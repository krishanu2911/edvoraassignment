import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { FilterSection } from "../Filter/FilterSection"
function Navbar() {
  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.navLeft}`}>
       <Link style={{ textDecoration: "none" }} to={"/"}>
        <h3 className={`${style.navpill}`}>Nearest Ride</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/futurerides"}>
        <h3 className={`${style.navpill}`}>Future Ride</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/pastrides"}>
        <h3 className={`${style.navpill}`}>Past Ride</h3>
      </Link> 
      </div>
      
      <FilterSection />
    </div>
  );
}
export default Navbar;
