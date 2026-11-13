<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10.5 12 3.5l8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.5 9.5V19a1 1 0 0 0 1 1h3.2v-5.2a2.3 2.3 0 0 1 4.6 0V20h3.2a1 1 0 0 0 1-1V9.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
  </svg>
</template>
