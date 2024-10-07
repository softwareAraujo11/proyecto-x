import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./auth/pages/LoginPage";
import { CreateAccount } from "./auth/pages/CreateAccount";
import { Feed } from "./auth/pages/Feed";

export const PrincipalPage = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Feed" element={<Feed />} />
        </Routes>
      </div>
    </>
  );
};
