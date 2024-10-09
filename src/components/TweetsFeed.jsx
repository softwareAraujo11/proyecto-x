// TweetsFeed.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/TweetsFeed.css';

export const TweetsFeed = ({ tweets }) => { // Recibe tweets como prop
    const navigate = useNavigate();

    return (
        <div className="TweetsFeed">            
            <div className="tweetsContainer">
                {tweets.map((tweet, index) => (
                    <div key={index} className="tweet">
                        {tweet}
                    </div>
                ))}
            </div>
        </div>
    );
};

TweetsFeed.propTypes = {
    tweets: PropTypes.array.isRequired,
};
