import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { Mainlayout } from "../layouts/Mainlayout";
import config from "../config";
import { Home } from "../pages/Profile/profile.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={config.defaultPath} />} />
      <Route path="app" element={<Mainlayout />}>
        <Route path="profile" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
