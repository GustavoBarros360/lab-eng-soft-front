import { api } from "../../api";

export const getProducts = async () => {
  return await api.get("/list-products").then((response) => {
    console.log(response);
    return response.data;
  });
};

export const getCategories = async () => {
  return await api.get("/list-categories").then((response) => {
    return response.data;
  });
};
