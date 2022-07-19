import React, { useState } from "react";

import { TextField, FormControl, FormLabel, Box, Button } from "@mui/material";

import { api } from "../api";

export const ClientForm: React.FC = () => {
  const [name, setName] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [cpfOrCnpj, setCpfOrCnpj] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [complement, setComplement] = useState<string>();
  const [cep, setCep] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const handleCreateClient = () => {
    console.log(name, date, cpfOrCnpj, street, number, complement, cep);
    api
      .post("/create-client", {
        name,
        data_reg: date,
        cpf: cpfOrCnpj,
        street,
        number,
        phone1: phone,
        complement,
        cep,
      })
      .then((result) => console.log(result));
  };

  return (
    <FormControl>
      <FormLabel onSubmit={handleCreateClient}>Cadastro de cliente</FormLabel>
      <Box>
        <TextField
          name="name"
          label="Nome"
          placeholder="Nome do cliente"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          name="date"
          type="date"
          onChange={(event) => setDate(new Date(event.target.value))}
        />
        <TextField
          name="cpf/cnpj"
          label="CPF / CNPJ"
          type="text"
          onChange={(event) => setCpfOrCnpj(event.target.value)}
        />
        <TextField
          name="street"
          label="Rua"
          type="text"
          onChange={(event) => setStreet(event.target.value)}
        />
        <TextField
          name="number"
          label="Número"
          type="text"
          onChange={(event) => setNumber(event.target.value)}
        />
        <TextField
          name="complement"
          label="Complemento"
          type="text"
          onChange={(event) => setComplement(event.target.value)}
        />
        <TextField
          name="cep"
          label="CEP"
          type="text"
          onChange={(event) => setCep(event.target.value)}
        />
        <TextField
          name="phone"
          label="Telefone"
          type="text"
          onChange={(event) => setPhone(event.target.value)}
        />
      </Box>
      <Box alignItems="flex-start">
        <Button onClick={handleCreateClient}>Cadastrar</Button>
      </Box>
    </FormControl>
  );
};
