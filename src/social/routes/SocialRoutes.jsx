//SocialRoutes.jsx
import React, { useState } from "react";
import { TwittsProvider } from "../contexts/TwittsProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import { TweetPage } from "../pages/TweetPage";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import { FollowersPage } from "../pages/FollowersPage";
import { ProfileUsers } from "../pages/ProfileUsers";
export const SocialRoutes = () => {
  const [tweets, setTweets] = useState([]); // Estado para almacenar los tweets.
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios.

  return (
    <>
      <TwittsProvider>
        <Routes>
          <Route path="/tweet" element={<TweetPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/profile/:username"
            element={<Profile tweets={tweets} users={users} />}
          />
          <Route path="/followers" element={<FollowersPage />}></Route>
          <Route path="/profileUsers/:name" element={<ProfileUsers />} />
        </Routes>
      </TwittsProvider>
    </>
  );
};
