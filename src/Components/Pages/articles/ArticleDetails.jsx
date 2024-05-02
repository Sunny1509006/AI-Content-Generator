import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchArticle from "../../../hooks/useFetchArticle";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import ArticleEditor from "../../ArticleEditor/ArticleEditor";
import AppButton from "../../Common/AppButton";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import useSaveArticle from "../../../hooks/useSaveArticle";
import { Helmet } from "react-helmet";
import PublishArticleToSiteModal from "../../Common/PublishArticleToSiteModal";

const ArticleDetails = () => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState(null);
  const [openArticlePublishModal, setOpenArticlePublishModal] = useState(false);
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
          <Typography
            variant="h1"
            contentEditable={true}
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "20px",
              outline: "none",
              lineHeight: 1.5,
            }}
            onInput={(event) => setUpdatedTitle(event?.target?.textContent)}
          >
            {title}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "52px" }}>
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
              startIcon={<PublishRoundedIcon />}
              onClick={() => setOpenArticlePublishModal(true)}
            >
              Publish
            </AppButton>
            <PublishArticleToSiteModal
              open={openArticlePublishModal}
              onClose={() => setOpenArticlePublishModal(false)}
              articleTitle={title}
              articleContent={updatedContent}
            />
          </Stack>
          <Box>
            <ArticleEditor content={content} onChange={onContentChange} />
          </Box>
        </Box>
      )}
    </PrivatePageLayout>
  );
};

export default ArticleDetails;
