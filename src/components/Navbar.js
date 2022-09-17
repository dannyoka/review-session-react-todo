import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';

export const Navbar = ({ setView }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <Typography>Todo App</Typography>
            <Grid container item>
              <Button onClick={() => setView('list')} color="inherit">
                List
              </Button>
              <Button onClick={() => setView('add')} color="inherit">
                Add Todo
              </Button>
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
