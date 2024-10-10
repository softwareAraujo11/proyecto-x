// PrincipalPage.jsx
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./auth/pages/LoginPage";
import { CreateAccount } from "./auth/pages/CreateAccount";
import Feed from "./auth/pages/Feed";
import TweetPage from './auth/pages/TweetPage';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Profile from './auth/pages/Profile';
import  FollowersPage  from './auth/pages/FollowersPage';
import { FollowingPage } from './auth/pages/FollowingPage';

export const PrincipalPage = () => {
  const [tweets, setTweets] = useState([]); 
  const [users, setUsers] = useState([]); 

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]); 
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        // PrincipalPage.jsx
        <Route path="CreateAccount" element={<CreateAccount setUsers={setUsers} />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="Feed" element={<Feed tweets={tweets} />} />
        <Route path="/tweet" element={<TweetPage addTweet={addTweet} />} />
        <Route path="/profile/:username" element={<Profile tweets={tweets} users={users} />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/following" element={<FollowingPage />} />
      </Routes>
    </div>
  );
};
