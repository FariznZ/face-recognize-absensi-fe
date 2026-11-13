<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5.3c0-.7.6-1.2 1.3-1.1 2 .2 4.6.9 6.2 2.3V19c-1.6-1.4-4.2-2-6.2-2.3-.7-.1-1.3-.6-1.3-1.2V5.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
    <path d="M20 5.3c0-.7-.6-1.2-1.3-1.1-2 .2-4.6.9-6.2 2.3V19c1.6-1.4 4.2-2 6.2-2.3.7-.1 1.3-.6 1.3-1.2V5.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
  </svg>
</template>
