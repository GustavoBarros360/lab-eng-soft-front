import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { ClientForm } from "../client/client.form";
import { SellerForm } from "../seller/seller.form";
import { ProductForm } from "../product/product.form";
import { Home } from "../home/home.page";

export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route element={<Home />} path="/" />
      <Route element={<SellerForm />} path="/create-seller" />
      <Route element={<ClientForm />} path="/create-client" />
      <Route element={<ProductForm />} path="/create-product" />
    </ReactRoutes>
  );
};
