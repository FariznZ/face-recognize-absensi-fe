<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" stroke-width="1.8" />
    <circle cx="8.5" cy="11" r="1.8" stroke="currentColor" stroke-width="1.6" />
    <path d="M5.8 15.2c0-1.4 1.2-2.4 2.7-2.4s2.7 1 2.7 2.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    <path d="M14.5 10h4M14.5 13.5h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  </svg>
</template>
