<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" stroke-width="1.7" />
    <path d="M5.5 9.3h.01M9 9.3h.01M12.5 9.3h.01M16 9.3h.01M18.5 9.3h.01M5.5 12.5h.01M9 12.5h.01M12.5 12.5h.01M16 12.5h.01M18.5 12.5h.01M7 15.5h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
  </svg>
</template>
