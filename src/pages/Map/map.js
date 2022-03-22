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
    <div> 
      <div style={{
        display:"flex",
        backgroundColor:"#DCEAFC",
        color:"#183AA8",
        borderRadius:"80px",
        justifyContent:"center",
        textAlign:"center",
        fontSize:"20px",
        overflow:"visible",
        marginLeft:"50px",
        marginRight:"50px"
        
      }}>
        <ul>
          <li style={{
            transform:"translate(0,20px)",
          }}>
            Nutrition Stores
          </li>
          <li style={{
            transform:"translate(0,200px)",
          }}>
            Pinned locations
          </li>
        </ul>
        <img src={require("./map.png")} style={{
          height:"320px",
          objectFit:"cover",
          width:"350px",
          transform:"translate(-70px,-15px)",
          padding:"0",
          margin:"0"
        }}></img>
        <ul>
          <li style={{
            transform:"translate(0,20px)",
          }}>
            Infirmary
          </li>
          <li style={{
            transform:"translate(0,200px)",
          }}>
            Pharmacies
          </li>
        </ul>
      </div>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{
                            width: "70%", 
                            height: "50%",
                            bottom:"0px",
                            left:"50%",
                            transform: "translate(-50%, -0%)",
                            margin: "0 auto",
                            position:"absolute",
                            border: "solid 2rem",
                            borderColor:"#FBBB87",
                            borderBottom:"none",
                            borderTopRightRadius:"80px",
                            borderTopLeftRadius:"80px",
                            }}
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
