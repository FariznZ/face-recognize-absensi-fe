<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="5" width="17" height="15" rx="2.3" stroke="currentColor" stroke-width="1.8" />
    <path d="M3.5 9.5h17" stroke="currentColor" stroke-width="1.8" />
    <path d="M8 3v3.2M16 3v3.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <path d="M7.5 13h2.5M7.5 16.3h2.5M11 13h2.5M11 16.3h2.5M14.5 13h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  </svg>
</template>
