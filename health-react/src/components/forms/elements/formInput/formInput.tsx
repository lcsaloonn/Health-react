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
  const [validInput, setValidInput] = useState(false);
  const [input, setInput] = useState("");
  const [errorPanel, setErrorPanel] = useState(false);

  useEffect(() => {
    if (props.error) setValidInput(props.error.regex.test(input));
  }, [input]);

  return (
    <div className="formInput">
      {props.label && props.inputAttribut.id ? (
        <label htmlFor={props.inputAttribut.id}>{props.label}</label>
      ) : null}

      {props.error ? (
        <div
          className={errorPanel ? "invalid" : "hidden"}
          data-testid="errorPanel"
        >
          <span className={validInput ? "hidden" : "invalid"}>
            <ul>
              {props.error.conditionsMessage.map((element: string) => (
                <li>{element}</li>
              ))}
            </ul>
          </span>
        </div>
      ) : null}

      <input
        {...props.inputAttribut}
        {...props.arialAttribut}
        onChange={(e) => {
          if (props.error) setInput(e.target.value);
        }}
        onFocus={() => {
          if (props.error) setErrorPanel(true);
        }}
        onBlur={() => {
          if (props.error) {
            validInput ? setErrorPanel(false) : setErrorPanel(true);
          }
        }}
      />
    </div>
  );
}
