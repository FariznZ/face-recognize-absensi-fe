<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-[#f9f9ff] p-6 text-center">
    <h1 class="text-xl font-bold text-[#111c2d]">Verifikasi Identitas Tamu</h1>
    <p class="max-w-xs text-sm text-[#3e4a3d]">Layar hasil pengenalan wajah — menyusul diimplementasikan dari Figma.</p>
    <button
      type="button"
      class="mt-4 rounded-xl bg-[#006b2c] px-5 py-2.5 text-sm font-semibold text-white shadow"
      @click="router.push({ name: 'login' })"
    >
      Kembali ke Login
    </button>
  </div>
</template>
