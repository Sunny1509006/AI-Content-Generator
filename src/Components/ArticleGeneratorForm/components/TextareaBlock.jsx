import React, { useContext } from "react";
import { FormControl, TextField } from "@mui/material";
import { ArticleGeneratorFormContext } from "../contexts/ArticleGeneratorFormContext";
import HelperTextBlock from "./HelperTextBlock";

const TextareaBlock = (props) => {
  const { name, label, helpText, placeholder, rows } = props;
  const { values, setValues } = useContext(ArticleGeneratorFormContext);

  return (
    <FormControl fullWidth={true}>
      <TextField
        multiline
        rows={rows}
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

TextareaBlock.defaultProps = {
  name: "keywords",
  label: "",
  helpText: "",
  placeholder: "",
  rows: 3,
};

export default TextareaBlock;
