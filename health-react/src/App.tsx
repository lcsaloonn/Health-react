import React from "react";
import { BasicForm } from "./components/forms/index";
import { BasicFormMock } from "./Mocks/BasicFormMocks";
import { IFormInput } from "./utils/types/IFormInput";

function App() {
  const input: IFormInput[] = BasicFormMock;

  return (
    <div className="app">
      <BasicForm inputs={input}></BasicForm>
    </div>
  );
}

export default App;
