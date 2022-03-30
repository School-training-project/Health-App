import React from "react";
import { LineLayer } from "@deck.gl/layers";
import renderToDOM from "../../components/DeckGl/DeckGL";
import DeckGL1 from "../../components/DeckGl/DeckGL";

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3VwZXJoMjU3IiwiYSI6ImNsMWM4ajdkOTA1OGQzam5yampkM3c4aDEifQ.TO-_alEhY5rydxgDGaF_Kw';

function Map () {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#cf6679f1",
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
            Nutrition Stores
          </li>
          <li
            style={{
              transform: "translate(0,200px)",
            }}
          >
            Pinned locations
          </li>
        </ul>
        <iframe src="https://giphy.com/embed/3gJTIZdFKjngOEhSSG" width="300" height="300" frameBorder="0" class="giphy-embed" style={{objectFit: "cover",transform: "translate(0px,-45px)"}} ></iframe>
        <ul>
          <li
            style={{
              transform: "translate(0,20px)",
            }}
          >
            Infirmary
          </li>
          <li
            style={{
              transform: "translate(0,200px)",
            }}
          >
            Pharmacies
          </li>
        </ul>
      </div> 
      <div id="map"> 
        <DeckGL1>
        </DeckGL1>
    </div>
    </div>
  );
}


export default Map;
