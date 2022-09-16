import { useState, useEffect } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';

import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

export default function TodoApp() {
    // initial todos when first rendering the page will be pulled from the localStorage or generated using the array provided below
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]'
    // [
    //     { id: 1, task: 'Clean Fishtank', completed: false },
    //     { id: 2, task: 'Take out Garbage', completed: true },
    //     { id: 3, task: 'Vacuum the House', completed: false }
    // ]
    )
    
    const [todos, setTodos] = useState(initialTodos);

    // will run every time this component renders, saves to localStorage in browser
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    })

    // copies Todo array, appends a new Todo to end with completed false and a randomly generated unique id
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    }

    // accepts an id, creates a duplicate array including all todos except the one matching the given id, then updates the original array with the duplicate
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    // accepts an id, creates a duplicate array of all todos, except id that matches, which changes its completed status to opposite (boolean value) then updates original array with the duplicate
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    }

    // function accepts a todoId and the newTask to update
    // filters through todos array creates a duplicate array, but when finds a match w/todoid it copies that toDo but assigns the new task to it's task, else it passes the unchanged todo
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo);
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