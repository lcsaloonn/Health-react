import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./galleryCategory.scss";
import { Link } from "react-router-dom";

type Category = {
  icon?: FontAwesomeIconProps;
  title: string;
  text?: string;
  url: string;
  redirectionName?: string;
};

const GalleryCategory = ({ data }: { data: Category[] }) => {
  const element = <FontAwesomeIcon icon={faDumbbell} size="2x" />;
  const arrow = <FontAwesomeIcon icon={faArrowRight} size="2x" />;
  const setData = () => {
    // if (data.length() > 4) {
    //   console.log("trop grand");
    // }
  };

  return (
    <div className="programs-categories">
      {data.map((category: Category) => (
        <div className="category">
          <div className="icon">{element}</div>
          <span className="category-title">{category.title}</span>
          <span>{category.text}</span>
          <Link className="join-now" to={category.url}>
            <span>{category.redirectionName}</span>
            {arrow}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default GalleryCategory;
