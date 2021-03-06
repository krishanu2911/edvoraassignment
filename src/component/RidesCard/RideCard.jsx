import React from "react";
import style from "./RideCard.module.css";
function RideCard({
  mapUrl,
  id,
  originStationCode,
  stationPath,
  date,
  distance,
  state,
  city,
}) {
  let splitItem = stationPath.join(", ")
  console.log(splitItem)
  return (
    <div className={`${style.rideCardContainer} ${style.textColor}`}>
      <img className={`${style.mapImg}`} src={mapUrl} alt="mapImage"/>
      <div className={`${style.flex} ${style.rideCardRight}`}>
        <div className={`${style.textColor} ${style.flexCol} ${style.gap}`}>
          <h3>Ride id: {id}</h3>
          <h3>Origin Station: {originStationCode}</h3>
          <h3>Station path: [ {stationPath.join(", ")} ]</h3>
          <h3>Date: {date}</h3>
          <h3>Distance: {distance}</h3>
        </div>
        <div className={`${style.flex} ${style.gap} ${style.wrap}`}>
          <div className={`${style.pills}`}>
            <h4>{state}</h4>
          </div>
          <div className={`${style.pills}`}>
            <h4>{city}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RideCard;
