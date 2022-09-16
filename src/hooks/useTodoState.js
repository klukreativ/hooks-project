import useLocalStorageState from './useLocalStorageState';
import { v4 as uuid } from 'uuid';

/* originally used useState to to update localStorage, but now uses the hook useLocalStorageState which returns a useState function that initializes and saves to localStorage whenever todos state is changed */
export default initialTodos => {
    // initializes the todo array by populating w/info from browser or default
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
    return {
        todos,
        // copies Todo array, appends a new Todo to end with completed false and a randomly generated unique id
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
        },
        // accepts an id, creates a duplicate array including all todos except the one matching the given id, then updates the original array with the duplicate
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        // accepts an id, creates a duplicate array of all todos, except id that matches, which changes its completed status to opposite (boolean value) then updates original array with the duplicate
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
            setTodos(updatedTodos);
        },
        /* function accepts a todoId and the newTask to update filters through todos array creates a duplicate array, but when finds a match w/todoid it copies that toDo but assigns the new task to it's task, else it passes the unchanged todo */
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo);
            setTodos(updatedTodos);
        }
    }
}