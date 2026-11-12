<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <rect x="3" y="13" width="4" height="6" rx="1.6" stroke="currentColor" stroke-width="1.8" />
    <rect x="17" y="13" width="4" height="6" rx="1.6" stroke="currentColor" stroke-width="1.8" />
    <path d="M19 19.5c0 1.4-1.4 2.2-3.2 2.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
  </svg>
</template>
