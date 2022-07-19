import React, { useState } from "react";

import { TextField, FormControl, FormLabel, Box, Button } from "@mui/material";

import { api } from "../api";

export const SellerForm: React.FC = () => {
  const [name, setName] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [salary, setSalary] = useState<number>();
  const [totalSalary, setTotalSalary] = useState<number>();
  const [comission, setComission] = useState<number>();

  const handleCreateSeller = () => {
    console.log(name, date, salary, totalSalary, comission);
    api
      .post("/create-seller", { name, date, salary, totalSalary, comission })
      .then((result) => console.log(result));
  };

  return (
    <FormControl>
      <FormLabel onSubmit={handleCreateSeller}>Cadastro de vendedor</FormLabel>
      <Box>
        <TextField
          name="name"
          label="Nome"
          placeholder="Nome do vendedor"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          name="date"
          type="date"
          onChange={(event) => setDate(new Date(event.target.value))}
        />
        <TextField
          name="salary"
          label="Salário Líquido"
          type="number"
          onChange={(event) => setSalary(parseFloat(event.target.value))}
        />
        <TextField
          name="totalSalary"
          label="Salário Bruto"
          type="number"
          onChange={(event) => setTotalSalary(parseFloat(event.target.value))}
        />
        <TextField
          name="commision"
          label="Percentual de comissão"
          type="number"
          onChange={(event) => setComission(parseFloat(event.target.value))}
        />
      </Box>
      <Box>
        <Button onClick={handleCreateSeller}>Cadastrar</Button>
      </Box>
    </FormControl>
  );
};
