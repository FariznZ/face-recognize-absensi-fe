<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-[#f9f9ff] p-6 text-center">
    <p class="text-xs font-bold uppercase tracking-wide text-[#006b2c]">Tahap 2 dari 4</p>
    <h1 class="text-xl font-bold text-[#111c2d]">Scanner Face Recognition</h1>
    <p class="max-w-xs text-sm text-[#3e4a3d]">
      Layar pemindaian wajah — menyusul diimplementasikan dari Figma.
      Mode saat ini: <span class="font-semibold">{{ route.query.mode || 'default' }}</span>
    </p>
    <button
      type="button"
      class="mt-4 rounded-xl bg-[#006b2c] px-5 py-2.5 text-sm font-semibold text-white shadow"
      @click="router.push({ name: 'login' })"
    >
      Kembali ke Login
    </button>
  </div>
</template>
