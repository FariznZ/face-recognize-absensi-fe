<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8" />
    <circle cx="12" cy="9.8" r="2.6" stroke="currentColor" stroke-width="1.7" />
    <path d="M6.3 18.2c1-2.3 3.2-3.5 5.7-3.5s4.7 1.2 5.7 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
  </svg>
</template>
