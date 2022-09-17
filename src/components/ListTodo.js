import React from 'react';
import { Typography, Grid } from '@mui/material';
import { TodoItem } from './TodoItem';

export const ListTodo = ({ todos, deleteTodo, updateTodo }) => {
  console.log({ todos });
  return (
    <div>
      <Typography variant="h4">Todos List</Typography>
      <Grid container justifyContent="space-around" wrap="nowrap">
        <Grid container direction="column">
          <Typography>Open Todos</Typography>
          {todos
            .filter((todo) => !todo.complete)
            .map((todo) => (
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
        </Grid>
        <Grid container direction="column">
          <Typography>Completed Todos</Typography>
          {todos
            .filter((todo) => todo.complete)
            .map((todo) => (
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};
