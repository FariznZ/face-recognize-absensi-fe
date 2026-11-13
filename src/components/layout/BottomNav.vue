<script setup>
import { useRoute, useRouter } from 'vue-router'

import IconHome from '@/components/icons/IconHome.vue'
import IconFaceScan from '@/components/icons/IconFaceScan.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconUserCircle from '@/components/icons/IconUserCircle.vue'

const route = useRoute()
const router = useRouter()

const items = [
  { label: 'Beranda', icon: IconHome, name: 'beranda' },
  { label: 'Pindai', icon: IconFaceScan, name: 'scan', elevated: true },
  { label: 'Acara', icon: IconCalendar, name: 'beranda' },
  { label: 'Profil', icon: IconUserCircle, name: 'admin' },
]

function go(item) {
  if (item.name === 'scan') {
    router.push({ name: 'scan', query: { mode: 'petugas' } })
  } else {
    router.push({ name: item.name })
  }
}
</script>

<template>
  <nav class="sticky bottom-0 z-20 w-full border-t border-slate-100 bg-white/95 backdrop-blur-xl">
    <div class="flex w-full items-center justify-around px-2 py-1.5">
      <button
        v-for="item in items"
        :key="item.label"
        type="button"
        class="flex flex-col items-center gap-1 px-3 py-1.5 transition"
        :class="item.elevated ? '-mt-5' : ''"
        @click="go(item)"
      >
        <span
          v-if="item.elevated"
          class="flex size-11 items-center justify-center rounded-full bg-[#006b2c] text-white shadow-lg shadow-[#006b2c]/30 transition active:scale-95"
        >
          <component :is="item.icon" class="size-[18px]" />
        </span>
        <span
          v-else
          class="flex size-6 items-center justify-center"
          :class="route.name === item.name ? 'text-[#006b2c]' : 'text-[#9aa5b1]'"
        >
          <component :is="item.icon" class="size-[18px]" />
        </span>
        <span
          class="text-[10px] font-semibold"
          :class="item.elevated ? 'text-[#006b2c]' : route.name === item.name ? 'text-[#006b2c]' : 'text-[#9aa5b1]'"
        >
          {{ item.label }}
        </span>
      </button>
    </div>
    <div class="h-[env(safe-area-inset-bottom)] w-full" />
  </nav>
</template>
