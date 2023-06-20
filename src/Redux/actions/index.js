import { ADD_TODO, DELETE_TODO, UPDATE_TODO, EDIT_TODO, CLEAR_ALL_TODO, MARK_COMPLETED, LOAD_TODO } from "./actionType";

export const loadTodo = (todo) => {
	return {
		type : LOAD_TODO,
		payload : todo,
	};
};
export const addNewTodo = (todo) => {
	return {
		type : ADD_TODO,
		payload : {
			id : Date.now(),
			title : todo?.title,
			description : todo?.description
		},
	};
};

export const deleteTodo = (id) => {
	return {
		type : DELETE_TODO,
		id, 
	};
};

export const clearAlltodo = () => {
	return {
		type : CLEAR_ALL_TODO,
	};
};

export const editTodo = (id, data) => {
	return {
		type : EDIT_TODO,
		payload : {
			id : id,
		},
		isEdit : true,
	};
};

export const updateTodo = (id, data) => {
	return {
		type : UPDATE_TODO,
		payload : {
			todoid : id,
			todoTitle: data.title,
			todoDescription : data.description
		},
	};
};

export const markTodoCompleted = (id) => {
	return {
		type : MARK_COMPLETED,
		payload : {
			selectedTodoId : id
		}
	}
}