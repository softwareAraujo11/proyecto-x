// TweetPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../Styles/TweetPage.css"; // Importa los estilos específicos de la página de tweet.

function TweetPage({ addTweet }) {
  const [tweet, setTweet] = useState(""); // Estado para almacenar el contenido del tweet.
  const [error, setError] = useState(""); // Estado para manejar mensajes de error.
  const navigate = useNavigate(); // Hook para redirigir al usuario a otra página.

  // Actualiza el estado `tweet` y borra cualquier mensaje de error existente.
  const handleTweetChange = (event) => {
    setTweet(event.target.value);
    setError("");
  };

  // Maneja el envío del tweet.
  const handleTweetSubmit = () => {
    if (tweet.trim()) {
      // Verifica que el tweet no esté vacío.
      const username = localStorage.getItem("username"); // Obtiene el nombre de usuario almacenado.
      addTweet({ username, content: tweet }); // Agrega el tweet usando `addTweet`.
      setTweet(""); // Limpia el campo de texto.
      navigate("/Feed"); // Redirige al usuario al Feed.
    } else {
      setError("Por favor, escribe algo antes de publicar."); // Muestra un mensaje de error si el tweet está vacío.
    }
  };

  return (
    <div className="TweetPage">
      <div className="container">
        <h2 className="heading">Publicar Tweet</h2>
        <textarea
          value={tweet}
          onChange={handleTweetChange}
          placeholder="¿Qué está pasando?"
          className="textarea"
        />
        {error && <p className="error">{error}</p>}{" "}
        {/* Mensaje de error si existe */}
        <button onClick={handleTweetSubmit} className="button">
          Publicar
        </button>{" "}
        {/* Botón para enviar el tweet */}
      </div>
    </div>
  );
}

// Verificación de tipos de las props.
TweetPage.propTypes = {
  addTweet: PropTypes.func.isRequired, // `addTweet` debe ser una función y es obligatoria.
};

export default TweetPage;
