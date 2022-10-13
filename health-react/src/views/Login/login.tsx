import { useRef, useState } from "react";
import "./login.scss";

export function LoginView() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(true);

  function verifyData() {
    if (usernameRef.current?.value !== "" && passwordRef.current?.value !== "")
      setIsError(false);
    else setIsError(true);
  }

  return (
    <div className="login-form main-container grid gap-6 grid-cols-4 md:grid-cols-7 lg:grid-cols-9">
      <div className="login-form-title col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        Connection
      </div>
      <div className="login-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <label htmlFor="username">Nom d'utilisateur</label>
        <input id="username" type="text" ref={usernameRef} />
      </div>

      <div className="login-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>

      <div
        className={
          isError
            ? "login-form-error col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
            : "hidden"
        }
      >
        Il faut remplir tous les champs
      </div>

      <button
        className="login-form-btn col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7"
        onClick={() => verifyData()}
      >
        Valider
      </button>
    </div>
  );
}
