import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        // when form is submitted, we prevent refreshing the page, call the editTodo function, then clear the form
        <form onSubmit={e => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}>
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    )

}