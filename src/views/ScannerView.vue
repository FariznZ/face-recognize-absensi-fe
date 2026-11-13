<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import LogoPtpn1Placeholder from '@/components/icons/LogoPtpn1Placeholder.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconFaceScan from '@/components/icons/IconFaceScan.vue'
import IconCheckBadge from '@/components/icons/IconCheckBadge.vue'
import IconFlash from '@/components/icons/IconFlash.vue'
import IconCameraFlip from '@/components/icons/IconCameraFlip.vue'
import IconHelpCircle from '@/components/icons/IconHelpCircle.vue'
import IconQrScan from '@/components/icons/IconQrScan.vue'
import IconKeyboard from '@/components/icons/IconKeyboard.vue'
import IconHeadset from '@/components/icons/IconHeadset.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

const route = useRoute()
const router = useRouter()

/** Mode datang dari layar sebelumnya: 'petugas' | 'tamu' | 'quick' | 'tamu-baru' */
const mode = computed(() => route.query.mode || 'tamu')

/** State mesin pemindaian: idle -> scanning -> detected -> matched */
const scanState = ref('scanning')
const matchScore = ref(0)
let scoreTimer = null
let stateTimer = null

// Data tamu tiruan yang "terdeteksi" — nanti diganti hasil API pengenalan wajah backend.
const detectedGuest = {
  name: 'Dr. Ir. Bagus Prasetyo, M.Sc.',
  org: 'Kementerian BUMN RI',
  role: 'Undangan VIP',
}

function startDetectionSequence() {
  scanState.value = 'scanning'
  matchScore.value = 0

  stateTimer = setTimeout(() => {
    scanState.value = 'detected'
    scoreTimer = setInterval(() => {
      matchScore.value = Math.min(matchScore.value + Math.round(6 + Math.random() * 10), 97)
      if (matchScore.value >= 97) {
        clearInterval(scoreTimer)
        scanState.value = 'matched'
      }
    }, 140)
  }, 1800)
}

function goToVerification() {
  router.push({ name: 'verifikasi', query: { mode: mode.value } })
}

function goToDashboard() {
  router.push({ name: 'beranda' })
}

function handleConfirm() {
  if (mode.value === 'petugas' || mode.value === 'quick') {
    goToDashboard()
  } else {
    goToVerification()
  }
}

function retryScan() {
  startDetectionSequence()
}

onMounted(() => {
  startDetectionSequence()
})

onBeforeUnmount(() => {
  clearTimeout(stateTimer)
  clearInterval(scoreTimer)
})

