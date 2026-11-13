<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconCheckBadge from '@/components/icons/IconCheckBadge.vue'
import IconBuilding from '@/components/icons/IconBuilding.vue'
import IconMapPin from '@/components/icons/IconMapPin.vue'
import IconClock from '@/components/icons/IconClock.vue'
import IconUsersGroup from '@/components/icons/IconUsersGroup.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconQrScan from '@/components/icons/IconQrScan.vue'
import IconHeadset from '@/components/icons/IconHeadset.vue'

const route = useRoute()
const router = useRouter()

const mode = computed(() => route.query.mode || 'tamu')

// Data tiruan hasil pengenalan wajah — nanti disuplai backend (POST /api/attendance/face-scan).
const guest = {
  name: 'Dr. Ir. Bagus Prasetyo, M.Sc.',
  role: 'Undangan VIP',
  org: 'Kementerian BUMN RI',
  matchScore: 98.6,
  unit: 'PTPN I Regional 2 • Kebun Tanaman Tahunan',
  room: 'Ruang Ballroom Sawit Heritage (Lantai 2)',
  invitationCode: 'Undangan A-14',
  checkInTime: '08:45 WIB',
  event: 'Rapat Koordinasi Evaluasi Kinerja Agribisnis Q3 & Transformasi Digital PTPN 1',
}

const bringCompanion = ref(false)
const isConfirming = ref(false)
const isConfirmed = ref(false)

async function handleConfirmAttendance() {
  isConfirming.value = true
  // TODO: panggil API konfirmasi kehadiran, mis. POST /api/attendance/confirm
  await new Promise((resolve) => setTimeout(resolve, 700))
  isConfirming.value = false
  isConfirmed.value = true
}

function handleDone() {
  router.push({ name: 'login' })
}

