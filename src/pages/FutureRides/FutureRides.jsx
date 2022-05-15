import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { isUpcomingRide } from "../../utils/index"
function FutureRides() {
  const [upComingRides, setUpComingRides] = useState([]);
  const { nearestRides } = useUserContext();
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
  console.log(upComingRides);
  return (
    <div>
      <h1>future Rides</h1>
    </div>
  );
}
export default FutureRides;
