import { IExercice } from "utils/types/IExercice";
import { truncateText } from "utils/util/text-format/textFormat";
import StarRaitingCompponent from "../../starRaiting/starRaiting";
import "./exerciceCard.scss";

const ExerciceCard = ({ props }: { props: IExercice }) => {
  return (
    <div className="exercice-card">
      <div className="thumbnail">
        <img src={`assets/img/${props.imageUrl}`} alt="#" />
      </div>
      <div className="title">{props.title}</div>
      <div className="text">{truncateText(props.description, 200)}</div>
      <div className="star-container">
        <span className="difficultyText">Difficulty:</span>
        <StarRaitingCompponent num={props.raiting}></StarRaitingCompponent>
      </div>
    </div>
  );
};
export default ExerciceCard;
