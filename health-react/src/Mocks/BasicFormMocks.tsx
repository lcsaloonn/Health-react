import { inputEnum } from "../utils/types/enums/inputEnums";
import { IFormInput } from "../utils/types/IFormInput";

export const singleBasicFormMock = {
  id: "1",
  name: "test",
  type: inputEnum.PASSWORD,
};

export const BasicFormMock: IFormInput[] = [
  {
    id: "1",
    name: "test",
    type: inputEnum.EMAIL,
    placeholder: "string",
    errorMessage: "string",
  },
  {
    id: "2",
    name: "test",
    type: inputEnum.TEXT,
  },
  {
    id: "3",
    name: "test",
    type: inputEnum.PASSWORD,
  },
  {
    id: "4",
    name: "test",
    type: inputEnum.PASSWORD,
  },
];
