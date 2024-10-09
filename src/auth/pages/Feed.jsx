import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonHeader } from '../../components/CommonHeader';
import '../../Styles/Feed.css';
import { TweetsFeed } from '../../components/TweetsFeed';


function Feed({ tweets = [] }) {
    const navigate = useNavigate();
    
    const handlePostTweet = () => {
        navigate('/tweet');
    };

    return (
        <>
          <CommonHeader/>
          <div className='Feed'>
            <div className='izqFeed'><h1>izq</h1></div>
            <div className='centerFeed'>
                <h1>Welcome to X</h1>
                <button id='buttonPostTweet' onClick={handlePostTweet}>Post a Tweet</button>
                {tweets.length === 0 ? <p>No tweets to show.</p> : <TweetsFeed tweets={tweets} />}
            </div>
            <div className='rightFeed'><h1>der</h1></div>
          </div>
        </>
    );
}

export default Feed;
