import { TruncateContainer } from "components/util";
import { Link } from "react-router-dom";
import { IExercice } from "utils/types/IExercice";
import StarRaitingCompponent from "../../starRaiting/starRaiting";
import "./exerciceCard.scss";

const ExerciceCard = ({ props }: { props: IExercice }) => {
  return (
    <Link className="exercice-card" to={props.title}>
      <div className="thumbnail">
        <img src={`../assets/img/${props.imageUrl}`} alt={props.title} />
      </div>
      <div className="title">{props.title}</div>
      <div className="text">
        <TruncateContainer
          text={props.description}
          lengthMax={250}
          link={props.title}
        />
      </div>
      <div className="star-container">
        <span className="difficultyText">Difficulty:</span>
        <StarRaitingCompponent num={props.raiting}></StarRaitingCompponent>
      </div>
    </Link>
  );
};
export default ExerciceCard;
