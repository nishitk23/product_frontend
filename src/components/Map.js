import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import loadjs from "loadjs";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);

  useEffect(() => {
    loadjs(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCHrY_zXvUIDBsL7ENiJWeumRybYUCGkZQ`,
      () => {
        setMapLoaded(true);
      }
    );
  }, []);

  const onMapLoad = (map, maps) => {
    setMap(map);
  };

  return (
    <>
      {mapLoaded && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultCenter={{ lat: 32.5934, lng: 77.2223 }}
          defaultZoom={1}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => onMapLoad(map, maps)}
        >
          <AnyReactComponent lat={12.9716} lng={77.5946} text="My Marker" />
        </GoogleMapReact>
      )}
    </>
  );
};

export default Map;