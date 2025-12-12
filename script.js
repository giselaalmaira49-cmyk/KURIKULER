// ============================================
// KAMPUNG TENUN IKAT BANDAR KIDUL - JAVASCRIPT
// ============================================

// Data Gallery dengan Penjelasan Batik
const galleryData = [
    {
        title: "Batik Semen Rama",
        titleEn: "Semen Rama Batik",
        description: "Motif Semen Rama menggambarkan pemandangan pohon semai dengan berbagai tanaman yang saling berhubungan. Motif ini melambangkan kesuburan, kehidupan yang berkembang, dan keharmonisan dengan alam. Tradisi pembuatan Semen Rama sudah berlangsung selama berabad-abad dan menjadi simbol kesejahteraan bagi masyarakat Jawa. Setiap detail dalam motif ini memiliki makna filosofis yang dalam.",
        descriptionEn: "The Semen Rama motif depicts the scenery of seedlings with various interconnected plants. This motif symbolizes fertility, developing life, and harmony with nature. The tradition of making Semen Rama has been ongoing for centuries and becomes a symbol of prosperity for Javanese people. Every detail in this motif has deep philosophical meaning.",
        image: "https://via.placeholder.com/400x300?text=Batik+Semen+Rama"
    },
    {
        title: "Batik Kawung",
        titleEn: "Kawung Batik",
        description: "Kawung adalah salah satu motif tertua dalam batik Jawa yang berbentuk lingkaran atau bintang. Motif ini mengingatkan pada bentuk biji enau (aren). Makna Kawung adalah pengorbanan, keperkasaan, dan kekuatan. Batik Kawung menunjukkan bahwa pengrajin memiliki dedikasi tinggi dan keterampilan yang telah disempurnakan melalui bertahun-tahun latihan. Motif ini banyak digunakan untuk acara-acara resmi dan berkesan.",
        descriptionEn: "Kawung is one of the oldest motifs in Javanese batik that takes the form of circles or stars. This motif is reminiscent of the shape of palm seeds. The meaning of Kawung is sacrifice, prowess, and strength. Kawung batik shows that craftsmen have high dedication and skills honed through years of practice. This motif is often used for formal and impressive occasions.",
        image: "https://via.placeholder.com/400x300?text=Batik+Kawung"
    },
    {
        title: "Batik Parang",
        titleEn: "Parang Batik",
        description: "Motif Parang menampilkan garis diagonal yang tegas menyerupai bentuk pedang parang. Parang melambangkan kekuatan, keberanian, dan kepemimpinan. Batik Parang dulu hanya digunakan oleh kalangan bangsawan dan pemimpin tingkat tinggi. Dalam setiap goresan Parang, tersimpan cerita tentang ketangguhan menghadapi tantangan hidup dan tekad yang tak tergoyahkan. Motif ini mencerminkan kepribadian yang kuat dan penuh integritas.",
        descriptionEn: "The Parang motif displays bold diagonal lines resembling the shape of a parang sword. Parang symbolizes strength, bravery, and leadership. Parang batik was once only used by nobility and high-ranking leaders. In every stroke of Parang, there is a story about the toughness of facing life's challenges and unwavering determination. This motif reflects a strong personality full of integrity.",
        image: "https://via.placeholder.com/400x300?text=Batik+Parang"
    },
    {
        title: "Batik Nitik",
        titleEn: "Nitik Batik",
        description: "Batik Nitik adalah gaya batik yang sangat detail dengan motif-motif kecil yang rapat. Kata 'Nitik' berasal dari bahasa Jawa yang berarti membuat titik-titik kecil. Pembuatan Batik Nitik memerlukan keahlian dan kesabaran luar biasa karena setiap titik harus dibuat dengan presisi tinggi. Motif ini menunjukkan perhatian detail pengrajin dan keindahan estetika yang rumit. Hasil akhirnya sangat menakjubkan dengan tekstur yang halus dan elegan.",
        descriptionEn: "Nitik Batik is a batik style that is very detailed with tight small motifs. The word 'Nitik' comes from Javanese meaning to make small dots. Making Nitik Batik requires extraordinary skill and patience because each dot must be made with high precision. This motif shows the craftsman's attention to detail and intricate aesthetic beauty. The final result is stunning with smooth and elegant texture.",
        image: "https://via.placeholder.com/400x300?text=Batik+Nitik"
    },
    {
        title: "Batik Ceplok",
        titleEn: "Ceplok Batik",
        description: "Ceplok adalah motif geometris yang terdiri dari bentuk-bentuk persegi, belah ketupat, atau lingkaran yang tersusun teratur. Motif ini mencerminkan keseimbangan, harmoni, dan ketertiban dalam kehidupan. Batik Ceplok menunjukkan bahwa dalam setiap aspek kehidupan perlu ada keteraturan dan keseimbangan. Pengrajin menggunakan Ceplok untuk mengekspresikan pemahaman mereka tentang struktur kehidupan yang terorganisir dengan baik.",
        descriptionEn: "Ceplok is a geometric motif consisting of squares, diamonds, or circles arranged regularly. This motif reflects balance, harmony, and order in life. Ceplok batik shows that in every aspect of life there needs to be order and balance. Craftsmen use Ceplok to express their understanding of a well-organized life structure.",
        image: "https://via.placeholder.com/400x300?text=Batik+Ceplok"
    },
    {
        title: "Batik Mega Mendung",
        titleEn: "Mega Mendung Batik",
        description: "Mega Mendung secara harfiah berarti 'awan mendung' atau awan yang bergelombang. Motif ini menampilkan bentuk-bentuk awan yang mengalir dengan dinamis dan penuh gerakan. Batik Mega Mendung melambangkan perubahan, pertumbuhan, dan fleksibilitas dalam menghadapi kehidupan. Motif ini sangat populer dan modern, mencerminkan semangat inovasi pengrajin lokal. Keindahan Mega Mendung terletak pada kombinasi antara tradisi dan kreativitas kontemporer.",
        descriptionEn: "Mega Mendung literally means 'cloudy cloud' or billowing clouds. This motif displays cloud shapes that flow dynamically and full of movement. Mega Mendung batik symbolizes change, growth, and flexibility in facing life. This motif is very popular and modern, reflecting the spirit of local craftsmen's innovation. The beauty of Mega Mendung lies in the combination of tradition and contemporary creativity.",
        image: "https://via.placeholder.com/400x300?text=Batik+Mega+Mendung"
    }
];

