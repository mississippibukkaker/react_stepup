import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>primary</PrimaryButton>
      <SecondaryButton>secondary</SecondaryButton>
    </div>
  );
};
