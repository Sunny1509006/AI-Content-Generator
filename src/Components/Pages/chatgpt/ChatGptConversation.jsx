import React, { useEffect, useRef, useState } from "react";
import PrivatePageLayout from "../../layouts/PrivatePageLayout";
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  InputBase,
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

const ChatGptConversation = () => {
  const [messages, setmessages] = useState([]);
  const [userPrompt, setUserPrompt] = useState("");
  const { sendPrompt, isSendingPrompt } = useChatGpt();
  const appTheme = useTheme();
  const messageListRef = useRef(null);

  const insertNewMessage = (newMessage) => {
    setmessages((messages) => [...messages, newMessage]);
  };

  const sendNewPrompt = () => {
    insertNewMessage({
      user: "self",
      text: userPrompt,
    });
    setUserPrompt("");

    sendPrompt({
      query: userPrompt,
      model: "gpt-4-turbo",
      onSuccess: (aiResponse) => {
        insertNewMessage({
          user: "ai",
          text: aiResponse,
        });
      },
    });
  };

  useEffect(() => {
    if (messageListRef?.current) {
      const messageListNode = messageListRef.current;

      messageListNode.scrollTo(0, messageListNode.scrollHeight);
    }
  }, [messages.length]);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Use Chatgpt</title>
      </Helmet>
      <Stack sx={{ width: "100%" }}>
        <Stack
          ref={messageListRef}
          sx={{
            height: `calc(100vh - 160px - 310px)`,
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
                <Box
                  sx={{
                    backgroundColor:
                      message?.user === "self"
                        ? appTheme.palette.grey[200]
                        : "transparent",
                    marginBottom: "32px",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    whiteSpace: "pre-wrap",
                    maxWidth: message?.user === "self" ? "60%" : "100%",
                    marginLeft: message?.user === "self" ? "auto" : 0,
                  }}
                >
                  <GptResponse response={message.text} />
                </Box>
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
              placeholder="Message ChatGPT"
              value={userPrompt}
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
