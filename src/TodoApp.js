import { useEffect } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import useTodoState from './hooks/useTodoState';

export default function TodoApp() {
    // initial todos when first rendering the page will be pulled from the localStorage
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')

    // extracts hooks/functions from external hook file by passing in initialTodos to initialize todos
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);


    // will run every time this component renders, saves to localStorage in browser
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    })

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }} elevation={0}>

            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}