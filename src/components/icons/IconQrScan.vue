<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.2" stroke="currentColor" stroke-width="1.7" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="1.2" stroke="currentColor" stroke-width="1.7" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="1.2" stroke="currentColor" stroke-width="1.7" />
    <path d="M14 14h2.6M14 17.3h6.5M19.3 14v2M17 20.5h3.5v-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
