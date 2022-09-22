import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarService } from "../../services/starsService/star.service";
import "./starRaiting.scss";

const StarRaitingCompponent = ({ num }: { num: number }) => {
  const starService = new StarService().createStart(num);

  let fullStars: JSX.Element[] = [];
  let halfstar =
    starService.halfStars === 1 ? (
      <FontAwesomeIcon icon={faStarHalfStroke} className="icon star " />
    ) : null;

  for (let i = 1; i <= starService.fullStars; i++) {
    fullStars.push(<FontAwesomeIcon icon={faStar} className="icon star " />);
  }
  let emptyStars: JSX.Element[] = [];
  for (let i = 1; i <= starService.emptyStars; i++) {
    emptyStars.push(<FontAwesomeIcon icon={emptyStar} className="icon star" />);
  }

  return (
    <div className="stars-raiting">
      <span>{fullStars}</span>
      <span>{halfstar}</span>
      <span> {emptyStars}</span>
    </div>
  );
};
export default StarRaitingCompponent;
