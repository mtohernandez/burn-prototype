import styles from "./ButtonForm.module.css";

const ButtonForm = (props) => {
  return (
    <button type="submit" className={styles.buttonForm} disabled={props.disabled}>
      {props.label}
      {props.icon && <img src={props.icon} alt={props.alt} />}
    </button>
  );
};

export default ButtonForm;
