import React from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const center = { lat: 40.8584, lng: 2.2945 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) {
    return <p>Loding</p>;
  }

  return (
    <div
      style={{
        display:"flex"
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    > <div>
        <h1>MAP</h1>
    </div>
      
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "90%", height: "90%",border:"5rem" }}
        options={{
            zoomControl: true,
            streetViewControl: true,
        }}
      >
        
      </GoogleMap>
      
      
    </div>
  );
}

export default Map;
