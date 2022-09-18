import React from "react";
import BasicForm from "./components/forms/basicForm";
import { BasicFormMock } from "./Mocks/BasicFormMocks";
import { inputEnum } from "./utils/types/enums/inputEnums";
import { IFormInput } from "./utils/types/IFormInput";

function App() {
  const inputss: IFormInput[] = [
    {
      id: "1",
      name: "test",
      type: inputEnum.EMAIL,
      placeholder: "string",
      errorMessage: "string",
    },
    {
      id: "2",
      name: "test",
      type: inputEnum.TEXT,
    },
  ];

  return (
    <div className="app">
      <BasicForm></BasicForm>
    </div>
  );
}

export default App;
