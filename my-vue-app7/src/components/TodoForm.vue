<template>
  <div>
    <h2>Add Todo</h2>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" type="text" placeholder="Enter a todo" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newTodo: '', // A local property to store the new todo input
    };
  },
  methods: {
    ...mapActions(['addTodoAction']), // Map the "addTodoAction" action to a local method
    addTodo() {
      if (this.newTodo.trim()) { // Ensure the input is not empty or just spaces
        this.addTodoAction(this.newTodo); // Dispatch the "addTodoAction" to add a new todo
        this.newTodo = ''; // Clear the input field after adding the todo
      }
    },
  },
};
</script>