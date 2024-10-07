import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrincipalPage } from "./PrincipalPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <PrincipalPage />
    </BrowserRouter>
  </StrictMode>
);
