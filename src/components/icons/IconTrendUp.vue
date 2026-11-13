<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 16 9 10.5l4 4 7.5-7.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.5 7h5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
