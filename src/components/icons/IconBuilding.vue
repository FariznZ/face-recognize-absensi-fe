<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3.5" width="10" height="17" rx="1.3" stroke="currentColor" stroke-width="1.7" />
    <path d="M15 9.5h3.5a1 1 0 0 1 1 1V20h-4.5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
    <path d="M8 7.5h.01M11.5 7.5h.01M8 11h.01M11.5 11h.01M8 14.5h.01M11.5 14.5h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    <path d="M8.5 20v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
  </svg>
</template>
