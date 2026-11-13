<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 3.5H6.3A2.8 2.8 0 0 0 3.5 6.3v11.4a2.8 2.8 0 0 0 2.8 2.8h7.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.5 12H20.5M17 8.5 20.5 12 17 15.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
