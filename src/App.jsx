import "./Styles.css";
import { Router } from "./router/Router";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/NEOXGVKTmcA",
  email: "12345@example.com",
  phone: "090-1111-1111",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

export const App = () => {
  return (
    <Router />
  );
};
