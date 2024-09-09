import { useContext, useState } from "react";
import "./Sidebar.css";
import { Context } from "../../context/Context.jsx";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <section className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {/* LIST OF ALL RECENT PROMPTS */}
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  className="recent-entry"
                  onClick={() => loadPrompt(item)}
                  key={index}
                >
                  <img key={index} src={assets.message_icon} alt="icon" />
                  <p key={index}>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
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
