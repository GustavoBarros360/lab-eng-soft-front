import React from "react";
import { Route, Routes as RRoutes } from "react-router-dom";
import { SellerForm } from "../seller/seller.form";

export const Routes: React.FC = () => {
  return (
    <RRoutes>
      <Route element={<SellerForm />} path="/" />
    </RRoutes>
  );
};
