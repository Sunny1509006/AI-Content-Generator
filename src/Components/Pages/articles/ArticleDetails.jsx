import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchArticle from "../../../hooks/useFetchArticle";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";
import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArticleEditor from "../../ArticleEditor/ArticleEditor";
import AppButton from "../../Common/AppButton";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import useSaveArticle from "../../../hooks/useSaveArticle";
import { Helmet } from "react-helmet";
import PublishArticleToSiteModal from "../../Common/PublishArticleToSiteModal";

const ArticleDetails = () => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState(null);
  const [openArticlePublishModal, setOpenArticlePublishModal] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const param = useParams();
  const articleID = param?.articleID;
  const { title, content, isFetching } = useFetchArticle(articleID);
  const { isSaving, saveArticle } = useSaveArticle(articleID);

  const onContentChange = (editor) => {
    setUpdatedContent(editor?.getHTML());
  };

  const onSaveClick = () => {
    saveArticle({
      payload: {
        title: updatedTitle,
        content: updatedContent,
      },
      onSuccess: () => {
        setIsInEditMode(false);
      },
    });
  };

  useEffect(() => {
    setUpdatedTitle(title);
  }, [title]);

  useEffect(() => {
    setUpdatedContent(content);
  }, [content]);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isFetching ? (
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <CircularProgress />
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            Fetching article for you..
          </Typography>
        </Stack>
      ) : (
        <Box sx={{ maxWidth: "768px", margin: "auto" }}>
          {isInEditMode ? (
            <TextField
              fullWidth
              value={updatedTitle}
              onChange={(event) => setUpdatedTitle(event?.target?.value)}
              sx={{
                marginBottom: "20px",
              }}
            />
          ) : (
            <Typography
              variant="h1"
              sx={{
                fontSize: "32px",
                fontWeight: "600",
                marginBottom: "20px",
                outline: "none",
                lineHeight: 1.5,
              }}
            >
              {updatedTitle}
            </Typography>
          )}
          <Stack direction="row" spacing={2} sx={{ marginBottom: "52px" }}>
            {!isInEditMode ? (
              <>
                <AppButton
                  variant="contained"
                  startIcon={<PublishRoundedIcon />}
                  onClick={() => setOpenArticlePublishModal(true)}
                >
                  Publish
                </AppButton>
                <AppButton
                  variant="outlined"
                  startIcon={<EditRoundedIcon />}
                  onClick={() => setIsInEditMode(true)}
                >
                  Edit
                </AppButton>
              </>
            ) : (
              <>
                <AppButton
                  variant="contained"
                  startIcon={<SaveRoundedIcon />}
                  loading={isSaving}
                  onClick={onSaveClick}
                >
                  Save
                </AppButton>
                <AppButton
                  variant="outlined"
                  onClick={() => setIsInEditMode(false)}
                >
                  Cancel
                </AppButton>
              </>
            )}
            <PublishArticleToSiteModal
              open={openArticlePublishModal}
              onClose={() => setOpenArticlePublishModal(false)}
              articleTitle={title}
              articleContent={updatedContent}
            />
          </Stack>
          <Box>
            <ArticleEditor
              content={content}
              onChange={onContentChange}
              editable={isInEditMode}
            />
          </Box>
        </Box>
      )}
    </PrivatePageLayout>
  );
};

export default ArticleDetails;
