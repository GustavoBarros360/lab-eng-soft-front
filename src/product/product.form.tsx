import React, { useState, useEffect } from "react";

import {
  TextField,
  FormControl,
  FormLabel,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { api } from "../api";

interface Categories {
  id_categoria: string;
  nome_categoria: string;
}

export const ProductForm: React.FC = () => {
  const [productName, setProductName] = useState<string>();
  const [categoryName, setCategoryName] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");
  const [value, setValue] = useState<number>();
  const [storage, setStorage] = useState<number>();
  const [categoriesList, setCategoriesList] = useState<Categories[]>([]);

  useEffect(() => {
    setSelectedCategoryName(
      categoriesList?.find(
        (category) => category.id_categoria === selectedCategory
      )?.nome_categoria ?? ""
    );
  }, [selectedCategory]);

  const handleCreateProduct = () => {
    api
      .post("/create-product", {
        name: productName,
        price: value,
        category: selectedCategoryName,
        categoryId: selectedCategory,
        quantity: storage,
      })
      .then((result) => console.log(result));
  };

  const handleCreateCategory = () => {
    api
      .post("/create-category", {
        name: categoryName,
      })
      .then((result) => console.log(result));
  };

  useEffect(() => {
    api.get("list-categories").then((res) => {
      setCategoriesList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <FormControl>
      <FormLabel>Cadastro de Categoria</FormLabel>
      <Box>
        <TextField
          name="name"
          label="Nome da categoria"
          placeholder="Nome da categoria"
          onChange={(event) => setCategoryName(event.target.value)}
        />
        <Button onClick={handleCreateCategory}>Cadastrar Categoria</Button>
      </Box>
      <FormLabel>Cadastro de Produto</FormLabel>
      <Box>
        <TextField
          name="name"
          label="Nome do produto"
          placeholder="Nome do produto"
          onChange={(event) => setProductName(event.target.value)}
        />
        <TextField
          name="value"
          type="number"
          onChange={(event) => setValue(parseFloat(event.target.value))}
        />
        <TextField
          name="storage"
          label="Quantidade em Estoque"
          type="number"
          onChange={(event) => setStorage(parseFloat(event.target.value))}
        />
        <Select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          labelId="category-select"
        >
          {categoriesList?.map((category) => (
            <MenuItem value={category.id_categoria}>
              {category.nome_categoria}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box>
        <Button onClick={handleCreateProduct}>Cadastrar Produto</Button>
      </Box>
    </FormControl>
  );
};
