import React from "react";
import { LocationDetailForm } from "..";
import { useLocation } from "react-router-dom";

function LocationDetailPage() {
  const location = useLocation();
  return <LocationDetailForm state={location.state} />;
}

export default LocationDetailPage;
