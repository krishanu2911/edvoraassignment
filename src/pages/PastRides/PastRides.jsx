import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { isUpcomingRide } from "../../utils/index";
import { useFilter } from "../../context/FilterContext";
import { RideCard } from "../../component/index";
import style from "./PastRides.module.css"
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
    <div className={`${style.rideListingSection}`}>
      {filteredPastRides?.map((item) => {
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
      })}
    </div>
  );
}
export default PastRides;
