import React from "react";
import { useUserContext } from "../../context/UserContext";
import { useFilter } from "../../context/FilterContext";
function NearestRides() {
  const { nearestRides } = useUserContext();
  const { filterState } = useFilter();
  const { stateSelected, citySelected } = filterState;
//   console.log(nearestRides);
  const filteredNearestRides = nearestRides?.filter((item) => (item.state === stateSelected || stateSelected === "state") && ( item.city === citySelected || citySelected === "city" ) );
  console.log(filteredNearestRides)
  // console.log(nearestRides);
  return (
    <div>
      <h1>Nearest Rides</h1>
    </div>
  );
}
export default NearestRides;
