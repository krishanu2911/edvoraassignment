import React from "react";
import style from "./Header.module.css";
import { useUserContext } from "../../context/UserContext"

export default function Header() {
    const { userData } = useUserContext();
  return (
    <div className={`${style.header}`}>
      <div>
        <h1>Edvora</h1>
      </div>
      <div className={`${style.profileSection}`}>
        <h1>{userData?.name}</h1>
        <img
          className={`${style.userProfile}`}
          src={userData.url}
          alt="user-profile"
        />
      </div>
    </div>
  );
}
