import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";
import { FilterSection } from "../Filter/FilterSection";
function Navbar() {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.navLeft}`}>
       <Link style={{ textDecoration: "none" }} to={"/"}>
        <h3 className={`${style.navpill} ${ pathname === "/"? style.underline : style.notUnderline}`}>Nearest Ride</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/futurerides"}>
        <h3 className={`${style.navpill} ${ pathname === "/futurerides"? style.underline : style.notUnderline}`}>Future Ride</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/pastrides"}>
        <h3 className={`${style.navpill} ${ pathname === "/pastrides"? style.underline : style.notUnderline}`}>Past Ride</h3>
      </Link> 
      </div>
      
      <FilterSection />
    </div>
  );
}
export default Navbar;
