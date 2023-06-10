import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import styles from "./CustomForm.module.css";
import ButtonForm from "./ButtonForm";
import googleIcon from "../../assets/googleIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";

const { customForm, customFormTitle, customFormInside, customFormSignUp } =
  styles;

const CustomForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with firebase
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={customForm}>
      <h1 className={customFormTitle}>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <div className={customFormInside}>
          <InputForm
            id="email"
            type="email"
            label="Email"
            placeholder="name@email.com"
            onChange={handleEmailChange}
          />
          <InputForm
            id="password"
            type="password"
            label="Password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          {error && <span>{errorMessage}</span>}
        </div>
        <p className={customFormSignUp}>
          Not having an account? <span>Sign Up</span>
        </p>
        <ButtonForm label="Log In" />
      </form>
      <hr />
      <ButtonForm label="Log In With Google" icon={googleIcon} />
      <ButtonForm label="Log In With Facebook" icon={facebookIcon} />
    </div>
  );
};

export default CustomForm;
