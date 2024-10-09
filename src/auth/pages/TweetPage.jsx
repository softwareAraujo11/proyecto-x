// TweetPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../Styles/TweetPage.css'; // Importa el archivo CSS

function TweetPage({ addTweet }) {
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleTweetChange = (event) => {
        setTweet(event.target.value);
        setError(''); // Resetear el error al cambiar el texto
    };

    const handleTweetSubmit = () => {
        if (tweet.trim()) {
            addTweet(tweet); // Llama a la función para guardar el tweet
            setTweet(''); // Resetea el campo de texto
            navigate('/Feed'); // Redirige de vuelta al feed
        } else {
            setError("Por favor, escribe algo antes de publicar."); // Mensaje de error
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
            {error && <p className="error">{error}</p>} {/* Mensaje de error */}
            <button onClick={handleTweetSubmit} className="button">Publicar</button>
        </div>
        </div>
    );
}

TweetPage.propTypes = {
    addTweet: PropTypes.func.isRequired,
};

export default TweetPage;
