<script setup>
import { useRouter } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import BottomNav from '@/components/layout/BottomNav.vue'

import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconUsersGroup from '@/components/icons/IconUsersGroup.vue'
import IconAlertCircle from '@/components/icons/IconAlertCircle.vue'
import IconTrendUp from '@/components/icons/IconTrendUp.vue'
import IconFaceScan from '@/components/icons/IconFaceScan.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconQrScan from '@/components/icons/IconQrScan.vue'
import IconUserPlus from '@/components/icons/IconUserPlus.vue'
import IconBook from '@/components/icons/IconBook.vue'
import IconHelpCircle from '@/components/icons/IconHelpCircle.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconClock from '@/components/icons/IconClock.vue'
import IconMapPin from '@/components/icons/IconMapPin.vue'

const router = useRouter()

const stats = [
  { label: 'Total Undangan', value: '248', icon: IconUsersGroup, trend: '+12 hari ini' },
  { label: 'Tamu Hadir', value: '186', icon: IconTrendUp, trend: '75% kehadiran' },
  { label: 'Belum Check-In', value: '62', icon: IconAlertCircle, trend: 'perlu tindak lanjut' },
]

const activeEvent = {
  title: 'Rapat Koordinasi Evaluasi Kinerja Agribisnis Q3 & Transformasi Digital PTPN 1',
  unit: 'Divisi Perencanaan Strategis, TI & Manajemen Risiko',
  room: 'Ballroom Sawit Heritage, Lt. 2',
  time: '08.00 – 12.00 WIB',
}

const quickActions = [
  { label: 'Scan QR Undangan', desc: 'Verifikasi tamu via kode QR', icon: IconQrScan, action: () => router.push({ name: 'scan', query: { mode: 'petugas' } }) },
  { label: 'Pendaftaran Tamu Baru', desc: 'Daftarkan tamu walk-in', icon: IconUserPlus, action: () => router.push({ name: 'scan', query: { mode: 'tamu-baru' } }) },
  { label: 'Buku Tamu Real-time', desc: 'Lihat daftar hadir langsung', icon: IconBook, action: () => router.push({ name: 'admin' }) },
  { label: 'Bantuan Petugas', desc: 'Hubungi tim IT & panitia', icon: IconHelpCircle, action: () => {} },
]

const recentGuests = [
  { name: 'Ir. Siti Rahmawati, S.P., M.M.', org: 'Dinas Perkebunan Jawa Barat', time: '08.52 WIB', tag: 'VIP' },
  { name: 'Hendra Wijaya', org: 'Manajer Kebun Ciater PTPN 1', time: '08.47 WIB', tag: 'Internal' },
  { name: 'Dr. Ir. Bagus Prasetyo, M.Sc.', org: 'Kementerian BUMN RI', time: '08.45 WIB', tag: 'VIP' },
]

