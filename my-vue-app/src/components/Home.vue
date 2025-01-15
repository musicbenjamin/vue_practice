<template>
  <div>
    <button @click="fetchRandomQuote">Get Random Quote</button>
    <QuoteDisplay :quote="quote"/>
  </div>
</template>

<script>

import QuoteDisplay from './QuoteDisplay.vue';

export default {
  components: {
    QuoteDisplay
  },
  data() {
    return {
      quote: null
    };
  },
  methods: {
    async fetchRandomQuote() {
      console.log('Fetching quote...');
      try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
        this.quote = data.content;
        console.log('Quote fetched:', data.quote);
        this.quote = data.quote;
      } catch (error) {
        console.error("Error fetching quote: ", error);
      }
    }
  }
}

</script>