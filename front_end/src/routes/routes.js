import React from "react";

import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/notFound/NotFoundPage";
import RegisterPage from '../pages/register/RegisterPage';
import LoginPage from '../pages/login/loginPage';

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default ApplicationRoutes;
