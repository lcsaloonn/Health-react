import { IFormInput } from "utils/types/IFormInput";

const FormInput: React.FC<IFormInput> = (props: IFormInput) => {
  return <input {...props} />;
};
export default FormInput;
