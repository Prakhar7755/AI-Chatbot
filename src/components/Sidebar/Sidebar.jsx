import { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <section className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message icon" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </section>

      <section className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="question icon" />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="question icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
