import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef,useEffect, useCallback } from "react";
import Map ,{GeolocateControl}from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { motion } from 'framer-motion/dist/framer-motion'

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3VwZXJoMjU3IiwiYSI6ImNsMWM4ajdkOTA1OGQzam5yampkM3c4aDEifQ.TO-_alEhY5rydxgDGaF_Kw";

function Map1() {
  const [viewport, setViewport] = useState({
    longitude: 10.1815,
    latitude: 36.8065,
    zoom: 8
  });
  const geolocateControlRef = React.useCallback((ref) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const [mapstyle,setmap]=useState("mapbox://styles/superh257/cl1ia13ee008715qs6lflsbmm")
  useEffect(() => {
    const mapdark="mapbox://styles/superh257/cl1ia13ee008715qs6lflsbmm"
    const maplight="mapbox://styles/mapbox/streets-v9"
    const theme= localStorage.getItem("theme")
    return () => {
      if (theme=="dark"){
        setmap(mapdark)
      }
      else{
        setmap(maplight)
      }
    }
  }, [])
  
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  return (
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity: 0 }}>
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "var(--back-div)",
          color: "currentColor",
          borderRadius: "80px",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "20px",
          overflow: "visible",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <ul>
          <li
            style={{
              transform: "translate(0,20px)",
            }}
          >
            <a href="#" style={{color: 'var(--text-color)',transition: 'background .3s ease-in-out, color .6s ease-in-out',textDecoration: 'inherit',cursor: 'inherit'}}>Nutrition Stores</a>
          </li>
          <li
            style={{
              transform: "translate(0,200px)",
            }}
          >
            <a href="#" style={{color: 'var(--text-color)',transition: 'background .3s ease-in-out, color .6s ease-in-out',textDecoration: 'inherit',cursor: 'inherit'}}>Pinned Locations</a>
          </li>
        </ul>
        <iframe
          src="https://giphy.com/embed/3gJTIZdFKjngOEhSSG"
          width="300"
          height="300"
          frameBorder="0"
          class="giphy-embed"
          style={{ objectFit: "cover", transform: "translate(0px,-45px)" }}
        ></iframe>
        <ul>
          <li
            style={{
              transform: "translate(0,20px)",
            }}
          >
            <a href="#" style={{color: 'var(--text-color)',transition: 'background .3s ease-in-out, color .6s ease-in-out',textDecoration: 'inherit',cursor: 'inherit'}}>Infirmary</a>
          </li>
          <li
            style={{
              transform: "translate(0,200px)",
            }}
          >
            <a href="#" style={{color: 'var(--text-color)',transition: 'background .3s ease-in-out, color .6s ease-in-out',textDecoration: 'inherit',cursor: 'inherit'}}>Pharmacies</a>
          </li>
        </ul>
      </div>
     <div className="map-container">
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 ,borderTopRightRadius:'50px',
        borderTopLeftRadius:'50px'}}
      />
       
      <Map
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapstyle}
        style={{borderTopRightRadius:'50px',
                borderTopLeftRadius:'50px',
                }}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="topleft"
          
        />
        {/* <GeolocateControl ref={geolocateControlRef} 
        position="topright"/> */}
      </Map>
    </div>
    </div>
    </motion.div>
  );
}

export default Map1;
