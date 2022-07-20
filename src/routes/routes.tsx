import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { ClientForm } from "../pages/client/client.form";
import { SellerForm } from "../pages/seller/seller.form";
import { ProductForm } from "../pages/product/product.form";
import { Home } from "../pages/home/home.page";
import { SellForm } from "../pages/sell/sell.form";
import { ListSellers } from "../pages/seller/list-sellers";
import { ListSell } from "../pages/sell/list-sell";
import { ListProducts } from "../pages/product/list-products";

export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route element={<Home />} path="/" />
      <Route element={<SellerForm />} path="/create-seller" />
      <Route element={<ClientForm />} path="/create-client" />
      <Route element={<ProductForm />} path="/create-product" />
      <Route element={<SellForm />} path="/create-sell" />
      <Route element={<ListSellers />} path="/list-sellers" />
      <Route element={<ListSell />} path="/list-sell" />
      <Route element={<ListProducts />} path="/list-products" />
    </ReactRoutes>
  );
};
