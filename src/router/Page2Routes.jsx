import { Routes, Route } from "react-router-dom";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = () => {
  return (
    <Routes>
    <Route index element={<Page2 />} />
    <Route path=":id" element={<UrlParameter />} />
  </Routes>
  )
}