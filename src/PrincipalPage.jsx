// PrincipalPage.jsx
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./auth/pages/LoginPage";
import { CreateAccount } from "./auth/pages/CreateAccount";
import Feed from "./auth/pages/Feed";
import TweetPage from './auth/pages/TweetPage';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

export const PrincipalPage = () => {
  const [tweets, setTweets] = useState([]); // Estado de tweets

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]); // Agregar nuevo tweet al inicio
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Feed" element={<Feed tweets={tweets} />} /> {/* Pasa los tweets aquí */}
          <Route path="/tweet" element={<TweetPage addTweet={addTweet} />} />
        </Routes>
      </div>
    </>
  );
};

