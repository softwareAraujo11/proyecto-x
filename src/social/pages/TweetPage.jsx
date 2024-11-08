import { useContext, useState } from "react";
import { TwittsContext } from "../contexts/TwittsContext";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../auth/contexts/AuthContext";
import "../../Styles/TweetPage.css";
import { useNavigate } from "react-router-dom";

const newEmptyTwitt = {
  userr: "",
  twitt: "",
  date: "",
};

export const TweetPage = () => {
  const navigate = useNavigate();
  const {
    authState: { user, logged },
    logOutUser,
  } = useContext(AuthContext);
  const userr = user.displayName;
  const { saveTwit } = useContext(TwittsContext);
  const { name, twitt, date, onInputChange } = useForm(newEmptyTwitt);

  // Estado para manejar el mensaje de error y el conteo de caracteres
  const [errorMessage, setErrorMessage] = useState("");
  const maxCharacters = 280;

  // Función para obtener la fecha y hora del sistema sin los milisegundos
  const getCurrentDateTime = () => {
    const date = new Date();
    const formattedDate = date.toISOString().split(".")[0] + "Z"; // Elimina los milisegundos
    return formattedDate;
  };

  const onCreateTweet = async (e) => {
    e.preventDefault();

    if (twitt.length > maxCharacters) {
      setErrorMessage(
        `El tweet no puede superar los ${maxCharacters} caracteres.`
      );
      return; // No enviamos el tweet si la longitud excede el límite
    }

    const tweet = {
      name: userr,
      twitt,
      date: getCurrentDateTime(), // Usamos la fecha y hora del sistema
    };

    await saveTwit(tweet);
    navigate("/feed", { replace: true });
  };

  return (
    <div className="TweetPage">
      <div className="container1">
        <h2 className="heading">Publicar Tweet</h2>
        <textarea
          type="text"
          value={twitt}
          onChange={onInputChange}
          name="twitt"
          placeholder="¿Qué está pasando?"
          className="textarea"
          maxLength={maxCharacters}
        />
        {/* Muestra el contador de caracteres restantes */}
        <div className="char-count">
          {twitt.length}/{maxCharacters} caracteres
        </div>
        {/* Muestra el mensaje de error si existe */}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <button className="button" onClick={onCreateTweet}>
          Publicar
        </button>
      </div>
    </div>
  );
};
