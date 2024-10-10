// TweetPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../Styles/TweetPage.css'; 

function TweetPage({ addTweet }) {
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleTweetChange = (event) => {
        setTweet(event.target.value);
        setError('');
    };

    const handleTweetSubmit = () => {
        if (tweet.trim()) {
            const username = localStorage.getItem('username'); 
            addTweet({ username, content: tweet });
            setTweet(''); 
            navigate('/Feed'); 
        } else {
            setError("Por favor, escribe algo antes de publicar."); 
        }
    };

    return (
        <div className='TweetPage'>
            <div className="container">
                <h2 className="heading">Publicar Tweet</h2>
                <textarea 
                    value={tweet} 
                    onChange={handleTweetChange} 
                    placeholder="¿Qué está pasando?" 
                    className="textarea"
                />
                {error && <p className="error">{error}</p>}
                <button onClick={handleTweetSubmit} className="button">Publicar</button>
            </div>
        </div>
    );
}

TweetPage.propTypes = {
    addTweet: PropTypes.func.isRequired,
};

export default TweetPage;
