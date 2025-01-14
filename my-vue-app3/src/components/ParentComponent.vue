<template>
  <div>
    <h1>Parent Component</h1>
    <ul>
      <ChildComponent 
        v-for="item in items" 
        :key="item.id" 
        :item="item"
        @item-clicked="handleItemClicked"
      />
    </ul>
    <p v-if="selectedItem">You selected: {{ selectedItem.text }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import ChildComponent from './childComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  setup() {
    const items = ref([
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ]);
    const selectedItem = ref(null);

    const handleItemClicked = (item) => {
      selectedItem.value = item;
    };

    return {
      items,
      selectedItem,
      handleItemClicked,
    };
  },
  mounted() {
    setTimeout(() => {
      this.items[0].text = 'Hello world';
    }, 1500)
  }
};
</script>