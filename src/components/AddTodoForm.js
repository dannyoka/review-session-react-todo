import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

export const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');
  const [todoPriority, setTodoPriority] = useState('medium');

  const handleSubmit = () => {
    const newTodo = {
      id: (Math.random() * 10000).toFixed(0),
      text: todoText,
      priority: todoPriority,
      complete: false,
    };
    addTodo(newTodo);
    setTodoText('');
    setTodoPriority('medium');
  };

  return (
    <>
      <Typography variant="h4">Create new todo</Typography>
      <FormControl fullWidth>
        <TextField
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
          label="Todo"
        />
        <Select
          label="Priority"
          value={todoPriority}
          onChange={(e) => {
            setTodoPriority(e.target.value);
          }}
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
        <Button
          onClick={() => {
            handleSubmit();
          }}
          variant="contained"
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};
