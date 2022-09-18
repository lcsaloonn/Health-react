import { HTMLInputTypeAttribute } from "react";

export interface IFormInput {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  errorMessage?: string;
}
