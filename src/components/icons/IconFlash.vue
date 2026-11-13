<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 2.5 5 14h5l-1.5 7.5L19 10h-5l-1.5-7.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
  </svg>
</template>
