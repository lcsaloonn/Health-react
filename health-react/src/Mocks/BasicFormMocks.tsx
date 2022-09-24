import { IFormInput } from "components/forms/elements/formInput";

export const singleBasicFormMock = {
  id: "1",
  name: "test",
  type: "password",
};

export const BasicFormMock: IFormInput[] = [
  {
    id: "1",
    name: "test",
    type: "email",
    placeholder: "string",
    errorMessage: "string",
  },
  {
    id: "2",
    name: "test",
    type: "text",
  },
  {
    id: "3",
    name: "test",
    type: "password",
  },
  {
    id: "4",
    name: "test",
    type: "password",
  },
];
