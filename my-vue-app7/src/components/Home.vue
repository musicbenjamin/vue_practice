<template>
  <div>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoForm, // Import and register the TodoForm component
    TodoList, // Import and register the TodoList component
  },
};
</script>