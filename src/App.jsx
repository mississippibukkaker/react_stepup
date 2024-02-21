import { useState } from "react";
import "./App.css";
import { ChildArea } from "./Components/ChildArea";

export const App = () => {
  console.log("--app--")
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  }
  const onClickToggle = () => {
    setIsVisible(!isVisible)
  }
  const onClickClose = () => {
    setIsVisible(false)
  }

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickToggle}>表示</button>
      <ChildArea open = {isVisible} onClickClose={onClickClose} />
    </div>
  );
};
