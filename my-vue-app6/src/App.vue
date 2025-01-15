<template>
<div>
  <nav>
    <router-link to ="/">Home</router-link>
    <router-link to ="/about">About</router-link>
  </nav>
  <router-view/>
</div>
</template>

<script>

</script>

<style>
  nav {
  background: #f8f9fa;
  padding: 1rem;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #007bff;
}
nav a:hover {
  text-decoration: underline;
}
</style>
