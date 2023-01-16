import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent === "") {
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
  };


  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Button
        onClick={focusInput}
      >
        Dodaj zadanie
      </Button>
    </StyledForm>
  )
};

export default Form;