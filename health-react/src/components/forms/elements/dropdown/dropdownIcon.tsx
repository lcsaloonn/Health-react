import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dropdowicon.scss";

type Dropdown = {
  incon?: string;
  optionValue: string;
  optionText: string;
};

const DropDownListIcon = ({
  data,
  title,
}: {
  data: Dropdown[];
  title: string;
}) => {
  const checkIcon = <FontAwesomeIcon icon={faCheck} className="icon" />;

  const show = (box: string) => {
    (document.querySelector(".textbox") as HTMLInputElement).value = box;
  };

  const dropdown = () => {
    (document.querySelector(".dropdown") as HTMLInputElement).classList.toggle(
      "active"
    );
  };

  return (
    <div className="dropdown" onClick={() => dropdown()}>
      <input type="text" className="textbox" placeholder={title} readOnly />
      <div className="option">
        {data.map((data: Dropdown, id: number) => (
          <div
            onClick={() => show(data.optionValue)}
            id={data.optionValue}
            key={id}
          >
            {checkIcon} {data.optionText}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDownListIcon;
