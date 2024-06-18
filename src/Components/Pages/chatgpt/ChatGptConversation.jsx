import React, { useEffect, useRef, useState } from "react";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";
import {
  Avatar,
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Stack,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import AppButton from "../../Common/AppButton";
import useChatGpt from "../../../hooks/useChatGpt";
import GptResponse from "../../chatgptConversation/GptResponse";
import { GPT_MODELS } from "../../../utils/constants";

const ChatGptConversation = () => {
  const [messages, setmessages] = useState([]);
  const [userPrompt, setUserPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(GPT_MODELS.GPT_4_O);
  const { sendPrompt, isSendingPrompt } = useChatGpt();
  const appTheme = useTheme();
  const messageListRef = useRef(null);

  const scrollMessageListToBottom = () => {
    if (messageListRef?.current) {
      const messageListNode = messageListRef.current;

      messageListNode.scrollTo(0, messageListNode.scrollHeight);
    }
  };

  const sendNewPrompt = () => {
    setmessages((messages) => [
      ...messages,
      {
        user: "self",
        text: userPrompt,
      },
      {
        user: "ai",
        text: "",
        loading: true,
      },
    ]);
    setUserPrompt("");

    sendPrompt({
      query: userPrompt,
      model: selectedModel?.value,
      onSuccess: (aiResponse) => {
        setmessages((messages) => {
          const newMessages = [...messages];
          const lastMessage = newMessages[newMessages.length - 1];

          lastMessage.loading = false;
          lastMessage.text = aiResponse;

          return newMessages;
        });

        setTimeout(() => {
          scrollMessageListToBottom();
        }, 0);
      },
    });
  };

  useEffect(() => {
    scrollMessageListToBottom();
  }, [messages.length]);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Use Chatgpt</title>
      </Helmet>
      <Stack sx={{ width: "100%", height: `calc(100vh - 180px)` }} spacing={2}>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <FormControl required>
            <InputLabel id="gpt-model-select-box-label">GPT Model</InputLabel>
            <Select
              labelId="gpt-model-select-box-label"
              name="gpt_model"
              label="GPT Model"
              sx={{ width: "200px" }}
              value={selectedModel}
              onChange={(event) => {
                setSelectedModel(event.target.value);
              }}
            >
              {Object.values(GPT_MODELS).map((model) => (
                <MenuItem key={model.value} value={model}>
                  {model.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          ref={messageListRef}
          sx={{
            height: "100%",
            overflow: "auto",
            scrollBehavior: "smooth",
          }}
        >
          <Stack
            sx={{
              flexGrow: 1,
              width: "100%",
              maxWidth: "768px",
              margin: "auto",
              justifyContent: "flex-end",
            }}
          >
            {messages.map((message) => (
              <Stack direction="row">
                {message?.user === "ai" && (
                  <Avatar
                    sx={{
                      marginRight: "2px",
                      bgcolor: appTheme.palette.primary.main,
                    }}
                  >
                    <MemoryRoundedIcon />
                  </Avatar>
                )}
                {message.text && !message.loading && (
                  <Box
                    sx={{
                      backgroundColor:
                        message?.user === "self"
                          ? appTheme.palette.grey[200]
                          : "transparent",
                      padding: message?.user === "ai" ? "0 16px" : "8px 16px",
                      borderRadius: "20px",
                      whiteSpace: "normal",
                      lineHeight: "1.75",
                      maxWidth: message?.user === "self" ? "60%" : "100%",
                      marginLeft: message?.user === "self" ? "auto" : 0,
                      marginBottom: "32px",
                      "& p:not(:last-of-type)": {
                        marginBottom: "24px",
                      },
                      "& li p": {
                        marginBottom: 0,
                      },
                      "& li:not(:last-of-type)": {
                        marginBottom: "12px",
                      },
                    }}
                  >
                    <GptResponse response={message.text} />
                  </Box>
                )}
                {message.user === "ai" && message.loading && (
                  <Box
                    sx={{
                      marginBottom: "32px",
                      padding: "0 16px",
                      width: "100%",
                    }}
                  >
                    <Stack spacing={1}>
                      <Skeleton animation="wave" sx={{ width: "100%" }} />
                      <Skeleton animation="wave" sx={{ width: "100%" }} />
                      <Skeleton animation="wave" sx={{ width: "30%" }} />
                    </Stack>
                  </Box>
                )}
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              backgroundColor: appTheme.palette.grey[200],
              padding: "8px",
              borderRadius: "28px",
              alignItems: "flex-end",
              width: "100%",
              maxWidth: "768px",
              margin: "auto",
            }}
          >
            <IconButton>
              <AttachFileRoundedIcon />
            </IconButton>
            <InputBase
              multiline={true}
              maxRows={6}
              placeholder={
                isSendingPrompt
                  ? "Please, wait for AI response"
                  : "Message ChatGPT"
              }
              value={userPrompt}
              disabled={isSendingPrompt}
              sx={{ flexGrow: 1, alignSelf: "stretch" }}
              onKeyDown={(event) => {
                if (!event.shiftKey && event.key === "Enter") {
                  event.preventDefault();
                  sendNewPrompt();
                }
              }}
              onChange={(event) => {
                setUserPrompt(event.target.value);
              }}
            />
            <AppButton
              variant="contained"
              disabled={!userPrompt || isSendingPrompt}
              sx={{
                height: "40px",
                width: "40px",
                minWidth: 0,
                borderRadius: "50%",
              }}
            >
              {isSendingPrompt ? (
                <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                  <CircularProgress size={20} />
                </Stack>
              ) : (
                <NorthRoundedIcon />
              )}
            </AppButton>
          </Stack>
        </Stack>
      </Stack>
    </PrivatePageLayout>
  );
};

export default ChatGptConversation;
