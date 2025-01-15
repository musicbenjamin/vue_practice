<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allTodos']), // Map the "allTodos" getter to a local computed property
  },
  methods: {
    ...mapActions(['removeTodoAction']), // Map the "removeTodoAction" action to a local method
    removeTodo(index) {
      this.removeTodoAction(index); // Dispatch the "removeTodoAction" to remove a todo
    },
  },
  created() {
    this.todos = this.allTodos; // Initialize the todos property with data from the Vuex store
  },
};
</script>
