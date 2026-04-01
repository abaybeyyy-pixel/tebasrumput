export interface Blog {
  id?: string;
  title: string;
  slug: string;
  tags: string[];
  date: string;
  desc: string;
  content: string;
  source?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const INITIAL_BLOGS: Blog[] = [
  {
    id: "1",
    title: "Panduan Lengkap Merawat Rumput Gajah Mini di Cuaca Terik Palembang",
    slug: "panduan-merawat-rumput-gajah-mini-palembang",
    tags: ["Tips Perawatan", "Palembang", "Rumput Gajah Mini", "Taman"],
    date: "26 Mar 2026",
    desc: "Menghadapi cuaca Palembang yang ekstrem? Pelajari teknik penyiraman, pemupukan, dan perlindungan rumput gajah mini agar tetap hijau royo-royo.",
    source: "https://kumparan.com/jasa-taman/cara-merawat-rumput-gajah-mini",
    metaTitle: "Cara Merawat Rumput Gajah Mini di Palembang | Tebasrumput.com",
    metaDescription: "Tips ahli merawat rumput gajah mini di cuaca panas Palembang. Teknik penyiraman, pemupukan, dan penyiangan gulma untuk taman tetap hijau.",
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
    title: "Kapan Waktu Terbaik Memotong Rumput di Kalidoni dan Sako?",
    slug: "waktu-terbaik-memotong-rumput-kalidoni-sako",
    tags: ["Jadwal", "Kalidoni", "Sako", "Layanan"],
    date: "25 Mar 2026",
    desc: "Frekuensi pemotongan rumput sangat dipengaruhi oleh lokasi. Simak panduan jadwal pemangkasan untuk wilayah Palembang Timur.",
    source: "https://www.flamboyanasri.com/2021/04/jadwal-memotong-rumput.html",
    metaTitle: "Jadwal Potong Rumput Kalidoni & Sako | Tebasrumput.com",
    metaDescription: "Panduan waktu terbaik memotong rumput di wilayah Kalidoni dan Sako Palembang. Hindari ular dan pastikan taman rapi setiap musim.",
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
    title: "Investasi Waktu: Jasa Potong Rumput Panggilan vs Memotong Sendiri",
    slug: "jasa-potong-rumput-panggilan-vs-mandiri",
    tags: ["Edukasi", "Layanan Panggilan", "Palembang", "Hemat"],
    date: "24 Mar 2026",
    desc: "Seringkali kita merasa bisa melakukannya sendiri, tapi benarkah itu menguntungkan? Mari hitung biaya dan energinya.",
    source: "https://www.99.co/blog/indonesia/jasa-potong-rumput-panggilan/",
    metaTitle: "Hemat Mana: Jasa Potong Rumput vs Potong Sendiri? | Tebasrumput.com",
    metaDescription: "Analisis perbandingan biaya dan waktu antara jasa potong rumput profesional vs memotong sendiri. Temukan pilihan terbaik untuk warga Palembang.",
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
  }
];

export const PALEMBANG_REGIONS = [
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

export const WA_LINK = "https://wa.me/6281211156865";
