import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";

export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
};
