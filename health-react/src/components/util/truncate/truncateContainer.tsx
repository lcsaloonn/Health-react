import { Link } from "react-router-dom";

const TruncateContainer = ({
  text,
  lengthMax,
  link,
}: {
  text: string;
  lengthMax: number;
  link?: string;
}) => {
  function truncate(text: string, lengthMax: number) {
    return (text = text.slice(0, lengthMax - 1));
  }

  return (
    <p>
      {text.length > lengthMax && link !== undefined ? (
        <p>
          {truncate(text, lengthMax)}
          <Link className="link" to={link}>
            read more
          </Link>
        </p>
      ) : (
        <p>{text}</p>
      )}
    </p>
  );
};
export default TruncateContainer;
