import { TruncateContainer } from "components/util";
import { IExercice } from "utils/types/IExercice";
import StarRaitingCompponent from "../../starRaiting/starRaiting";
import "./exerciceCard.scss";

const ExerciceCard = ({ props }: { props: IExercice }) => {
  return (
    <div className="exercice-card">
      <div className="thumbnail">
        <img src={`assets/img/${props.imageUrl}`} alt="#" />
      </div>
      <div className="title">{props.title}</div>
      <div className="text">
        <TruncateContainer text={props.description} lengthMax={250} link="#" />
      </div>
      <div className="star-container">
        <span className="difficultyText">Difficulty:</span>
        <StarRaitingCompponent num={props.raiting}></StarRaitingCompponent>
      </div>
    </div>
  );
};
export default ExerciceCard;
