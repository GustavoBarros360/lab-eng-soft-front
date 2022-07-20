import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

import { Hbox, Separator } from "../../styles/box";

export const ListSell: React.FC = () => {
  const [sell, setSell] = useState([]);

  useEffect(() => {
    api.get("list-sell").then((result) => {
      console.log(result.data);
      setSell(result.data);
    });
  }, []);
  return (
    <Container>
      <Hbox>
        <Hbox.Item>
          <h2>Número Venda</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Nome Vendedor</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Nome Cliente</h2>
        </Hbox.Item>
      </Hbox>
      <Separator />
      <Separator />
      <Separator />
      {sell?.map((sell: any) => (
        <Hbox>
          <Hbox.Item>{sell.numero_venda}</Hbox.Item>
          <Hbox.Item>{sell.nome_vendedor}</Hbox.Item>
          <Hbox.Item>{sell.nome_cliente}</Hbox.Item>
        </Hbox>
      ))}
      <Link to="/">Voltar</Link>
    </Container>
  );
};
