import React from 'react'
import { useUserContext } from "../../context/UserContext"
function NearestRides() {
    const { nearestRides } = useUserContext();
    // console.log(nearestRides);
    return (
        <div>
            <h1>Nearest Rides</h1>
        </div>
    )
}
export default NearestRides;