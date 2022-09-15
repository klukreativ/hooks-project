import { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';

import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Clean Fishtank', completed: false },
        { id: 2, task: 'Take out Garbage', completed: true },
        { id: 3, task: 'Vacuum the House', completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(updatedTodos);
    }

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
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}