// import React from 'react'
import { assets } from "../../assets/assets.js";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you Today?</p>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              consequatur.
            </p>
            <img src={assets.compass_icon} alt="icon" />
          </div>

          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              consequatur.
            </p>
            <img src={assets.bulb_icon} alt="icon" />
          </div>

          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              consequatur.
            </p>
            <img src={assets.message_icon} alt="icon" />
          </div>

          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              consequatur.
            </p>
            <img src={assets.code_icon} alt="icon" />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="icon" />
              <img src={assets.mic_icon} alt="icon" />
              <img src={assets.send_icon} alt="icon" />
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea ratione ipsum distinctio, enim error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
