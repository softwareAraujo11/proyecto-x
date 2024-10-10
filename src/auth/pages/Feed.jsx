// Feed.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonHeader } from '../../components/CommonHeader';
import '../../Styles/Feed.css';
import { TweetsFeed } from '../../components/TweetsFeed';
import SidebarMenu from '../../components/SidebarMenu'; 

function Feed({ tweets = [] }) {
    const navigate = useNavigate();
    
    const handlePostTweet = () => {
        navigate('/tweet');
    };

    return (
        <>
          <CommonHeader />
          <div className='Feed'>
            <div className='izqFeed'>
                <SidebarMenu /> {}
            </div>
            <div className='centerFeed'>
                <h1 id='Welcome'>Welcome to X</h1>
                <div className='buttonAndTweets'>
                <button className='button' id='buttonPostTweet' onClick={handlePostTweet}>Post a Tweet</button>
                {tweets.length === 0 ? <p>No tweets to show.</p> : <TweetsFeed tweets={tweets} />}
                </div>
            </div>
          </div>
        </>
    );
}

export default Feed;
