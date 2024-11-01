import React from "react";
import { TwittsProvider } from "../contexts/TwittsProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import { TweetPage } from "../pages/TweetPage";
import Feed from "../pages/Feed";

export const SocialRoutes = () => {
  return (
    <>
      <TwittsProvider>
        <Routes>
          <Route path="/tweet" element={<TweetPage />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </TwittsProvider>
    </>
  );
};
