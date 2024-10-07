import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrincipalPage } from "./PrincipalPage";
import { AuthProvider } from "./auth/contexts/AuthProvide";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PrincipalPage />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
