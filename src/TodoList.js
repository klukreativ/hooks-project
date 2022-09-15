import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    // the <> & </> are JSX fragments to allow adjacent JSX elements
                    <>
                        <Todo task={todo.task} key={todo.item} completed={todo.completed} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}