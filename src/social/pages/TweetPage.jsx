// TweetPage.jsx
import { useContext } from "react";

import { TwittsContext } from "../contexts/TwittsContext";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../auth/contexts/AuthContext";

const newEmptyTwitt = {
  userr: "",
  twitt: "",
  date: new Date().toLocaleDateString(), // Agrega la fecha actual
};
//import "../../Styles/TweetPage.css"; // Importa los estilos específicos de la página de tweet.

export const TweetPage = () => {
  const {
    authState: { user, logged },
    logOutUser,
  } = useContext(AuthContext);
  const userr = user.displayName;

  const { saveTwit } = useContext(TwittsContext);
  const { name, twitt, date, onInputChange } = useForm(newEmptyTwitt);
  const onCreateTweet = async (e) => {
    e.preventDefault();

    const tweet = {
      name: userr,
      twitt,
      date,
    };
    await saveTwit(tweet);
  };

  // Maneja el envío del tweet.

  return (
    <div className="TweetPage">
      <div className="container">
        <h2 className="heading">Publicar Tweet </h2>
        <textarea
          type="text"
          value={twitt}
          onChange={onInputChange}
          name="twitt"
          placeholder="¿Qué está pasando?"
          className="textarea"
        />
        {/* Mensaje de error si existe */}
        <button className="button" onClick={onCreateTweet}>
          Publicar
        </button>{" "}
        {/* Botón para enviar el tweet */}
      </div>
    </div>
  );
};
