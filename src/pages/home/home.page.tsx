import React from "react";

import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Hbox } from "../../styles/box";

export const Home: React.FC = () => {
  return (
    <Container>
      <h1>Loja 1,99</h1>
      <Hbox hAlign="center">
        <Hbox.Item noGrow>
          <Link to="/create-seller">Cadastrar Vendedor</Link>
          <Link to="/create-product">Cadastrar Produto</Link>
          <Link to="/create-sell">Registro de Vendas</Link>
          <Link to="/create-client">Cadastrar Cliente</Link>
          <Link to="/list-sellers">Listar Vendedores</Link>
          <Link to="/list-sell">Listar Vendas</Link>
          <Link to="/list-products">Listar Produtos</Link>
        </Hbox.Item>
      </Hbox>
    </Container>
  );
};
