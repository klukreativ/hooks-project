import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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