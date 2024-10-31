import React from "react";
import { TwittsProvider } from "../contexts/TwittsProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import { TweetPage } from "../pages/TweetPage";

export const SocialRoutes = () => {
  return (
    <>
      <TwittsProvider>
        <Routes>
          <Route path="/tweet" element={<TweetPage />} />
        </Routes>
      </TwittsProvider>
    </>
  );
};
