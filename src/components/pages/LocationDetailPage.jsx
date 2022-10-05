import React from "react";
import { LocationDetailForm } from "..";
import { useLocation } from "react-router-dom";

function LocationDetailPage() {
  const location = useLocation();
  return <LocationDetailForm address={location.state.address} />;
}

export default LocationDetailPage;
