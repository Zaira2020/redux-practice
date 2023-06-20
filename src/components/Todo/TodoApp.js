import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function TodoApp(){
	return (
		<>
			<div className='container p-4 mt-2'>
				<h1>Todo Application</h1>
				<AddTodo />
				<TodoList />
			</div>
		</>
	)

}

export default TodoApp;