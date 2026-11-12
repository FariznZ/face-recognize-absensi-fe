# Presensi Wajah PTPN I — Frontend

Frontend aplikasi absensi otomatis berbasis face recognition untuk PTPN I Regional 2.
Dibangun dari desain Figma, stack **Vue 3 (Composition API) + Vite + Tailwind CSS v4**.

Backend (Python + database lokal + model deteksi/pemindai wajah) dikerjakan terpisah
oleh tim backend — frontend ini hanya memanggil API-nya (lihat bagian *Integrasi
Backend* di bawah).

## Menjalankan proyek

```bash
npm install
npm run dev      # dev server, default http://localhost:5173
npm run build    # build produksi ke /dist
npm run preview  # preview hasil build
```

## Struktur folder

```
src/
  assets/images/        # aset statis (logo, dsb.)
  components/
    icons/               # ikon SVG reusable (IconLock, IconEye, IconFaceScan, dst.)
  router/
    index.js             # definisi 5 route/screen
  views/
    LoginView.vue         # ✅ Tahap 1 — selesai, 1:1 dari Figma
    ScannerView.vue        # 🚧 Tahap 2 — stub, menyusul
    DashboardView.vue      # 🚧 Beranda & Pemilihan Acara — stub, menyusul
    VerificationView.vue   # 🚧 Verifikasi Identitas Tamu — stub, menyusul
    AdminDashboardView.vue # 🚧 Admin Dashboard — stub, menyusul
  App.vue                 # shell root (bungkus mobile frame utk desktop)
  main.js
  style.css               # import Tailwind + design token warna brand
```

## Catatan implementasi

- **Logo PTPN I**: Figma asset (PNG logo resmi) tidak bisa diunduh otomatis karena
  domain `figma.com` diblokir oleh kebijakan jaringan lingkungan kerja ini.
  Saat ini dipakai `LogoPtpn1Placeholder.vue` (ikon daun generik, warna brand).
  **Ganti** dengan logo resmi: taruh file di `src/assets/images/logo-ptpn1.png`,
  lalu ganti pemakaian `<LogoPtpn1Placeholder />` di `LoginView.vue` (2 tempat)
  dengan `<img src="@/assets/images/logo-ptpn1.png" class="size-full" />`.
- **Ikon**: semua ikon lain (lock, eye, id-card, face-scan, shield, headset, dll.)
  dibuat ulang sebagai SVG generik dengan gaya serupa desain (bukan hasil unduhan
  langsung dari Figma), ada di `src/components/icons/`.
- **State management**: cukup pakai `ref`/`reactive` bawaan Vue (Composition API)
  per komponen — belum perlu Pinia/Vuex untuk tahap ini. Kalau nanti ada state
  lintas-halaman yang kompleks (mis. sesi user, data event, status kamera), bisa
  ditambahkan Pinia belakangan.
- **Routing**: Vue Router, 5 route → `/login`, `/scan`, `/beranda`, `/verifikasi`,
  `/admin`. Root `/` redirect ke `/login`.

## Integrasi Backend (Python)

Titik-titik yang perlu disambungkan ke API backend (ditandai `// TODO` di kode):

| Aksi di UI | Lokasi | Endpoint yang diharapkan |
|---|---|---|
| Login NIP + password | `LoginView.vue` → `handleSubmitCredentials` | `POST /api/auth/login` |
| Mulai presensi wajah | `LoginView.vue` → `handleStartFaceLogin`, lanjut diproses di `ScannerView.vue` | `POST /api/attendance/face-scan` (kirim frame/embedding wajah) |
| Registrasi tamu walk-in | `LoginView.vue` → `handleGuestRegistration` | `POST /api/guests/register` |

Frontend tidak menyimpan kredensial wajah/database lokal — itu tanggung jawab
backend Python yang akan diimplementasikan terpisah.

## Progres

- [x] Setup project (Vue 3 + Vite + Tailwind v4 + Vue Router)
- [x] Layar 1/5 — **Login Petugas & Tamu** (dari Figma, pixel-matched)
- [ ] Layar 2/5 — Scanner Face Recognition
- [ ] Layar 3/5 — Beranda & Pemilihan Acara
- [ ] Layar 4/5 — Verifikasi Identitas Tamu
- [ ] Layar 5/5 — Admin Dashboard & Monitoring Kehadiran Tamu
