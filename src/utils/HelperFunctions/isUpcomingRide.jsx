function isUpcomingRide(value) {
  var todayDate = new Date();
  var RideDate = new Date(value);

  if (RideDate.getFullYear() > todayDate.getFullYear()) {
    return true;
  } else if (RideDate.getFullYear() === todayDate.getFullYear()) {
    if (RideDate.getMonth() > todayDate.getMonth()) {
      return true;
    } else if (RideDate.getMonth() === todayDate.getMonth()) {
      if (RideDate.getDate() >= todayDate.getDate()) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
export { isUpcomingRide };
