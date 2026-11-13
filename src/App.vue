<script setup>
// Root shell. Desain Figma dibuat mobile-first (~390px).
// - Di hp & tablet (layar < 1280px, termasuk iPad landscape): konten full-bleed,
//   fluid, dibatasi max-width nyaman agar tidak melar di tablet, TANPA bingkai
//   "device mockup" — karena di perangkat asli ini memang layar itu sendiri.
// - Hanya di monitor desktop sungguhan (>= 1280px) kita tampilkan sebagai kartu
//   bergaya "preview aplikasi" (shadow + rounded), karena jelas sedang dibuka
//   di browser, bukan di hp/tablet asli.
</script>

<template>
  <div class="min-h-screen w-full bg-slate-100 xl:flex xl:items-center xl:justify-center xl:py-10">
    <div
      class="relative mx-auto min-h-screen w-full max-w-[560px] bg-[#f9f9ff] xl:min-h-[880px] xl:max-h-[880px] xl:max-w-[430px] xl:overflow-y-auto xl:rounded-[36px] xl:shadow-2xl xl:ring-8 xl:ring-slate-900/5"
    >
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta?.transition || 'page-fade'" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none;
  }
}
</style>
