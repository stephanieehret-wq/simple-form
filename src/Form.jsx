import { useState } from "react";
import StepTwo from "./StepTwo";
const Form = (props) => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmYourPassword, setConfirmYourPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    password === "" || password !== confirmYourPassword
      ? console.log("les deux mots de passe ne sont pas identiques ")
      : setIsSubmitted(true);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <StepTwo
          name={Name}
          email={email}
          password={password}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name"> Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jean Dupont"
              value={Name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="Email"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jeandupont@lereacteur.io"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label htmlFor="Password"> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="IErEaCtEuR2020"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="ConfirmYourPassword"> Confirm your password </label>
            <input
              type="Password"
              name="confirmYourPassword"
              id="confirmYourPassword"
              placeholder="IErEaCtEuR2020"
              value={confirmYourPassword}
              onChange={(event) => {
                setConfirmYourPassword(event.target.value);
              }}
            />
          </div>

          <button>Register</button>
        </form>
      )}
    </div>
  );
};
// ⚠️ N'oubliez pas l'export !
export default Form;
