import React from 'react'

function RideCard({mapUrl, id , originStationCode, stationPath, date,distance,state,city }) {
    return (
        <div>
            <img src={mapUrl} />
              <h3>{id}</h3>
              <h3>{originStationCode}</h3>
              <h3>{stationPath}</h3>
              <h3>{date}</h3>
              <h3>{distance}</h3>
              <h3>{state}</h3>
              <h3>{city}</h3>
        </div>
    )
}
export default RideCard;