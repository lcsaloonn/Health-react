import React from "react";
import { BasicButton } from "./components/buttons";
import { BasicForm } from "./components/forms/index";
import { BasicFormMock } from "./Mocks/BasicFormMocks";
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
        children="TEST"
      ></BasicButton>
    </div>
  );
}

export default App;
