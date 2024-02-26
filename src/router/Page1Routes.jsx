import { Routes, Route } from "react-router-dom";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = () => {
  return (
    <Routes>
      <Route index element={<Page1 />} />
      <Route path="/detailA" element={<Page1DetailA />} />
      <Route path="/detailB" element={<Page1DetailB />} />
    </Routes>
  );
};
