import { ILInk } from "../../../utils/types/ILink";
import { truncateText } from "../../../utils/util/text-format/textFormat";
import StarRaitingCompponent from "../../starRaiting/starRaiting";
import "./exerciceCard.scss";

type IExerciceCard = {
  link: ILInk;
  title: string;
  description: string;
  raiting: number;
};

const ExerciceCard = ({ props }: { props: IExerciceCard }) => {
  return (
    <div className="exercice-card">
      <div className="thumbnail">
        <img src={props.link.url} alt={props.link.alt} />
      </div>
      <div className="title">{props.title}</div>
      <div className="text">{truncateText(props.description, 5)}</div>
      <div className="star-container">
        <span className="difficultyText">Difficulty:</span>
        <StarRaitingCompponent num={props.raiting}></StarRaitingCompponent>
      </div>
    </div>
  );
};
export default ExerciceCard;
