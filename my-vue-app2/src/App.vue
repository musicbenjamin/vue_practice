<template>
  <div class="container">
    <section>
      <input type="text" class="input-group" v-model="inputTodo" />
      <button @click="addTodo" class="btn-success btn">Add</button>
    </section>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="todo in filteredTodoList"
        :key="todo.id"
      >
        {{ todo }}
        <button class="btn btn-danger" @click="deleteTodo(todo)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "App",
  setup() {
    const inputTodo = ref("");
    const todoList = ref([""]);

    const filteredTodoList = computed(() => {
      return todoList.value.filter(todo => todo !== "");
    });

    const addTodo = () => {
      if (inputTodo.value.trim()) {
        todoList.value.push(inputTodo.value.trim());
        inputTodo.value = "";
      }
    };

    const deleteTodo = (todo) => {
      const index = todoList.value.indexOf(todo);
      if (index > -1) {
        todoList.value.splice(index, 1);
      }
    };

    return {
      inputTodo,
      todoList,
      filteredTodoList,
      addTodo,
      deleteTodo,
    };
  },
};
</script>

<style scoped>
.btn-success.btn {
  padding: 15px;
  background-color: green;
  color: white;
}

.btn-success.btn:hover {
  background-color: rgb(2, 66, 2);
}

.btn.btn-danger:hover {
  background-color: rgb(141, 1, 1);
}

.btn.btn-danger {
  background: wheat;
  background-color: red;
  margin-left: 20px;
}

.input-group {
  padding: 10px;
}

@media (min-width: 1024px) {
}
</style>
