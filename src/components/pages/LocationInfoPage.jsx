import React from "react";
import { useLocation } from "react-router-dom";
/* components */
import { LocationInfoForm } from "..";

function LocationInfoPage() {
  const location = useLocation();
  return <LocationInfoForm state={location.state} />;
}

export default LocationInfoPage;
