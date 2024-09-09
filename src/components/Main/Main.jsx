// import React from 'react'
import { useContext } from "react";
import { assets } from "../../assets/assets.js";
import { Context } from "../../context/Context.jsx";
import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>

      <div className="main-container">
        {/* SHOWING THE RESULT WHEN AVAILABLE */}
        {!showResult ? (
          <>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, consequatur.
                </p>
                <img src={assets.compass_icon} alt="icon" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, consequatur.
                </p>
                <img src={assets.bulb_icon} alt="icon" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, consequatur.
                </p>
                <img src={assets.message_icon} alt="icon" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, consequatur.
                </p>
                <img src={assets.code_icon} alt="icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}

              {/* <p>{resultData}</p> */}
            </div>
          </div>
        )}

        {/* BOTTOM SECTION */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="icon" />
              <img src={assets.mic_icon} alt="icon" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="icon" />
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ea
            ratione ipsum distinctio, enim error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
