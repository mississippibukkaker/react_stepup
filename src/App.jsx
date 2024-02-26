import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

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
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};
