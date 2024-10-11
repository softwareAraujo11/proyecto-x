// index.js
import { StrictMode } from "react"; // Importa StrictMode para activar verificaciones adicionales de advertencias en desarrollo.
import { createRoot } from "react-dom/client"; // Importa createRoot para renderizar la aplicación en el DOM.
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter para manejar la navegación en la aplicación.
import { PrincipalPage } from "./PrincipalPage"; // Importa el componente PrincipalPage que representa la página principal de la aplicación.
import { AuthProvider } from "./auth/contexts/AuthProvide"; // Importa AuthProvider para proporcionar contexto de autenticación a toda la aplicación.

// Renderiza la aplicación dentro del elemento con id "root" en el HTML.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Proporciona el contexto de autenticación a los componentes hijos */}
      <AuthProvider>
        {/* Componente principal que manejará la navegación y el estado de la aplicación */}
        <PrincipalPage />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
