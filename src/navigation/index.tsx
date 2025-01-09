import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { useStoreSelector } from "../hooks/useStore";

import Home from "../pages/home";
import About from "../pages/about";
import ProductsPage from "../pages/products";
import LimitedProductsPage from "../pages/products/limited";
import ProductPage from "../pages/products/product";
import CartPage from "../pages/cart";
import SingleCatPage from "../pages/products/singleCat";
import LoginPage from "../pages/user/login";
import RegisterPage from "../pages/user/register";
import OnSalePage from "../pages/products/onSale";
import PopularPage from "../pages/products/popular";
import UserPage from "../pages/user/user";
import CheckoutPage from "../pages/cart/checkout";
import SuccessPage from "../pages/cart/checkout/success";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";

function Navigation() {
  const theme = useStoreSelector((state) => state.theme.value);
  const isLogin = useStoreSelector((state) => state.login.isLogin);
  const cart = useStoreSelector((state) => state.cart.items);
  const isPayed = useStoreSelector((state) => state.cart.isPayed);

  const htmlEl = document.querySelector("html");

  if (theme === "dark") {
    htmlEl?.classList.add("dark");
  } else {
    htmlEl?.classList.remove("dark");
  }

  return (
    <BrowserRouter>
      <Header />
      <main className="container px-4 mx-auto min-h-screen my-12">
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
          <Route path="/user">
            <Route
              path="login"
              element={isLogin ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route path="register" element={<RegisterPage />} />
            <Route element={<PrivateRoute />}>
              <Route path=":id" element={<UserPage />} />
            </Route>
          </Route>
          <Route path="/cart">
            <Route index element={<CartPage />} />
            <Route
              path="checkout"
              element={
                cart.length === 0 ? (
                  <Navigate to="/products" />
                ) : isLogin ? (
                  <CheckoutPage />
                ) : (
                  <Navigate to="/user/login" />
                )
              }
            />
          </Route>
          <Route
            path="/success"
            element={isPayed ? <SuccessPage /> : <Navigate to="/cart" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
