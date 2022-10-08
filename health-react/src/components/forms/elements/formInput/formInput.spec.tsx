import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { IFormInput, InputFormComponent } from "./formInput";

const mock: IFormInput = {
  inputAttribut: { placeholder: "dd", id: "userd" },
  error: {
    regex: /^[a-zA-Z][a-zA-Z-9-_]{3,23}$/,
    conditionsMessage: [
      "Doit faire entre 3 et 23 caractère",
      " Unniquement des lettre et chiffre",
    ],
  },
  label: "User",
};
const mockNoError: IFormInput = {
  inputAttribut: { placeholder: "dd", id: "userd" },
  label: "User",
};
describe(InputFormComponent, () => {
  const setupError = () => render(<InputFormComponent props={mock} />);
  const setUpNoError = () => render(<InputFormComponent props={mockNoError} />);

  it("should display correct data when no error", () => {
    setUpNoError();
    expect(screen.queryByTestId("errorPanel")).not.toBeInTheDocument();
  });
  it("should display correct data when error", () => {
    setupError();
    expect(screen.getByTestId("errorPanel")).toBeInTheDocument();
  });
});
