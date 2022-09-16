import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo, editTodo, toggleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    // the <> & </> are JSX fragments to allow adjacent JSX elements
                    <>
                        <Todo
                            id={todo.id}
                            key={todo.item}
                            task={todo.task}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}