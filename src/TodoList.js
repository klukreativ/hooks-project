import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo, editTodo, toggleTodo }) {
    // only renders the paper component if the todo array contains a value, if empty returns null and does not render
    if (todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    // the <> & </> are JSX fragments to allow adjacent JSX elements
                    <>
                        <Todo
                            {...todo} //instead of passing down each individual object element, we pass the entire object 
                            key={todo.item}
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
    return null;
}