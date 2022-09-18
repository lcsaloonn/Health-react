import { FormEvent } from "react";
import { IFormInput } from "../../utils/types/IFormInput";
import FormInput from "./elements/formInput";

const BasicForm: React.FC<{ inputs: IFormInput[] }> = ({ inputs }) => {
  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="basicForm">
      <form onSubmit={submitForm}>
        {inputs.map((input: IFormInput) => (
          <FormInput {...input}></FormInput>
        ))}
      </form>
    </div>
  );
};
export default BasicForm;
