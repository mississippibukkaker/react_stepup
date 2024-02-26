import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/page1/*" element={<Page1Routes />} /> {/* 新しいファイルを使用 */}
      <Route path="/Page2" element={<Page2 />} />
    </Routes>
  );
};
