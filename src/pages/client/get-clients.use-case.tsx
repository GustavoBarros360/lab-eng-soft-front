import { api } from "../../api";

export const getClients = async () => {
  return await api.get("/list-clients").then((response) => {
    console.log(response);
    return response.data;
  });
};
