import { useEffect, useState } from "react";
import "./formInput.scss";

export interface IFormInput {
  label?: string;
  error?: {
    regex: RegExp;
    conditionsMessage: string[];
  };

  arialAttribut?: React.AriaAttributes;
  inputAttribut: React.HTMLAttributes<HTMLInputElement>;
}

export function InputFormComponent({ props }: { props: IFormInput }) {
  const [validInput, setValidInput] = useState<boolean>();
  const [input, setInput] = useState<string | undefined>();
  const [errorPanel, setErrorPanel] = useState<boolean>();
  console.log(errorPanel);
  // console.log(validInput);

  useEffect(() => {
    if (props.error && input !== undefined)
      setValidInput(props.error.regex.test(input));
  }, [input]);

  useEffect(() => {
    if (validInput) {
      setErrorPanel(false);
    } else {
      if (input !== undefined) setErrorPanel(true);
    }
  }, [validInput]);

  return (
    <div className="formInput">
      {props.label && props.inputAttribut.id ? (
        <label htmlFor={props.inputAttribut.id}>{props.label}</label>
      ) : null}

      <input
        {...props.inputAttribut}
        {...props.arialAttribut}
        onChange={(e) => {
          if (props.error) {
            setInput(e.target.value);
          }
        }}
        onFocus={() => {
          if (props.error)
            validInput ? setErrorPanel(false) : setErrorPanel(true);
        }}
        onBlur={() => {
          if (props.error) {
            validInput ? setErrorPanel(false) : setErrorPanel(true);
          }
        }}
      />

      {props.error ? (
        <div
          className={(errorPanel ? "invalid" : "hidden") + " errorPanel"}
          data-testid="errorPanel"
        >
          <span className={validInput ? "hidden" : "invalid"}>
            <ul>
              {props.error.conditionsMessage.map(
                (element: string, key: number) => (
                  <li key={key}>{element}</li>
                )
              )}
            </ul>
          </span>
        </div>
      ) : null}
    </div>
  );
}
