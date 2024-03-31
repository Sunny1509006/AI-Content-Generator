import React, { useState } from "react";
import { ArticleGeneratorFormContext } from "./contexts/ArticleGeneratorFormContext";
import { Box } from "@mui/material";

const ArticleGeneratorForm = (props) => {
  const { renderChildren } = props;
  const [values, setValues] = useState({});

  const handleValueChanges = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  return (
    <ArticleGeneratorFormContext.Provider
      value={{
        values,
        setValues: handleValueChanges,
      }}
    >
      <Box
        component="form"
        sx={{
          padding: "0 32px 60px",
          maxWidth: "900px",
          margin: "auto !important",
        }}
      >
        {renderChildren({ values })}
      </Box>
    </ArticleGeneratorFormContext.Provider>
  );
};

ArticleGeneratorForm.defaultProps = {
  renderChildren: () => {},
};

export default ArticleGeneratorForm;
