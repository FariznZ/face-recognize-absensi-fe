<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 17v-5a6 6 0 0 1 12 0v5l1.7 2.3H4.3L6 17Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
    <path d="M10 20.5a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
  </svg>
</template>
