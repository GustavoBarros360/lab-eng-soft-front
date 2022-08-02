import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  TextField,
  FormControl,
  FormLabel,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { api } from "../../api";

export const SellForm: React.FC = () => {
  const [number, setNumber] = useState<number>();
  const [date, setDate] = useState<Date>();
  const [clientId, setClientId] = useState<string>();
  const [sellerId, setSellerId] = useState<string>();
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(
    ""
  );
  const [selectedQuantity, setSelectedQuantity] = useState<
    number | undefined
  >();

  const [productsList, setProductsList] = useState([]);
  const [sellersList, setSellersList] = useState([]);
  const [clientsList, setClientsList] = useState([]);

  const [wasSellCreated, setWasSellCreated] = useState(false);

  useEffect(() => {
    api.get("list-products").then((res) => {
      setProductsList(res.data);
      console.log(res.data);
    });

    api.get("list-sellers").then((res) => {
      setSellersList(res.data);
      console.log(res.data);
    });

    api.get("list-clients").then((res) => {
      setClientsList(res.data);
      console.log(res.data);
    });
  }, []);

  const handleCreateSell = () => {
    api
      .post("/create-sell", {
        number,
        data: date,
        id_cliente: clientId,
        id_vendedor: sellerId,
      })
      .then((res) => setWasSellCreated(true));
  };

  const handleProductSelect = (event: any) => {
    setSelectedProduct(event.target.value);
  };

  const handleQuantitySelect = (event: any) => {
    setSelectedQuantity(parseInt(event.target.value));
  };

  const updateSell = () => {
    api
      .post("add-product-to-sell", {
        number,
        productId: selectedProduct,
        quantity: selectedQuantity,
      })
      .then((res) => {
        setSelectedProduct(undefined);
        setSelectedQuantity(0);
      });
  };

  return (
    <FormControl>
      <FormLabel onSubmit={handleCreateSell}>Cadastro de Venda</FormLabel>
      <Box>
        <TextField
          name="number"
          label="Número da venda"
          placeholder="Número da vendar"
          type="number"
          onChange={(event) => setNumber(parseInt(event.target.value))}
        />
        <TextField
          name="date"
          type="date"
          onChange={(event) => setDate(new Date(event.target.value))}
        />
        <Select
          value={sellerId}
          onChange={(event) => setSellerId(event.target.value)}
        >
          {sellersList?.map((seller: any) => (
            <MenuItem value={seller.id_vendedor}>
              {seller.nome_vendedor}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={clientId}
          onChange={(event) => setClientId(event.target.value)}
        >
          {clientsList?.map((client: any) => (
            <MenuItem value={client.id_cliente}>{client.nome_cliente}</MenuItem>
          ))}
        </Select>
      </Box>
      {!wasSellCreated && (
        <Box>
          <Button onClick={handleCreateSell}>Cadastrar</Button>
          <Link to="/">Voltar</Link>
        </Box>
      )}
      {wasSellCreated && (
        <>
          <Box>
            <Select value={selectedProduct} onChange={handleProductSelect}>
              {productsList?.map((product: any) => (
                <MenuItem value={product.id_produto}>
                  {product.nome_produto}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Quantidade"
              type="number"
              onChange={handleQuantitySelect}
              value={selectedQuantity}
            />
          </Box>
          <Box>
            <Button onClick={updateSell}>Adicionar produto</Button>
            <Link to="/">Finalizar</Link>
          </Box>
        </>
      )}
    </FormControl>
  );
};
