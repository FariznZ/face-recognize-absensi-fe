<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoPtpn1Placeholder from '@/components/icons/LogoPtpn1Placeholder.vue'

const router = useRouter()

/** Tahapan animasi: 'enter' -> 'settle' -> 'exit' untuk koreografi yang smooth. */
const stage = ref('enter')
let redirectTimer = null

function goToLogin() {
  if (stage.value === 'exit') return
  stage.value = 'exit'
  // beri waktu transisi keluar selesai sebelum pindah route
  setTimeout(() => router.replace({ name: 'login' }), 420)
}

onMounted(() => {
  requestAnimationFrame(() => {
    stage.value = 'settle'
  })
  redirectTimer = setTimeout(goToLogin, 2400)
})

onBeforeUnmount(() => {
  if (redirectTimer) clearTimeout(redirectTimer)
})
</script>

<template>
  <div
    class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f4fbf6] via-[#f9f9ff] to-[#eef6ff] transition-opacity duration-[420ms] ease-out"
    :class="stage === 'exit' ? 'opacity-0' : 'opacity-100'"
    role="button"
    tabindex="0"
    aria-label="Lewati animasi pembuka"
    @click="goToLogin"
    @keydown.enter="goToLogin"
  >
    <!-- Ambient animated gradient blobs -->
    <div class="pointer-events-none absolute -left-16 top-10 size-64 rounded-full bg-green-300/25 blur-3xl animate-[float1_7s_ease-in-out_infinite]" />
    <div class="pointer-events-none absolute -right-20 bottom-24 size-72 rounded-full bg-sky-300/25 blur-3xl animate-[float2_8s_ease-in-out_infinite]" />
    <div class="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/40 blur-3xl" />

    <div class="relative flex flex-col items-center px-8 text-center">
      <!-- Logo with scanning-ring reveal -->
      <div
        class="relative mb-7 flex size-28 items-center justify-center transition-all duration-700 ease-out"
        :class="stage === 'enter' ? 'scale-75 opacity-0' : 'scale-100 opacity-100'"
      >
        <span class="absolute inset-0 rounded-[28px] border-2 border-[#006b2c]/25" />
        <span class="absolute inset-0 rounded-[28px] border-2 border-[#006b2c] [clip-path:inset(0_0_0_0)] animate-[spinScan_2.2s_linear_infinite]" />
        <div class="relative flex size-20 items-center justify-center rounded-3xl bg-white p-3 shadow-[0_10px_30px_-8px_rgba(0,107,44,0.35)]">
          <LogoPtpn1Placeholder class="size-full" />
        </div>
      </div>

      <!-- Brand name, fades up slightly after logo -->
      <div
        class="flex flex-col items-center gap-1.5 transition-all duration-700 ease-out"
        :class="stage === 'enter' ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100 delay-150'"
        :style="stage !== 'enter' ? { transitionDelay: '150ms' } : {}"
      >
        <p class="text-[11px] font-bold uppercase tracking-[2.5px] text-[#006b2c]">PTPN I &bull; Regional 2</p>
        <h1 class="text-2xl font-bold tracking-tight text-[#111c2d]">AgroPresence</h1>
        <p class="max-w-[240px] text-sm leading-snug text-[#3e4a3d]">
          Presensi Cerdas Berbasis Pengenalan Wajah
        </p>
      </div>

      <!-- Loading shimmer -->
      <div
        class="mt-10 h-1 w-40 overflow-hidden rounded-full bg-[#dee8ff] transition-opacity duration-700"
        :class="stage === 'enter' ? 'opacity-0' : 'opacity-100 delay-300'"
        :style="stage !== 'enter' ? { transitionDelay: '300ms' } : {}"
      >
        <div class="h-full w-1/3 rounded-full bg-[#006b2c] animate-[loaderSlide_1.1s_ease-in-out_infinite]" />
      </div>
    </div>

    <p
      class="absolute bottom-8 text-[11px] font-medium text-[#6e7b6c] transition-opacity duration-700"
      :class="stage === 'enter' ? 'opacity-0' : 'opacity-100 delay-500'"
      :style="stage !== 'enter' ? { transitionDelay: '500ms' } : {}"
    >
      Ketuk untuk melewati
    </p>
  </div>
</template>

<style scoped>
@keyframes float1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(14px, -18px) scale(1.06);
  }
}
@keyframes float2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-12px, 16px) scale(1.08);
  }
}
@keyframes spinScan {
  0% {
    transform: rotate(0deg);
    opacity: 0.9;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.9;
  }
}
@keyframes loaderSlide {
  0% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(310%);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 1ms !important;
  }
}
</style>
