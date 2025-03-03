import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, Ban } from "lucide-react"; // Import icons
import "./card.css";
import trackUserActivity from "../../utils/trackUserActivity.js";

const Card = ({ data, selectedLang, category }) => {
  if (!data || data.length === 0) {
    return <p>No news data available.</p>;
  }

  const [reactions, setReactions] = useState({});

  const handleReaction = (newsId, reactionType) => {
    const timestamp = new Date().toISOString();

    setReactions((prevReactions) => ({
      ...prevReactions,
      [newsId]: reactionType,
    }));

    trackUserActivity(newsId, category, selectedLang, [], 0, { type: reactionType, timestamp });
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.image) return null;

        return (
          <div className="card" key={index}>
            <img src={curItem.image} alt="news" />
            <div className="content">
              <a className="title">{curItem.title}</a>
              <p>{curItem.description}</p>

              {/* Reaction Icons */}
              <div className="reactions text-black flex gap-2">
                <ThumbsUp
                  className={`icon ${reactions[curItem.title] === "like" ? "active" : ""} `}
                  size={18}
                  onClick={() => handleReaction(curItem.title, "like")}
                />
                <ThumbsDown
                  className={`icon ${reactions[curItem.title] === "dislike" ? "active" : ""}`}
                  size={18}
                  onClick={() => handleReaction(curItem.title, "dislike")}
                />
                <Ban
                  className={`icon ${reactions[curItem.title] === "not_interested" ? "active" : ""}`}
                  size={18}
                  onClick={() => handleReaction(curItem.title, "not_interested")}
                />
              </div>

              <button onClick={() => window.open(curItem.url, "_blank", "noopener,noreferrer")}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
