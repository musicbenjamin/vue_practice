<template>
  <li @click="notifyParent">
    {{ item.text }}
  </li>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['item-clicked'])

const notifyParent = () => {
  emit('item-clicked', props.item);
};
</script>