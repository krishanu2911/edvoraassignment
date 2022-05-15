import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { isUpcomingRide } from "../../utils/index";

function PastRides() {
  const [pastRides, setPastRides] = useState([]);
  const { nearestRides } = useUserContext();
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
  console.log(pastRides);
  return (
    <div>
      <h1>Past Rides</h1>
    </div>
  );
}
export default PastRides;
