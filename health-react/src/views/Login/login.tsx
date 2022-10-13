import "./login.scss";

export function LoginView() {
  return (
    <div className="login-form main-container grid gap-6 grid-cols-4 md:grid-cols-7 lg:grid-cols-9">
      <div className="login-form-title col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        Connection
      </div>
      <div className="login-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <label htmlFor="username">Nom d'utilisateur</label>
        <input id="username" type="text" />
      </div>

      <div className="login-form-input col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" />
      </div>

      <button className="login-form-btn col-span-4 md:col-start-3 md:col-end-6 lg:col-start-4 lg:col-end-7">
        Valider
      </button>
    </div>
  );
}
