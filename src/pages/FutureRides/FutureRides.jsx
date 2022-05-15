import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { isUpcomingRide } from "../../utils/index";
import { useFilter } from "../../context/FilterContext";
import style from "./FutureRides.module.css";
import { RideCard } from "../../component/index"
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
    <div className={`${style.rideListingSection}`}>
      {filteredUpcomingRides.length ? filteredUpcomingRides?.map((item) => {
        return (
          <div>
            <RideCard
              mapUrl={item.map_url}
              id={item.id}
              originStationCode={item.origin_station_code}
              stationPath={item.station_path}
              date={item.date}
              distance={item.distance}
              state={item.state}
              city={item.city}
            />
          </div>
        );
      }):<h1>No upcoming Rides </h1>
    }
    </div>
  );
}
export default FutureRides;
