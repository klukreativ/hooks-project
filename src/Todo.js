import { Checkbox, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    // initializing 
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ? (
                <EditTodoForm id={id} editTodo={editTodo} task={task} toggleEditForm={toggle} />
            ) : (
                <>
                    <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={() => toggle()}>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )
            }
        </ListItem >
    )
}