import axios from "axios";

import { type ProductData, type ProductsData } from "../types/dataTypes";

const Axios = axios.create({
  baseURL: "https://fakestoreapi.in/api",
});

export async function getProducts() {
  const { data }: ProductsData = await Axios.get("/products");
  return data;
}

export async function getSingleProduct(id: number | string) {
  const { data }: ProductData = await Axios.get(`/products/${id}`);
  return data;
}
