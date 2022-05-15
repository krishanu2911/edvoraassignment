import React from "react";
import style from "./Header.module.css";
import { useUserContext } from "../../context/UserContext"

export default function Header() {
    const { userData } = useUserContext();
  return (
    <div className={`${style.header}`}>
      <div>
        <h1 className={`${style.headerText}`}>Edvora</h1>
      </div>
      <div className={`${style.profileSection}`}>
        <h3 className={`${style.headerText}`}>{userData?.name}</h3>
        <img
          className={`${style.userProfile}`}
          src={userData.url}
          alt="user-profile"
        />
      </div>
    </div>
  );
}
