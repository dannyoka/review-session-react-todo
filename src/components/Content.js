import React, { useState } from 'react';
import { ListTodo } from './ListTodo';
import { AddTodoForm } from './AddTodoForm';
import { Grid } from '@mui/material';

export const Content = ({ view }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (todo) => {
    setTodos((prev) => {
      const filteredTodos = prev.filter((t) => t.id !== todo.id);
      return [...filteredTodos, todo];
    });
  };

  const renderContent = () => {
    return view === 'list' ? (
      <ListTodo todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    ) : (
      <AddTodoForm addTodo={addTodo} />
    );
  };

  return <Grid style={{ padding: '1rem' }}>{renderContent()}</Grid>;
};
