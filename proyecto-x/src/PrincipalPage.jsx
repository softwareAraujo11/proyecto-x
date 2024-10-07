import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";


export const PrincipalPage = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};
