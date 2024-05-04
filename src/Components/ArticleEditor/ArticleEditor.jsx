import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import History from "@tiptap/extension-history";
import { Box, colors } from "@mui/material";
import Image from "@tiptap/extension-image";
import "./ArticleEditor.css";
import Heading from "@tiptap/extension-heading";
import HardBreak from "@tiptap/extension-hard-break";
import ArticleEditorToolbar from "./components/ArticleEditorToolbar";

const ArticleEditor = (props) => {
  const { content, editable, onChange } = props;
  const editor = useEditor({
    editable,
    extensions: [
      Document,
      History,
      Paragraph,
      Text,
      Link.configure({
        openOnClick: false,
      }),
      Bold,
      Underline,
      Italic,
      Strike,
      Code,
      Image.configure({
        inline: true,
        HTMLAttributes: {
          style:
            "width: 100%; height: 500px; object-fit: cover; object-position: center",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      HardBreak,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor);
    },
  });

  useEffect(() => {
    if (!!editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  useEffect(() => {
    if (!editor) {
      return undefined;
    }

    editor.setEditable(editable);
  }, [editor, editable]);

  if (!editor) {
    return null;
  }

  return (
    <Box
      sx={{
        lineHeight: "1.5",
        fontSize: "16px",
        borderRadius: "4px",
        border: editable
          ? editor.isFocused
            ? `2px solid ${colors.grey[900]}`
            : `2px solid ${colors.grey[400]}`
          : 0,
        outline: 0,
        ".ProseMirror": {
          padding: editable ? "8px 16px" : 0,
        },
        ".ProseMirror.ProseMirror-focused": {
          outline: "none",
        },
        ".ProseMirror p": {
          marginBlockStart: "16px",
          marginBlockEnd: "16px",
        },
      }}
    >
      <ArticleEditorToolbar editor={editor} editable={editable} />
      <EditorContent editor={editor} />
    </Box>
  );
};

export default ArticleEditor;
