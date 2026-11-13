<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8.5a2 2 0 0 1 2-2h1.3l1-1.6h7.4l1 1.6H18a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
    <path d="M9.5 13a2.5 2.5 0 0 1 4-2M14.5 13a2.5 2.5 0 0 1-4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M13.2 10.6 14 11l-.2-1M9.8 15.4 9 15l.2 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
