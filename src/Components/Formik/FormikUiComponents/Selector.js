import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import classes from "./formStyle.module.css";

function Selector(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className={classes.formControl}>
      <label htmlFor={name} className={classes.formLabel}>
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className={classes.formInput}
      >
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Selector;
