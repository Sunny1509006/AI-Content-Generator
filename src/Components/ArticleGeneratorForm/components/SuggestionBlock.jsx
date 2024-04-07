import React, { useContext, useEffect } from "react";
import useFetchSuggestions from "../../../hooks/useFetchSuggestions";
import OptionCard from "./OptionCard";
import TextInputBlock from "./TextInputBlock";
import {
  CircularProgress,
  FormControlLabel,
  Grid,
  RadioGroup,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArticleGeneratorFormContext } from "../contexts/ArticleGeneratorFormContext";
import AppButton from "../../Common/AppButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SuggestionBlock = (props) => {
  const { keywords, name, label, placeholder } = props;
  const { fetchSuggestions, suggestions, isFetching } = useFetchSuggestions();
  const { values, setValues } = useContext(ArticleGeneratorFormContext);
  const muiTheme = useTheme();

  useEffect(() => {
    if (!!keywords) {
      fetchSuggestions(keywords);
    }
  }, [keywords]);

  useEffect(() => {
    if (suggestions.length > 0) {
      setValues(name, suggestions[0][0]);
    }
  }, [suggestions, name]);

  return (
    <div>
      <TextInputBlock
        name={name}
        label={label}
        placeholder={placeholder}
        clearButton={({ clearValue }) => (
          <AppButton onClick={clearValue} variant="outlined">
            <CloseRoundedIcon />
          </AppButton>
        )}
      />
      {isFetching ? (
        <Stack
          direction="row"
          sx={{ padding: "8px 0 0", alignItems: "center" }}
          spacing={1}
        >
          <CircularProgress size={18} />
          <Typography
            component="span"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: muiTheme.palette.grey[500],
            }}
          >
            Preparing some {name} suggestions for you...
          </Typography>
        </Stack>
      ) : (
        <RadioGroup
          sx={{ marginTop: "12px" }}
          value={values[name] || ""}
          onChange={(event) => {
            setValues(name, event?.target?.value);
          }}
        >
          <Grid container={true} spacing={2}>
            {suggestions.map((suggestion, index) => (
              <Grid item={true} xs={12} sm={6}>
                <FormControlLabel
                  key={index}
                  value={suggestion[0]}
                  control={
                    <OptionCard title={suggestion[0]} srcLink={suggestion[1]} />
                  }
                  sx={{ margin: 0, width: "100%", height: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      )}
    </div>
  );
};

export default SuggestionBlock;
