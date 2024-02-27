import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);

  return (
    <div>
      <h1>this is page1 detail A.</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  )
}