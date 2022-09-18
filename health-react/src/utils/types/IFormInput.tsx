import { inputEnum } from "./enums/inputEnums";

export interface IFormInput {
  id: string;
  name: string;
  type: inputEnum;
  placeholder?: string;
  errorMessage?: string;
}
//HTMLInputTypeAttribute
