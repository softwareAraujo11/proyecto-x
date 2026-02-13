//index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrincipalPage } from "./PrincipalPage";
import { AuthProvider } from "./auth/contexts/AuthProvider";

// Renderiza la aplicación dentro del elemento con id "root" en el HTML.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PrincipalPage />{" "}
        {/* Solo renderiza PrincipalPage, que maneja las rutas */}
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
