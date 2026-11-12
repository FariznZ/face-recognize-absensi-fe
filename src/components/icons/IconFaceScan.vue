<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.5H5.3A1.8 1.8 0 0 0 3.5 5.3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <path d="M17 3.5h1.7A1.8 1.8 0 0 1 20.5 5.3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <path d="M7 20.5H5.3a1.8 1.8 0 0 1-1.8-1.8V17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <path d="M17 20.5h1.7a1.8 1.8 0 0 0 1.8-1.8V17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <circle cx="9" cy="10.5" r="0.9" fill="currentColor" />
    <circle cx="15" cy="10.5" r="0.9" fill="currentColor" />
    <path d="M9 15c.9.7 2 1.1 3 1.1s2.1-.4 3-1.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  </svg>
</template>
