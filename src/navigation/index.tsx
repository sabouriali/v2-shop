import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../pages/home";
import About from "../pages/about";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
