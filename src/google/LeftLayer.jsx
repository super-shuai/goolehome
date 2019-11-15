import React, { useEffect, useState } from "react";
import home1 from '../image/home1.jpg'
import "../css/leftLayer.css";
export default function LeftLayer({ enabled, maps, map }) {
  const [show, setshow] = useState(true)
  return (
    <div className="map-left-layer-box">
      <span className="flag" onClick={()=>{setshow(!show)}}>《</span>
      <div className={ show ? "map-left-layer" : "map-left-layer map-left-layer-none"}>
        <div className="layer">
          <div className="left-layer-top">
            <span>Fesults: 44427</span>
            <div className="left-layer-search">
              <label htmlFor="input">Sort By</label>
              <input id="input" type="text"/>
            </div>
          </div>
          <div className="left-layer-content">
            <div className="left-layer-item">
              <div className="left-layer-item-img">
                <img src={home1} alt=""/>
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
                <img src={home1} alt=""/>
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
                <img src={home1} alt=""/>
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
                <img src={home1} alt=""/>
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
                <img src={home1} alt=""/>
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
          </div>
      </div>
    </div>
  )
}