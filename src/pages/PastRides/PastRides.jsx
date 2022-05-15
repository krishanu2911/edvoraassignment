import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { isUpcomingRide } from "../../utils/index";
import { useFilter } from "../../context/FilterContext";

function PastRides() {
  const [pastRides, setPastRides] = useState([]);
  const { nearestRides } = useUserContext();
  const { filterState } = useFilter();
  const { stateSelected, citySelected } = filterState;
  useEffect(() => {
    (() => {
      if (nearestRides?.length) {
        let upcomingRideArray = nearestRides.filter((item) =>
          !isUpcomingRide(item.date)
        );
        setPastRides(upcomingRideArray);
      }
    })();
  }, [nearestRides]);
  const filteredPastRides = pastRides?.filter((item) => (item.state === stateSelected || stateSelected === "state") && ( item.city === citySelected || citySelected === "city" ) );
  console.log(filteredPastRides);
  // console.log(pastRides);
  return (
    <div>
      <h1>Past Rides</h1>
    </div>
  );
}
export default PastRides;
