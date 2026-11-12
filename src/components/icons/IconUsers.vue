<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.5" cy="8" r="2.8" stroke="currentColor" stroke-width="1.7" />
    <path d="M3 19c0-2.8 2.5-4.6 5.5-4.6S14 16.2 14 19" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    <path d="M15.3 5.6c1.5.2 2.6 1.4 2.6 2.9 0 1.4-1 2.6-2.4 2.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    <path d="M15.8 14.5c2.2.5 3.7 1.9 3.7 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  </svg>
</template>
