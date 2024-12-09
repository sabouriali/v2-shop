import { BrowserRouter, Route, Routes } from "react-router";

import { useStoreSelector } from "../hooks/useStore";

import Home from "../pages/home";
import About from "../pages/about";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsPage from "../pages/products";

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
      <main className="container mx-auto min-h-screen mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
