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
        }}
        style={{margin: '0 1rem', width: '100%'}} // brings edit field in line with todo styles
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                variant = "standard" // changes it from box to line
                fullWidth                
                autoFocus // allows user to type immediately after clicking edit button
            />
        </form>
    )

}