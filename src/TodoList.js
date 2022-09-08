import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    // the <> & </> are JSX fragments to allow adjacent JSX elements
                    <>
                        <ListItem>
                            <ListItemText>
                                {todo.task}
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}