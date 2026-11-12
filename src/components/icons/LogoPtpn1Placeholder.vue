<script setup>
// PLACEHOLDER — ganti dengan logo resmi PTPN 1 (letakkan file di
// src/assets/images/logo-ptpn1.png lalu ganti pemakaian komponen ini
// dengan <img src="@/assets/images/logo-ptpn1.png" />).
defineProps({ class: { type: String, default: 'size-full' } })
</script>

<template>
  <svg :class="$props.class" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 44c8-6 14-14 14-23a14 14 0 0 0-28 0c0 9 6 17 14 23Z" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5" />
    <path d="M24 34c5-8 5-16 0-24-5 8-5 16 0 24Z" fill="#16A34A" />
    <path d="M16 20c3 4 3 9 1 13-4-2-6-6-6-10 1-2 3-3 5-3Z" fill="#0EA5E9" />
    <path d="M32 20c-3 4-3 9-1 13 4-2 6-6 6-10-1-2-3-3-5-3Z" fill="#0EA5E9" />
  </svg>
</template>