// Sistem Bahasa (Bahasa Indonesia & Inggris)
const translations = {
    id: {
        // Navigation
        'nav-logo-text': '🧵 Tenun Ikat BK',
        'nav-home': 'Beranda',
        'nav-schedule': 'Jadwal',
        'nav-gallery': 'Galeri',
        'nav-wisata': 'Wisata',
        'nav-registration': 'Daftar',
        'nav-contact': 'Kontak',
        
        // Hero
        'hero-title': 'Kampung Tenun Ikat<br><span>Bandar Kidul</span>',
        'hero-subtitle': 'Merawat Benang — Menenun Cerita, Menyulam Jiwa Jawa yang Abadi',
        'cta-button': 'Gabung & Rasakan Seni Tenun',
        
        // Home Section
        'history-title': 'Sejarah Sehelai Benang',
        'history-text': '<p>Kampung Tenun Ikat Bandar Kidul merupakan salah satu warisan budaya yang telah bertahan selama berabad-abad. Setiap benang yang digunakan dalam pembuatan tenun ikat menceritakan kisah kehidupan masyarakat tradisional, kepercayaan, dan keindahan alam lokal.</p><p>Teknik tenun ikat telah diturunkan dari generasi ke generasi, dimulai sejak zaman Kerajaan Mataram. Para pengrajin dengan cermat mengikat benang sebelum pencelupan untuk menciptakan motif yang unik dan memukau. Setiap motif memiliki makna mendalam yang terhubung dengan alam, spiritualitas, dan identitas budaya masyarakat.</p><p>Hingga kini, Kampung Tenun Ikat Bandar Kidul tetap menjadi pusat produksi tenun ikat berkualitas tinggi yang diakui nasional dan internasional. Para pengrajin setia menjaga tradisi ini sambil menghadapi tantangan modernisasi.</p>',
        
        'facts-title': 'Fakta Menarik',
        'fact-1': 'Pengrajin aktif di Kampung Tenun Ikat Bandar Kidul',
        'fact-2': 'Jam kerja untuk satu kain tradisional',
        'fact-3': 'Motif tradisional yang masih digunakan',
        'fact-4': 'Simpul ikat per kain (batik ikat)',
        
        'technique-title': 'Teknik Ikat Pakan Legendaris',
        'step-1': 'Langkah 1: Persiapan Benang Pakan',
        'step-2': 'Langkah 2: Penentuan Motif',
        'step-3': 'Langkah 3: Proses Ikat',
        'step-4': 'Langkah 4: Pencelupan Warna Pertama',
        'step-5': 'Langkah 5: Pembukaan Ikatan dan Pencelupan Lanjutan',
        'step-6': 'Langkah 6: Pengeringan dan Finishing',
        'step-7': 'Langkah 7: Proses Pertenunan',
        'step-8': 'Langkah 8: Finishing Akhir',
        
        'experience-title': 'Pengalaman Seru di Kampung Tenun',
        'exp-1': 'Belajar Teknik Ikat Langsung',
        'exp-1-desc': 'Praktik langsung dengan pengrajin berpengalaman untuk memahami setiap detail teknik ikat pakan yang kompleks dan penuh makna.',
        'exp-2': 'Proses Pencelupan Warna Alami',
        'exp-2-desc': 'Saksikan bagaimana warna-warna indah tercipta dari bahan-bahan alami dan rasakan pengalaman unik pencelupan tradisional.',
        'exp-3': 'Menenun dengan Alat Tradisional',
        'exp-3-desc': 'Coba sendiri menenun menggunakan alat tenun tradisional (ATBM) dan rasakan ketrampilan yang telah diasah selama berabad-abad.',
        'exp-4': 'Kunjungi Rumah Pengrajin Lokal',
        'exp-4-desc': 'Berinteraksi langsung dengan keluarga pengrajin, dengarkan cerita mereka, dan pahami dedikasi mereka terhadap seni tradisional.',
        'exp-5': 'Workshop Desain Motif Modern',
        'exp-5-desc': 'Ciptakan desain motif Anda sendiri dengan menggabungkan tradisi dan inovasi modern bersama desainer lokal.',
        'exp-6': 'Malam Budaya dan Apresiasi Seni',
        'exp-6-desc': 'Nikmati pertunjukan seni tradisional, tari lokal, dan berbagi pengalaman dengan peserta workshop dari berbagai daerah.',
        
        // Schedule
        'schedule-title': 'Jadwal Workshop',
        'col-day': 'Hari',
        'col-time': 'Jam',
        'col-activity': 'Kegiatan',
        'col-location': 'Lokasi',
        
        // Gallery
        'gallery-title': 'Galeri Batik Tenun Ikat',
        'gallery-btn': 'Lihat Detail',
        
        // Wisata
        'kuliner-title': 'Kuliner Lokal Populer',
        'kuliner-1': 'Gethuk Pisang',
        'kuliner-1-desc': 'Makanan tradisional yang terbuat dari pisang yang dikukus dan dihaluskan. Teksturnya lembut dan manis alami, sempurna sebagai camilan.',
        'kuliner-2': 'Lumpia Goreng',
        'kuliner-2-desc': 'Lumpia dengan isian umbi-umbian dan sayuran lokal. Renyah di luar dan gurih di dalam, menjadi favorit wisatawan dari berbagai daerah.',
        'kuliner-3': 'Soto Ayam Tradisional',
        'kuliner-3-desc': 'Kuah kaldu ayam yang kaya rempah dengan nasi kuning dan daging ayam empuk. Resep turun temurun yang memanjakan lidah setiap pengunjung.',
        'kuliner-4': 'Pecel Lele',
        'kuliner-4-desc': 'Ikan lele goreng krispi disajikan dengan sambal dan pecel yang pedas nikmat. Kombinasi sempurna untuk melengkapi pengalaman kuliner lokal.',
        
        'wisata-tempat-title': 'Tempat Wisata Populer',
        'wisata-1': 'Kampung Tenun Ikat',
        'wisata-1-desc': 'Lokasi utama workshop dengan studio dan rumah pengrajin. Melihat langsung proses pembuatan batik tenun ikat dari awal hingga akhir.',
        'wisata-2': 'Taman Alam Lokal',
        'wisata-2-desc': 'Taman hijau dengan pemandangan alam yang indah, cocok untuk istirahat dan foto-foto. Pengalaman menyenangkan bersama alam sekitar Bandar Kidul.',
        'wisata-3': 'Candi Peninggalan Bersejarah',
        'wisata-3-desc': 'Situs bersejarah dari era klasik Indonesia dengan arsitektur yang megah. Tempat bermakna untuk memahami sejarah lokal yang dalam.',
        'wisata-4': 'Pasar Tradisional Sentral',
        'wisata-4-desc': 'Pasar tradisional yang ramai dengan berbagai barang kerajinan lokal, hasil panen, dan kuliner. Tempat sempurna berbelanja oleh-oleh.',
        
        'penginapan-title': 'Penginapan Berkualitas & Terjangkau',
        'penginapan-1': 'Guesthouse Tenun Nyaman',
        'penginapan-1-desc': 'Penginapan dekat dengan Kampung Tenun dengan fasilitas lengkap, WiFi, dan AC. Pengalaman menginap yang nyaman dan terjangkau untuk peserta workshop.',
        'penginapan-2': 'Homestay Tradisional Bandar',
        'penginapan-2-desc': 'Rumah keluarga lokal yang nyaman dengan fasil sarana dasar. Kesempatan untuk berinteraksi langsung dengan keluarga pemilik sambil merasakan kehidupan lokal.',
        'penginapan-3': 'Hotel Bintang Tiga Bandar',
        'penginapan-3-desc': 'Hotel dengan standar internasional yang menawarkan fasilitas premium, restoran, dan layanan 24 jam. Opsi terbaik untuk kenyamanan maksimal.',
        'penginapan-4': 'Asrama Peserta Workshop',
        'penginapan-4-desc': 'Fasilitas asrama khusus untuk peserta workshop dengan kamar bersama atau pribadi. Harga paling ekonomis dengan suasana persahabatan antar peserta.',
        
        'maps-btn': '📍 Lihat di Maps',
        
        // Registration
        'registration-title': 'Daftar Workshop Sekarang',
        'label-fullname': 'Nama Lengkap',
        'input-fullname': 'Nama Lengkap',
        'label-birthplace': 'Tempat Lahir',
        'input-birthplace': 'Tempat Lahir',
        'label-birthdate': 'Tanggal Lahir',
        'input-birthdate': 'Tanggal Lahir',
        'label-address': 'Alamat Lengkap',
        'input-address': 'Alamat Lengkap',
        'label-motivation': 'Motivasi Mengikuti Workshop',
        'input-motivation': 'Ceritakan mengapa Anda tertarik untuk mengikuti workshop...',
        'label-feedback': 'Saran & Kritik (Opsional)',
        'input-feedback': 'Apa yang dapat kami tingkatkan?',
        'label-email': 'Email',
        'input-email': 'Email',
        'label-phone': 'Nomor Telepon',
        'input-phone': 'Nomor Telepon',
        'submit-btn': 'Daftar Sekarang',
        'success-message': '✓ Pendaftaran berhasil! Kami akan menghubungi Anda segera.',
        
        // Contact
        'contact-title': 'Hubungi Kami',
        'contact-address-title': '📍 Lokasi',
        'contact-address': 'Jalan Tenun Raya No. 45, Bandar Kidul, Kecamatan Sentral, Provinsi Jawa Tengah, Indonesia',
        'contact-phone-title': '📞 Telepon',
        'contact-phone': '+62 274-123-456',
        'contact-whatsapp': '+62 812-345-678 (WhatsApp)',
        'contact-email-title': '✉️ Email',
        'contact-email': 'info@kampungtenunikat.com',
        'contact-workshop-email': 'workshop@kampungtenunikat.com',
        'contact-jam-title': '🕐 Jam Operasional',
        'contact-jam': 'Senin - Jumat: 08:00 - 17:00',
        'contact-jam-weekend': 'Sabtu - Minggu: 09:00 - 16:00',
        
        // Footer
        'footer-text': '&copy; 2025 Kampung Tenun Ikat Bandar Kidul. Semua hak dilindungi. | Melestarikan Warisan Budaya Indonesia',
        'social-facebook': 'Facebook',
        'social-instagram': 'Instagram',
        'social-youtube': 'YouTube'
    },
    en: {
        // Navigation
        'nav-logo-text': '🧵 Ikat Weaving BK',
        'nav-home': 'Home',
        'nav-schedule': 'Schedule',
        'nav-gallery': 'Gallery',
        'nav-wisata': 'Tourism',
        'nav-registration': 'Register',
        'nav-contact': 'Contact',
        
        // Hero
        'hero-title': 'Ikat Weaving Village<br><span>Bandar Kidul</span>',
        'hero-subtitle': 'Nurturing Threads — Weaving Stories, Sewing the Javanese Soul',
        'cta-button': 'Join & Experience Ikat Artistry',
        
        // Home Section
        'history-title': 'The Story of a Single Thread',
        'history-text': '<p>Bandar Kidul Ikat Weaving Village is a cultural heritage that has endured for centuries. Each thread used in making ikat weaving tells the story of traditional society\'s life, beliefs, and the beauty of local nature.</p><p>The ikat weaving technique has been passed down from generation to generation, starting from the Mataram Kingdom era. Craftspeople carefully tie threads before dyeing to create unique and stunning patterns. Each motif has a deep meaning connected to nature, spirituality, and the cultural identity of the community.</p><p>Today, Bandar Kidul Ikat Weaving Village remains a center for high-quality ikat weaving production recognized nationally and internationally. Dedicated craftspeople continue to preserve this tradition while facing modernization challenges.</p>',
        
        'facts-title': 'Interesting Facts',
        'fact-1': 'Active craftspeople in Bandar Kidul Ikat Weaving Village',
        'fact-2': 'Working hours for one traditional cloth',
        'fact-3': 'Traditional motifs still in use',
        'fact-4': 'Knots per cloth (ikat batik)',
        
        'technique-title': 'Legendary Weft Ikat Technique',
        'step-1': 'Step 1: Weft Thread Preparation',
        'step-2': 'Step 2: Motif Determination',
        'step-3': 'Step 3: Tying Process',
        'step-4': 'Step 4: First Color Dyeing',
        'step-5': 'Step 5: Untying and Further Dyeing',
        'step-6': 'Step 6: Drying and Finishing',
        'step-7': 'Step 7: Weaving Process',
        'step-8': 'Step 8: Final Finishing',
        
        'experience-title': 'Exciting Experiences at the Weaving Village',
        'exp-1': 'Learn Tying Technique Directly',
        'exp-1-desc': 'Direct practice with experienced craftspeople to understand every detail of the complex and meaningful weft ikat technique.',
        'exp-2': 'Natural Color Dyeing Process',
        'exp-2-desc': 'Witness how beautiful colors are created from natural materials and experience the unique traditional dyeing process.',
        'exp-3': 'Weaving with Traditional Tools',
        'exp-3-desc': 'Try weaving yourself using traditional weaving tools (ATBM) and feel the skills honed over centuries.',
        'exp-4': 'Visit Local Craftspeople\'s Homes',
        'exp-4-desc': 'Interact directly with craftspeople families, listen to their stories, and understand their dedication to traditional art.',
        'exp-5': 'Modern Motif Design Workshop',
        'exp-5-desc': 'Create your own motif design by combining tradition and modern innovation with local designers.',
        'exp-6': 'Cultural Evening and Art Appreciation',
        'exp-6-desc': 'Enjoy traditional art performances, local dances, and share experiences with workshop participants from various regions.',
        
        // Schedule
        'schedule-title': 'Workshop Schedule',
        'col-day': 'Day',
        'col-time': 'Time',
        'col-activity': 'Activity',
        'col-location': 'Location',
        
        // Gallery
        'gallery-title': 'Ikat Weaving Batik Gallery',
        'gallery-btn': 'View Details',
        
        // Wisata
        'kuliner-title': 'Popular Local Cuisine',
        'kuliner-1': 'Gethuk Pisang',
        'kuliner-1-desc': 'Traditional food made from steamed and mashed bananas. Soft texture and natural sweetness, perfect as a snack.',
        'kuliner-2': 'Fried Spring Rolls',
        'kuliner-2-desc': 'Spring rolls filled with tubers and local vegetables. Crispy outside and savory inside, a favorite of tourists from various regions.',
        'kuliner-3': 'Traditional Chicken Soup',
        'kuliner-3-desc': 'Rich chicken broth with spices, yellow rice and tender chicken meat. A traditional recipe that delights every visitor.',
        'kuliner-4': 'Fried Catfish',
        'kuliner-4-desc': 'Crispy fried catfish served with spicy chili and vegetables. Perfect combination to complete the local culinary experience.',
        
        'wisata-tempat-title': 'Popular Tourist Attractions',
        'wisata-1': 'Ikat Weaving Village',
        'wisata-1-desc': 'Main workshop location with studios and craftspeople\'s homes. Watch the ikat weaving batik making process firsthand.',
        'wisata-2': 'Local Nature Park',
        'wisata-2-desc': 'Green park with beautiful natural scenery, perfect for relaxation and photos. Pleasant experience with nature around Bandar Kidul.',
        'wisata-3': 'Historic Temple Remains',
        'wisata-3-desc': 'Historic site from Indonesia\'s classical era with magnificent architecture. A meaningful place to understand local history.',
        'wisata-4': 'Central Traditional Market',
        'wisata-4-desc': 'Bustling traditional market with various local crafts, harvests, and culinary items. Perfect place to shop for souvenirs.',
        
        'penginapan-title': 'Quality & Affordable Accommodation',
        'penginapan-1': 'Comfortable Weaving Guesthouse',
        'penginapan-1-desc': 'Accommodation near the Weaving Village with complete facilities, WiFi, and AC. Comfortable and affordable lodging experience for workshop participants.',
        'penginapan-2': 'Traditional Bandar Homestay',
        'penginapan-2-desc': 'Comfortable local family home with basic facilities. Opportunity to interact directly with the family and experience local life.',
        'penginapan-3': 'Three-Star Hotel Bandar',
        'penginapan-3-desc': 'Hotel with international standards offering premium facilities, restaurant, and 24-hour service. Best option for maximum comfort.',
        'penginapan-4': 'Workshop Participant Dormitory',
        'penginapan-4-desc': 'Special dormitory facility for workshop participants with shared or private rooms. Most economical price with friendly atmosphere.',
        
        'maps-btn': '📍 View on Maps',
        
        // Registration
        'registration-title': 'Register for Workshop Now',
        'label-fullname': 'Full Name',
        'input-fullname': 'Full Name',
        'label-birthplace': 'Place of Birth',
        'input-birthplace': 'Place of Birth',
        'label-birthdate': 'Date of Birth',
        'input-birthdate': 'Date of Birth',
        'label-address': 'Full Address',
        'input-address': 'Full Address',
        'label-motivation': 'Motivation for Workshop',
        'input-motivation': 'Tell us why you\'re interested in this workshop...',
        'label-feedback': 'Suggestions & Feedback (Optional)',
        'input-feedback': 'What can we improve?',
        'label-email': 'Email',
        'input-email': 'Email',
        'label-phone': 'Phone Number',
        'input-phone': 'Phone Number',
        'submit-btn': 'Register Now',
        'success-message': '✓ Registration successful! We will contact you soon.',
        
        // Contact
        'contact-title': 'Contact Us',
        'contact-address-title': '📍 Location',
        'contact-address': 'Jalan Tenun Raya No. 45, Bandar Kidul, Central District, Central Java Province, Indonesia',
        'contact-phone-title': '📞 Phone',
        'contact-phone': '+62 274-123-456',
        'contact-whatsapp': '+62 812-345-678 (WhatsApp)',
        'contact-email-title': '✉️ Email',
        'contact-email': 'info@kampungtenunikat.com',
        'contact-workshop-email': 'workshop@kampungtenunikat.com',
        'contact-jam-title': '🕐 Operating Hours',
        'contact-jam': 'Monday - Friday: 08:00 - 17:00',
        'contact-jam-weekend': 'Saturday - Sunday: 09:00 - 16:00',
        
        // Footer
        'footer-text': '&copy; 2025 Bandar Kidul Ikat Weaving Village. All rights reserved. | Preserving Indonesia\'s Cultural Heritage',
        'social-facebook': 'Facebook',
        'social-instagram': 'Instagram',
        'social-youtube': 'YouTube'
    }
};

