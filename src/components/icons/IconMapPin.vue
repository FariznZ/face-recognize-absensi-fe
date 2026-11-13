<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.5s7-6.6 7-12.3A7 7 0 0 0 5 9.2c0 5.7 7 12.3 7 12.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
    <circle cx="12" cy="9.2" r="2.4" stroke="currentColor" stroke-width="1.6" />
  </svg>
</template>
