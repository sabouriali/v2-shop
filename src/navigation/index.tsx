import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../pages/home";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
