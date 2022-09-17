import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';

export const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <Card style={{ width: '50%', margin: '.5rem' }}>
      <CardContent>
        <Typography variant="h5">{todo.text}</Typography>
        <Typography variant="body1">{todo.priority}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            updateTodo({ ...todo, complete: !todo.complete });
          }}
        >
          {todo.complete ? 'Mark as open' : 'Complete'}
        </Button>
        <Button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
