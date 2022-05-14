import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const UserContext = createContext();
const UserContextProvider = ({children}) => {
    const [ userData, setUserData ] = useState({})
    useEffect(() => {
        (async () => {
          const res = await axios.get("https://assessment.api.vweb.app/user");
          setUserData(res.data);
        })();
      }, []);
    console.log(userData)
    return <UserContext.Provider value={{userData}}>{children}</UserContext.Provider>
}
const useUserContext = () => useContext(UserContext);
export { UserContextProvider, useUserContext }