function startFaceAttendance() {
  router.push({ name: 'scan', query: { mode: 'petugas' } })
}
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-[#f9f9ff] pb-4">
    <AppHeader name="Agus Setiawan" subtitle="Petugas Registrasi" badge="Regional 2" />

    <main class="flex w-full flex-1 flex-col gap-5 px-4">
      <!-- Welcome banner -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#006b2c] to-[#0a8a3f] p-5 text-white shadow-md">
        <div class="pointer-events-none absolute -right-8 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
        <div class="relative flex items-center justify-between">
          <span class="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold">
            <span class="size-1.5 rounded-full bg-emerald-300" />
            Sistem Aktif
          </span>
          <span class="flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
            <IconClock class="size-3" />
            {{ new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }) }}
          </span>
        </div>
        <h1 class="relative mt-3 text-lg font-bold leading-snug">
          Selamat Datang di PT Perkebunan Nusantara I Regional 2
        </h1>
        <p class="relative mt-2 flex items-center gap-1.5 text-xs text-white/85">
          <IconMapPin class="size-3.5" />
          Kantor Regional 2 — Bandung, Jawa Barat
        </p>
      </div>

      <!-- Quick stats -->
      <div class="grid grid-cols-3 gap-2.5">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center gap-1.5 rounded-xl bg-white p-3 text-center shadow-sm">
          <component :is="stat.icon" class="size-4 text-[#006b2c]" />
          <p class="text-xl font-bold text-[#111c2d]">{{ stat.value }}</p>
          <p class="text-[10px] font-semibold leading-tight text-[#3e4a3d]">{{ stat.label }}</p>
          <p class="text-[9px] leading-tight text-[#9aa5b1]">{{ stat.trend }}</p>
        </div>
      </div>

      <!-- Primary face biometrics CTA -->
      <div class="relative overflow-hidden rounded-2xl bg-[#111c2d] p-5 text-white shadow-md">
        <div class="pointer-events-none absolute -right-6 -top-8 size-32 rounded-full bg-[#006b2c]/40 blur-2xl" />
        <div class="relative flex items-center justify-between">
          <span class="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold">
            <span class="size-1.5 rounded-full bg-emerald-400" />
            Kamera Siap
          </span>
        </div>
        <h3 class="relative mt-3 text-base font-bold">Mulai Presensi Wajah (Face Recognition)</h3>
        <p class="relative mt-1 text-xs leading-relaxed text-white/70">
          Arahkan wajah ke kamera untuk check-in instan &amp; verifikasi identitas tamu otomatis
        </p>
        <button
          type="button"
          class="relative mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006b2c] text-sm font-semibold text-white shadow transition active:scale-[0.99]"
          @click="startFaceAttendance"
        >
          <IconFaceScan class="size-[17px]" />
          Mulai Pemindaian
          <IconArrowRight class="size-3.5" />
        </button>
      </div>

      <!-- Active event selector -->
      <div class="rounded-2xl bg-white p-4 shadow-sm">
        <div class="mb-3 flex items-center justify-between">
          <p class="flex items-center gap-1.5 text-xs font-bold text-[#006b2c]">
            <IconCalendar class="size-3.5" />
            Acara Aktif Saat Ini
          </p>
          <button type="button" class="flex items-center gap-1 text-xs font-semibold text-[#006398]">
            Ganti Acara
            <IconChevronRight class="size-3" />
          </button>
        </div>
        <h4 class="mb-1 text-sm font-bold leading-snug text-[#111c2d]">{{ activeEvent.title }}</h4>
        <p class="mb-3 text-xs text-[#3e4a3d]">{{ activeEvent.unit }}</p>
        <div class="flex flex-wrap gap-2">
          <span class="flex items-center gap-1.5 rounded-lg bg-[#f0f3ff] px-2.5 py-1.5 text-[11px] font-semibold text-[#006398]">
            <IconMapPin class="size-3" />
            {{ activeEvent.room }}
          </span>
          <span class="flex items-center gap-1.5 rounded-lg bg-[#f0f3ff] px-2.5 py-1.5 text-[11px] font-semibold text-[#006398]">
            <IconClock class="size-3" />
            {{ activeEvent.time }}
          </span>
        </div>
      </div>

      <!-- Quick action grid -->
      <div>
        <div class="mb-3 flex items-center justify-between">
          <h3 class="text-sm font-bold text-[#111c2d]">Aksi Cepat</h3>
          <p class="text-xs text-[#9aa5b1]">4 fitur utama</p>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="action in quickActions"
            :key="action.label"
            type="button"
            class="flex flex-col items-start gap-3 rounded-xl bg-white p-3.5 text-left shadow-sm transition active:scale-[0.98]"
            @click="action.action"
          >
            <span class="flex size-10 items-center justify-center rounded-xl bg-[#f0f3ff] text-[#006398]">
              <component :is="action.icon" class="size-[18px]" />
            </span>
            <span class="flex flex-col gap-0.5">
              <span class="text-xs font-bold leading-tight text-[#111c2d]">{{ action.label }}</span>
              <span class="text-[11px] leading-snug text-[#3e4a3d]">{{ action.desc }}</span>
            </span>
          </button>
        </div>
      </div>

      <!-- Recent guest check-in -->
      <div>
        <div class="mb-3 flex items-center justify-between">
          <h3 class="flex items-center gap-2 text-sm font-bold text-[#111c2d]">
            <span class="size-2 rounded-full bg-emerald-400" />
            Tamu Check-In Terbaru
          </h3>
          <button type="button" class="text-xs font-semibold text-[#006398]">Lihat Semua</button>
        </div>
        <div class="flex flex-col gap-2.5">
          <div v-for="guest in recentGuests" :key="guest.name" class="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <div class="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#dee8ff] to-[#f0f3ff] text-xs font-bold text-[#006398]">
              {{ guest.name.split(' ').map((w) => w[0]).slice(0, 2).join('') }}
              <span class="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white">
                <svg viewBox="0 0 24 24" class="size-2.5" fill="none"><path d="M5 12.5 10 17 19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </span>
            </div>
            <div class="flex min-w-0 flex-1 flex-col">
              <p class="truncate text-xs font-bold text-[#111c2d]">{{ guest.name }}</p>
              <p class="truncate text-[11px] text-[#3e4a3d]">{{ guest.org }}</p>
            </div>
            <div class="flex shrink-0 flex-col items-end gap-1">
              <span
                class="rounded-full px-2 py-0.5 text-[10px] font-bold"
                :class="guest.tag === 'VIP' ? 'bg-amber-100 text-amber-700' : 'bg-[#e7eeff] text-[#006398]'"
              >
                {{ guest.tag }}
              </span>
              <span class="text-[10px] text-[#9aa5b1]">{{ guest.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <BottomNav />
  </div>
</template>
