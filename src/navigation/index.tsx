import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../pages/home";
import About from "../pages/about";

import Header from "../components/Header";

function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Navigation;
