import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo, editTodo, toggleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
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
                        {/* compaers index against array length to avoid placing a divider on the last todo */}
                        {i < todos.length -1 && <Divider />}                        
                    </>
                ))}
            </List>
        </Paper>
    )
}