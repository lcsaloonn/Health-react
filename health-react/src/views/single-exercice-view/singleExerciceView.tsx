import { useParams } from "react-router";

const SingleExerciceView = () => {
  const { id } = useParams();
  return <h1>exercice {id}</h1>;
};
export default SingleExerciceView;
