<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.3" stroke="currentColor" stroke-width="1.8" />
    <path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    <path d="M12 16.4v1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  </svg>
</template>
