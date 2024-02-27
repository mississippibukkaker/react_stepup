import { BrowserRouter } from "react-router-dom";
import "./Styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";

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
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
};
