// Feed.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CommonHeader } from "../../components/CommonHeader";
import "../../Styles/Feed.css";
import { TweetsFeed } from "../../components/TweetsFeed";
import SidebarMenu from "../../components/SidebarMenu";

function Feed() {
  const navigate = useNavigate();

  const handlePostTweet = () => {
    navigate("/tweet");
  };

  return (
    <>
      <CommonHeader />
      <div className="Feed">
        <div className="izqFeed">
          <SidebarMenu />
        </div>
        <div className="centerFeed">
          <h1 id="Welcome">Welcome to X</h1>
          <div className="buttonAndTweets">
            <button
              className="button"
              id="buttonPostTweet"
              onClick={handlePostTweet}
            >
              Post a Tweet
            </button>
            <div className="tweets-container">
              {/* Muestra el componente de TweetsFeed */}
              <TweetsFeed />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
