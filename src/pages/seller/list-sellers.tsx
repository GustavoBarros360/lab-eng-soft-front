import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

import { Hbox, Separator } from "../../styles/box";

export const ListSellers: React.FC = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    api.get("list-sellers").then((result) => {
      console.log(result.data);
      setSellers(result.data);
    });
  }, []);

  const handleDeleteSeller = (id: string) => {
    console.log(id);
    api
      .delete(`/delete-seller/${id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.error(err));
  };

  const handleUpdateSeller = (seller: any) => {
    const {
      id_vendedor,
      nome_vendedor,
      salario_bruto,
      salario_liquido,
      data_admissao,
      percentual_comissao,
    } = seller ?? {};
    api.put(`/update-seller/${id_vendedor}`, {
      name: nome_vendedor,
      salary: salario_liquido,
      totalSalary: salario_bruto,
      date: data_admissao,
      comission: percentual_comissao,
    });
  };
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
        <Hbox.Item>
          <h2>Editar</h2>
        </Hbox.Item>
        <Hbox.Item>
          <h2>Deletar</h2>
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
          <Hbox.Item>
            <Button
              color="error"
              onClick={() => handleDeleteSeller(seller.id_vendedor)}
            >
              Deletar
            </Button>
          </Hbox.Item>
        </Hbox>
      ))}
      <Link to="/">Voltar</Link>
    </Container>
  );
};
