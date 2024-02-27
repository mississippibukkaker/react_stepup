import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()]; // stateで渡す用
  console.log(arr)

  const navigate = useNavigate();
  const onClickDetailA = () => navigate("/page1/detailA");

  return (
    <div>
      <h1>this is page1.</h1>
      <Link to="/page1/detailA" state={arr}>DetailA</Link>
      {/* react v18 × react-router v6 だとLinkにstate直接渡せないっぽい？？（ので一旦放置） */}
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
