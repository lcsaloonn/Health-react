import {
  IFormInput,
  InputFormComponent,
} from "components/forms/elements/formInput/formInput";
import { useEffect, useState } from "react";

const userName_pram: IFormInput = {
  type: "text",
  inputAttribut: { id: "user_name" },
  error: {
    regex: /^[a-zA-Z][a-zA-Z-9-_]{3,23}$/,
    conditionsMessage: [
      "Doit faire entre 3 et 23 caractère",
      " Unniquement des lettre et chiffre",
    ],
  },
  label: "Pseudo",
};

const password_param: IFormInput = {
  type: "password",
  inputAttribut: { id: "user_pwd" },
  error: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/,
    conditionsMessage: [
      "Le mot de passe doit contenir une majuscle, minuscule, un chiffre",
      " un caractère spéciale !@#$%*",
    ],
  },
  label: "Mot de Passe",
};
const secondPassword_param: IFormInput = {
  type: "password",
  inputAttribut: { id: "secondUser_pwd" },
  label: "Confirmez votre mot de Passe",
};

export function RegisterFormComposant() {
  const [isCorrectUSN, setIsCorrectUSN] = useState(false);
  const [isCorrectPWd, setIsCorrectPwd] = useState(false);
  const [inputUserValue, setUserValue] = useState("");
  const [inputPwdValue, setPwdValue] = useState("");
  const [inputSecondPwdValue, setSecondPwdValue] = useState("");

  function isDataReady() {
    if (isCorrectUSN && isCorrectPWd && inputPwdValue === inputSecondPwdValue) {
      console.log(inputPwdValue, inputUserValue, inputSecondPwdValue);
      console.log("correct");
    }
  }
  return (
    <div className="register-form main-container grid gap-6 grid-cols-4 md:grid-cols-7 lg:grid-cols-9">
      <div className="register-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <InputFormComponent
          props={userName_pram}
          returnIsInputCorrect={(isCorrectUSN: boolean) =>
            setIsCorrectUSN(isCorrectUSN)
          }
          returnInputValue={(inputUserValue: string) =>
            setUserValue(inputUserValue)
          }
        />
      </div>

      <div className="register-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <InputFormComponent
          props={password_param}
          returnIsInputCorrect={(isCorrectUSN: boolean) =>
            setIsCorrectPwd(isCorrectUSN)
          }
          returnInputValue={(inputPwdValue: string) =>
            setPwdValue(inputPwdValue)
          }
        />
      </div>

      <div className="register-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <InputFormComponent
          props={secondPassword_param}
          returnInputValue={(inputSecondPwdValue: string) =>
            setSecondPwdValue(inputSecondPwdValue)
          }
        />
      </div>
      <button
        className="register-form-btn col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
        onClick={() => isDataReady()}
      >
        Valider
      </button>
    </div>
  );
}
