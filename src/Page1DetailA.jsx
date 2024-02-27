import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>this is page1 detail A.</h1>
    </div>
  )
}