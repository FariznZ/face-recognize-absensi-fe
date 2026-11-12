<script setup>
defineProps({
  class: { type: String, default: 'size-full' },
  open: { type: Boolean, default: true },
})
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <template v-if="open">
      <path d="M2.5 12S5.8 6 12 6s9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.8" />
    </template>
    <template v-else>
      <path d="M3.5 3.5 20.5 20.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      <path d="M9.6 6.4A9.8 9.8 0 0 1 12 6c6.2 0 9.5 6 9.5 6a16 16 0 0 1-3.1 3.6M6.6 7.8C4.3 9.3 2.5 12 2.5 12s3.3 6 9.5 6c1 0 1.9-.14 2.7-.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.9 10.3a2.6 2.6 0 0 0 3.6 3.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </template>
  </svg>
</template>
