import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ArticleGeneratorFormContext } from "../contexts/ArticleGeneratorFormContext";
import HelperTextBlock from "./HelperTextBlock";

const SelectBlock = (props) => {
  const { name, label, helpText, placeholder, options } = props;
  const { values, setValues } = useContext(ArticleGeneratorFormContext);

  return (
    <FormControl fullWidth={true}>
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        label={label}
        value={values[name] || ""}
        placeholder={placeholder}
        onChange={(event) => {
          setValues(name, event?.target?.value || "");
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {!!helpText && <HelperTextBlock>{helpText}</HelperTextBlock>}
    </FormControl>
  );
};

SelectBlock.defaultProps = {
  name: "keywords",
  label: "",
  helpText: "",
  placeholder: "",
  options: [],
};

export default SelectBlock;
