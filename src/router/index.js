import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'splash',
    component: () => import('@/views/SplashView.vue'),
    meta: { title: 'AgroPresence — PTPN I' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: 'Masuk — Presensi PTPN I' },
  },
  {
    path: '/scan',
    name: 'scan',
    component: () => import('@/views/ScannerView.vue'),
    meta: { title: 'Pemindaian Wajah — Presensi PTPN I' },
  },
  {
    path: '/beranda',
    name: 'beranda',
    component: () => import('@/views/DashboardView.vue'),
    meta: { title: 'Beranda & Acara — Presensi PTPN I' },
  },
  {
    path: '/verifikasi',
    name: 'verifikasi',
    component: () => import('@/views/VerificationView.vue'),
    meta: { title: 'Verifikasi Identitas Tamu — Presensi PTPN I' },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminDashboardView.vue'),
    meta: { title: 'Admin Dashboard — Presensi PTPN I' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
