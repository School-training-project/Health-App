import React from 'react'
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'
function Map() {
    const {isLoaded}= useJsApiLoader(
        {
            googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }
    )
    if (isLoaded){
        return(<p>Loding</p>)
    }
    
    return (
        
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <h1>Map</h1> 
            <GoogleMap>

            </GoogleMap>
        </div>
    );
};

export default Map;