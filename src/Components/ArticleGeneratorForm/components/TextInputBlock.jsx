import React, { useContext } from "react";
import { FormControl, TextField } from "@mui/material";
import { ArticleGeneratorFormContext } from "../contexts/ArticleGeneratorFormContext";
import HelperTextBlock from "./HelperTextBlock";

const TextInputBlock = (props) => {
  const { name, label, helpText, placeholder, type } = props;
  const { values, setValues } = useContext(ArticleGeneratorFormContext);

  return (
    <FormControl fullWidth={true}>
      <TextField
        type={type}
        label={label}
        placeholder={placeholder}
        value={values[name] || ""}
        onChange={(event) => {
          setValues(name, event?.target?.value);
        }}
      />
      {!!helpText && <HelperTextBlock>{helpText}</HelperTextBlock>}
    </FormControl>
  );
};

TextInputBlock.defaultProps = {
  name: "Category",
  label: "",
  helpText: "",
  placeholder: "",
  type: "text",
};

export default TextInputBlock;
