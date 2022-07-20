import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

import { Hbox, Separator } from "../../styles/box";

export const ListSellers: React.FC = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    api.get("list-sellers").then((result) => {
      console.log(result.data);
      setSellers(result.data);
    });
  }, []);
  return (
    <Container>
      <Hbox>
        <Hbox.Item>
          <h2>Nome</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Data</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Salário Líquido</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Salário Bruto</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Percentual de Comissao</h2>
        </Hbox.Item>
      </Hbox>
      <Separator />
      <Separator />
      <Separator />
      {sellers?.map((seller: any) => (
        <Hbox>
          <Hbox.Item>{seller.nome_vendedor}</Hbox.Item>
          <Hbox.Item>{seller.data_admissao}</Hbox.Item>
          <Hbox.Item>{seller.salario_liquido}</Hbox.Item>
          <Hbox.Item>{seller.salario_bruto}</Hbox.Item>
          <Hbox.Item>{seller.percentual_comissao}</Hbox.Item>
        </Hbox>
      ))}
      <Link to="/">Voltar</Link>
    </Container>
  );
};