function handleRescan() {
  router.push({ name: 'scan', query: { mode: mode.value } })
}
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-[#f9f9ff]">
    <!-- Header -->
    <header class="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-[#f9f9ff]/90 px-4 backdrop-blur-xl">
      <button
        type="button"
        class="flex size-11 items-center justify-center rounded-full text-[#111c2d] transition hover:bg-slate-100"
        aria-label="Kembali"
        @click="router.back()"
      >
        <IconChevronLeft class="size-4" />
      </button>
      <div class="flex flex-col items-center">
        <p class="text-sm font-bold text-[#111c2d]">Verifikasi Identitas</p>
        <p class="text-xs text-[#3e4a3d]">Tahap 3 dari 4</p>
      </div>
      <span class="size-11" />
    </header>

    <main class="flex w-full flex-1 flex-col gap-4 px-4 pb-8">
      <!-- Progress tracker -->
      <div class="flex w-full flex-col gap-2">
        <div class="flex w-full items-center justify-between text-xs">
          <p class="font-bold text-[#3e4a3d]">Progres Presensi</p>
          <p class="font-bold text-[#006b2c]">75%</p>
        </div>
        <div class="h-2 w-full overflow-hidden rounded-full bg-[#dee8ff]">
          <div class="h-full w-3/4 rounded-full bg-[#006b2c] transition-all" />
        </div>
        <div class="flex items-center gap-1.5 pt-1">
          <IconCheckBadge class="size-3.5 text-[#006b2c]" />
          <p class="text-xs font-semibold text-[#3e4a3d]">Wajah berhasil diverifikasi sistem</p>
        </div>
      </div>

      <!-- Biometric recognition card -->
      <div class="relative overflow-hidden rounded-2xl bg-white shadow-sm">
        <div class="h-2 w-full bg-gradient-to-r from-[#006b2c] via-[#4fae73] to-[#0ea5e9]" />
        <div class="flex flex-col items-center px-6 py-7 text-center">
          <!-- Avatar with success ring -->
          <div class="relative mb-4 flex size-28 items-center justify-center">
            <div class="absolute inset-0 rounded-full border-4 border-emerald-400/30" />
            <div class="absolute inset-0 animate-[ring_2s_ease-in-out_infinite] rounded-full border-4 border-emerald-400" />
            <div class="flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-[#dee8ff] to-[#f0f3ff] text-3xl font-bold text-[#006398]">
              {{ guest.name.split(' ').slice(-2).map((w) => w[0]).join('') }}
            </div>
            <span class="absolute -bottom-1 -right-1 flex size-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-4 ring-white">
              <IconCheckBadge class="size-5" />
            </span>
          </div>

          <!-- AI score pill -->
          <div class="mb-3 flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1">
            <span class="size-2 rounded-full bg-emerald-500" />
            <span class="text-xs font-bold text-emerald-700">Kecocokan Wajah {{ guest.matchScore }}%</span>
          </div>

          <h2 class="mb-1 text-xl font-bold leading-snug text-[#111c2d]">{{ guest.name }}</h2>
          <p class="mb-0.5 text-sm text-[#3e4a3d]">{{ guest.org }}</p>
          <p class="mb-4 text-xs text-[#6e7b6c]">{{ guest.invitationCode }}</p>

          <!-- Ribbons -->
          <div class="flex flex-wrap items-center justify-center gap-2">
            <span class="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
              <IconCheckBadge class="size-3.5" />
              {{ guest.role }}
            </span>
            <span class="flex items-center gap-1.5 rounded-full bg-[#e7eeff] px-3 py-1.5 text-xs font-bold text-[#006398]">
              <IconUsersGroup class="size-3.5" />
              Tamu Terverifikasi
            </span>
          </div>
        </div>
      </div>

      <!-- Event & attendance details -->
      <div class="rounded-2xl bg-white p-5 shadow-sm">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="flex items-center gap-2 text-base font-bold text-[#111c2d]">
            <IconBuilding class="size-[17px] text-[#006b2c]" />
            Detail Acara
          </h3>
          <span class="flex items-center gap-1.5 rounded-full bg-[#dee8ff] px-2.5 py-1 text-[11px] font-bold text-[#006398]">
            <span class="size-1.5 rounded-full bg-[#006398]" />
            Berlangsung
          </span>
        </div>

        <div class="flex flex-col divide-y divide-slate-100">
          <div class="flex gap-3 pb-4">
            <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#f0f3ff] text-[#006398]">
              <IconBuilding class="size-4" />
            </span>
            <div class="flex flex-col">
              <p class="text-xs font-semibold text-[#3e4a3d]">Asal Delegasi / Unit Kerja</p>
              <p class="text-sm font-bold leading-snug text-[#111c2d]">{{ guest.unit }}</p>
            </div>
          </div>
          <div class="flex gap-3 py-4">
            <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#f0f3ff] text-[#006398]">
              <IconMapPin class="size-4" />
            </span>
            <div class="flex flex-col">
              <p class="text-xs font-semibold text-[#3e4a3d]">Alokasi Ruangan Acara</p>
              <p class="text-sm font-bold leading-snug text-[#111c2d]">{{ guest.room }}</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3 pt-4">
            <div class="flex flex-col gap-1">
              <p class="text-xs font-semibold text-[#3e4a3d]">Status Registrasi</p>
              <p class="text-sm font-bold text-[#111c2d]">{{ guest.invitationCode }}</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="flex items-center gap-1 text-xs font-semibold text-[#3e4a3d]">
                <IconClock class="size-3" />
                Waktu Check-In
              </p>
              <p class="text-sm font-bold text-[#111c2d]">{{ guest.checkInTime }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Companion toggle -->
      <div class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
        <div class="flex items-center gap-3">
          <span class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f0f3ff] text-[#006398]">
            <IconUsersGroup class="size-[18px]" />
          </span>
          <div class="flex flex-col">
            <p class="text-xs font-semibold text-[#111c2d]">Didampingi Ajudan / Pendamping?</p>
            <p class="text-xs text-[#3e4a3d]">Aktifkan jika datang bersama rombongan</p>
          </div>
        </div>
        <button
          type="button"
          role="switch"
          :aria-checked="bringCompanion"
          class="relative h-7 w-12 shrink-0 rounded-full transition-colors"
          :class="bringCompanion ? 'bg-[#006b2c]' : 'bg-slate-200'"
          @click="bringCompanion = !bringCompanion"
        >
          <span
            class="absolute top-1 size-5 rounded-full bg-white shadow transition-transform"
            :class="bringCompanion ? 'translate-x-6' : 'translate-x-1'"
          />
        </button>
      </div>

      <!-- CTA area -->
      <div class="flex flex-col gap-3 pt-1">
        <button
          v-if="!isConfirmed"
          type="button"
          :disabled="isConfirming"
          class="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#006b2c] text-sm font-semibold text-white shadow-md transition active:scale-[0.99] disabled:opacity-60"
          @click="handleConfirmAttendance"
        >
          {{ isConfirming ? 'Mengonfirmasi…' : 'Konfirmasi Kehadiran' }}
          <IconArrowRight v-if="!isConfirming" class="size-3.5" />
        </button>

        <div v-else class="flex flex-col items-center gap-3 rounded-xl bg-emerald-50 p-4 text-center">
          <IconCheckBadge class="size-7 text-emerald-600" />
          <p class="text-sm font-bold text-emerald-700">Kehadiran berhasil dicatat!</p>
          <button
            type="button"
            class="flex h-10 w-full items-center justify-center rounded-lg bg-[#006b2c] px-4 text-xs font-semibold text-white"
            @click="handleDone"
          >
            Selesai
          </button>
        </div>

        <div v-if="!isConfirmed" class="flex gap-3">
          <button
            type="button"
            class="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#f0f3ff] text-xs font-semibold text-[#006b2c]"
            @click="handleRescan"
          >
            <IconQrScan class="size-3.5" />
            Pindai Ulang
          </button>
          <button
            type="button"
            class="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#f0f3ff] text-xs font-semibold text-[#006b2c]"
          >
            <IconHeadset class="size-3.5" />
            Hubungi Panitia
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes ring {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
</style>
