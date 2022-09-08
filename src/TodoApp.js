import { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';

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
        setTodos([ ...todos, { id: 4, task: newTodoText, completed: false}]);
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
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
    </Paper>
)
}