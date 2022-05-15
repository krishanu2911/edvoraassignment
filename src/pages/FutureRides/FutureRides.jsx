import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { isUpcomingRide } from "../../utils/index";
import { useFilter } from "../../context/FilterContext";
function FutureRides() {
  const [upComingRides, setUpComingRides] = useState([]);
  const { nearestRides } = useUserContext();
  const { filterState } = useFilter();
  const { stateSelected, citySelected } = filterState;
  useEffect(() => {
    (() => {
      if (nearestRides?.length) {
        let upcomingRideArray = nearestRides.filter((item) =>
          isUpcomingRide(item.date)
        );
        setUpComingRides(upcomingRideArray);
      }
    })();
  }, [nearestRides]);
  const filteredUpcomingRides = upComingRides?.filter((item) => (item.state === stateSelected || stateSelected === "state") && ( item.city === citySelected || citySelected === "city" ) );
  console.log(filteredUpcomingRides);
  return (
    <div>
      <h1>future Rides</h1>
    </div>
  );
}
export default FutureRides;
