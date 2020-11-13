import React from "react";
import Input from "./FormikUiComponents/Input";
import Selector from "./FormikUiComponents/Selector";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Selector {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
