import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState.js';

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault(); // prevents the page from refreshing
                addTodo(value); // adds TextField value to todo array
                reset(); // clears TextField using hook
            }}>
                <TextField value={value} onChange={handleChange} />
            </form>
            {value}
        </Paper>
    )
}