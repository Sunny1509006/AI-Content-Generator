import React, { useState } from "react";
import PrivatePageLayout from "../layouts/PrivatePageLayout";
import { Helmet } from "react-helmet";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import AppButton from "../Common/AppButton";
import useGenerateKeywords from "../../hooks/useGenerateKeywords";

const KeywordGenerator = () => {
  const [topic, setTopic] = useState("");
  const { keywords, generateKeywords, isGenerating } = useGenerateKeywords();

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Keyword Generator</title>
      </Helmet>
      <Box
        sx={{
          padding: "0 32px 60px",
          maxWidth: "900px",
          margin: "auto !important",
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              component="h1"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Keyword Generate
            </Typography>
            <Typography
              component="h2"
              sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
            >
              Get some seo friendly keyword for your topic in second.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <TextField
              label="Topic"
              multiline
              rows={8}
              fullWidth
              placeholder="Provide your topic here..."
              value={topic}
              onChange={(event) => setTopic(event?.target?.value)}
            />
            <AppButton
              variant="contained"
              sx={{ alignSelf: "flex-start" }}
              loading={isGenerating}
              disabled={!topic}
              onClick={() => generateKeywords({ topic })}
            >
              Generate
            </AppButton>
          </Stack>
          {keywords.length > 0 && (
            <Stack sx={{ marginTop: "40px !important" }} spacing={2}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Typography
                  component="h2"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                >
                  Keywords
                </Typography>
                <Tooltip title="Copy Keywords">
                  <IconButton
                    sx={{ ".MuiSvgIcon-root": { fontSize: "18px" } }}
                    onClick={() => {
                      window.navigator.clipboard.writeText(keywords);
                    }}
                  >
                    <ContentCopyRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack
                direction="row"
                sx={{ flexWrap: "wrap", alignItems: "center", gap: "16px" }}
              >
                {keywords.split(",").map((keyword) => (
                  <Chip
                    key={keyword}
                    label={keyword}
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Box>
    </PrivatePageLayout>
  );
};

export default KeywordGenerator;