const statusLabel = computed(() => {
  switch (scanState.value) {
    case 'scanning':
      return 'Mencari wajah…'
    case 'detected':
      return 'Menganalisis kecocokan…'
    case 'matched':
      return 'Wajah terverifikasi'
    default:
      return ''
  }
})
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-[#0b1710]">
    <!-- Header -->
    <header class="relative z-20 flex h-16 w-full items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-3">
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur"
        aria-label="Kembali"
        @click="router.back()"
      >
        <IconChevronLeft class="size-5" />
      </button>
      <div class="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
        <span class="flex size-6 items-center justify-center rounded-full bg-white p-0.5">
          <LogoPtpn1Placeholder class="size-full" />
        </span>
        <span class="text-xs font-semibold text-white">Presensi Wajah</span>
      </div>
      <span class="size-10" />
    </header>

    <!-- Main -->
    <main class="relative flex w-full flex-1 flex-col gap-5 px-4 pb-6 pt-1 text-white">
      <!-- Telemetry bar -->
      <div class="flex flex-col gap-2 rounded-2xl bg-white/10 p-3 backdrop-blur">
        <div class="flex items-center justify-between text-xs">
          <span class="flex items-center gap-1.5 font-semibold">
            <span class="relative flex size-2.5">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                :class="scanState === 'matched' ? 'bg-emerald-400' : 'bg-amber-300'"
              />
              <span
                class="relative inline-flex size-2.5 rounded-full"
                :class="scanState === 'matched' ? 'bg-emerald-400' : 'bg-amber-300'"
              />
            </span>
            {{ statusLabel }}
          </span>
          <span class="font-bold">{{ matchScore }}%</span>
        </div>
        <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <div
            class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-300 transition-all duration-150"
            :style="{ width: `${scanState === 'scanning' ? 20 : matchScore}%` }"
          />
        </div>
      </div>

      <!-- Viewfinder -->
      <div class="relative mx-auto w-full max-w-sm overflow-hidden rounded-[28px] bg-gradient-to-br from-[#16281c] to-[#0c1712] shadow-inner" style="aspect-ratio: 3 / 4">
        <!-- subtle vignette -->
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

        <!-- oval face guide -->
        <div class="absolute left-1/2 top-[42%] w-[66%] -translate-x-1/2 -translate-y-1/2" style="aspect-ratio: 4 / 5">
          <div
            class="relative size-full rounded-[50%] border-2 transition-colors duration-500"
            :class="scanState === 'matched' ? 'border-emerald-400' : 'border-white/70'"
          >
            <!-- corner brackets -->
            <span class="absolute -left-2 -top-2 size-6 rounded-tl-xl border-l-2 border-t-2 border-white/90" />
            <span class="absolute -right-2 -top-2 size-6 rounded-tr-xl border-r-2 border-t-2 border-white/90" />
            <span class="absolute -bottom-2 -left-2 size-6 rounded-bl-xl border-b-2 border-l-2 border-white/90" />
            <span class="absolute -bottom-2 -right-2 size-6 rounded-br-xl border-b-2 border-r-2 border-white/90" />

            <!-- scan line -->
            <div
              v-if="scanState !== 'matched'"
              class="absolute inset-x-2 h-0.5 rounded-full bg-emerald-300/90 shadow-[0_0_12px_2px_rgba(110,231,183,0.8)] animate-[scanline_1.8s_ease-in-out_infinite]"
            />

            <!-- success check -->
            <transition name="pop">
              <div v-if="scanState === 'matched'" class="absolute inset-0 flex items-center justify-center">
                <div class="flex size-16 items-center justify-center rounded-full bg-emerald-400 text-[#0b1710] shadow-lg">
                  <IconCheckBadge class="size-9" />
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- floating match tag -->
        <div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[11px] font-semibold backdrop-blur">
          <IconFaceScan class="size-3.5" />
          {{ scanState === 'idle' ? 'Bersiap…' : statusLabel }}
        </div>

        <!-- detected guest hint card -->
        <transition name="slide-up">
          <div
            v-if="scanState === 'detected' || scanState === 'matched'"
            class="absolute inset-x-3 bottom-3 flex flex-col gap-3 rounded-2xl bg-white/95 p-3 text-[#111c2d] shadow-xl backdrop-blur"
          >
            <div class="flex items-center gap-3">
              <div class="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dee8ff] text-[#006398]">
                <IconFaceScan class="size-5" />
              </div>
              <div class="flex min-w-0 flex-col">
                <p class="truncate text-sm font-bold">{{ detectedGuest.name }}</p>
                <p class="truncate text-xs text-[#3e4a3d]">{{ detectedGuest.org }}</p>
              </div>
              <span class="ml-auto shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                {{ detectedGuest.role }}
              </span>
            </div>
            <button
              type="button"
              class="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006b2c] text-sm font-semibold text-white shadow transition active:scale-[0.99] disabled:opacity-50"
              :disabled="scanState !== 'matched'"
              @click="handleConfirm"
            >
              {{ scanState === 'matched' ? 'Konfirmasi & Lanjutkan' : 'Memverifikasi…' }}
              <IconArrowRight class="size-3.5" />
            </button>
          </div>
        </transition>
      </div>

      <!-- Instruction hint -->
      <p v-if="scanState !== 'matched'" class="px-6 text-center text-xs leading-relaxed text-white/70">
        Posisikan wajah Anda di dalam bingkai oval, pastikan pencahayaan cukup dan lepas masker/kacamata gelap.
      </p>

      <!-- Camera controls -->
      <div class="mx-auto flex w-full max-w-sm items-center justify-around rounded-2xl bg-white/10 py-2 backdrop-blur">
        <button type="button" class="flex flex-col items-center gap-1 px-4 py-1.5 text-white/80">
          <IconFlash class="size-[18px]" />
          <span class="text-[11px] font-medium">Senter</span>
        </button>
        <button type="button" class="flex flex-col items-center gap-1 px-4 py-1.5 text-white/80" @click="retryScan">
          <IconCameraFlip class="size-[18px]" />
          <span class="text-[11px] font-medium">Pindai Ulang</span>
        </button>
        <button type="button" class="flex flex-col items-center gap-1 px-4 py-1.5 text-white/80">
          <IconHelpCircle class="size-[18px]" />
          <span class="text-[11px] font-medium">Bantuan</span>
        </button>
      </div>

      <!-- Alternative check-in -->
      <div class="rounded-2xl bg-white/5 p-4">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-bold text-white/80">Opsi Check-in Lain</p>
        </div>
        <div class="flex gap-2">
          <button type="button" class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-2.5 text-xs font-semibold text-white">
            <IconQrScan class="size-4" />
            Pindai QR
          </button>
          <button type="button" class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-2.5 text-xs font-semibold text-white">
            <IconKeyboard class="size-4" />
            Input Manual
          </button>
        </div>
        <div class="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
          <p class="text-[11px] leading-snug text-white/60">Wajah tidak terdeteksi atau bermasalah?</p>
          <button type="button" class="flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
            Hubungi Panitia
            <IconChevronRight class="size-3" />
          </button>
        </div>
      </div>

      <!-- Usher assist pill -->
      <button type="button" class="mx-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white/70">
        <IconHeadset class="size-3.5" />
        Hubungi Usher Terdekat
      </button>
    </main>
  </div>
</template>

<style scoped>
@keyframes scanline {
  0%,
  100% {
    top: 12%;
  }
  50% {
    top: 85%;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 260ms ease,
    transform 260ms ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

.pop-enter-active {
  transition:
    opacity 260ms ease,
    transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
</style>
