import { useState, useCallback, useMemo } from "react";
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

  // 再レンダリングの度にアロー関数が再定義される扱いになる事象をuseCallbackで防止
  const onClickClose = useCallback(() => {
    setIsVisible(false)
  }, []);

  // useMemoを用いてレンダリングコストの高い変数(=複雑な計算してる等)が初回だけ読み込まれるようにする
  const temp = useMemo(() => 1+3, []);
  console.log(temp)

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
