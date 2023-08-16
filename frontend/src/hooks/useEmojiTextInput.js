import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export const useEmojiTextInput = (textId) => {
  const methods = useFormContext();
  const [showPicker, setShowPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    const textarea = document.getElementById(textId);
    textarea.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleTogglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiSelect = ({ emoji }) => {
    const textarea = document.getElementById(textId);
    textarea.focus();
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const value = textarea.value;

    const newValue =
      value.substring(0, startPos) + emoji + value.substring(endPos);

    methods.setValue("text", newValue);
    setCursorPosition(startPos + emoji.length);
  };

  return { methods, handleEmojiSelect, handleTogglePicker, showPicker };
};
