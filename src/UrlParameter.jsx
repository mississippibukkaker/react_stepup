import { useParams } from "react-router";

export const UrlParameter = () => {
  const {id} = useParams();

  return (
    <div>
      <h1>this is url parameter page.</h1>
      <p>parameter is {id}.</p>
    </div>
  )
}