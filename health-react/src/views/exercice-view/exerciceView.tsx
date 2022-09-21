import { ExerciceCard } from "../../components/cards";
import { DropDownListIcon } from "../../components/forms";
import { dropdownListIconMock } from "../../Mocks/dropDownList.mocks";

const ExerciceView = () => {
  const dropdowMock = dropdownListIconMock;

  return (
    <>
      <DropDownListIcon
        data={dropdowMock}
        title="Choose a body part"
      ></DropDownListIcon>

      <ExerciceCard></ExerciceCard>
    </>
  );
};
export default ExerciceView;
