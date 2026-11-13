<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8" />
    <path d="M9.6 9.4a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1 .9-1 1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="12" cy="16.6" r="1" fill="currentColor" />
  </svg>
</template>
