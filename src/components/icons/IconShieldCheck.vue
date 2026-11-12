<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.5 19.5 5.5V11c0 5.2-3.3 8.8-7.5 10.5C7.8 19.8 4.5 16.2 4.5 11V5.5L12 2.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
    <path d="M8.7 12.1l2.2 2.2 4.4-4.6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
