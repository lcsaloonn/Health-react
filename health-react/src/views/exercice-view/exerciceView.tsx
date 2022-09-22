import { ExerciceCard } from "components/cards";
import { DropDownListIcon } from "components/forms";
import { dropdownListIconMock } from "Mocks/dropDownList.mocks";
import { exerciceCardMock } from "Mocks/exerciceCard.mock";
import { IExerciceCard } from "utils/types/IExerciceCard";
import "./exerciceView.scss";

const ExerciceView = () => {
  const dropdowMock = dropdownListIconMock;
  const mock = exerciceCardMock;
  return (
    <div className="main-container">
      <div className="exerciceView">
        <DropDownListIcon
          data={dropdowMock}
          title="Choose a body part"
        ></DropDownListIcon>
        <div className="cards">
          {mock.map((card: IExerciceCard, id: number) => (
            <div className="card-item">
              <ExerciceCard props={card} key={id}></ExerciceCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExerciceView;
