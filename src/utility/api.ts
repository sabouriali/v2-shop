import axios from "axios";

import { type ProductData, type ProductsData } from "../types/dataTypes";

const Axios = axios.create({
  baseURL: "https://fakestoreapi.in/api",
});

export async function getAllProducts() {
  const { data }: ProductsData = await Axios.get("/products?limit=150");
  return data;
}

export async function getProducts(page: number) {
  const { data }: ProductsData = await Axios.get(`/products?page=${page}&limit=20`);
  return data;
}

export async function getSingleProduct(id: number | string) {
  const { data }: ProductData = await Axios.get(`/products/${id}`);
  return data;
}

export async function getSingleCatProducts(cat: string) {
  const { data }: ProductsData = await Axios.get(
    `/products/category?type=${cat}`
  );
  return data;
}
