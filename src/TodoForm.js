import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState.js';

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault(); // prevents the page from refreshing
                addTodo(value); // adds TextField value to todo array
                reset(); // clears TextField using hook
            }}>
                <TextField value={value} onChange={handleChange}margin='normal' label='Add new Todo' fullWidth />
            </form>
            {value}
        </Paper>
    )
}