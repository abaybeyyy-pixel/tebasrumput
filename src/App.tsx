import { motion } from "motion/react";
import {
  CheckCircle2,
  Scissors,
  ShieldCheck,
  Star,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Leaf,
  Trash2,
  Trees,
  ArrowRight,
  Menu,
  X,
  User,
  MessageCircle,
  LayoutDashboard
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Admin Page Imports
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ArticleEditorPage from "./pages/ArticleEditorPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AdminLayout from "./components/AdminLayout";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WA_LINK = "https://wa.me/6281211156865";

const INITIAL_BLOGS = [
  {
    id: "1",
    slug: "panduan-merawat-rumput-gajah-mini-palembang",
    title: "Panduan Lengkap Merawat Rumput Gajah Mini di Cuaca Terik Palembang",
    tags: ["Tips Perawatan", "Palembang", "Rumput Gajah Mini", "Taman"],
    date: "26 Mar 2026",
    desc: "Menghadapi cuaca Palembang yang ekstrem? Pelajari teknik penyiraman, pemupukan, dan perlindungan rumput gajah mini agar tetap hijau royo-royo.",
    source: "https://kumparan.com/jasa-taman/cara-merawat-rumput-gajah-mini",
    content: `
      <h2>Tantangan Menanam Gajah Mini di Sumatera Selatan</h2>
      <p>Kota Palembang dikenal memiliki indeks UV yang cukup tinggi dan suhu rata-rata yang bisa mencapai 35°C di siang hari. Bagi pemilik rumah di area seperti <strong>CitraGrand City</strong> atau <strong>OPI Regency</strong>, rumput gajah mini adalah pilihan estetis, namun rentan menguning jika salah perawatan.</p>
      
      <h3>1. Teknik Penyiraman 'Deep Watering'</h3>
      <p>Banyak orang melakukan kesalahan dengan menyiram sedikit-sedikit tapi sering. Di Palembang, Anda disarankan menggunakan teknik <em>deep watering</em>.</p>
      <ul>
        <li><strong>Waktu Ideal:</strong> Lakukan penyiraman antara jam 6 hingga 7 pagi. Ini memberikan waktu bagi air untuk meresap ke akar sebelum matahari mulai menyegat.</li>
        <li><strong>Volume Air:</strong> Pastikan air meresap hingga kedalaman 10-15 cm di bawah permukaan tanah.</li>
        <li><strong>Hindari Penyiraman Malam:</strong> Menyiram saat malam hari di cuaca lembap Palembang dapat memicu pertumbuhan jamur tanah.</li>
      </ul>

      <h3>2. Nutrisi Tambahan (Pemupukan)</h3>
      <p>Rumput gajah mini membutuhkan asupan Nitrogen yang konsisten. Gunakan pupuk NPK 16-16-16 setiap 2 bulan sekali. Taburkan secara merata dan segera siram agar butiran pupuk hancur dan tidak membakar daun rumput.</p>

      <h3>3. Penyiangan Gulma (Rumput Teki)</h3>
      <p>Masalah utama di Palembang adalah pertumbuhan rumput teki yang sangat cepat. Cabutlah gulma hingga ke akarnya menggunakan pencukil kecil minimal satu minggu sekali agar nutrisi tanah tidak direbut.</p>

      <blockquote>
        <p><strong>Butuh Bantuan?</strong> Jika kesibukan membuat Anda sulit merawat taman secara detail, tim <strong>Tebasrumput.com</strong> siap membantu perawatan rutin dengan tim profesional berpengalaman di seluruh wilayah Palembang.</p>
      </blockquote>
    `
  },
  {
    id: "2",
    slug: "waktu-terbaik-memotong-rumput-palembang",
    title: "Kapan Waktu Terbaik Memotong Rumput di Kalidoni dan Sako?",
    tags: ["Jadwal", "Kalidoni", "Sako", "Layanan"],
    date: "25 Mar 2026",
    desc: "Frekuensi pemotongan rumput sangat dipengaruhi oleh lokasi. Simak panduan jadwal pemangkasan untuk wilayah Palembang Timur.",
    source: "https://www.flamboyanasri.com/2021/04/jadwal-memotong-rumput.html",
    content: `
      <h2>Mengapa Wilayah Kalidoni dan Sako Berbeda?</h2>
      <p>Wilayah Palembang bagian Timur seperti <strong>Kalidoni</strong>, <strong>Sako</strong>, dan <strong>Sematang Borang</strong> cenderung memiliki kontur tanah yang lebih lembap. Hal ini mengakibatkan pertumbuhan rumput liar dan tanaman hias menjadi lebih masif dibandingkan wilayah lainnya.</p>
      
      <h3>Strategi Pemotongan Berdasarkan Musim</h3>
      <p>Menjaga kerapian halaman bukan hanya soal estetika, tapi juga soal mencegah sarang binatang melata seperti ular atau kelabang yang sering muncul di rumput tinggi.</p>
      <ul>
        <li><strong>Musim Penghujan (Oktober - April):</strong> Rumput tumbuh 2x lebih cepat. Lakukan pemangkasan setiap <strong>10-14 hari sekali</strong>. Jangan menunggu hingga setinggi lutut karena batang rumput akan mengeras dan sulit dirapikan.</li>
        <li><strong>Musim Kemarau Berdebu:</strong> Pertumbuhan melambat, namun debu sering menempel. Potonglah setiap <strong>3-4 minggu sekali</strong> dengan ketinggian yang sedikit lebih tinggi (sekitar 5 cm) untuk menjaga kelembapan akar.</li>
      </ul>

      <h3>Manfaat Memangkas Secara Konsisten</h3>
      <p>Memotong rumput secara rutin merangsang pertumbuhan tunas baru yang lebih hijau dan lembut. Selain itu, sinar matahari akan lebih mudah masuk ke sela-sela batang rumput, mencegah pertumbuhan lumut dan jamur yang merusak visual taman Anda.</p>

      <p>Tebasrumput.com menyediakan layanan langganan bulanan khusus untuk area Kalidoni dan sekitarnya. Hubungi kami untuk jadwal survey gratis!</p>
    `
  },
  {
    id: "3",
    slug: "jasa-potong-rumput-vs-potong-sendiri",
    title: "Investasi Waktu: Jasa Potong Rumput Panggilan vs Memotong Sendiri",
    tags: ["Edukasi", "Layanan Panggilan", "Palembang", "Hemat"],
    date: "24 Mar 2026",
    desc: "Seringkali kita merasa bisa melakukannya sendiri, tapi benarkah itu menguntungkan? Mari hitung biaya dan energinya.",
    source: "https://www.99.co/blog/indonesia/jasa-potong-rumput-panggilan/",
    content: `
      <h2>Analisis Biaya dan Tenaga Perawatan Taman</h2>
      <p>Bagi warga Palembang yang bekerja di sektor perkantoran atau bisnis, waktu luang di akhir pekan sangatlah berharga. Seringkali rencana memotong rumput sendiri berakhir dengan kelelahan atau hasil yang tidak maksimal.</p>

      <h3>Perbandingan Realistis:</h3>
      <p><strong>1. Menggunakan Tenaga Sendiri:</strong></p>
      <ul>
        <li>Waktu yang dihabiskan: 3-5 jam (termasuk persiapan dan bersih-bersih).</li>
        <li>Biaya alat: Pembelian mesin potong, bensin, oli, dan perawatan alat.</li>
        <li>Risiko: Kelelahan fisik, cedera jika tidak terbiasa, dan hasil yang tidak rata.</li>
      </ul>

      <p><strong>2. Menggunakan Jasa Tebasrumput.com:</strong></p>
      <ul>
        <li>Waktu: Anda bisa bersantai atau melakukan hobi lain.</li>
        <li>Biaya: Transparan mulai dari 300rb, sudah termasuk angkut sampah.</li>
        <li>Hasil: Rapi kualitas mesin profesional, sudut-sudut sulit terjangkau, dan taman langsung bersih seketika.</li>
      </ul>

      <p>Kesimpulannya, menggunakan jasa profesional bukan sekadar pengeluaran, melainkan investasi untuk kenyamanan dan kesehatan mental Anda. Halaman bersih tanpa keringat!</p>
    `
  },
  {
    id: "4",
    slug: "mengatasi-gulma-halaman-kantor",
    title: "Mengatasi Gulma dan Rumput Liar di Halaman Kantor Perusahaan",
    tags: ["Bisnis", "Kantor", "Gulma", "Pembersihan Lahan"],
    date: "23 Mar 2026",
    desc: "Citra perusahaan dimulai dari pandangan pertama tamu saat memasuki halaman. Pastikan area bisnis Anda selalu tampak profesional.",
    source: "https://gdm.id/cara-mengatasi-gulma-rumput/",
    content: `
      <h2>Wajah Bisnis Anda Adalah Taman Depan Kantor</h2>
      <p>Banyak gedung perkantoran di area <strong>Jl. Sudirman</strong> atau <strong>Basuki Rahmat</strong> yang memiliki area hijau. Masalah utama yang sering timbul adalah tumbuhnya rumput liar di sela-sela <em>paving block</em> atau taman mini yang merusak estetika profesional kantor Anda.</p>
      
      <h3>Dampak Negatif Membiarkan Gulma:</h3>
      <ol>
        <li><strong>Kesan Kurang Terawat:</strong> Membuat klien meragukan kedisiplinan perusahaan dalam hal detail.</li>
        <li><strong>Kerusakan Infrastruktur:</strong> Akar gulma yang kuat bisa mengangkat paving block atau merusak saluran drainase kecil.</li>
        <li><strong>Sarang Hama:</strong> Menjadi tempat persembunyian nyamuk dan serangga pengganggu kenyamanan kantor.</li>
      </ol>
      
      <h3>Solusi Perawatan Korporat</h3>
      <p>Kami menawarkan paket <strong>Pembersihan Lahan Komersial</strong>. Tim kami akan melakukan pembersihan total, mulai dari pemangkasan rumput utama hingga pembersihan rumput liar di sela bangunan menggunakan mesin senar khusus agar tidak merusak tembok atau lantai.</p>
      
      <p>Segera buat kontrak perawatan rutin agar kantor Anda selalu tampak asri menyegarkan bagi karyawan dan tamu bisnis Anda.</p>
    `
  },
  {
    id: "5",
    slug: "rumput-manila-vs-rumput-jepang",
    title: "Rumput Manila vs Rumput Jepang: Perbandingan untuk Taman Palembang",
    tags: ["Desain", "Edukasi", "Rumput Manila", "Rumput Jepang"],
    date: "22 Mar 2026",
    desc: "Ingin membangun taman baru tapi bingung pilih jenis rumput? Baca panduan pemilihan untuk wilayah Sumatera Selatan.",
    source: "https://arsitag.com/article/mengenal-jenis-rumput-taman",
    content: `
      <h2>Memilih Karpet Hijau yang Tepat</h2>
      <p>Tidak semua rumput cocok dengan karakteristik tanah di Sumatera Selatan. Sebelum Anda memesan bibit, pahami perbedaan dua primadona ini.</p>

      <h3>1. Rumput Manila (Zoysia Matrella)</h3>
      <p>Rumput ini sering digunakan untuk lapangan golf karena kekuatannya. Di Palembang, rumput manila sangat disukai karena:</p>
      <ul>
        <li><strong>Tahan Injak:</strong> Sangat kuat untuk area bermain anak atau hewan peliharaan.</li>
        <li><strong>Warna Stabil:</strong> Hijau pekat meski terpapar matahari langsung.</li>
        <li><strong>Minus:</strong> Pertumbuhannya sangat lambat, butuh kesabaran ekstra saat penanaman awal.</li>
      </ul>

      <h3>2. Rumput Jepang (Zoysia Japonica)</h3>
      <p>Memiliki bentuk daun yang lebih runcing dan tegak. Kelebihannya:</p>
      <ul>
        <li><strong>Estetika Tinggi:</strong> Terlihat sangat rapi dan formal, cocok untuk taman depan perumahan elit.</li>
        <li><strong>Mudah Tumbuh:</strong> Lebih cepat menutup tanah dibandingkan manila.</li>
        <li><strong>Minus:</strong> Sangat manja. Jika telat siram sedikit saja saat kemarau Palembang, daunnya cepat menguning dan mati.</li>
      </ul>

      <p>Tim <strong>Tebasrumput.com</strong> memiliki keahlian khusus dalam menangani kedua jenis rumput ini. Kami tahu perbedaan mata pisau mesin yang tepat agar potongan tidak merusak struktur daunnya.</p>
    `
  },
  {
    id: "6",
    slug: "mengatasi-genangan-air-taman",
    title: "Mengatasi Masalah Genangan Air dan Drainase Taman Pasca Hujan",
    tags: ["Teknis", "Drainase", "Tips Rumah", "Palembang"],
    date: "21 Mar 2026",
    desc: "Hujan deras di Palembang seringkali menyisakan genangan. Pelajari trik teknis agar taman Anda tidak becek.",
    source: "https://www.rumah123.com/panduan-properti/drainase-taman/",
    content: `
      <h2>Halaman Bebas Becek di Musim Hujan</h2>
      <p>Intensitas hujan di wilayah Sumatera Selatan bisa sangat tinggi. Bagi Anda yang memiliki halaman cukup luas, genangan air yang menetap lebih dari 24 jam bisa membunuh akar rumput dan menyebabkan bau tidak sedap.</p>

      <h3>Tindakan Praktis yang Bisa Anda Lakukan:</h3>
      <ul>
        <li><strong>Pembuatan Biopori:</strong> Buatlah lubang silindris vertikal ke dalam tanah. Isi dengan sampah organik untuk meningkatkan daya serap air tanah secara alami.</li>
        <li><strong>Koreksi Kemiringan (Slopeing):</strong> Pastikan permukaan tanah taman memiliki kemiringan 1-2 derajat ke arah parit atau saluran pembuangan utama.</li>
        <li><strong>Aerasi Manual:</strong> Gunakan garpu taman untuk menusuk-nusuk area yang sering tergenang. Ini akan memecah kepadatan tanah dan memberi jalan air masuk ke lapisan bawah.</li>
      </ul>

      <p>Saat tim kami bertugas memotong rumput, kami juga bisa membantu memeriksa saluran drainase taman Anda agar bebas dari tumpukan sampah atau sisa potongan rumput lama yang menyumbat.</p>
    `
  },
  {
    id: "7",
    slug: "kebersihan-halaman-kesehatan-mental",
    title: "Taman Rapi: Pengaruh Kebersihan Halaman Terhadap Kesehatan Mental",
    tags: ["Gaya Hidup", "Kesehatan", "Psikologi", "Rumah"],
    date: "20 Mar 2026",
    desc: "Kesehatan mental dimulai dari apa yang kita lihat setiap hari. Mengapa taman yang berantakan bikin stres?",
    source: "https://www.liputan6.com/lifestyle/read/manfaat-berkebun-bagi-kesehatan-mental",
    content: `
      <h2>Visual Relaksasi di Depan Mata</h2>
      <p>Pernahkah Anda merasa lebih tenang saat melihat rumput yang baru saja dipangkas rapi? Ternyata itu bukan sekadar perasaan. Secara psikologis, lingkungan yang teratur membantu otak untuk memproses informasi lebih tenang.</p>

      <h3>Mengapa Halaman Bersih Sangat Penting?</h3>
      <ul>
        <li><strong>Lingkungan Bebas Cemas:</strong> Rumput liar yang tinggi secara tidak sadar memicu kecemasan akan keberadaan hewan berbahaya (ular/serangga).</li>
        <li><strong>Area Terbuka untuk Anak:</strong> Taman yang rapi memberikan ruang aman bagi anak untuk beraktivitas outdoor, menjauhkan mereka sejenak dari layar gadget.</li>
        <li><strong>Kepuasan Visual:</strong> Melihat warna hijau yang teratur meningkatkan hormon dopamin yang membuat kita merasa bahagia dan bangga akan hunian kita.</li>
      </ul>

      <p>Biarkan <strong>Tebasrumput.com</strong> mengambil beban pekerjaan berat di halaman Anda. Anda cukup duduk manis di teras, minum kopi, dan menikmati pemandangan taman yang asri setiap sore.</p>
    `
  },
  {
    id: "8",
    slug: "estimasi-harga-potong-rumput-palembang-2026",
    title: "Estimasi Biaya dan Harga Jasa Potong Rumput di Palembang 2026",
    tags: ["Harga", "Layanan", "Promo", "Info Palembang"],
    date: "19 Mar 2026",
    desc: "Berapa anggaran yang harus disiapkan untuk memanggil tukang rumput? Cek tabel perkiraan harga kami.",
    source: "https://www.sejutataman.com/harga-jasa-potong-rumput/",
    content: `
      <h2>Transparansi Harga Tanpa Biaya Tersembunyi</h2>
      <p>Banyak pelanggan khawatir dengan biaya "tembak" di lapangan. Di Tebasrumput.com, kami mengedepankan transparansi agar Anda bisa merencanakan pengeluaran perawatan rumah dengan tepat.</p>

      <h3>Faktor-faktor Penentu Harga:</h3>
      <ol>
        <li><strong>Luas Lahan:</strong> Satuan kavling standar biasanya lebih murah dibanding lahan luas borongan.</li>
        <li><strong>Tinggi Rumput:</strong> Rumput yang sudah setinggi dada manusia membutuhkan tenaga dan bensin mesin yang lebih besar.</li>
        <li><strong>Tingkat Kesulitan:</strong> Area yang banyak bebatuan atau kemiringan curam membutuhkan kehati-hatian ekstra.</li>
      </ol>

      <h3>Estimasi Layanan Palembang:</h3>
      <ul>
        <li><strong>Paket 1 (Kavling Kecil):</strong> Rp 300.000 - Rp 350.000 (Cocok untuk rumah tipe 36 atau 45).</li>
        <li><strong>Paket 2 (Lahan Sedang):</strong> Rp 450.000 - Rp 600.000 (Untuk lahan sisa atau samping rumah).</li>
        <li><strong>Lahan Borongan:</strong> Nego di tempat setelah survey foto/video via WhatsApp.</li>
      </ul>

      <p>Harga kami sudah termasuk biaya angkut sampah sisa potongan dan pembersihan area jalan setapak di sekitar taman. Sangat ekonomis dan terpercaya!</p>
    `
  },
  {
    id: "9",
    slug: "menjaga-rumput-hijau-musim-kemarau",
    title: "Rahasia Menjaga Rumput Tetap Hijau Segar di Musim Kemarau Sumatera",
    tags: ["Musiman", "Tips Kebun", "Kemarau", "Palembang"],
    date: "18 Mar 2026",
    desc: "Kemarau panjang sering melanda Sumatera Selatan. Simak trik agar rumput taman tidak kering dan mati.",
    source: "https://disway.id/read/tips-merawat-rumput-kemarau",
    content: `
      <h2>Bertahan di Bawah Terik Matahari</h2>
      <p>Musim kemarau di Palembang bisa menyebabkan tanah pecah-pecah jika tidak dikelola dengan benar. Rumput yang kering tidak hanya buruk secara visual, tapi juga sulit dipulihkan.</p>

      <h3>Golden Rules di Musim Kemarau:</h3>
      <ul>
        <li><strong>Naikkan Ketinggian Potongan:</strong> Saat musim panas, jangan potong rumput terlalu pendek (minimal sisakan 5-7 cm). Daun yang lebih panjang akan memayungi tanah di bawahnya agar air tidak cepat menguap.</li>
        <li><strong>Mulching:</strong> Jika memungkinkan, biarkan sisa potongan rumput halus tertinggal di atas lahan. Ini berfungsi sebagai pupuk alami sekaligus mulsa pengunci kelembapan.</li>
        <li><strong>Waktu Siram:</strong> Fokuskan penyiraman di sore hari agar air memiliki waktu semalaman untuk meresap sebelum matahari muncul kembali.</li>
      <p>Tim profesional kami selalu menyesuaikan setelan mesin potong rumput berdasarkan cuaca saat itu. Kami menjamin rumput Anda tetap aman meski di cuaca ekstrim sekalipun.</p>
    `
  },
  {
    id: "10",
    slug: "mesin-potong-rumput-modern-vs-manual",
    title: "Investasi Alat: Mesin Potong Rumput Modern vs Alat Manual",
    tags: ["Peralatan", "Teknis", "Profesional", "Kebun"],
    date: "17 Mar 2026",
    desc: "Mengapa menggunakan mesin bermotor jauh lebih baik bagi kesehatan rumput Anda? Simak ulasan teknisnya.",
    source: "https://www.alatpro.id/perbedaan-mesin-potong-rumput/",
    content: `
      <h2>Kualitas Hasil Tergantung pada Ketajaman Alat</h2>
      <p>Banyak warga menggunakan sabit atau gunting manual untuk merapikan taman. Meskipun murah, secara teknis hal ini bisa menghambat pertumbuhan rumput Anda.</p>

      <h3>Kelebihan Mesin Potong Rumput Bermotor:</h3>
      <ul>
        <li><strong>Kecepatan Putaran Tinggi:</strong> Menghasilkan potongan yang bersih (<em>clean cut</em>). Sabit manual seringkali membuat batang rumput "sobek", yang bisa memicu penyakit tanaman.</li>
        <li><strong>Efisiensi Waktu:</strong> Pekerjaan yang dilakukan manual 1 hari bisa selesai dalam 1-2 jam menggunakan mesin profesional.</li>
        <li><strong>Kerataan Sempurna:</strong> Tidak ada area yang lebih tinggi atau lebih rendah, taman terlihat seperti karpet hotel bintang lima.</li>
      </ul>

      <p>Tebasrumput.com selalu menggunakan mesin terbaru dengan mata pisau yang selalu diasah setiap hari untuk memastikan hasil potongan yang sehat bagi rumput kesayangan Anda di wilayah Palembang.</p>
    `
  },
  // New 10 Articles
  {
    title: "Panduan Aplikasi Pupuk NPK Mutiara untuk Rumput Gajah Mini",
    tags: ["Pupuk", "NPK", "Gajah Mini", "Tips"],
    date: "16 Mar 2026",
    desc: "Pelajari dosis tepat NPK 16-16-16 agar rumput gajah mini Anda tumbuh rimbun dan tidak mudah mati.",
    source: "https://kumparan.com/pupuk-npk-untuk-rumput-gajah-mini",
    content: `
      <h2>Nutrisi Seimbang: Kunci Rumput Sehat</h2>
      <p>Banyak pemilik rumah di Palembang mengeluh rumput mereka tiba-tiba mengerdil atau berwarna kekuningan. Hal ini biasanya terjadi karena tanah sudah kehabisan nutrisi penting seperti Nitrogen (N), Fosfor (P), dan Kalium (K).</p>
      
      <h3>Mengapa Pilih NPK Mutiara 16-16-16?</h3>
      <p>Pupuk NPK Mutiara memiliki komposisi hara yang seimbang. Nitrogen berfungsi untuk kesegaran daun, Fosfor untuk kekuatan akar, dan Kalium untuk daya tahan terhadap penyakit.</p>
      <ul>
        <li><strong>Dosis:</strong> Gunakan sekitar 30 gram per meter persegi lahan.</li>
        <li><strong>Persiapan:</strong> Siram rumput secara merata 1 hari sebelum pemupukan agar tanah dalam kondisi lembap.</li>
        <li><strong>Waktu Terbaik:</strong> Taburkan saat sore hari setelah matahari tidak menyengat. Segera siram setelah pupuk ditabur agar butirannya mencair dan tidak membuat daun rumput "hangus".</li>
      </ul>

      <p>Ingat, pemupukan yang berlebihan justru bisa merusak pH tanah. Lakukan pemupukan rutin setiap 2-3 bulan sekali untuk hasil yang optimal.</p>
    `
  },
  {
    title: "Inspirasi Taman Tropis Minimalis: Desain Ideal untuk Rumah Palembang",
    tags: ["Desain", "Modern", "Palembang", "Inspirasi"],
    date: "15 Mar 2026",
    desc: "Membangun taman di lahan sempit Sumatera Selatan butuh strategi. Simak konsep desain Tropical Zen kami.",
    source: "https://arsitag.com/taman-tropis-minimalis-palembang",
    content: `
      <h2>Cantik Tanpa Repot: Konsep Modern Tropis</h2>
      <p>Bagi warga Palembang yang memiliki lahan terbatas di perumahan tipe 36 atau 45, konsep minimalis adalah solusi terbaik. Fokus utama desain ini adalah integrasi antara area hijau yang rapi dengan elemen keras seperti batuan alam atau kayu.</p>
      
      <h3>Elemen Wajib Taman Minimalis Palembang:</h3>
      <ol>
        <li><strong>Rumput sebagai Karpet Alami:</strong> Gunakan rumput manila atau gajah mini yang dipangkas pendek secara rutin.</li>
        <li><strong>Tanaman Vertikal:</strong> Gunakan dinding samping untuk menaruh tanaman gantung seperti <em>Lee Kwan Yew</em> untuk memberikan kesan air terjun hijau.</li>
        <li><strong>Bebatuan Koral:</strong> Gunakan batu koral putih atau sikat di pinggiran taman untuk mempertegas batas area dan mempermudah pembersihan.</li>
      </ol>

      <p>Sebagus apapun desain taman Anda, kuncinya tetap pada pemangkasan rutin. Taman minimalis yang rimbun tanpa kontrol akan terlihat sangat berantakan dan menutupi cahaya masuk ke dalam rumah.</p>
    `
  },
  {
    title: "10 Tanaman Hias Outdoor yang Paling Kuat Menghadapi Terik Matahari",
    tags: ["Tanaman", "Outdoor", "Tahan Panas", "Kebun"],
    date: "14 Mar 2026",
    desc: "Daftar tanaman tangguh yang tetap berbunga cantik meski terpapar panas Palembang sepanjang hari.",
    source: "https://www.rumah123.com/tanaman-hias-tahan-panas/",
    content: `
      <h2>Oase Berwarna di Halaman Depan</h2>
      <p>Memilih tanaman hias di Palembang tidak bisa sembarangan. Tanaman yang tidak tahan panas (<em>indoor plants</em>) yang dipaksa di halaman terbuka akan cepat layu dan mati terbakar matahari.</p>
      
      <h3>Rekomendasi Tanaman Tahan Panas:</h3>
      <ul>
        <li><strong>Bougainvillea (Bunga Kertas):</strong> Sangat tangguh, semakin terpapar panas justru bunganya akan semakin banyak dan berwarna cerah.</li>
        <li><strong>Kaktus dan Sukulen Besar:</strong> Memiliki kemampuan menyimpan air yang luar biasa, cocok untuk dekorasi taman kering.</li>
        <li><strong>Euphorbia:</strong> Memiliki bunga kecil yang cantik dan duri pelindung, sangat tahan terhadap kekeringan.</li>
        <li><strong>Bunga Matahari:</strong> Memberikan keceriaan pada taman Anda dan sangat menyukai sinar matahari penuh.</li>
      </ul>

      <p>Memiliki tanaman ini akan sangat menghemat waktu Anda dalam hal penyiraman, namun tetap pastikan area sekitarnya bersih dari tumpukan daun kering agar taman tetap terlihat estetis.</p>
    `
  },
  {
    title: "Panduan Teknis DIY: Cara Memasang Paving Block yang Rata dan Awet",
    tags: ["Teknis", "DIY", "Halaman", "Paving"],
    date: "13 Mar 2026",
    desc: "Ingin mengubah area becek menjadi area parkir atau jalan setapak yang rapi? Simak panduan lengkapnya.",
    source: "https://www.detik.com/properti/tips-pasang-paving-block/",
    content: `
      <h2>Ciptakan Halaman Lebih Fungsional</h2>
      <p>Paving block adalah solusi cerdas bagi warga Palembang untuk mengatasi area halaman yang sering becek saat musim hujan. Namun, pemasangan yang asal-asalan akan membuat paving cepat amblas atau bergelombang.</p>
      
      <h3>Langkah-langkah Pemasangan Profesional:</h3>
      <ol>
        <li><strong>Galian Tanah Dasar:</strong> Gali tanah sedalam 15-20 cm dan pastikan padat menggunakan alat stamper.</li>
        <li><strong>Gunakan Pasir Urug:</strong> Hampar pasir setebal 5-7 cm sebagai dasar. Ratakan menggunakan papan kayu yang panjang.</li>
        <li><strong>Penyusunan Paving:</strong> Mulailah dari sudut paling pojok. Pastikan antar block terpatri rapat.</li>
        <li><strong>Finishing dengan Abu Batu:</strong> Taburkan abu batu di atas permukaan paving yang sudah terpasang, lalu sapu hingga masuk ke sela-sela (nat) untuk mengunci posisi paving agar tidak bergeser.</li>
      </ol>

      <p>Halaman yang rapi dengan kombinasi paving dan rumput hijau akan meningkatkan nilai properti Anda di mata orang lain!</p>
    `
  },
  {
    title: "Membasmi Hama Uret (Larva Kumbang) Pada Rumput Secara Efektif",
    tags: ["Hama", "Organik", "Penyakit", "Tips"],
    date: "12 Mar 2026",
    desc: "Waspadai tanda-tanda kerusakan akar rumput. Jangan biarkan hama uret menghancurkan investasi taman Anda.",
    source: "https://agrokomplekskita.com/membasmi-hama-uret/",
    content: `
      <h2>Musuh Tersembunyi di Bawah Tanah</h2>
      <p>Pernahkah Anda menemui bercak kuning melingkar pada rumput yang saat dicabut ternyata tidak memiliki akar? Itu adalah tanda serangan hama uret (larva kumbang) yang memakan akar rumput gajah mini kesayangan Anda.</p>
      
      <h3>Cara Identifikasi dan Pembasmian:</h3>
      <ul>
        <li><strong>Cek Kepadatan Tanah:</strong> Jika tanah terasa gembur atau berongga saat diinjak, kemungkinan besar ada aktivitas uret merusak akar.</li>
        <li><strong>Solusi Pestisida Organik:</strong> Campurkan air sabun cuci piring dengan air biasa, lalu siramkan ke area yang terinfeksi. Larva uret akan naik ke permukaan dan bisa Anda bersihkan secara manual.</li>
        <li><strong>Pencegahan dengan Jamur Metarhizium:</strong> Gunakan agen hayati ini yang dicampur pada pupuk dasar untuk membasmi larva secara alami tanpa merusak kesuburan tanah.</li>
      </ul>

      <p>Jika serangan sudah meluas, segera konsultasikan dengan tim <strong>Tebasrumput.com</strong> untuk penanganan profesional.</p>
    `
  },
  {
    title: "Mengenal Teknik Aerasi (Pelubangan Tanah) untuk Kesuburan Akar",
    tags: ["Perawatan", "Tanah", "Aerasi", "Profesional"],
    date: "11 Mar 2026",
    desc: "Tanah yang terlalu padat bikin rumput 'sesak napas'. Simak pentingnya teknik aerasi setiap 6 bulan sekali.",
    source: "https://kfclandscape.com/pentingnya-aerasi-rumput/",
    content: `
      <h2>Agar Rumput Bisa Bernapas Kembali</h2>
      <p>Di wilayah dengan tanah liat seperti sebagian besar area Palembang, tanah cenderung menjadi sangat padat seiring berjalannya waktu. Padatnya tanah menghalangi oksigen, air, dan nutrisi untuk sampai ke akar rumput utama.</p>
      
      <h3>Apa Itu Aerasi?</h3>
      <p>Aerasi adalah proses membuat lubang-lubang kecil sedalam 10 cm pada permukaan tanah secara merata. Ini bisa dilakukan menggunakan mesin aerator atau alat manual berbasis garpu tanah.</p>
      
      <h3>Manfaat Luar Biasa Aerasi:</h3>
      <ul>
        <li>Memudahkan air hujan meresap, mengurangi risiko genangan.</li>
        <li>Mengoptimalkan penyerapan pupuk oleh akar.</li>
        <li>Memperkuat struktur akar agar rumput lebih tahan terhadap cuaca panas.</li>
      </ul>

      <p>Sebaiknya aerasi dilakukan bersamaan dengan jadwal pemupukan rutin untuk hasil maksimal.</p>
    `
  },
  {
    title: "Mengapa Lahan Kosong yang Rimbun Harus Segera Dibersihkan?",
    tags: ["Layanan", "Keamanan", "Lahan Kosong", "Palembang"],
    date: "10 Mar 2026",
    desc: "Rumput liar setinggi dada bukan cuma merusak pemandangan, tapi ancaman nyata bagi keamanan lingkungan sekitar.",
    source: "https://tebasrumput.com/manfaat-bersih-lahan",
    content: `
      <h2>Hindari Ancaman Hewan Berbahaya di Lahan Kosong</h2>
      <p>Banyak lahan di wilayah baru <strong>Jakabaring</strong> atau <strong>Gandus</strong> yang dibiarkan terbengkalai. Rumput liar yang rimbun dan tidak terawat adalah magnet bagi predator berbahaya.</p>
      
      <h3>Risiko Membiarkan Lahan Rimbun:</h3>
      <ol>
        <li><strong>Sarang Ular:</strong> Kobra dan sanca sangat suka bersembunyi di sela-sela rumput tinggi yang lembap.</li>
        <li><strong>Wabah Nyamuk:</strong> Menjadi tempat berkembang biak nyamuk DBD yang mengancam kesehatan anak-anak di sekitar.</li>
        <li><strong>Kejahatan:</strong> Lahan rimbun sering digunakan untuk aktivitas negatif karena tidak terpantau dari jalan utama.</li>
      </ol>

      <p>Tim <strong>Tebasrumput.com</strong> memiliki keahlian khusus untuk pembersihan lahan skala besar menggunakan mesin tebas yang kuat. Kami siap membersihkan semak belukar hingga ke akarnya!</p>
    `
  },
  {
    title: "Tips Membangun Vertical Garden di Lahan Terbatas Kota Palembang",
    tags: ["Urban Farming", "Vertical Garden", "DIY", "Palembang"],
    date: "09 Mar 2026",
    desc: "Solusi cerdas bagi pemilik ruko atau rumah minimalis yang ingin tetap memiliki sudut hijau yang segar.",
    source: "https://palpres.disway.id/tips-vertical-garden-minimalis",
    content: `
      <h2>Hutan Vertikal di Dinding Rumah Anda</h2>
      <p>Konsep <em>Vertical Garden</em> sangat populer di kota besar seperti Palembang karena tidak memakan tempat di lantai. Anda bisa memanfaatkan dinding belakang rumah atau pagar depan untuk area hijau ini.</p>
      
      <h3>Cara Membuat Vertical Garden Sederhana:</h3>
      <ul>
        <li><strong>Pemilihan Rak:</strong> Gunakan rangka besi atau modular plastik yang bisa ditempel di tembok.</li>
        <li><strong>Sistem Pengairan:</strong> Karena media tanam sangat sedikit, perhatikan sistem pengairan otomatis atau lakukan penyiraman manual minimal 2x sehari karena penguapan di dinding sangat cepat.</li>
        <li><strong>Jenis Tanaman:</strong> Gunakan <em>Epipremnum</em> (Sirih Gading) atau <em>Bromelia</em> yang tahan banting di berbagai kondisi cahaya.</li>
      </ul>

      <p>Penyusunan tanaman yang rapi secara vertikal akan memberikan efek sejuk pada dinding rumah sehingga suhu ruangan di dalamnya bisa turun secara alami.</p>
    `
  },
  {
    title: "Cara Identifikasi dan Identifikasi Penyakit Jamur Tanah Pada Rumput",
    tags: ["Penyakit", "Fungisida", "Tips", "Kesehatan"],
    date: "08 Mar 2026",
    desc: "Musim hujan berkepanjangan sering membawa jamur. Jangan biarkan bercak putih menyebar di taman Anda.",
    source: "https://pertanian.go.id/penyakit-jamur-rumput-taman",
    content: `
      <h2>Waspadai Bercak Putih Kapas di Pagi Hari</h2>
      <p>Penyakit jamur tanah sering menyerang rumput jepang yang terlalu rapat di kondisi lembap. Cirinya adalah munculnya bercak berwarna cokelat atau putih seperti kapas pada permukaan rumput.</p>
      
      <h3>Langkah Penyelamatan:</h3>
      <ol>
        <li><strong>Kurangi Penyiraman:</strong> Hentikan penyiraman selama 1-2 hari agar permukaan tanah mengering.</li>
        <li><strong>Pemangkasan Segera:</strong> Potong bagian yang terinfeksi dan jangan membuang sisa potongannya di area taman lain karena spora jamur bisa menyebar.</li>
        <li><strong>Gunakan Fungisida:</strong> Semprotkan larutan fungisida sesuai dosis untuk membunuh akar jamur di dalam tanah.</li>
      </ol>

      <p>Kebersihan alat potong juga sangat berpengaruh. Tim kami selalu mensterilkan mata pisau sebelum mulai mengerjaan lahan pelanggan baru untuk mencegah penularan penyakit tanaman antar rumah.</p>
    `
  },
  {
    title: "Kenapa Mesin Potong Rumput Bermotor Lebih Aman Bagi Rumput?",
    tags: ["Teknologi", "Layanan", "Mesin", "Efisien"],
    date: "07 Mar 2026",
    desc: "Efisiensi tinggi dan kesehatan tanaman adalah alasan utama kami meninggalkan cara pemotongan tradisional.",
    source: "https://www.alatpro.id/kelebihan-mesin-potong-rumput",
    content: `
      <h2>Potongan Rapi, Tumbuhan Happy</h2>
      <p>Banyak orang menganggap semua teknik pemotongan sama saja selama rumput menjadi pendek. Secara sains, hal itu salah besar. Cara memotong sangat menentukan kecepatan pemulihan rumput Anda.</p>
      
      <h3>Keunggulan Mesin Rotari Modern:</h3>
      <ul>
        <li><strong>Clean Cut (Potongan Bersih):</strong> Mesin modern memotong helai rumput secepat kilat tanpa merobek pori-pori daun. Rumput yang terpotong bersih akan segera menutup lukanya dan tumbuh kembali lebih hijau.</li>
        <li><strong>Pemadatan Tanah Minim:</strong> Tekanan mesin yang didorong/gendong lebih merata dibandingkan tekanan kaki manusia saat berjam-jam memotong menggunakan sabit tradisional.</li>
        <li><strong>Penghancur Sampah:</strong> Beberapa mesin kami memiliki fitur <em>mulching</em> yang bisa menghancurkan sisa potongan menjadi serpihan halus sebagai pupuk langsung.</li>
      </ul>

      <p>Dapatkan pengalaman jasa potong rumput kelas profesional hanya di <strong>Tebasrumput.com</strong>. Kami datang membawa alat terbaik, Anda tinggal menikmati hasilnya!</p>
    `
  }
];

const PALEMBANG_REGIONS = [
  "Alang-Alang Lebar",
  "Bukit Kecil",
  "Gandus",
  "Ilir Barat I",
  "Ilir Barat II",
  "Ilir Timur I",
  "Ilir Timur II",
  "Ilir Timur III",
  "Jakabaring",
  "Kalidoni",
  "Kemuning",
  "Kertapati",
  "Plaju",
  "Sako",
  "Seberang Ulu I",
  "Seberang Ulu II",
  "Sematang Borang",
  "Sukarami"
];

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (!isAdmin) return <Navigate to="/admin" replace />;
  return <>{children}</>;
};

