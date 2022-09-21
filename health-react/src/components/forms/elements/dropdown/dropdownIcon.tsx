import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";
import "./dropdowicon.scss";

const DropDownListIcon = () => {
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
    <div className="t">
      <div className="dropdown" onClick={() => dropdown()}>
        <input
          type="text"
          className="textbox"
          placeholder="Dropdown Menu"
          readOnly
        />
        <div className="option">
          <div onClick={() => show("test1")} id="test1">
            {checkIcon} test 1
          </div>
          <div onClick={() => show("test2")} id="test2">
            {checkIcon} test 2
          </div>
          <div onClick={() => show("test3")} id="test3">
            {checkIcon} test 3
          </div>
          <div onClick={() => show("test4")} id="test4">
            {checkIcon} test 4
          </div>
          <div onClick={() => show("test5")} id="test5">
            {checkIcon} test 5
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDownListIcon;
