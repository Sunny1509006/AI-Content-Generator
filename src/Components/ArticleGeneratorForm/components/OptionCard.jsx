import {
  Paper,
  Radio,
  Stack,
  Typography,
  useRadioGroup,
  useTheme,
} from "@mui/material";
import React from "react";
import AppButton from "../../Common/AppButton";

const OptionCard = (props) => {
  const { title, srcLink, ...otherProps } = props;
  const muiTheme = useTheme();
  const { value } = useRadioGroup();
  const isSelected = value === title;

  return (
    <Stack
      direction="row"
      component={Paper}
      sx={{
        padding: "16px",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        border: `1px solid ${muiTheme.palette.grey[300]}`,
        boxShadow: isSelected
          ? `0 0 0 2px ${muiTheme.palette.primary.main}`
          : "none",
      }}
      spacing={2}
    >
      <Radio sx={{ padding: 0 }} {...otherProps} />
      <Stack sx={{ alignItems: "flex-start" }} spacing={2}>
        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
          {title}
        </Typography>
        <AppButton variant="outlined" href={srcLink} target="_blank">
          Check Referrence
        </AppButton>
      </Stack>
    </Stack>
  );
};

export default OptionCard;
