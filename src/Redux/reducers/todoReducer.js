import { ADD_TODO, DELETE_TODO, UPDATE_TODO, EDIT_TODO, CLEAR_ALL_TODO, MARK_COMPLETED, LOAD_TODO } from "../actions/actionType";

const initalState = {
	todos: [
		{
			id: 1,
			title: "Todo List 1",
			description: "This is Todo first",
			isCompleted: false,
			isPending: true
		},
		{
			id: 2,
			title: "Todo List 2",
			description: "This is Todo second",
			isCompleted: true,
			isPending: false
		},
		{
			id: 3,
			title: "Todo List 3",
			description: "This is Todo third",
			isCompleted: false,
			isPending: true
		},
	],
	'isEdit': false,
	editToolId: "",
};

const todoReducers = (state = initalState, action) => {
	switch (action.type) {
		case LOAD_TODO:
			return {
				...state,
				todoss : [action.payload]
			};
		case ADD_TODO:
			const { id, title, description } = action.payload;
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: id,
						title: title,
						description: description,
						isCompleted: false,
						isPending: true,
					},
				],
				isEdit: action.isEdit,
			};
		case DELETE_TODO:
			const newTodoList = state.todos.filter((items) => items.id != action.id);
			return {
				...state,
				todos: newTodoList
			};
		case EDIT_TODO:
			const editTodo = action.payload;
			let newEditTodo = state?.todos?.find((items) => items?.id === editTodo?.id);
			return {
				...state,
				isEdit: action.isEdit,
				editTodo: newEditTodo
			};
		case UPDATE_TODO:
			const { todoid, todoTitle, todoDescription } = action.payload;
			const todos = state.todos.filter((todo) => {
				return todo.id !== todoid;
			});
			const todo = state.todos.find((todo) => todo?.id == todoid);
			todo.title = todoTitle;
			todo.description = todoDescription;
			todo.isCompleted = todo?.isCompleted;
			todo.isPending = todo?.isPending;
			todos.push(todo);

			return {
				...state,
				todos: [...todos],
				isEdit: false,
			};

		case MARK_COMPLETED:
			const { selectedTodoId } = action.payload;
			let allTodos = [];

			selectedTodoId.forEach((id) => {
				allTodos = state.todos.filter((todo) => {
					return todo.id !== id;
				});

				const selectedTodo = state.todos.find((todo) => todo?.id === id);
				selectedTodo.title = selectedTodo?.title;
				selectedTodo.description = selectedTodo?.description;
				selectedTodo.isCompleted = true;
				selectedTodo.isPending = selectedTodo?.isPending;
				allTodos.push(selectedTodo);
			});

			return {
				...state,
				todos: [...allTodos],
				isEdit: false,
			};

		case CLEAR_ALL_TODO:
			return {
				...state,
				todos: [],
			};
		default:
			return state;
	}
};

export default todoReducers;
