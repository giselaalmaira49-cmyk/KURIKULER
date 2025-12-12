# 🧵 Kampung Tenun Ikat Bandar Kidul - Workshop Website

Website interaktif untuk Kampung Tenun Ikat Bandar Kidul yang mempromosikan workshop kerajinan tradisional Indonesia dengan desain modern dan responsif.

## 🌟 Fitur Utama

- ✨ **Desain Responsif** - Sempurna di desktop, tablet, dan mobile
- 🎨 **Tema Ungu Elegan** - Warna cerah yang memanjakan mata
- 🧵 **Konten Komprehensif** - Sejarah, teknik, jadwal, galeri, dan informasi wisata
- 🌍 **Multi-Bahasa** - Bahasa Indonesia & Inggris dengan toggle mudah
- 📅 **Jadwal Workshop** - Tabel terstruktur dengan detail lengkap
- 🖼️ **Galeri Interaktif** - Modal detail penjelasan batik saat diklik
- 📋 **Formulir Pendaftaran** - Biodata peserta dengan penyimpanan lokal
- 🗺️ **Integrasi Maps** - Link Google Maps untuk wisata dan penginapan
- ♿ **Aksesibilitas** - Dukungan fokus keyboard, dark mode, dan reduced motion

## 📁 Struktur Folder

```
KOKURIKULER/
├── index.html      # File HTML utama
├── style.css       # Stylesheet (1336+ baris, teroptimasi)
├── script.js       # JavaScript dengan sistem multi-bahasa
├── .gitignore      # File untuk Git
└── README.md       # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### Lokal (Development)

1. **Clone repository atau download files**
   ```bash
   git clone <repository-url>
   cd KOKURIKULER
   ```

2. **Buka di browser**
   - Buka `index.html` langsung di browser favorit Anda
   - Atau gunakan live server:
   ```bash
   python -m http.server 8000
   # Akses: http://localhost:8000
   ```

### Deploy ke GitHub Pages

1. **Upload ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kampung Tenun Ikat Website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages**
   - Buka Repository Settings
   - Scroll ke bagian "GitHub Pages"
   - Pilih Branch: `main` dan folder: `/ (root)`
   - Klik Save
   - Website akan tersedia di: `https://<username>.github.io/<repo-name>/`

### Deploy ke Vercel

#### Opsi 1: Menggunakan Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel
```

#### Opsi 2: Connect GitHub ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Sign up atau login
3. Klik "New Project"
4. Import GitHub repository
5. Klik "Deploy"
6. Website akan live di URL yang diberikan

#### Opsi 3: Drag & Drop

1. Buka [vercel.com/new](https://vercel.com/new)
2. Pilih "HTML Static"
3. Drag & drop folder `KOKURIKULER`
4. Klik "Deploy"

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit file `style.css` pada bagian `:root`:

```css
:root {
    --primary-color: #6B2D5C;    /* Warna utama */
    --primary-dark: #4A1F42;     /* Warna gelap */
    --primary-light: #9B4A7E;    /* Warna terang */
    --accent-gold: #D4AF37;      /* Warna aksen */
    --text-dark: #2C1A2F;        /* Teks gelap */
    --text-light: #F8F6FA;       /* Teks terang */
}
```

### Menambah Konten

- **Sejarah**: Edit section `.content-text` di HTML
- **Fakta**: Tambah card di `.facts-grid`
- **Teknik**: Tambah step di `.technique-steps`
- **Galeri**: Update `galleryData[]` di `script.js`
- **Jadwal**: Edit tabel `.schedule-table` di HTML

### Mengganti Font

Di `index.html`, ubah link Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Lalu edit `style.css`:

```css
body {
    font-family: 'YOUR_FONT', serif;
}
```

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Grid, Flexbox, Gradient, Animasi
- **JavaScript Vanilla** - Tanpa framework (lebih ringan)
- **Google Fonts** - Cinzel & Playfair Display
- **LocalStorage API** - Penyimpanan data form

## 📊 Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile Safari (iOS 12+)
✅ Chrome Mobile (Android 8+)

## ⚡ Performance Optimasi

- CSS Variables untuk reusability
- Minimal DOM manipulation
- Image lazy loading ready
- Mobile-first responsive design
- Font optimization dengan fallback
- Transition & animation GPU-accelerated

## 🌐 Fitur Responsif

- **Desktop** (>1024px) - Layout optimal 3+ kolom
- **Tablet** (768px-1024px) - Layout 2 kolom
- **Mobile** (<768px) - Layout single kolom
- **Small Mobile** (<480px) - Compact design

## 📞 Kontak & Support

Untuk pertanyaan atau modifikasi:
- Email: workshop@kampungtenunikat.com
- WhatsApp: +62 812-345-678
- Lokasi: Jalan Tenun Raya No. 45, Bandar Kidul

## 📜 Lisensi

Website ini dibuat untuk Kampung Tenun Ikat Bandar Kidul 2025.

## 🎯 Fitur Mendatang

- [ ] Backend untuk penyimpanan data pendaftaran
- [ ] Email confirmation system
- [ ] Payment integration
- [ ] Blog & artikel tenun
- [ ] Video tutorial workshop
- [ ] Live chat support
- [ ] SEO optimization lengkap
- [ ] Analytics integration

---

**Dibuat dengan ❤️ untuk melestarikan warisan budaya Indonesia**
