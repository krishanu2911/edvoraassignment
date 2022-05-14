import { Route, Routes } from "react-router-dom";
import React from "react";
import { FutureRides, PastRides, NearestRides } from "../pages/index";

function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<NearestRides />} />
      <Route path="/futurerides" element={<FutureRides />} />
      <Route path="/pastrides" element={<PastRides />} />
    </Routes>
  );
}
export default RoutePath;
