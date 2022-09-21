import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDownList = () => {
  const checkIcon = (
    <FontAwesomeIcon icon={faCheck} size="2x" className="icon" />
  );
  return (
    <select name="" id="">
      <option value="test1">{checkIcon} test1</option>
      <option value="test2">{checkIcon} test2</option>
    </select>
  );
};
export default DropDownList;
