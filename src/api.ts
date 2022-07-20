import axios from "axios";

// Subir sempre com a segunda base url
// A primeira é só pra testes locais
// const baseURL = "http://localhost:4000";
const baseURL = "https://projeto-lab-eng-soft.herokuapp.com/";

export const api = axios.create({ baseURL });
