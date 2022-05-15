import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useFilter } from "../../context/FilterContext";
import style from "./FilterSection.module.css";
function FilterSection() {
  const { filterDispatch, filterState } = useFilter();
  const { rideData } = useUserContext();
  const [stateCityData, setStateCityData] = useState([]);
  const [selectedState, setSelectedState] = useState("state");
  const [selectedStateCity, setSelectedStateCity] = useState([]);
  const [ filterToggle, setFilterToggle ] = useState(true);
  useEffect(() => {
    const listofStateData = rideData.map((item) => {
      let stateCityObj = {
        state: item.state,
        city: [item.city],
      };
      return stateCityObj;
    });
    setStateCityData(listofStateData);
  }, [rideData]);
  const filteredStateWithCity = stateCityData?.reduce((acc, curr) => {
    const findStateInAcc = acc.find((item) => item.state === curr.state);
    if (findStateInAcc) {
      const updatedAcc = acc.filter(
        (item) => item.state !== findStateInAcc.state
      );
      return [
        ...updatedAcc,
        { ...findStateInAcc, city: [...findStateInAcc.city, ...curr.city] },
      ];
    } else {
      return [...acc, curr];
    }
  }, []);
  console.log(selectedState);
  return (
    <div>
      { filterToggle ? <h3 onClick={() => setFilterToggle((prev) => !prev)} className={`${style.textColor}`}>Filter</h3> :
      <div className={`${style.fiterContainer}`}>
        <h3 onClick={() => setFilterToggle((prev) => !prev)} className={`${style.textColor}`}>Filter</h3>
        <hr />
        <select
          className={`${style.fitlerPill}`}
          name="stateoption"
          id=""
          onChange={(e) => {
            const { city } = filteredStateWithCity.find(
              (item) => item.state === e.target.value
            );
            filterDispatch({ type: "STATE", payload: e.target.value });
            setSelectedStateCity(city);
            setSelectedState(e.target.value);
          }}
        >
          <option value="State">State</option>
          {filteredStateWithCity.map((item) => {
            return <option value={item.state}>{item.state}</option>;
          })}
        </select>
        <select
          className={`${style.fitlerPill}`}
          name="stateoption"
          id=""
          onChange={(e) => {
            filterDispatch({ type: "CITY", payload: e.target.value });
            console.log(e.target.value);
          }}
        >
          <option value="City">City</option>
          {selectedStateCity.length &&
            selectedStateCity.map((item) => {
              return <option>{item}</option>;
            })}
        </select>
      </div>}
    </div>
  );
}
export { FilterSection };
