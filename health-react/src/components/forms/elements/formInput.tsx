import { IFormInput } from "../../../utils/types/IFormInput";

const FormInput: React.FC<IFormInput> = (props: IFormInput) => {
  return (
    <div className="formInput">
      <input {...props} />
    </div>
  );
};
export default FormInput;
