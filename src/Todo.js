import { Checkbox, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export default function Todo({ task, completed, removeTodo, toggleTodo, id }) {
    return (
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
            <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}