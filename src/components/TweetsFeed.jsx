// TweetsFeed.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/TweetsFeed.css';

export const TweetsFeed = ({ tweets }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const tweetsPerPage = 10;

   
    const indexOfLastTweet = currentPage * tweetsPerPage;
    const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage;
    const currentTweets = tweets.slice(indexOfFirstTweet, indexOfLastTweet);

    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="TweetsFeed">            
            <div className="tweetsContainer">
                {currentTweets.map((tweet, index) => (
                    <div key={index} className="tweet">
                        {tweet}
                    </div>
                ))}
            </div>
            
            {}
            <div className="pagination">
                {[1, 2, 3].map((page) => (
                    <button 
                        key={page} 
                        onClick={() => handlePageChange(page)} 
                        className={page === currentPage ? 'active' : ''}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

TweetsFeed.propTypes = {
    tweets: PropTypes.array.isRequired,
};
