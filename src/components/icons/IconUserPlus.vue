<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.5" cy="8" r="3" stroke="currentColor" stroke-width="1.8" />
    <path d="M3.5 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <path d="M18 8.5v5M15.5 11h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
  </svg>
</template>
