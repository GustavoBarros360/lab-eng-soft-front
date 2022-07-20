import { api } from "../../api";
import { Product } from "../../model";

interface CreateSellParams {
  number?: number;
  date?: Date;
  clientId?: string;
  sellerId?: string;
  products?: Product[];
}

export const createSell = (data: CreateSellParams) => {
  const { number, date, clientId, sellerId, products } = data;
  api
    .post("/create-sell", { number, date, clientId, sellerId, products })
    .then((response) => console.log(response));
};
