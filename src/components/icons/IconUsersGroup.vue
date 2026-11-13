<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.5" cy="7.5" r="2.8" stroke="currentColor" stroke-width="1.6" />
    <path d="M3.5 18.3c0-2.7 2.3-4.5 5-4.5s5 1.8 5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="16.5" cy="8" r="2.1" stroke="currentColor" stroke-width="1.5" />
    <path d="M14.8 14.2c2.9.3 4.7 1.9 4.7 4.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>
</template>
