<script setup>
// Root shell: tiap screen di Figma didesain sebagai layar mobile (~390px),
// jadi di luar breakpoint mobile kita render dalam "device frame" supaya
// proporsinya tetap sama persis dengan desain saat dibuka di desktop.
</script>

<template>
  <div class="min-h-screen w-full bg-slate-100 sm:flex sm:items-center sm:justify-center sm:py-8">
    <div
      class="mx-auto min-h-screen w-full bg-[#f9f9ff] sm:min-h-[850px] sm:max-w-[430px] sm:rounded-[36px] sm:shadow-2xl sm:ring-8 sm:ring-slate-900/5"
    >
      <router-view />
    </div>
  </div>
</template>
