const InputForm = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default InputForm;
