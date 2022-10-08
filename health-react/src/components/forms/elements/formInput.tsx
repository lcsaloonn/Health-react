import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

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
    <>
      {props.label && props.inputAttribut.id ? (
        <label htmlFor={props.inputAttribut.id}>{props.label}</label>
      ) : null}

      {props.error ? (
        <div className={errorPanel ? "invalid" : "hidden"}>
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
        className={validInput ? "" : "invalid"}
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
    </>
  );
}
