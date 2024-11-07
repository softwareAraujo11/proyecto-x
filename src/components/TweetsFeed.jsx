import { useContext, useEffect, useState } from "react";
import { TwittsContext } from "../social/contexts/TwittsContext";
import "../Styles/TweetsFeed.css";

export const TweetsFeed = () => {
  const {
    twittState: { twitts, errorMessage },
    loadTwitts,
  } = useContext(TwittsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const tweetsPerPage = 10;

  useEffect(() => {
    loadTwitts();
  }, [loadTwitts]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * tweetsPerPage;
  const endIndex = startIndex + tweetsPerPage;
  const currentTweets = Array.isArray(twitts)
    ? twitts.slice(startIndex, endIndex)
    : [];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Tweets</h1>
      <div className="row">
        {currentTweets.length > 0 ? (
          currentTweets.map((tweet) => (
            <div key={tweet.id} className="tweet-card">
              <h5 className="card-title">{tweet.name}</h5>
              <div className="tweet-content">{tweet.twitt}</div>
              <p className="card-text">Fecha: {tweet.date}</p>
            </div>
          ))
        ) : (
          <p>No hay tweets disponibles.</p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn btn-primary m-2"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= twitts.length}
          className="btn btn-primary m-2"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
