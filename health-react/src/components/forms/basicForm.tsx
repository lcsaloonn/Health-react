import { FormEvent } from "react";
import { BasicFormMock } from "../../Mocks/BasicFormMocks";
import { IFormInput } from "../../utils/types/IFormInput";
import FormInput from "./elements/formInput";

const BasicForm: React.FC = () => {
  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  const inputs = BasicFormMock;

  return (
    <div className="basicForm">
      <form onSubmit={submitForm}>
        {inputs.map((input) => (
          <FormInput {...input}></FormInput>
        ))}
      </form>
    </div>
  );
};
export default BasicForm;
