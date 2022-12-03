import React from "react";

import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/notFound/NotFoundPage";
import BetPage from '../pages/bet/BetPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/bet" element={<BetPage/>}/>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
