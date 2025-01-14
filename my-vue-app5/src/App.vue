<template>
  <div>
    <h1>poruka</h1>
    <p>
      <input id="input2" v-model="firstName" placeholder="name"/>
      <input id="input" v-model="lastName" placeholder="last name"/>
    </p>
    <p>{{ greeting }}</p>
  </div>
  
</template>


<script>

import { ref, watch} from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const greeting = ref("Welcome!");

    watch([firstName, lastName], ([newFirstName, newLastName]) => {
      if (newFirstName || newLastName) {
        greeting.value = `Welcome, ${newFirstName} ${newLastName}!`;
      } else {
        greeting.value = "Welcome!";
      }
    });

    return {
      firstName,
      lastName,
      greeting,
    };
  }
}

</script>


<style>

#input{
  padding: 20px;
  margin-left:20px ;
}

#input2{
  padding: 20px;
}

</style>
