import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./registerForm.scss";

const USER_REGEX = /^[a-zA-Z][a-zA-Z-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;

const RegisterForm = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState<boolean>();
  const [userFocus, setUserFocus] = useState<boolean>();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState<boolean>();
  const [pwdFocus, setPwdFocus] = useState<boolean>();

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState<boolean>();
  const [matchFocus, setMatchFocus] = useState<boolean>();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState<boolean>();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    } else {
      setSuccess(true);
    }
  };
  return (
    <div className="register">
      {success ? (
        <div className="success">
          <h1>Success!</h1>
          <p>
            <Link to="#">Sign in</Link>
          </p>
        </div>
      ) : (
        <div className="register-form">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offScreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              username:
              <span className={validName ? "valid" : "hidden"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !user ? "hidden" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onChange={(e) => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instruction" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 caracters.
              <br />
              Must begin with a letter. <br />
              Letters, numbers, underscrores, hyphens allowed.
            </p>

            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hidden"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validPwd || !pwd ? "hidden" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="password"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instruction" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 caracters.
              <br />
              Must include uppercase and lowercase letter, a number and a
              special character. <br />
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
              <span aria-label="star">*</span>
            </p>

            <label htmlFor="comfirm_pwd">
              comfirm Password:
              <span className={validMatch && matchPwd ? "valid" : "hidden"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validMatch || !matchPwd ? "hidden" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="comfirm_pwd"
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="comfirmnote"
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instruction" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign up
            </button>
          </form>
          <p>
            Already register?
            <br />
            <span className="line">
              <Link to="#">Sign in</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
export default RegisterForm;
