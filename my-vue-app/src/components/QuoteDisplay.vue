<template>
  <div v-if="quote">
    <p>{{ quote }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      default: null
    }
  }
};
</script>