import { BrowserRouter, Route, Routes } from "react-router";

import { useStoreSelector } from "../hooks/useStore";

import Home from "../pages/home";
import About from "../pages/about";
import ProductsPage from "../pages/products";
import LimitedProductsPage from "../pages/products/limited";
import ProductPage from "../pages/products/product";
import CartPage from "../pages/cart";
import SingleCatPage from "../pages/products/singleCat";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import OnSalePage from "../pages/products/onSale";
import PopularPage from "../pages/products/popular";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Navigation() {
  const theme = useStoreSelector((state) => state.theme.value);

  const htmlEl = document.querySelector("html");

  if (theme === "dark") {
    htmlEl?.classList.add("dark");
  } else {
    htmlEl?.classList.remove("dark");
  }

  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto min-h-screen my-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products">
            <Route index element={<ProductsPage />} />
            <Route path="onsale" element={<OnSalePage />} />
            <Route path="popular" element={<PopularPage />} />
            <Route path=":page" element={<LimitedProductsPage />} />
            <Route path="category/:cat" element={<SingleCatPage />} />
            <Route path="category/:cat/:id" element={<ProductPage />} />
          </Route>
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
