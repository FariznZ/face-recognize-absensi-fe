<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8" />
    <path d="M12 7.8v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
</template>
