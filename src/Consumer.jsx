import React, { useState } from "react";
import Map from "./google/Map";
import Marker from "./google/Marker";
import MarkerClusterer from "./google/MarkerClusterer";
import Popup from "./google/Popup";
import TransitLayer from "./google/TransitLayer";
import LeftLayer from "./google/LeftLayer";
import getPlaces from "./utils/getPlaces";
import "./styles.css";
import home2 from "./image/home2.jpg";
const base = { lat: 43.653226, lng: -79.3831484 };

export default function Consumer() {
  const places = getPlaces();
  const [placeIndex, setPlaceIndex] = useState(0);
  const [bound, setBound] = useState({});
  const [transitLayerEnabled, setTransitLayerEnabled] = useState(false);
  const [clickCnt, setClickCnt] = useState(0);

  return (
    <div>
      <h2>Explore page - with Marker Clusterer and Custom React Element</h2>
      <h5>Zoom in/zoom out to see the markers cluster effect</h5>
      <h5>Custom React Element can be used as map overlay</h5>
      <Map
        zoom={10}
        center={{ lat: places[placeIndex].lat, lng: places[placeIndex].lng }}
        events={{ onBoundsChangerd: arg => setBound(arg) }}
      >
        <LeftLayer />
        <TransitLayer enabled={transitLayerEnabled} />

        <Popup position={{ lat: base.lat - 0.01, lng: base.lng - 0.01 }}>
          <div onClick={() => setClickCnt(clickCnt + 1)}>
            Custom React Element {clickCnt}
          </div>
          <div>
            <div className="left-layer-item">
              <div className="left-layer-item-img">
                <img src={home2} alt="" />
                <div className="left-layer-item-des">
                  <h3>$5,000</h3>
                  <p>3727 RIVA AVE, Innisfil, Ontario </p>
                </div>
              </div>
              <div className="left-layer-item-info">
                <p>N4590690</p>
                <p>RIGHT AT HOME REALTY INC., Brokerage</p>
              </div>
            </div>
            <div className="left-layer-item">
              <div className="left-layer-item-img">
                <img src={home2} alt="" />
                <div className="left-layer-item-des">
                  <h3>$5,000</h3>
                  <p>3727 RIVA AVE, Innisfil, Ontario </p>
                </div>
              </div>
              <div className="left-layer-item-info">
                <p>N4590690</p>
                <p>RIGHT AT HOME REALTY INC., Brokerage</p>
              </div>
            </div>
            <div className="left-layer-item">
              <div className="left-layer-item-img">
                <img src={home2} alt="" />
                <div className="left-layer-item-des">
                  <h3>$5,000</h3>
                  <p>3727 RIVA AVE, Innisfil, Ontario </p>
                </div>
              </div>
              <div className="left-layer-item-info">
                <p>N4590690</p>
                <p>RIGHT AT HOME REALTY INC., Brokerage</p>
              </div>
            </div>
          </div>
        </Popup>

        <MarkerClusterer>
          {places.map((m, index) => (
            <Marker
              key={m.id}
              active={placeIndex === index}
              title={"marker id: " + m.id}
              position={{ lat: m.lat, lng: m.lng }}
              events={{
                onMouseover: () => {
                  console.log(m.lat);
                },
                onMouseout: () => {}
              }}
            />
          ))}
        </MarkerClusterer>
      </Map>
      <button
        className="btn"
        onClick={() => setPlaceIndex((placeIndex + 1) % places.length)}
      >
        Next place
      </button>
      <br />
      <button
        className="btn"
        onClick={() => setTransitLayerEnabled(!transitLayerEnabled)}
      >
        Toggle transit layer
      </button>
      <br />
      Current place id: {places[placeIndex].id}
      <br />
      Map bounds: {bound.toString()}
    </div>
  );
}
