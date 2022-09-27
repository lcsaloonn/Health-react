import { ExerciceCard } from "components/cards";
import { DropDownListIcon } from "components/forms";
import { dropdownListIconMock } from "Mocks/dropDownList.mocks";
import { useEffect, useState } from "react";
import { HttpService } from "services/http/http.service";
import { IExercice } from "utils/types/IExercice";
import "./exerciceView.scss";

const ExerciceView = () => {
  const dropdowMock = dropdownListIconMock;

  const [bodyPart, setBodyPart] = useState("");
  const [exercices, setExercices] = useState([]);
  const http = new HttpService();

  const outputBodyPart = (value: string) => {
    setBodyPart(value);
  };

  useEffect(() => {
    const getExercices = async () => {
      const response = await http.get("/exercices");
      console.log(response);
      setExercices(response);
    };

    if (bodyPart !== "") {
      getExercices();
    }
  }, [bodyPart]);

  return (
    <div className="main-container">
      <div className="exerciceView">
        <DropDownListIcon
          data={dropdowMock}
          title="Choose a body part"
          returnValue={outputBodyPart}
        ></DropDownListIcon>
        <div className="cards">
          {exercices.map((card: IExercice, id: number) => (
            <div className="card-item" key={id}>
              <ExerciceCard props={card}></ExerciceCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExerciceView;
