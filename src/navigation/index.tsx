import { BrowserRouter, Route, Routes } from "react-router";

import { useStoreSelector } from "../hooks/useStore";

import Home from "../pages/home";
import About from "../pages/about";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsPage from "../pages/products";
import ProductPage from "../pages/product";

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
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
