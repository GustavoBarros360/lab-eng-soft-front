import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

import { Hbox, Separator } from "../../styles/box";

export const ListProducts: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("entrei no effect");
    api
      .get("list-products-category")
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container>
      <Hbox>
        <Hbox.Item>
          <h2>Produto</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Categoria</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Preço</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Quantidade em Estoque</h2>
        </Hbox.Item>
      </Hbox>
      <Separator />
      <Separator />
      <Separator />
      {products?.map((product: any) => (
        <Hbox>
          <Hbox.Item>{product.nome_produto}</Hbox.Item>
          <Hbox.Item>{product.nome_categoria}</Hbox.Item>
          <Hbox.Item>{product.valor}</Hbox.Item>
          <Hbox.Item>{product.qtde_estoque}</Hbox.Item>
        </Hbox>
      ))}
      <Link to="/">Voltar</Link>
    </Container>
  );
};
