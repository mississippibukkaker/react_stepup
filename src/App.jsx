import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Pagee2</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/page1">
          <Route index element={<Page1 />} />
          <Route path="detailA" element={<Page1DetailA />} />
          <Route path="detailB" element={<Page1DetailB />} />
        </Route>
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};
