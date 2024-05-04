import React, { useCallback, useState } from "react";
import { Stack, ThemeProvider, colors, createTheme } from "@mui/material";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatUnderlinedRoundedIcon from "@mui/icons-material/FormatUnderlinedRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@mui/icons-material/StrikethroughSRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import FormatButton from "./FormatButton";
import LinkDialog from "./LinkDialog";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[900],
    },
  },
});

const ArticleEditorToolbar = (props) => {
  const { editor, editable } = props;
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [url, setUrl] = useState("");

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);

  const setHeader = useCallback(
    (level) => {
      editor.chain().focus().toggleHeading({ level }).run();
    },
    [editor]
  );

  const openModal = useCallback(() => {
    setUrl(editor.getAttributes("link").href);
    setIsLinkModalOpen(true);
  }, [editor]);

  const closeModal = useCallback(() => {
    setIsLinkModalOpen(false);
    setUrl("");
  }, []);

  const saveLink = useCallback(() => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url, target: "_blank" })
        .run();
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    editor.commands.blur();
    closeModal();
  }, [editor, url, closeModal]);

  const removeLink = useCallback(() => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    closeModal();
  }, [editor, closeModal]);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        {editable && (
          <Stack
            direction="row"
            sx={{
              alignContent: "center",
              borderBottom: `1px solid ${colors.grey[300]}`,
              padding: "8px",
            }}
            spacing={1}
          >
            <FormatButton
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <RotateLeftRoundedIcon />
            </FormatButton>
            <FormatButton
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <RotateRightRoundedIcon />
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("link")}
              onClick={openModal}
            >
              <InsertLinkRoundedIcon />
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("bold")}
              onClick={toggleBold}
            >
              <FormatBoldRoundedIcon />
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("underline")}
              onClick={toggleUnderline}
            >
              <FormatUnderlinedRoundedIcon />
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("italic")}
              onClick={toggleItalic}
            >
              <FormatItalicRoundedIcon />
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("strike")}
              onClick={toggleStrike}
            >
              <StrikethroughSRoundedIcon />
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("heading", { level: 1 })}
              onClick={() => setHeader(1)}
              sx={{ fontWeight: 700 }}
            >
              H1
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("heading", { level: 2 })}
              onClick={() => setHeader(2)}
              sx={{ fontWeight: 700 }}
            >
              H2
            </FormatButton>
            <FormatButton
              isActive={editor.isActive("code")}
              onClick={toggleCode}
            >
              <CodeRoundedIcon />
            </FormatButton>
            <LinkDialog
              open={isLinkModalOpen}
              onClose={closeModal}
              link={url}
              onChange={(event) => setUrl(event.target?.value)}
              onRemoveLink={removeLink}
              onSaveLink={saveLink}
            />
          </Stack>
        )}
      </Stack>
    </ThemeProvider>
  );
};

export default ArticleEditorToolbar;
