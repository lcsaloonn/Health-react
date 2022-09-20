import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./galleryCategory.scss";

type category = {
  icon?: FontAwesomeIconProps;
  title: string;
  text?: string;
  onclick?: React.MouseEventHandler<HTMLDivElement>;
  redirectionName?: string;
};

const GalleryCategory = ({
  icon,
  title,
  text,
  onclick,
  redirectionName,
}: category) => {
  const element = <FontAwesomeIcon icon={faDumbbell} size="2x" />;
  const arrow = <FontAwesomeIcon icon={faArrowRight} size="2x" />;

  return (
    // mettre en balise a
    <div className="programs-categories">
      <div className="category">
        <div className="icon">{element}</div>
        <span className="category-title">{title}</span>
        <span>{text}</span>
        <div className="join-now" onClick={onclick}>
          <span>{redirectionName}</span>
          {arrow}
        </div>
      </div>
    </div>
  );
};
export default GalleryCategory;
