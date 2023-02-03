import React from "react";
import Header from "./components/HeaderTwo/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Reg from "./pages/Reg";
const routes = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/auth" element={<Reg />} />
      </Routes>
    </>
  );
};

export default routes;