// Bahasa Saat Ini
let currentLanguage = localStorage.getItem('language') || 'id';

// Inisialisasi Bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLanguage);
    updateLanguageButton();
    setupEventListeners();
});

// Fungsi untuk mengubah bahasa
function toggleLanguage() {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    updateLanguageButton();
}

// Update tombol bahasa
function updateLanguageButton() {
    const langBtn = document.getElementById('langBtn');
    langBtn.textContent = currentLanguage === 'id' ? 'EN' : 'ID';
}

// Terapkan Bahasa ke Seluruh Website
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-id]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-id');
        const translation = translations[lang][key];
        
        if (translation) {
            if (key.includes('text') || key.includes('title') || key.includes('desc') || key.includes('desc-en')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholder form inputs
    updateFormPlaceholders(lang);
}

// Update Form Placeholders
function updateFormPlaceholders(lang) {
    const inputs = {
        'fullName': translations[lang]['input-fullname'],
        'birthPlace': translations[lang]['input-birthplace'],
        'address': translations[lang]['input-address'],
        'motivation': translations[lang]['input-motivation'],
        'feedback': translations[lang]['input-feedback'],
        'email': translations[lang]['input-email'],
        'phone': translations[lang]['input-phone']
    };
    
    for (const [id, placeholder] of Object.entries(inputs)) {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = placeholder;
        }
    }
}

