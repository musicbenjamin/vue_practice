<template>
  <div class="counter-app">
    <h1>Counter Component</h1>
    <p>Original Count: {{ count }}</p>
    <p>Computed Value (Count x 2): {{ doubleCount }}</p>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Counter",
  setup() {
    const count = ref(0);

    const doubleCount = computed(() => count.value * 2);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      count.value--;
    };

    return {
      count,
      doubleCount,
      increment,
      decrement,
    };
  },
};
</script>

<style scoped>
.counter-app {
  text-align: center;
  margin-top: 50px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
