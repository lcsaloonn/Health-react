import React from "react";
import { BasicButton } from "./components/buttons";
import { BasicForm } from "./components/forms/index";
import { BasicFormMock } from "./Mocks/BasicFormMocks";
import { ButtonStyleEnum } from "./utils/types/enums/buttonStyleEnum";
import { IFormInput } from "./utils/types/IFormInput";

function App() {
  const input: IFormInput[] = BasicFormMock;

  return (
    <div className="app">
      <BasicForm inputs={input}></BasicForm>
      <BasicButton
        onClick={() => {
          console.log("click");
        }}
        children="Test"
      ></BasicButton>

      <BasicButton
        onClick={() => {
          console.log("click");
        }}
        children="TEST"
        buttonStyle={ButtonStyleEnum.SECONDARY}
      ></BasicButton>
    </div>
  );
}

export default App;