export default function App() {
  const [blogs, setBlogs] = useState<any[]>(() => {
    const savedBlogs = localStorage.getItem("tebasrumput_blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : INITIAL_BLOGS;
  });
  const location = useLocation();

  // Save blogs to localStorage when updated
  useEffect(() => {
    localStorage.setItem("tebasrumput_blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleSaveBlog = (blog: any) => {
    setBlogs(prev => {
      const index = prev.findIndex(b => b.id === blog.id);
      if (index !== -1) {
        const newBlogs = [...prev];
        newBlogs[index] = blog;
        return newBlogs;
      }
      return [blog, ...prev];
    });
  };

  const handleDeleteBlog = (id: string) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage blogs={blogs} />} />
      <Route path="/blog/:slug" element={<BlogDetailPage blogs={blogs} />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<LoginPage />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <DashboardPage blogs={blogs} onDeleteBlog={handleDeleteBlog} />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/dashboard/new" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ArticleEditorPage blogs={blogs} onSaveBlog={handleSaveBlog} />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/dashboard/edit/:id" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ArticleEditorPage blogs={blogs} onSaveBlog={handleSaveBlog} />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function LandingPage({ blogs }: { blogs: any[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);
  const [activeBlog, setActiveBlog] = useState<any>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    service: "Paket 1 (300rb - Kavling Kecil)"
  });

  const handleBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let message = "Halo tebasrumput.com, saya ingin memesan jasa potong rumput.";
    if (formData.name || formData.region) {
      message = `Halo tebasrumput.com, saya ${formData.name || "Pelanggan"} dari wilayah ${formData.region || "Palembang"} ingin memesan layanan ${formData.service}.`;
    }

    window.open(`${WA_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const selectPackage = (packageName: string) => {
    setFormData(prev => ({ ...prev, service: packageName }));
    const heroSection = document.getElementById('hero-form');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <nav aria-label="Menu Utama" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Leaf className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform shrink-0" />
            <span className="text-2xl font-black tracking-tighter text-black">
              tebasrumput.com
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Layanan</a>
            <a href="#keunggulan" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Keunggulan</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Harga</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">FAQ</a>
            <button onClick={handleBooking} className="btn-primary text-sm py-2 px-6 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Booking Sekarang
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-6 py-8 flex flex-col gap-4"
          >
            <a href="#layanan" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Layanan</a>
            <a href="#keunggulan" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Keunggulan</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Harga</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">FAQ</a>
            <button onClick={handleBooking} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Booking Sekarang
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 -z-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(22, 163, 74, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 163, 74, 0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}>
          </div>

          {/* Balanced Songket-inspired Line Pattern */}
          <div className="absolute top-0 left-0 w-full flex flex-col items-center opacity-10">
            <div className="w-full h-[1px] bg-primary"></div>
            <div className="flex gap-4 -mt-[5px]">
              <div className="w-2 h-2 rotate-45 border border-primary bg-white"></div>
              <div className="w-2 h-2 rotate-45 border border-primary bg-white"></div>
              <div className="w-2 h-2 rotate-45 border border-primary bg-white"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-left space-y-10"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase">
                <MapPin className="w-3 h-3" />
                <span>Wilayah <span className="text-primary font-bold">Palembang</span> & Sekitarnya</span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-6xl font-medium leading-[1.1] text-slate-900 tracking-tight">
                <span className="font-bold text-primary">Jasa Tebas Rumput Panggilan Palembang</span> <br />
                <span className="text-slate-900 font-black text-4xl md:text-6xl">Murah & Rapi</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg text-slate-500 leading-relaxed font-light">
                Solusi praktis untuk halaman rumah, kantor, dan lahan kosong. <br className="hidden md:block" />
                <span className="font-medium text-slate-700">Rapi, Cepat, & Terpercaya</span> — Tim kami datang langsung ke lokasi Anda dengan peralatan modern lengkap.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={handleBooking}
                  className="btn-primary w-full sm:w-auto text-base px-10 py-4 flex items-center justify-center gap-3 shadow-lg hover:bg-primary-dark"
                >
                  <MessageCircle className="w-5 h-5" /> Booking Sekarang
                </button>
                <a href="#layanan" className="text-slate-600 font-bold hover:text-primary transition-colors flex items-center gap-2 text-sm sm:text-base">
                  Lihat Daftar Layanan <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col items-start gap-4 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm">
                      <User className="w-6 h-6" />
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-amber-500 gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                    <span className="ml-2 font-black text-slate-900 text-lg">4.9/5</span>
                  </div>
                  <p className="text-slate-500 font-medium italic">"Taman saya jadi rapi banget, timnya profesional!" — 1,000+ Pelanggan Puas</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              id="hero-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 relative"
            >
              <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Respon Cepat!
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pesan Sekarang</h3>
              <p className="text-slate-500 text-sm mb-8">Isi form di bawah untuk booking via WhatsApp.</p>

              <form onSubmit={handleBooking} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wilayah Palembang</label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      required
                    >
                      <option value="" disabled>Pilih Kecamatan</option>
                      {PALEMBANG_REGIONS.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pilih Paket Layanan</label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white font-medium text-slate-700"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Paket 1 (300rb - Kavling Kecil)">Paket 1: 300rb (60-80 m²)</option>
                      <option value="Paket 2 (500rb - Kavling Sedang)">Paket 2: 500rb (80-120 m²)</option>
                      <option value="Custom / Borongan">Custom / Borongan (Survey Lokasi)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4"
                >
                  <MessageCircle className="w-6 h-6" /> Kirim Ke WhatsApp
                </button>

                <p className="text-center text-slate-400 text-[10px] uppercase tracking-widest pt-2">
                  Aman • Cepat • Tanpa Biaya Admin
                </p>
              </form>
            </motion.div>
          </div>
        </section >

        {/* Trust / Social Proof - Marquee */}
        < section className="bg-soft-gray py-12 overflow-hidden border-y border-slate-100" >
          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-16 px-8">
              <span className="text-2xl font-black text-primary/20 tracking-tighter">GARDENIA</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">LUSHSCAPES</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">GREENWAY</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">ECOLAWN</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">NATUREPRO</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">PALM-GREEN</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">AMPERA-LAND</span>
            </div>
            <div className="flex items-center gap-16 px-8">
              <span className="text-2xl font-black text-primary/20 tracking-tighter">GARDENIA</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">LUSHSCAPES</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">GREENWAY</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">ECOLAWN</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">NATUREPRO</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">PALM-GREEN</span>
              <span className="text-2xl font-black text-primary/20 tracking-tighter">AMPERA-LAND</span>
            </div>
          </div>
        </section >

        {/* Layanan Kami */}
        < section id="layanan" className="section-padding max-w-7xl mx-auto" >
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Layanan Kami</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Solusi Lengkap Untuk Halaman Anda</h3>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-light">Kami menyediakan berbagai layanan perawatan taman untuk memastikan lingkungan Anda tetap hijau dan asri.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Scissors />, title: "Potong Rumput", desc: "Pemotongan rumput taman rumah dengan hasil rapi dan presisi." },
              { icon: <Leaf />, title: "Perawatan Rutin", desc: "Pemeliharaan berkala agar taman tetap sehat dan indah setiap saat." },
              { icon: <Trash2 />, title: "Pembersihan Halaman", desc: "Pembersihan sisa rumput, daun kering, dan sampah organik lainnya." },
              { icon: <Trees />, title: "Pangkas Tanaman", desc: "Merapikan tanaman hias dan pohon kecil agar tumbuh teratur." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="card group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section >

        {/* Keunggulan */}
        < section id="keunggulan" className="bg-slate-900 text-white section-padding overflow-hidden" >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-xs font-bold text-primary-light tracking-[0.2em] uppercase">Mengapa Kami?</h2>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Kualitas Terbaik Untuk Kepuasan Anda</h3>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Tenaga Profesional", desc: "Tim ahli yang sudah berpengalaman bertahun-tahun di bidangnya." },
                  { title: "Peralatan Modern", desc: "Menggunakan mesin potong terbaru untuk hasil yang lebih rapi dan cepat." },
                  { title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi. Harga sesuai dengan paket yang dipilih." },
                  { title: "Tepat Waktu", desc: "Kami menghargai waktu Anda dengan datang sesuai jadwal yang disepakati." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-primary-light w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-square">
                <img
                  src="https://potongrumputbatam.com/wp-content/uploads/2022/08/grass-trim-services.jpeg"
                  alt="Professional Lawn Care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Terpercaya</p>
                      <p className="text-sm font-medium text-slate-900">Hasil Rapi & Presisi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>

              <div className="absolute -right-4 top-1/4 w-24 h-24 border-2 border-primary/20 rounded-full"></div>
              <div className="absolute -left-8 bottom-1/4 w-16 h-16 border border-slate-200 rounded-full"></div>
            </motion.div>
          </div>
        </section >

        {/* Stats Section - Solid Version */}
        < section className="bg-primary py-16 px-6 md:px-12 lg:px-24" >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
              {[
                { label: "Halaman Selesai", value: "500+" },
                { label: "Pelanggan Puas", value: "100%" },
                { label: "Tahun Pengalaman", value: "5+" },
                { label: "Tim Profesional", value: "15+" }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-1 border-white/20 lg:border-l first:border-l-0">
                  <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight">{stat.value}</h4>
                  <p className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Cara Kerja */}
        < section className="section-padding max-w-7xl mx-auto" >
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Cara Kerja</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Proses Mudah & Cepat</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>

            {[
              { step: "01", title: "Booking", desc: "Hubungi kami via WA atau website untuk reservasi." },
              { step: "02", title: "Survey", desc: "Kami lakukan konfirmasi atau survey lokasi jika diperlukan." },
              { step: "03", title: "Pengerjaan", desc: "Tim kami datang dan mengerjakan tugas dengan rapi." },
              { step: "04", title: "Selesai", desc: "Halaman rapi, Anda puas, pembayaran dilakukan." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section >

        {/* Pricing Section */}
        < section id="pricing" className="bg-soft-gray section-padding" >
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Harga Paket</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Pilih Paket Yang Sesuai</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Paket 1",
                  price: "300rb",
                  desc: "Luas 1 kavling kecil (60–80 m²)",
                  features: [
                    "Pemotongan rumput standar",
                    "Pembersihan sisa potongan rumput",
                    "Waktu pengerjaan 1 hari",
                    "Menggunakan mesin potong rumput",
                    "Rumput liar, taman atau halaman rumah"
                  ],
                  recommended: false
                },
                {
                  name: "Paket 2",
                  price: "500rb",
                  desc: "Luas 1 kavling sedang (80–120 m²)",
                  features: [
                    "Pemotongan rumput rapi & merata",
                    "Pembersihan sisa potongan rumput",
                    "Waktu pengerjaan 1 hari",
                    "Menggunakan mesin potong rumput",
                    "Rumput liar, taman atau halaman rumah",
                    "Pemupukan ringan setelah pemotongan",
                    "Pembakaran sisa rumput (Opsional)"
                  ],
                  recommended: true
                }
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl border transition-all ${plan.recommended ? 'bg-white border-primary shadow-xl scale-105 z-10' : 'bg-white/50 border-slate-200'}`}
                >
                  {plan.recommended && (
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Paling Populer</span>
                  )}
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-primary">{plan.price}</span>
                    <span className="text-slate-400 text-sm">/ kavling</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-6">{plan.desc}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => selectPackage(plan.name === "Paket 1" ? "Paket 1 (300rb - Kavling Kecil)" : "Paket 2 (500rb - Kavling Sedang)")}
                    className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.recommended ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                  >
                    <MessageCircle className="w-4 h-4" /> Pilih Paket
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Testimonials Marquee */}
        < section className="py-24 bg-slate-50 overflow-hidden" >
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-3">
            <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Testimoni</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Apa Kata Pelanggan Kami</h3>
          </div>

          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 px-4">
                  {[
                    { name: "Budi Santoso", role: "Pemilik Rumah", text: "Hasil potongannya sangat rapi dan rata. Halaman rumah yang tadinya berantakan sekarang jadi terlihat sangat terawat." },
                    { name: "Siti Aminah", role: "Ibu Rumah Tangga", text: "Sangat puas dengan kebersihannya. Sisa-sisa potongan rumput langsung dibersihkan dan diangkut, taman jadi langsung bersih." },
                    { name: "Andi Wijaya", role: "Pengusaha", text: "Pengerjaannya cepat tapi hasilnya presisi. Sudut-sudut taman yang sulit dijangkau pun dipotong dengan sangat rapi." },
                    { name: "Rina Kartika", role: "Pemilik Villa", text: "Rumput liar yang tadinya tinggi dan rimbun langsung habis dipangkas. Sekarang halaman jadi lebih terang dan bebas serangga." },
                    { name: "Hendra Putra", role: "Manajer Properti", text: "Kualitas potongannya konsisten. Sudah beberapa kali pakai jasa ini, hasilnya selalu memuaskan dan rapi sampai ke pinggiran tembok." },
                    { name: "Dewi Lestari", role: "Pecinta Tanaman", text: "Hasilnya sangat estetik, tanaman hias saya tidak ada yang rusak saat proses pemotongan rumput. Benar-benar profesional." },
                    { name: "Fajar Ramadhan", role: "Pemilik Kafe", text: "Area outdoor kafe saya jadi terlihat jauh lebih profesional setelah rumputnya dipotong rapi. Hasilnya benar-benar beda dari jasa lain." },
                    { name: "Maya Sari", role: "Ibu Rumah Tangga", text: "Halaman belakang yang tadinya seperti hutan sekarang sudah bersih total. Hasil potongannya halus dan tidak ada yang terlewat." }
                  ].map((testi, idx) => (
                    <div
                      key={idx}
                      className="w-[350px] bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 whitespace-normal inline-block transition-all hover:border-primary/20"
                    >
                      <div className="flex items-center text-amber-400">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">"{testi.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm">{testi.name}</h5>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{testi.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* FAQ Section */}
        < section id="faq" className="section-padding bg-slate-50" >
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">FAQ</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Pertanyaan Umum</h3>
            </div>

            <div className="space-y-4">
              {[
                { q: "Apakah bisa panggilan mendadak?", a: "Tentu! Kami menyediakan slot untuk pengerjaan di hari yang sama jika jadwal masih tersedia. Sebaiknya hubungi kami di pagi hari." },
                { q: "Area layanan di mana saja?", a: "Saat ini kami melayani seluruh area Palembang dan sekitarnya. Untuk area yang lebih jauh, silakan hubungi admin kami." },
                { q: "Apakah alat disediakan?", a: "Ya, tim kami membawa seluruh peralatan lengkap mulai dari mesin potong, gunting tanaman, hingga alat pembersih." },
                { q: "Berapa lama pengerjaan?", a: "Tergantung luas area. Untuk halaman rumah standar (50m²), biasanya memakan waktu 1-2 jam." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-primary/30 shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50/50 transition-colors list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="font-bold text-slate-900">{faq.q}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-open:bg-primary group-open:border-primary transition-all">
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:text-white transition-transform group-open:rotate-180" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pl-18 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section >

        {/* Blog Section */}
        <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
              <div className="text-left space-y-4">
                <h2 className="text-primary font-bold text-sm tracking-widest uppercase">Tips & Blog</h2>
                <h3 className="text-2xl md:text-5xl font-bold text-slate-900 tracking-tight">Inspirasi & Tips Perawatan Taman</h3>
                <p className="text-slate-500 max-w-2xl font-light text-xs md:text-base">Informasi bermanfaat seputar perawatan rumput dan taman khusus untuk wilayah Palembang.</p>
              </div>
              <div className="hidden md:flex gap-4">
                <button
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-400 group"
                  aria-label="Scroll Kiri"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 group-active:scale-90 transition-transform" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-400 group"
                  aria-label="Scroll Kanan"
                >
                  <ArrowRight className="w-5 h-5 group-active:scale-90 transition-transform" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 scroll-smooth"
            >
              {blogs.map((blog, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="min-w-[280px] md:min-w-[380px] snap-start group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{blog.tags[0]}</span>
                      <span className="text-xs text-slate-400 font-medium">{blog.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">{blog.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed flex-grow line-clamp-3">{blog.desc}</p>
                    <Link to={`/blog/${blog.slug}`} className="flex items-center gap-2 text-primary font-bold text-xs md:text-sm group-hover:gap-4 transition-all pt-4">
                      Selengkapnya <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        < section className="px-5 md:px-12 lg:px-24 py-12" >
          <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight tracking-tight">Rumput Anda Sudah Terlalu Panjang?</h3>
              <p className="text-white/80 font-medium text-sm md:text-base">Jangan biarkan halaman Anda jadi hutan. Booking sekarang dan dapatkan diskon 10%!</p>
              <button onClick={handleBooking} className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm md:text-base shadow-lg hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2 mx-auto">
                <MessageCircle className="w-5 h-5" /> Booking Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section >
      </main >

        {/* SEO Keywords & Service Areas Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Area Layanan & Spesialisasi</h2>
                <p className="text-slate-600 leading-relaxed">
                  Kami menyediakan <strong>jasa potong rumput panggilan</strong> untuk seluruh wilayah kota Palembang. Tim kami ahli dalam <strong>jasa tebas rumput panggilan Palembang</strong>, menangani berbagai jenis lahan mulai dari halaman rumah minimalis hingga lahan kosong yang rimbun. Layanan <strong>jasa babat rumput area Palembang</strong> kami menjamin hasil yang rapi dan cepat.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Jasa Babat Rumput Area Palembang",
                    "Potong Rumput Panggilan",
                    "Jasa Potong Rumput Wilayah Palembang",
                    "Tukang Rumput Palembang",
                    "Pembersihan Lahan Kosong",
                    "Perawatan Taman Palembang"
                  ].map(keyword => (
                    <span key={keyword} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Cakupan Wilayah Palembang:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs text-slate-500">
                  {PALEMBANG_REGIONS.map(region => (
                    <span key={region} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full"></div> {region}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[10px] text-slate-400 italic">
                  *Pemesanan <strong>jasa potong rumput panggilan wilayah Palembang</strong> dapat dilakukan setiap hari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        < footer className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24" >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                tebasrumput.com
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Partner terpercaya untuk perawatan halaman dan taman Anda. Kami mengutamakan kualitas dan kepuasan pelanggan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg">Tautan Cepat</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#keunggulan" className="hover:text-primary transition-colors">Keunggulan</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Harga</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg">Legal</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</button></li>
              <li><button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg">Kontak</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Jl. Prajurit Nazaruddin Lorong Al-Hidayah, Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan 30119</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0812 1115 6865</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>rdwansaputra@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>&copy; 2026 tebasrumput.com. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </footer >
      {/* Modal Legal */}
      {
        activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              {activeModal === "terms" ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900">Terms & Conditions</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p className="font-bold text-slate-800">1. Layanan</p>
                    <p>Tebasrumput.com menyediakan jasa pemotongan rumput, pembersihan lahan, dan perawatan taman untuk area perumahan dan komersial di wilayah Kota Palembang.</p>

                    <p className="font-bold text-slate-800">2. Pemesanan & Penjadwalan</p>
                    <p>Pemesanan dianggap sah setelah pelanggan mengisi formulir atau menghubungi via WhatsApp dan mendapatkan konfirmasi jadwal dari tim kami.</p>

                    <p className="font-bold text-slate-800">3. Biaya & Pembayaran</p>
                    <p>Biaya layanan disesuaikan dengan paket yang dipilih atau hasil survey lokasi. Pembayaran dilakukan secara tunai (Cash on Delivery) atau transfer setelah pekerjaan selesai dikerjakan.</p>

                    <p className="font-bold text-slate-800">4. Akses Lokasi</p>
                    <p>Pelanggan wajib memberikan akses masuk ke area pengerjaan pada waktu yang telah disepakati. Kami tidak bertanggung jawab atas keterlambatan akibat kendala akses lokasi.</p>

                    <p className="font-bold text-slate-800">5. Pembatalan</p>
                    <p>Pembatalan atau perubahan jadwal harus diinformasikan maksimal 24 jam sebelum waktu pengerjaan yang dijadwalkan.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>Kebijakan Privasi ini menjelaskan bagaimana Tebasrumput.com mengumpulkan dan menggunakan informasi Anda.</p>

                    <p className="font-bold text-slate-800">1. Informasi yang Kami Kumpulkan</p>
                    <p>Kami mengumpulkan informasi yang Anda berikan secara sukarela saat melakukan pemesanan, termasuk nama, nomor telepon/WhatsApp, dan alamat atau wilayah lokasi pengerjaan.</p>

                    <p className="font-bold text-slate-800">2. Penggunaan Informasi</p>
                    <p>Informasi Anda digunakan semata-mata untuk keperluan koordinasi layanan, konfirmasi jadwal, dan pengiriman tim ke lokasi Anda.</p>

                    <p className="font-bold text-slate-800">3. Perlindungan Data</p>
                    <p>Kami berkomitmen untuk menjaga keamanan data Anda. Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.</p>

                    <p className="font-bold text-slate-800">4. Persetujuan</p>
                    <p>Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.</p>
                  </div>
                </div>
              )}

              <div className="mt-12 pt-6 border-t border-slate-100">
                <button
                  onClick={() => setActiveModal(null)}
                  className="btn-primary w-full py-3"
                >
                  Saya Mengerti
                </button>
              </div>
            </motion.div>
          </div>
        )
      }
      {/* Modal Blog */}
      {
        activeBlog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setActiveBlog(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <button
                onClick={() => setActiveBlog(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <div className="space-y-6">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeBlog.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{activeBlog.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{activeBlog.title}</h2>
                <div
                  className="blog-content space-y-4 text-slate-600 leading-relaxed text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: activeBlog.content }}
                />

                {activeBlog.source && (
                  <div className="pt-4 text-xs text-slate-400 italic">
                    Sumber: <a href={activeBlog.source} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{activeBlog.source}</a>
                  </div>
                )}

                <div className="mt-12 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setActiveBlog(null);
                      handleBooking();
                    }}
                    className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg"
                  >
                    <MessageCircle className="w-6 h-6" /> Konsultasikan Gratis Sekarang !
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )
      }
      {/* Floating WhatsApp Widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
      >
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 text-slate-700 text-xs font-bold whitespace-nowrap hidden md:block"
        >
          Halo! Butuh bantuan? 👋
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleBooking}
          className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center relative group"
          aria-label="Chat WhatsApp"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[#25D366] rounded-full"
          />
          <MessageCircle className="w-8 h-8 relative z-10" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></div>
        </motion.button>
      </motion.div>
    </div >
  );
}
