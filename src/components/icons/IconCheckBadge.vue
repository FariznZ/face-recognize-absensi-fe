<script setup>
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.8 14 4.4l2.5-.3 1 2.3 2.3 1-.3 2.5 1.6 2-1.6 2 .3 2.5-2.3 1-1 2.3-2.5-.3L12 21.2l-2-1.6-2.5.3-1-2.3-2.3-1 .3-2.5-1.6-2 1.6-2-.3-2.5 2.3-1 1-2.3 2.5.3L12 2.8Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path d="M8.7 12.1 11 14.4l4.3-4.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
