import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList({todos, removeTodo, toggleTodo}) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    // the <> & </> are JSX fragments to allow adjacent JSX elements
                    <>
                        <Todo task={todo.task} key={todo.item} completed={todo.completed} removeTodo={removeTodo} id={todo.id} toggleTodo={toggleTodo} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}