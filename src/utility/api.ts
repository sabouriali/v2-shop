import axios from "axios";

import { type TProducts } from "../types/dataTypes";

const Axios = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export async function getProducts() {
  const { data }: TProducts = await Axios.get("/products");
  return data;
}
