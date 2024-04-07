import React, { useCallback, useEffect, useState } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
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
import { Box } from "@mui/material";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatUnderlinedRoundedIcon from "@mui/icons-material/FormatUnderlinedRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@mui/icons-material/StrikethroughSRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import FormatButton from "./components/FormatButton";
import LinkDialog from "./components/LinkDialog";
import Image from "@tiptap/extension-image";
import "./ArticleEditor.css";
import Heading from "@tiptap/extension-heading";
import HardBreak from "@tiptap/extension-hard-break";

const ArticleEditor = (props) => {
  const { content, onChange } = props;
  const editor = useEditor({
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
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [url, setUrl] = useState("");

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

  useEffect(() => {
    if (!!editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  return (
    <Box
      sx={{
        lineHeight: "1.5",
        fontSize: "16px",
        ".ProseMirror.ProseMirror-focused": {
          //   padding: "8px 16px",
          outline: "none",
        },
        ".ProseMirror p": {
          marginBlockStart: "16px",
          marginBlockEnd: "16px",
        },
      }}
    >
      <BubbleMenu
        pluginKey="bubbleMenuText"
        className="article-editor__popup"
        tippyOptions={{ duration: 150, maxWidth: "auto", zIndex: 1200 }}
        editor={editor}
        shouldShow={({ from, to }) => {
          // only show if range is selected.
          return from !== to;
        }}
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
        <FormatButton isActive={editor.isActive("link")} onClick={openModal}>
          <InsertLinkRoundedIcon />
        </FormatButton>
        <FormatButton isActive={editor.isActive("bold")} onClick={toggleBold}>
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
        <FormatButton isActive={editor.isActive("code")} onClick={toggleCode}>
          <CodeRoundedIcon />
        </FormatButton>
      </BubbleMenu>

      <BubbleMenu
        pluginKey="bubbleMenuLink"
        className="bubble-menu-dark"
        tippyOptions={{ duration: 150 }}
        editor={editor}
        shouldShow={({ editor, view, state, oldState, from, to }) => {
          // only show the bubble menu for links.
          return from === to && editor.isActive("link");
        }}
      >
        <FormatButton className="button" onClick={openModal}>
          Edit
        </FormatButton>
        <FormatButton className="button-remove" onClick={removeLink}>
          Remove
        </FormatButton>
      </BubbleMenu>
      <EditorContent editor={editor} />
      <LinkDialog
        open={isLinkModalOpen}
        onClose={closeModal}
        link={url}
        onChange={(event) => setUrl(event.target?.value)}
        onRemoveLink={removeLink}
        onSaveLink={saveLink}
      />
    </Box>
  );
};

export default ArticleEditor;
