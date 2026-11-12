<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import LogoPtpn1Placeholder from '@/components/icons/LogoPtpn1Placeholder.vue'
import IconIdCard from '@/components/icons/IconIdCard.vue'
import IconUsers from '@/components/icons/IconUsers.vue'
import IconLock from '@/components/icons/IconLock.vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconShieldCheck from '@/components/icons/IconShieldCheck.vue'
import IconHeadset from '@/components/icons/IconHeadset.vue'
import IconFaceScan from '@/components/icons/IconFaceScan.vue'
import IconUserPlus from '@/components/icons/IconUserPlus.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconLogin from '@/components/icons/IconLogin.vue'

const router = useRouter()

/** 'petugas' = Petugas/Operator (login NIP + password), 'tamu' = Tamu Delegasi (walk-in) */
const activeTab = ref('petugas')

const form = reactive({
  nip: '',
  password: '',
  rememberMe: false,
})

const showPassword = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

const progressPercent = computed(() => 25) // Tahap 1 dari 4

function selectTab(tab) {
  activeTab.value = tab
  errorMessage.value = ''
}

function togglePassword() {
  showPassword.value = !showPassword.value
}

async function handleStartFaceLogin() {
  // Tahap 2: lanjut ke layar pemindaian wajah.
  // TODO: kirim context (mode petugas/tamu) ke backend saat endpoint tersedia.
  router.push({ name: 'scan', query: { mode: activeTab.value } })
}

async function handleSubmitCredentials() {
  errorMessage.value = ''

  if (!form.nip || !form.password) {
    errorMessage.value = 'NIP/ID Petugas dan kata sandi wajib diisi.'
    return
  }

  isSubmitting.value = true
  try {
    // TODO: panggil API auth Python (mis. POST /api/auth/login) di sini.
    // await authApi.login({ nip: form.nip, password: form.password })
    await new Promise((resolve) => setTimeout(resolve, 600))
    router.push({ name: 'beranda' })
  } catch (err) {
    errorMessage.value = 'Gagal masuk. Periksa kembali NIP dan kata sandi.'
  } finally {
    isSubmitting.value = false
  }
}

function handleQuickBiometricLogin() {
  router.push({ name: 'scan', query: { mode: 'quick' } })
}

