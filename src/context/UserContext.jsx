import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [rideData, setRideData] = useState([]);
  const [closestStionCodeInPathArray, setClosestStionCodeInPathArray] = useState([]);
  const [nearestRides, setNearestRides] = useState([]);


  function closestStation(rideDataArray, userStationCode) {
    let nearestStationCodeInPath = [];
    if (rideDataArray.length) {
      rideDataArray.map((item) => {
        let nearestCode = item.station_path?.reduce((previousStation, currentStation) => {
          return Math.abs(previousStation - userStationCode) < Math.abs(currentStation - userStationCode)
            ? previousStation
            : currentStation;
        });
      return  nearestStationCodeInPath.push({
          rideId: item.id,
          closestStationCode: nearestCode,
        });
      });
    }
    return nearestStationCodeInPath
  }


  function sortRidesWithNearestCode (unsortedStationCodeArray) {
    if(unsortedStationCodeArray.length){
      const sortedNearestRideDetail = unsortedStationCodeArray.map((item) => {
        const findRideInRideData = rideData.find((rides) => rides.id === item.rideId)
        return {...findRideInRideData,closestStationCode: item.closestStationCode, distance: Math.abs(item.closestStationCode - userData.station_code) }
      })
      const sortedArray = [...sortedNearestRideDetail].sort(function(a, b){return a.distance - b.distance})
      return sortedArray
    }
  }


  useEffect(() => {
    (async () => {
      const res = await axios.all([ axios.get("https://assessment.api.vweb.app/user"),axios.get("https://assessment.api.vweb.app/rides")])
      setUserData(res[0].data);
      setRideData(res[1].data);
      console.log(res[0].data?.station_code)
      setClosestStionCodeInPathArray(closestStation(res[1].data, res[0].data?.station_code))
    })();
  }, []);


  useEffect(() => {
    setNearestRides(sortRidesWithNearestCode(closestStionCodeInPathArray))
  },[rideData])


  return (
    <UserContext.Provider value={{ userData, nearestRides, rideData }}>{children}</UserContext.Provider>
  );
};
const useUserContext = () => useContext(UserContext);
export { UserContextProvider, useUserContext };
