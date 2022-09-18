import React from "react";
import BasicForm from "./components/forms/basicForm";
import { BasicFormMock } from "./Mocks/BasicFormMocks";
import { IFormInput } from "./utils/types/IFormInput";

function App() {
  const inputss: IFormInput[] = [];

  return (
    <div className="app">
      <BasicForm></BasicForm>
    </div>
  );
}

export default App;
