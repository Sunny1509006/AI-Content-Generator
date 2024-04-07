import React, { useContext } from "react";
import { FormControl, Stack, TextField } from "@mui/material";
import { ArticleGeneratorFormContext } from "../contexts/ArticleGeneratorFormContext";
import HelperTextBlock from "./HelperTextBlock";

const TextInputBlock = (props) => {
  const { name, label, helpText, placeholder, type, clearButton } = props;
  const { values, setValues } = useContext(ArticleGeneratorFormContext);

  const clearValue = () => {
    setValues(name, "");
  };

  return (
    <FormControl fullWidth={true}>
      <Stack direction="row" sx={{ width: "100%" }} spacing={1}>
        <TextField
          type={type}
          label={label}
          placeholder={placeholder}
          value={values[name] || ""}
          onChange={(event) => {
            setValues(name, event?.target?.value);
          }}
          fullWidth={true}
        />
        {clearButton({ clearValue })}
      </Stack>
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
  clearButton: () => {},
};

export default TextInputBlock;
