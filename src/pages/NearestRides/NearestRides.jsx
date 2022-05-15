import React from "react";
import { useUserContext } from "../../context/UserContext";
import { useFilter } from "../../context/FilterContext";
import style from "./NearestRides.module.css";
import { RideCard } from "../../component/index";
function NearestRides() {
  const { nearestRides } = useUserContext();
  const { filterState } = useFilter();
  const { stateSelected, citySelected } = filterState;
  const filteredNearestRides = nearestRides?.filter(
    (item) =>
      (item.state === stateSelected || stateSelected === "state") &&
      (item.city === citySelected || citySelected === "city")
  );
  console.log(filteredNearestRides);
  return (
    <div className={`${style.rideListingSection}`}>
      {filteredNearestRides?.map((item) => {
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
export default NearestRides;
