import { HTMLInputTypeAttribute } from "react";

export interface IFormInput {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  errorMessage?: string;
}

const FormInput: React.FC<IFormInput> = (props: IFormInput) => {
  return <input {...props} />;
};
export default FormInput;
