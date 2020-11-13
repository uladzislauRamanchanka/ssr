import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import classes from "./formStyle.module.css";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className={classes.formControl}>
      <label htmlFor={name} className={classes.formLabel}>
        {label}
      </label>
      <Field name={name} id={name} {...rest} className={classes.formInput} />
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
  );
}

export default Input;
