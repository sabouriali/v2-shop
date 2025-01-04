import axios from "axios";

import {
  type UserData,
  type UsersData,
  type ProductData,
  type ProductsData,
} from "../types/dataTypes";
import { type UpdatedUser } from "../types/userTypes";

const Axios = axios.create({
  baseURL: "https://fakestoreapi.in/api",
});

export async function getAllProducts() {
  const { data }: ProductsData = await Axios.get("/products?limit=150");
  return data;
}

export async function getProducts(page: number) {
  const { data }: ProductsData = await Axios.get(
    `/products?page=${page}&limit=20`
  );
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

export async function getAllUsers() {
  const { data }: UsersData = await Axios.get("/users?limit=20");
  return data;
}

export async function getSingleUser(id: number | string) {
  const { data }: UserData = await Axios.get(`/users/${id}`);
  return data;
}

export async function addUser(userData: UpdatedUser) {
  const { data }: UserData = await Axios.post(
    "/users",
    { userData },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
}

export async function updateUser(id: number | string, userData: UpdatedUser) {
  const { data }: UserData = await Axios.put(
    `/users/${id}`,
    { userData },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
}

export async function deleteUser(id: number | string) {
  await Axios.delete(`/users/${id}`);
}
