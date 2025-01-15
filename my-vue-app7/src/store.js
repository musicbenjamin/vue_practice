import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [], // Initialize todos from localStorage or as an empty array
    };
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo); // Add a new todo to the state
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Update localStorage
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1); // Remove a todo by its index
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Update localStorage
    },
  },
  actions: {
    addTodoAction({ commit }, todo) {
      commit('addTodo', todo); // Commit the "addTodo" mutation
    },
    removeTodoAction({ commit }, index) {
      commit('removeTodo', index); // Commit the "removeTodo" mutation
    },
  },
  getters: {
    allTodos(state) {
      return state.todos; // Retrieve all todos from the state
    },
  },
});