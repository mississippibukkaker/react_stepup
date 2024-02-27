import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/page1/*" element={<Page1Routes />} />
      <Route path="/Page2/*" element={<Page2Routes />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
