// PrincipalPage.js
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./auth/pages/LoginPage";
import { CreateAccount } from "./auth/pages/CreateAccount";
import { Routes, Route } from 'react-router-dom';


export const PrincipalPage = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
};