// Setup Event Listeners
function setupEventListeners() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Gallery Modal Functions
function openModal(index) {
    const modal = document.getElementById('galleryModal');
    const data = galleryData[index];
    
    const title = currentLanguage === 'id' ? data.title : data.titleEn;
    const description = currentLanguage === 'id' ? data.description : data.descriptionEn;
    
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// Close modal ketika klik di luar konten
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
function submitForm(event) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        birthPlace: document.getElementById('birthPlace').value,
        birthDate: document.getElementById('birthDate').value,
        address: document.getElementById('address').value,
        motivation: document.getElementById('motivation').value,
        feedback: document.getElementById('feedback').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        registrationDate: new Date().toLocaleString()
    };
    
    // Simpan ke localStorage
    let registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    registrations.push(formData);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    
    // Tampilkan pesan sukses
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Reset form setelah 3 detik
    setTimeout(function() {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
    }, 3000);
    
    // Tampilkan alert sukses
    alert(currentLanguage === 'id' 
        ? 'Terima kasih telah mendaftar! Kami akan segera menghubungi Anda.' 
        : 'Thank you for registering! We will contact you soon.');
}

// Smooth Scroll untuk semua link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#registration') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua content blocks
document.querySelectorAll('.content-block, .facts-section, .experience-grid').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Konten tabel jadwal responsif
function makeTableResponsive() {
    const tables = document.querySelectorAll('.schedule-table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const headers = table.querySelectorAll('thead th');
            cells.forEach((cell, index) => {
                if (headers[index]) {
                    cell.setAttribute('data-label', headers[index].textContent);
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', makeTableResponsive);

// Preload images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.transition = 'all 0.3s ease';
    });
});
