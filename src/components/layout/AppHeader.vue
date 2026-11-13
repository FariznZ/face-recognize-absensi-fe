<script setup>
import { useRouter } from 'vue-router'
import IconLogout from '@/components/icons/IconLogout.vue'
import IconBell from '@/components/icons/IconBell.vue'

defineProps({
  name: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
})

const router = useRouter()

function handleLogout() {
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="sticky top-0 z-10 flex w-full items-center justify-between bg-[#f9f9ff]/90 px-4 py-4 backdrop-blur-xl">
    <div class="flex min-w-0 items-center gap-3">
      <div class="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#dee8ff] to-[#f0f3ff] text-sm font-bold text-[#006398]">
        {{ name.split(' ').map((w) => w[0]).slice(0, 2).join('') }}
      </div>
      <div class="flex min-w-0 flex-col">
        <div class="flex items-center gap-2">
          <p class="truncate text-base font-bold text-[#111c2d]">{{ name }}</p>
          <span v-if="badge" class="shrink-0 rounded-full bg-[#e7eeff] px-2 py-0.5 text-[10px] font-bold text-[#006398]">
            {{ badge }}
          </span>
        </div>
        <p v-if="subtitle" class="truncate text-xs text-[#3e4a3d]">{{ subtitle }}</p>
      </div>
    </div>
    <div class="flex shrink-0 items-center gap-1">
      <button type="button" class="flex size-10 items-center justify-center rounded-full text-[#3e4a3d] transition hover:bg-slate-100" aria-label="Notifikasi">
        <IconBell class="size-[18px]" />
      </button>
      <button type="button" class="flex size-10 items-center justify-center rounded-full text-[#3e4a3d] transition hover:bg-slate-100" aria-label="Keluar" @click="handleLogout">
        <IconLogout class="size-[18px]" />
      </button>
    </div>
  </header>
</template>
