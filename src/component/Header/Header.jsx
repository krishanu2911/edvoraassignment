import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Header.module.css";

export default function Header() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://assessment.api.vweb.app/user");
      setUserData(res.data);
    })();
  }, []);
  console.log(userData);
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