function handleGuestRegistration() {
  router.push({ name: 'scan', query: { mode: 'tamu-baru' } })
}
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-[#f9f9ff]">
    <!-- Header -->
    <header class="sticky top-0 z-10 w-full bg-[#f9f9ff]/80 backdrop-blur-xl">
      <div class="flex h-14 w-full items-center justify-between px-4">
        <div class="flex items-center gap-1">
          <div class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm">
            <LogoPtpn1Placeholder class="size-full" />
          </div>
          <div class="flex flex-col">
            <p class="text-[10px] font-bold uppercase tracking-wide text-[#006b2c]">PTPN I</p>
            <p class="text-xs font-bold text-[#111c2d]">Regional 2</p>
          </div>
        </div>
        <div class="flex items-center gap-1 rounded-full bg-[#e7eeff] px-2.5 py-1">
          <span class="size-1.5 rounded-full bg-[#006b2c]" />
          <span class="text-[10px] font-bold text-[#3e4a3d]">Sistem Presensi</span>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex w-full flex-1 flex-col px-4 pb-6">
      <!-- Progress tracker -->
      <div class="w-full pb-4 pt-4">
        <div class="flex w-full flex-col gap-2 rounded-xl bg-white p-3.5 shadow-sm">
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="size-2 rounded-full bg-[#006b2c]" />
              <p class="text-[10px] font-bold uppercase tracking-wide text-[#006b2c]">
                Tahap 1 dari 4 &bull; Pintu Masuk Presensi Tamu
              </p>
            </div>
            <p class="text-[10px] font-bold text-[#3e4a3d]">{{ progressPercent }}%</p>
          </div>
          <div class="h-2 w-full overflow-hidden rounded-full bg-[#dee8ff]">
            <div
              class="h-full rounded-full bg-[#006b2c] transition-all"
              :style="{ width: `${progressPercent}%` }"
            />
          </div>
        </div>
      </div>

      <!-- Brand & identity banner -->
      <div class="relative w-full overflow-hidden rounded-2xl bg-white p-5 shadow-sm">
        <div class="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-green-300/30 blur-3xl" />
        <div class="pointer-events-none absolute -bottom-12 -left-12 size-36 rounded-full bg-sky-200/40 blur-3xl" />

        <div class="relative flex w-full flex-col items-center text-center">
          <div class="mb-3.5 flex size-20 items-center justify-center rounded-2xl bg-[#f0f3ff] p-2 shadow-sm">
            <LogoPtpn1Placeholder class="size-full" />
          </div>
          <div class="mb-2 flex items-center gap-1.5 rounded-full bg-[#e7eeff] px-3 py-1">
            <span class="size-2 rounded-full bg-[#006b2c]" />
            <span class="text-[10px] font-bold uppercase tracking-wide text-[#006b2c]">PTPN I &bull; Regional 2</span>
          </div>
          <h1 class="mb-1 text-[22px] font-bold leading-tight text-[#111c2d]">
            Tahap 1 dari 4: Masuk &amp; Mulai Presensi
          </h1>
          <p class="max-w-[280px] text-sm leading-snug text-[#3e4a3d]">
            Presensi Tamu &amp; Petugas Cerdas Berbasis Biometrik Pengenalan Wajah
          </p>
        </div>
      </div>

      <!-- Role / mode selector tabs -->
      <div class="w-full pb-5 pt-[22px]">
        <div class="relative flex w-full items-center rounded-xl bg-[#dee8ff] p-1.5">
          <button
            type="button"
            class="relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors"
            :class="activeTab === 'petugas' ? 'bg-white text-[#006b2c] shadow-sm' : 'text-[#3e4a3d]'"
            @click="selectTab('petugas')"
          >
            <IconIdCard class="size-[15px]" />
            Petugas / Operator
          </button>
          <button
            type="button"
            class="relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors"
            :class="activeTab === 'tamu' ? 'bg-white text-[#006b2c] shadow-sm' : 'text-[#3e4a3d]'"
            @click="selectTab('tamu')"
          >
            <IconUsers class="size-[15px]" />
            Tamu Delegasi
          </button>
        </div>
      </div>

      <!-- FORM CONTAINER: PETUGAS / OPERATOR -->
      <div v-if="activeTab === 'petugas'" class="w-full">
        <!-- Alur presensi otomatis (quick face login shortcut) -->
        <div class="mb-3.5 flex w-full flex-col gap-2.5 rounded-xl bg-[#006b2c]/10 p-3.5">
          <div class="flex w-full items-center justify-between">
            <p class="text-[10px] font-bold uppercase tracking-wide text-[#006b2c]">Alur Presensi Otomatis</p>
            <p class="text-[10px] font-bold text-[#3e4a3d]">Siap Pindai</p>
          </div>
          <button
            type="button"
            class="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#006b2c] text-sm font-semibold text-white shadow-md transition active:scale-[0.99]"
            @click="handleStartFaceLogin"
          >
            <IconFaceScan class="size-[17px]" />
            Mulai Presensi Wajah (Tahap 2)
            <IconArrowRight class="size-3" />
          </button>
        </div>

        <form class="flex w-full flex-col gap-3.5" @submit.prevent="handleSubmitCredentials">
          <!-- Field: NIP / ID Petugas -->
          <div class="flex w-full flex-col gap-1.5">
            <div class="flex w-full items-center justify-between">
              <label for="nip" class="text-xs font-semibold text-[#111c2d]">NIP / ID Petugas / Email Dinas</label>
              <span class="text-[10px] font-bold text-[#3e4a3d]">Regional 2</span>
            </div>
            <div class="relative flex w-full items-center">
              <span class="pointer-events-none absolute left-3.5 flex size-[17px] items-center text-[#3e4a3d]">
                <IconIdCard class="size-full" />
              </span>
              <input
                id="nip"
                v-model="form.nip"
                type="text"
                autocomplete="username"
                placeholder="REG2-884920"
                class="h-12 w-full rounded-xl bg-white pl-11 pr-4 text-sm text-[#111c2d] shadow-sm outline-none ring-1 ring-transparent placeholder:text-[#9aa5b1] focus:ring-2 focus:ring-[#006b2c]"
              />
            </div>
          </div>

          <!-- Field: Password -->
          <div class="flex w-full flex-col gap-1.5">
            <label for="password" class="text-xs font-semibold text-[#111c2d]">Kata Sandi SSO Presensi</label>
            <div class="relative flex w-full items-center">
              <span class="pointer-events-none absolute left-3.5 flex size-[15px] items-center text-[#3e4a3d]">
                <IconLock class="size-full" />
              </span>
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                class="h-12 w-full rounded-xl bg-white pl-11 pr-12 text-sm text-[#111c2d] shadow-sm outline-none ring-1 ring-transparent placeholder:text-[#9aa5b1] focus:ring-2 focus:ring-[#006b2c]"
              />
              <button
                type="button"
                class="absolute right-2 flex size-8 items-center justify-center rounded-lg text-[#3e4a3d] transition hover:bg-slate-100"
                :aria-label="showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'"
                @click="togglePassword"
              >
                <IconEye class="size-[18px]" :open="showPassword" />
              </button>
            </div>
          </div>

          <!-- Remember me & forgot password -->
          <div class="flex w-full items-center justify-between pt-1">
            <label class="flex items-center gap-2 text-xs text-[#3e4a3d]">
              <input
                v-model="form.rememberMe"
                type="checkbox"
                class="size-4 rounded accent-[#006b2c]"
              />
              Ingat Perangkat Ini
            </label>
            <a href="#" class="text-xs font-semibold text-[#006398]">Lupa Kata Sandi?</a>
          </div>

          <p v-if="errorMessage" class="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
            {{ errorMessage }}
          </p>

          <!-- Primary submit -->
          <div class="w-full pt-2">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#006b2c] text-sm font-semibold text-white shadow-md transition active:scale-[0.99] disabled:opacity-60"
            >
              <IconLogin class="size-[15px]" />
              {{ isSubmitting ? 'Memproses…' : 'Masuk ke Beranda & Acara' }}
            </button>
          </div>
        </form>

        <!-- Quick biometric shortcut card -->
        <button
          type="button"
          class="mt-3.5 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"
          @click="handleQuickBiometricLogin"
        >
          <div class="flex items-center gap-3">
            <span class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#dee8ff] text-[#006398]">
              <IconFaceScan class="size-[18px]" />
            </span>
            <span class="flex flex-col items-start text-left">
              <span class="text-xs font-semibold text-[#111c2d]">Masuk Cepat Biometrik Wajah</span>
              <span class="text-xs text-[#3e4a3d]">Langsung ke Beranda &amp; Acara</span>
            </span>
          </div>
          <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-100/70 text-[#006398]">
            <IconChevronRight class="size-3.5" />
          </span>
        </button>

        <!-- Divider -->
        <div class="relative flex w-full items-center justify-center py-5">
          <div class="h-px w-full bg-[#d8e3fb]" />
          <span class="absolute bg-[#f9f9ff] px-3 text-[10px] font-bold uppercase tracking-wide text-[#3e4a3d]">
            Atau Autentikasi Instan
          </span>
        </div>

        <!-- Guest walk-in registration -->
        <button
          type="button"
          class="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#f0f3ff] text-xs font-semibold text-[#006b2c] shadow-sm"
          @click="handleGuestRegistration"
        >
          <IconUserPlus class="size-[17px]" />
          Registrasi Tamu Baru / Walk-in
        </button>
      </div>

      <!-- FORM CONTAINER: TAMU DELEGASI -->
      <div v-else class="w-full">
        <div class="mb-3.5 flex w-full flex-col gap-2.5 rounded-xl bg-[#006398]/10 p-3.5">
          <p class="text-[10px] font-bold uppercase tracking-wide text-[#006398]">Jalur Tamu Delegasi</p>
          <p class="text-xs leading-relaxed text-[#3e4a3d]">
            Belum terdaftar sebagai undangan? Lakukan pemindaian wajah untuk verifikasi otomatis,
            atau daftar sebagai tamu walk-in jika datang tanpa undangan resmi.
          </p>
        </div>

        <button
          type="button"
          class="mb-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#006b2c] text-sm font-semibold text-white shadow-md transition active:scale-[0.99]"
          @click="handleStartFaceLogin"
        >
          <IconFaceScan class="size-[17px]" />
          Verifikasi Wajah Sekarang
          <IconArrowRight class="size-3" />
        </button>

        <button
          type="button"
          class="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#f0f3ff] text-xs font-semibold text-[#006b2c] shadow-sm"
          @click="handleGuestRegistration"
        >
          <IconUserPlus class="size-[17px]" />
          Registrasi Tamu Baru / Walk-in
        </button>
      </div>

      <!-- Footer: connection status & support -->
      <div class="flex w-full flex-col items-center gap-2 pt-8 text-center">
        <div class="flex items-center gap-1.5">
          <IconShieldCheck class="size-[13px] text-[#3e4a3d]" />
          <p class="text-[10px] font-bold text-[#3e4a3d]">Terkoneksi ke Server Cloud PTPN I Regional 2</p>
        </div>
        <p class="px-6 text-xs leading-snug text-[#6e7b6c]">
          AgroPresence Enterprise v2.4.0 &bull; Hak Cipta Dilindungi Undang-Undang
        </p>
        <div class="flex items-center gap-1 pt-1">
          <IconHeadset class="size-[11px] text-[#3e4a3d]" />
          <p class="text-[10px] font-bold text-[#3e4a3d]">Bantuan Usher &amp; Meja Registrasi IT</p>
        </div>
      </div>
    </main>
  </div>
</template>
