import { Helmet } from "react-helmet-async";
const motion = {
  div: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <div {...props} />,
  h1: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <h1 {...props} />,
  p: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <p {...props} />,
  span: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <span {...props} />,
  a: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <a {...props} />,
  button: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <button {...props} />,
  section: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <section {...props} />,
};
const AnimatePresence = ({ children }: any) => <>{children}</>;
import {
  CheckCircle2,
  Scissors,
  ShieldCheck,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  AlertTriangle,
  Copy,
  Check,
  Users,
  Quote,
  Clock,
  Wallet,
  Briefcase,
  FileText,
  Maximize2,
  Truck
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { JAKARTA_CITIES, INDONESIA_DISTRICTS } from "../data/regions";
import { Link } from "react-router-dom";

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

const WA_LINK = "https://wa.me/6289502470657";

const blogs = [
  {
    title: "Panduan Lengkap Merawat Rumput Gajah Mini di Cuaca Terik Jakarta",
    tags: ["Tips Perawatan", "DKI Jakarta", "Rumput Gajah Mini", "Taman"],
    date: "26 Mar 2026",
    desc: "Menghadapi cuaca panas perkotaan Jakarta yang ekstrem? Pelajari teknik penyiraman, pemupukan, dan perlindungan rumput gajah mini agar tetap hijau royo-royo.",
    source: "https://kumparan.com/jasa-taman/cara-merawat-rumput-gajah-mini",
    content: `
      <h2>Tantangan Menanam Gajah Mini di Wilayah Perkotaan Tropis</h2>
      <p>Wilayah perkotaan padat seperti Jakarta dikenal memiliki indeks UV yang cukup tinggi dan suhu rata-rata yang bisa mencapai 35°C di siang hari. Bagi pemilik rumah di perumahan modern maupun area terbuka, rumput gajah mini adalah pilihan estetis, namun rentan menguning jika salah perawatan.</p>
      
      <h3>1. Teknik Penyiraman 'Deep Watering'</h3>
      <p>Banyak orang melakukan kesalahan dengan menyiram sedikit-sedikit tapi sering. Di wilayah tropis, Anda disarankan menggunakan teknik <em>deep watering</em>.</p>
      <ul>
        <li><strong>Waktu Ideal:</strong> Lakukan penyiraman antara jam 6 hingga 7 pagi. Ini memberikan waktu bagi air untuk meresap ke akar sebelum matahari mulai menyengat.</li>
        <li><strong>Volume Air:</strong> Pastikan air meresap hingga kedalaman 10-15 cm di bawah permukaan tanah.</li>
        <li><strong>Hindari Penyiraman Malam:</strong> Menyiram saat malam hari di cuaca lembap dapat memicu pertumbuhan jamur tanah.</li>
      </ul>

      <h3>2. Nutrisi Tambahan (Pemupukan)</h3>
      <p>Rumput gajah mini membutuhkan asupan Nitrogen yang konsisten. Gunakan pupuk NPK 16-16-16 setiap 2 bulan sekali. Taburkan secara merata dan segera siram agar butiran pupuk hancur dan tidak membakar daun rumput.</p>

      <h3>3. Penyiangan Gulma (Rumput Teki)</h3>
      <p>Masalah utama di taman perkotaan adalah pertumbuhan rumput teki yang sangat cepat. Cabutlah gulma hingga ke akarnya menggunakan pencukil kecil minimal satu minggu sekali agar nutrisi tanah tidak direbut.</p>

      <blockquote>
        <p><strong>Butuh Bantuan?</strong> Jika kesibukan membuat Anda sulit merawat taman secara detail, tim <strong>Tebasrumput.com</strong> siap membantu perawatan rutin dengan tim profesional berpengalaman di seluruh wilayah DKI Jakarta.</p>
      </blockquote>
    `
  },
  {
    title: "Kapan Waktu Terbaik Memotong Rumput di Wilayah Jakarta?",
    tags: ["Jadwal", "Tips", "Edukasi", "Layanan"],
    date: "25 Mar 2026",
    desc: "Frekuensi pemotongan rumput sangat dipengaruhi oleh lokasi dan cuaca ibu kota. Simak panduan jadwal pemangkasan untuk hasil terbaik.",
    source: "https://www.flamboyanasri.com/2021/04/jadwal-memotong-rumput.html",
    content: `
      <h2>Mengapa Jadwal Pemotongan Berbeda-beda?</h2>
      <p>Setiap wilayah memiliki karakteristik tanah dan tingkat kelembapan yang berbeda. Hal ini mengakibatkan pertumbuhan rumput liar dan tanaman hias menjadi lebih masif di beberapa area dibandingkan area lainnya.</p>
      
      <h3>Strategi Pemotongan Berdasarkan Musim</h3>
      <p>Menjaga kerapian halaman bukan hanya soal estetika, tapi juga soal kenyamanan dan kebersihan lingkungan rumah di perkotaan.</p>
      <ul>
        <li><strong>Musim Penghujan:</strong> Rumput tumbuh 2x lebih cepat. Lakukan pemangkasan setiap <strong>10-14 hari sekali</strong>. Jangan menunggu hingga setinggi lutut karena batang rumput akan mengeras dan sulit dirapikan.</li>
        <li><strong>Musim Kemarau:</strong> Pertumbuhan melambat, namun debu perkotaan sering menempel. Potonglah setiap <strong>3-4 minggu sekali</strong> dengan ketinggian yang sedikit lebih tinggi (sekitar 5 cm) untuk menjaga kelembapan akar.</li>
      </ul>

      <h3>Manfaat Memangkas Secara Konsisten</h3>
      <p>Memotong rumput secara rutin merangsang pertumbuhan tunas baru yang lebih hijau dan lembut. Selain itu, sinar matahari akan lebih mudah masuk ke sela-sela batang rumput, mencegah pertumbuhan lumut dan jamur yang merusak visual taman Anda.</p>

      <p>Tebasrumput.com menyediakan layanan langganan bulanan di seluruh kecamatan se-DKI Jakarta. Hubungi kami untuk info lebih lanjut!</p>
    `
  }
];

const googleReviews = [
  { name: "Devina Muljadi", role: "10 bulan lalu", text: "hasilnya selalu memuaskan, komunikasi mudah, harga juga ramah kantong", rating: 5 },
  { name: "Angga Trians", role: "Local Guide • 2 tahun lalu", text: "Saya sudah berlangganan sangat lama, Ownernya ramah harga bersahabat , Hasil kerja cepat rapi memuaskan, pembayaran mudah", rating: 5 },
  { name: "psite se", role: "2 tahun lalu", text: "Pekerjaan pak Agus ini di atas eskpetasi saya. Dan juga komunikasi nya baik sekali. Saya berdomisili di lain benua dan bisa vicall via WA dengan beliau. Sangat di rekomendasi 👍👍👍", rating: 5 },
  { name: "Armin Putraabah", role: "setahun lalu", text: "Sangant membantu...lahan kosong sy jadi bersih dan pengerjaanya cukup cepat", rating: 5 },
  { name: "Suparman", role: "2 tahun lalu", text: "Hasil memuaskan bersih rapi harga bisa nego bisa melayani disemua wilayah", rating: 5 },
  { name: "Priyo Sambadha", role: "2 tahun lalu", text: "Kualitas pekerjaan bagus dengan tarif yang pantas. Recomended.", rating: 5 }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);
  const [activeBlog, setActiveBlog] = useState<any>(null);
  const [showPaymentNotice, setShowPaymentNotice] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [calcLength, setCalcLength] = useState<string>("");
  const [calcWidth, setCalcWidth] = useState<string>("");
  const [calcCategory, setCalcCategory] = useState<"sedang" | "tinggi" | "semak">("sedang");
  const [calcImageIndex, setCalcImageIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    setCalcImageIndex(0);
  }, [calcCategory]);

  const categoryDetails = {
    sedang: { title: "Rumput Sedang", price: 2000, desc: "Tinggi ≤40 cm. Tidak ada semak. Mesin bekerja 1x lintasan.", images: ["/images/rumput sedang 1.jpg", "/images/rumput sedang 2.jpg", "/images/rumput sedang 3.jpg"] },
    tinggi: { title: "Rumput Tinggi", price: 3000, desc: "Tinggi 40–100 cm. Banyak alang-alang/gulma. Memerlukan beberapa lintasan.", images: ["/images/rumput tinggi 1.jpg", "/images/rumput tinggi 2.jpg", "/images/rumput tinggi 3.jpg"] },
    semak: { title: "Semak Belukar", price: 3500, desc: "Rumput >1m / bercampur semak. Memerlukan pisau khusus & waktu lama.", images: ["/images/semak belukar 1.jpg", "/images/semak belukar 2.jpg", "/images/semak belukar 3.jpg", "/images/semak belukar 4.jpg"] }
  };

  const calculatePrice = () => {
    const length = parseFloat(calcLength) || 0;
    const width = parseFloat(calcWidth) || 0;
    const area = length * width;
    return area * categoryDetails[calcCategory].price;
  };

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem("hasSeenPaymentNotice");
    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setShowPaymentNotice(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePaymentNotice = () => {
    setShowPaymentNotice(false);
    sessionStorage.setItem("hasSeenPaymentNotice", "true");
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("1160478272");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const [formData, setFormData] = useState({
    name: "",
    region: "",
    city: "",
    service: "Potong Rumput"
  });

  const handleBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let message = `Halo tebasrumput.com, saya ingin memesan layanan ${formData.service}.`;
    if (formData.name || formData.region) {
      const location = formData.city ? `${formData.city}, ${formData.region}, DKI Jakarta` : (formData.region ? `${formData.region}, DKI Jakarta` : "DKI Jakarta");
      message = `Halo tebasrumput.com, saya ${formData.name || "Pelanggan"} dari ${location} ingin memesan layanan ${formData.service}.`;
    }

    window.open(`${WA_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Helmet>
        <title>Jasa Potong Rumput, Tebang Pohon & Buang Barang / Puing Jakarta | PT Tebas Rumput Saputra</title>
        <meta name="description" content="Layanan resmi jasa potong rumput panggilan terdekat, tebang pohon, dan buang barang bekas / puing proyek di Jakarta. Hubungi PT Tebas Rumput Saputra untuk penawaran murah & cepat." />
        <meta name="keywords" content="jasa potong rumput jakarta, pt tebas rumput saputra, potong rumput panggilan, tebang pohon jakarta, jasa buang barang, buang puing jakarta, jasa potong rumput terdekat, tukang potong rumput, potong rumput jakarta resmi, tebasrumput, tebang pohon panggilan, buang sampah proyek jakarta, jasa pembuangan puing jakarta" />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Jasa Potong Rumput, Tebang Pohon & Buang Barang / Puing Jakarta | PT Tebas Rumput Saputra" />
        <meta property="og:description" content="Layanan panggilan resmi jasa potong rumput, tebang pohon, dan pembuangan barang bekas / puing di seluruh wilayah Jakarta. Cepat, rapi, dan terpercaya." />
        <meta property="og:image" content="https://tebasrumput.com/images/rumput%20sedang%201.jpg" />
        <meta property="og:url" content="https://tebasrumput.com" />
        <meta property="og:type" content="website" />

        {/* Schema Markup for Local SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PT Tebas Rumput Saputra",
              "alternateName": "Tebasrumput.com",
              "image": "https://tebasrumput.com/images/rumput%20sedang%201.jpg",
              "description": "Layanan resmi dan profesional Jasa Potong Rumput, Tebang Pohon, serta Buang Barang & Puing panggilan untuk seluruh wilayah DKI Jakarta oleh PT Tebas Rumput Saputra.",
              "url": "https://tebasrumput.com",
              "telephone": "089502470657",
              "priceRange": "Rp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Dua Sembilan No.12, RT.7/RW.7, Duren Sawit",
                "addressLocality": "Jakarta Timur",
                "addressRegion": "DKI Jakarta",
                "postalCode": "13440",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2434075,
                "longitude": 106.9153304
              },
              "areaServed": [
                { "@type": "City", "name": "Jakarta Selatan" },
                { "@type": "City", "name": "Jakarta Barat" },
                { "@type": "City", "name": "Jakarta Timur" },
                { "@type": "City", "name": "Jakarta Pusat" },
                { "@type": "City", "name": "Jakarta Utara" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Layanan Utama",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Potong Rumput",
                      "description": "Pemotongan rumput taman, halaman rumah, dan lahan kosong secara rapi dan presisi."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Tebang Pohon",
                      "description": "Pemotongan dan penebangan pohon berbagai ukuran secara aman, bersih, dan profesional."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jasa Buang Barang / Puing",
                      "description": "Layanan pembuangan barang bekas, sampah proyek, dan puing-puing sisa bangunan."
                    }
                  }
                ]
              }
            }
          `}
        </script>
        
        {/* FAQ Schema for Rich Snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Apakah PT Tebas Rumput Saputra melayani jasa tebang pohon dan buang puing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, selain jasa potong rumput, kami juga menyediakan layanan profesional tebang pohon berbagai ukuran serta pembuangan barang bekas, sampah proyek, dan puing sisa bangunan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Apakah area pengerjaan akan dibersihkan setelah selesai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, seluruh layanan kami (potong rumput, tebang pohon, buang puing) sudah termasuk perapihan dan pembersihan area dari sisa-sisa pekerjaan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Berapa biaya tebang pohon dan buang puing di Jakarta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Biaya jasa tebang pohon dan pembuangan barang/puing ditentukan secara borongan (custom) tergantung tingkat kesulitan, diameter pohon, serta volume/ritase barang yang dibuang."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Navbar */}
      <nav aria-label="Menu Utama" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl font-black tracking-tighter text-black">
              tebasrumput.com
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Layanan</a>
            <a href="#alur" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Alur</a>
            <a href="#keunggulan" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Keunggulan</a>
            <a href="#legalitas" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Legalitas</a>
            <a href="#testimoni" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Testimoni</a>
            <a href="#lokasi" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Lokasi</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">FAQ</a>
            <button onClick={handleBooking} className="btn-primary text-sm py-2.5 px-6 flex items-center gap-2 font-bold">
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
            <a href="#alur" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Alur</a>
            <a href="#keunggulan" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Keunggulan</a>
            <a href="#legalitas" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Legalitas</a>
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Testimoni</a>
            <a href="#lokasi" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Lokasi</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">FAQ</a>
            <button onClick={handleBooking} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Booking Sekarang
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
          {/* Abstract Background Element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
          
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                <MapPin className="w-3 h-3" />
                <span>Panggilan <span className="text-primary">Seluruh DKI Jakarta</span></span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-slate-900 tracking-tight">
                <span className="font-bold text-primary text-[10px] md:text-xs block mb-4 uppercase tracking-[0.3em] opacity-80">Potong Rumput • Tebang Pohon • Buang Barang & Puing</span>
                <span className="block mb-1">Lingkungan Lebih Rapi</span>
                <span className="text-primary block">Hunian Lebih Nyaman</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-base md:text-lg text-slate-500 leading-relaxed font-light max-w-xl mx-auto lg:mx-0 border-l-2 border-primary/20 pl-6 py-2">
                Layanan profesional <span className="font-medium text-slate-700">Potong Rumput</span>, <span className="font-medium text-slate-700">Tebang Pohon</span>, serta <span className="font-medium text-slate-700">Buang Barang & Puing</span> panggilan di <span className="font-medium text-slate-700">seluruh wilayah DKI Jakarta</span>. 
                <span className="block mt-1 font-bold text-slate-800">Cepat, Rapi, Bersih, dan Terjangkau.</span>
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
                <button
                  onClick={handleBooking}
                  className="group btn-primary w-full sm:w-auto text-base px-12 py-5 flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
                  <span className="font-black">Booking Sekarang</span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              id="hero-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative group"
            >
              <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl tracking-widest uppercase">
                Respon Cepat!
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-1">Pesan Sekarang</h3>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Isi form di bawah untuk booking via WhatsApp.</p>
              </div>

              <form onSubmit={handleBooking} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kota Administrasi</label>
                    <div className="relative">
                      <select
                        className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none text-sm font-medium"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value, city: "" })}
                        required
                      >
                        <option value="" disabled>Pilih Kota Administrasi</option>
                        {JAKARTA_CITIES.map(region => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kecamatan</label>
                    <div className="relative">
                      <select
                        className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none text-sm font-medium disabled:opacity-50"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        disabled={!formData.region}
                      >
                        <option value="" disabled>{formData.region ? "Pilih Kecamatan" : "Pilih Kota Dulu"}</option>
                        {formData.region && INDONESIA_DISTRICTS[formData.region]?.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pilih Layanan / Jasa</label>
                  <div className="relative">
                    <select
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none text-sm font-medium"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="Potong Rumput">Potong Rumput</option>
                      <option value="Tebang Pohon">Tebang Pohon</option>
                      <option value="Buang Barang / Puing">Buang Barang / Puing</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> Kirim Ke WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </section >

        {/* Layanan Kami */}
        < section id="layanan" className="section-padding max-w-7xl mx-auto" >
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Layanan Kami</h2>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Solusi Lengkap Untuk Halaman Anda</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Scissors />, title: "Potong Rumput", desc: "Pemotongan rumput taman, halaman rumah, dan lahan kosong secara rapi dan presisi." },
              { icon: <Trees />, title: "Tebang Pohon", desc: "Pemotongan dan penebangan pohon berbagai ukuran secara aman, bersih, dan profesional." },
              { icon: <Truck />, title: "Buang Barang / Puing", desc: "Layanan pembuangan barang bekas, sampah proyek, dan puing-puing sisa bangunan." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="card p-8 group border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-slate-50/50"
              >
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <h4 className="text-lg font-black mb-3 text-slate-900 leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section >

        {/* Calculator Section */}
        <section id="kalkulator" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full px-0 sm:px-6">
            <div className="text-center space-y-3 mb-12 sm:mb-16 px-6">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Estimasi Layanan</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Simulasi Konsultasi Layanan</h3>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto">Tentukan luas lahan dan kondisi rumput Anda untuk mempermudah proses konsultasi dengan tim kami.</p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-none sm:rounded-[2rem] md:rounded-[2.5rem] shadow-none sm:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-8 px-2 sm:px-0">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Ukuran Lahan (Meter)</label>
                  <div className="flex items-center gap-3">
                    <div className="relative w-full">
                      <input
                        type="number"
                        min="0"
                        step="any"
                        placeholder="Panjang"
                        className="w-full pl-4 pr-12 py-3.5 md:py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-base md:text-lg"
                        value={calcLength}
                        onChange={(e) => setCalcLength(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm md:text-base">m</span>
                    </div>
                    <div className="text-slate-300 font-black shrink-0 text-lg md:text-xl">×</div>
                    <div className="relative w-full">
                      <input
                        type="number"
                        min="0"
                        step="any"
                        placeholder="Lebar"
                        className="w-full pl-4 pr-12 py-3.5 md:py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-base md:text-lg"
                        value={calcWidth}
                        onChange={(e) => setCalcWidth(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm md:text-base">m</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kondisi Rumput</label>
                  <div className="space-y-3">
                    {(Object.keys(categoryDetails) as Array<keyof typeof categoryDetails>).map((key) => (
                      <label key={key} className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${calcCategory === key ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'}`}>
                        <input type="radio" name="calcCategory" value={key} className="hidden" checked={calcCategory === key} onChange={() => setCalcCategory(key)} />
                        <div className="pt-1">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${calcCategory === key ? 'border-primary' : 'border-slate-300'}`}>
                            {calcCategory === key && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-slate-900">{categoryDetails[key].title}</h4>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed pr-2">{categoryDetails[key].desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl flex flex-col relative overflow-hidden shadow-2xl h-full w-full">
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
                
                {/* Contoh Visual Image Slider - Now Full Width at Top */}
                <div 
                  className="relative h-60 sm:h-72 md:h-80 lg:h-[320px] group w-full cursor-pointer shrink-0 z-10"
                  onDoubleClick={() => setActiveImage(categoryDetails[calcCategory].images[calcImageIndex])}
                >
                  <img 
                    key={categoryDetails[calcCategory].images[calcImageIndex]}
                    src={categoryDetails[calcCategory].images[calcImageIndex]} 
                    alt={`${categoryDetails[calcCategory].title} ${calcImageIndex + 1}`} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={() => setCalcImageIndex((prev) => prev === 0 ? categoryDetails[calcCategory].images.length - 1 : prev - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10 backdrop-blur-sm active:scale-95"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                  </button>
                  <button 
                    onClick={() => setCalcImageIndex((prev) => prev === categoryDetails[calcCategory].images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10 backdrop-blur-sm active:scale-95"
                  >
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10 bg-black/30 px-2.5 py-1.5 rounded-full backdrop-blur-md">
                    {categoryDetails[calcCategory].images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === calcImageIndex ? 'w-4 bg-primary' : 'w-1.5 bg-white/50'}`} />
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-none">
                    <p className="text-xs md:text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 opacity-90">
                      <Leaf className="w-4 h-4 text-primary" /> Contoh {categoryDetails[calcCategory].title} <span className="ml-auto text-[10px] bg-black/50 px-2 py-1 rounded-md">{calcImageIndex + 1}/{categoryDetails[calcCategory].images.length}</span>
                    </p>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                  {calcCategory === 'sedang' && (
                    <div className="mb-6">
                      <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Estimasi Harga</h4>
                      <div className="text-3xl md:text-4xl font-black text-primary">
                        Mulai dari Rp1.000/m²
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 pt-6 border-t border-white/10 mb-8">
                    <p className="text-xs text-slate-300 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 
                      <span className="leading-relaxed">Harga sudah termasuk jasa potong rumput dan pembersihan area.</span>
                    </p>
                    <p className="text-xs text-slate-300 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" /> 
                      <span className="leading-relaxed">Pengangkutan sampah hasil potongan atau penyesuaian untuk lahan sulit/ekstrem dapat dikenakan biaya tambahan.</span>
                    </p>
                  </div>
                  
                  <button
                    onClick={() => {
                      const area = (parseFloat(calcLength) || 0) * (parseFloat(calcWidth) || 0);
                      const msg = `Halo tebasrumput.com, saya ingin konsultasi layanan potong rumput dengan luas lahan ${area}m² (${calcLength || 0}m x ${calcWidth || 0}m) (Kategori: ${categoryDetails[calcCategory].title}).`;
                      window.open(`${WA_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
                    }}
                    className="w-full mt-auto bg-primary text-white py-4 px-6 rounded-xl font-black shadow-[0_8px_30px_rgba(var(--color-primary-rgb),0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group relative z-10"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Konsultasi & Jadwalkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section id="alur" className="section-padding bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-3 mb-20">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Alur Kerja</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Cara Pemesanan Layanan</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 -z-0"></div>
              
              {[
                { icon: <MessageCircle />, title: "Pilih Layanan & Booking", desc: "Hubungi kami via WhatsApp atau isi form pendaftaran." },
                { icon: <Wallet />, title: "Konfirmasi & DP", desc: "Tim admin mengonfirmasi jadwal dan pembayaran DP 30% sebagai konfirmasi booking." },
                { icon: <Briefcase />, title: "Pengerjaan di Lokasi", desc: "Tim profesional datang dan mengerjakan lahan Anda." },
                { icon: <CheckCircle2 />, title: "Pelunasan & Selesai", desc: "Cek hasil, pelunasan, dan halaman Anda kembali rapi." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center space-y-6 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-primary relative">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center">0{i+1}</div>
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <div className="space-y-3 px-4">
                    <h4 className="text-lg font-black text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Keunggulan Section */}
        <section id="keunggulan" className="section-padding bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Mengapa Pilih Kami</h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Solusi Terbaik Untuk Kebersihan Halaman</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light max-w-2xl mx-auto">Kami mengedepankan kualitas dan kepuasan pelanggan dengan tim profesional yang terlatih dan alat yang modern.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Respon Cepat", desc: "Admin sigap membalas dan menjadwalkan kunjungan." },
                  { title: "Tim Profesional", desc: "Pekerja berpengalaman dan ramah." },
                  { title: "Alat Lengkap", desc: "Menggunakan mesin modern untuk hasil yang presisi." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1 leading-tight">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legalitas Section */}
        <section id="legalitas" className="section-padding bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Legalitas Resmi</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Kredibilitas & Legalitas Usaha</h3>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                PT Tebas Rumput Saputra berkomitmen memberikan layanan yang aman, profesional, dan terpercaya. Usaha kami telah terdaftar secara resmi di instansi pemerintah terkait.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
              {/* Card 1: SK Kemenkumham */}
              <div className="bg-slate-50 rounded-[2rem] p-5 sm:p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Terverifikasi Kemenkumham
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-black text-slate-950 mb-2">SK Pendirian Badan Hukum</h4>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl space-y-3 border border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-xs">
                      <span className="text-slate-400 font-medium sm:shrink-0">Nomor SK</span>
                      <span className="font-bold text-slate-800 text-left sm:text-right break-all">AHU-A109844.AH.01.30.Tahun 2026</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-xs border-t border-slate-100 pt-3">
                      <span className="text-slate-400 font-medium sm:shrink-0">Nama Perseroan</span>
                      <span className="font-bold text-slate-800 text-left sm:text-right break-all">TEBAS RUMPUT SAPUTRA</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[3/4] cursor-zoom-in" onClick={() => setActiveImage("/images/sk_pendirian.jpg")}>
                  <img 
                    src="/images/sk_pendirian.jpg" 
                    alt="SK Pendirian PT Tebas Rumput Saputra" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-sm">
                    <Maximize2 className="w-5 h-5" />
                    <span>Perbesar Dokumen</span>
                  </div>
                </div>
              </div>

              {/* Card 2: SKT DJP */}
              <div className="bg-slate-50 rounded-[2rem] p-5 sm:p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Terdaftar Resmi DJP
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-black text-slate-950 mb-2">Surat Keterangan Terdaftar (SKT)</h4>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Direktorat Jenderal Pajak - Kementerian Keuangan RI
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl space-y-3 border border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-xs">
                      <span className="text-slate-400 font-medium sm:shrink-0">Nomor Surat</span>
                      <span className="font-bold text-slate-800 text-left sm:text-right break-all">S-22510/SKT-WP-CT/KPP.2004/2026</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-xs border-t border-slate-100 pt-3">
                      <span className="text-slate-400 font-medium sm:shrink-0">NPWP / NIK</span>
                      <span className="font-bold text-slate-800 text-left sm:text-right break-all">1000000010637321</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-xs border-t border-slate-100 pt-3">
                      <span className="text-slate-400 font-medium sm:shrink-0">Nama Wajib Pajak</span>
                      <span className="font-bold text-slate-800 text-left sm:text-right break-all">PT TEBAS RUMPUT SAPUTRA</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[3/4] cursor-zoom-in" onClick={() => setActiveImage("/images/skt.jpg")}>
                  <img 
                    src="/images/skt.jpg" 
                    alt="SKT DJP PT Tebas Rumput Saputra" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-sm">
                    <Maximize2 className="w-5 h-5" />
                    <span>Perbesar Dokumen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lokasi & Jangkauan Section */}
        <section id="lokasi" className="section-padding bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Map Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-[400px] md:h-[500px] bg-white p-4 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden relative group"
              >
                <iframe
                  src="https://maps.google.com/maps?q=-6.2434075,106.9153304&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Tebasrumput Jakarta"
                  className="w-full h-full rounded-[1.8rem] grayscale-[10%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </motion.div>

              {/* Stats & Details Column */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Area Layanan & HQ</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                    Hadir Lebih Dekat Melayani Seluruh <span className="text-primary">DKI Jakarta</span>
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-light">
                    Sebagai penyedia <strong>jasa potong rumput Jakarta</strong> terdekat dan andalan, kami siap memberikan layanan panggilan ke seluruh wilayah tanpa terkecuali. Cakupan layanan kami meliputi <strong>Jakarta Selatan</strong> (Kebayoran, Kemang, Tebet, Cilandak), <strong>Jakarta Barat</strong> (Puri Kembangan, Kebon Jeruk, Grogol), <strong>Jakarta Timur</strong> (Cibubur, Duren Sawit, Pulogadung), <strong>Jakarta Pusat</strong> (Menteng, Cempaka Putih), hingga <strong>Jakarta Utara</strong> (Kelapa Gading, PIK, Pluit). Apapun kondisi lahan Anda, tim kami siap membersihkannya dengan cepat, rapi, dan profesional.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "350+", label: "Halaman Dirapikan", desc: "Ratusan proyek selesai dengan rapi & bersih" },
                    { number: "60", label: "Total Ulasan", desc: "Ulasan positif dari warga Jakarta di Google Maps" },
                    { number: "4.9/5", label: "Rating Layanan", desc: "Hasil terpercaya dan memuaskan" },
                    { number: "24/7", label: "Respon Chat", desc: "Admin sigap jadwalkan kunjungan" }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm group hover:border-primary/20 transition-all hover:bg-white hover:shadow-md">
                      <div className="text-2xl font-black text-primary mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">{stat.number}</div>
                      <div className="text-xs font-black text-slate-800 mb-1">{stat.label}</div>
                      <div className="text-[10px] text-slate-400 font-medium leading-relaxed">{stat.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.google.com/maps/place/JASA+POTONG+RUMPUT%2FPOHON%2FTAMAN+MODERN+wA/@-6.2434075,106.9153304,17z/data=!4m15!1m8!3m7!1s0x2e698ccda0c2e98d:0x791eed5f17563fbc!2sJl.+Dua+Sembilan+No.12,+RT.7%2FRW.7,+Duren+Sawit,+Kec.+Duren+Sawit,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13440!3b1!8m2!3d-6.2434075!4d106.9153304!16s%2Fg%2F11cpbnn718!3m5!1s0x2e698dd8a9fcb301:0xaab8022520355d74!8m2!3d-6.2434075!4d106.9153304!16s%2Fg%2F11kxlx2jyh?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-8 py-3.5 inline-flex items-center gap-2 font-bold hover:shadow-md cursor-pointer"
                  >
                    <span>Lihat di Google Maps</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleBooking()}
                    className="btn-primary text-xs px-8 py-3.5 inline-flex items-center gap-2 font-bold shadow-lg shadow-primary/25 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cek Jangkauan Area Anda</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Reviews Marquee */}
        <section id="testimoni" className="py-12 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
             <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-3">Ulasan Google Maps</h2>
             <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Apa Kata Pelanggan Kami?</h3>
          </div>
          
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
            {[...googleReviews, ...googleReviews].map((t, i) => (
              <div key={i} className="w-[300px] md:w-[350px] mx-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">"{t.text}"</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-[10px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Regions Section */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Cakupan Wilayah</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Melayani Seluruh Kecamatan di DKI Jakarta</h3>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto">Kami menjangkau setiap sudut ibu kota. Di mana pun lokasi Anda, tim kami siap datang memberikan layanan potong rumput terbaik.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {JAKARTA_CITIES.map((city) => (
                <div key={city} className="space-y-4">
                  <h4 className="font-bold text-slate-900 border-b border-primary/20 pb-2 text-sm">{city}</h4>
                  <ul className="space-y-2">
                    {INDONESIA_DISTRICTS[city]?.map((district: string) => (
                      <li key={district} className="text-xs text-slate-500 hover:text-primary transition-colors cursor-default">
                        Potong Rumput {district}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        < section id="faq" className="section-padding bg-slate-50" >
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">FAQ</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Pertanyaan Umum</h3>
            </div>

            <div className="space-y-4">
              {[
                { q: "Apakah bisa panggilan mendadak?", a: "Tentu! Kami menyediakan slot untuk pengerjaan di hari yang sama jika jadwal masih tersedia. Sebaiknya hubungi kami di pagi hari." },
                { q: "Area layanan di mana saja?", a: "Kami melayani seluruh wilayah di DKI Jakarta, mencakup Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, dan Kepulauan Seribu hingga ke seluruh kecamatan." },
                { q: "Apakah alat disediakan?", a: "Ya, tim kami membawa seluruh peralatan lengkap mulai dari mesin potong, gunting tanaman, hingga alat pembersih." },
                { q: "Berapa lama pengerjaan?", a: "Tergantung luas area. Untuk halaman rumah standar (50m²), biasanya memakan waktu 1-2 jam." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all hover:border-primary/30 shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50/50 transition-colors list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="font-black text-slate-900">{faq.q}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-open:bg-primary group-open:border-primary transition-all">
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:text-white transition-transform group-open:rotate-180" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pl-18 text-slate-600 text-sm leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section >

        {/* CTA Banner */}
        < section className="px-5 md:px-12 lg:px-24 py-12" >
          <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-4xl font-black max-w-xl mx-auto leading-tight tracking-tight">Rumput Anda Sudah Terlalu Panjang?</h3>
              <p className="text-white/80 font-medium text-sm md:text-base">Jangan biarkan halaman Anda jadi hutan. Booking sekarang dan dapatkan layanan terbaik dari kami!</p>
              <button onClick={handleBooking} className="bg-white text-primary px-10 py-4 rounded-full font-black text-sm md:text-base shadow-xl hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2 mx-auto">
                <MessageCircle className="w-5 h-5" /> Booking Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section >
      </main >

      {/* Footer */}
      < footer className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24" >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">
                  tebasrumput.com
                </span>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-1">
                  PT TEBAS RUMPUT SAPUTRA
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Partner terpercaya untuk perawatan halaman dan taman Anda. Kami mengutamakan kualitas dan kepuasan pelanggan di seluruh wilayah DKI Jakarta.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-lg">Tautan Cepat</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#layanan" className="hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#alur" className="hover:text-primary transition-colors">Alur</a></li>
              <li><a href="#keunggulan" className="hover:text-primary transition-colors">Keunggulan</a></li>
              <li><a href="#legalitas" className="hover:text-primary transition-colors">Legalitas</a></li>
              <li><a href="#lokasi" className="hover:text-primary transition-colors">Lokasi</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-lg">Legal</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</button></li>
              <li><button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-lg">Kontak</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Seluruh Wilayah DKI Jakarta (HQ: Jl. Dua Sembilan No.12, RT.7/RW.7, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0895 0247 0657</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-xs font-medium">
          <p>© 2026 PT TEBAS RUMPUT SAPUTRA (tebasrumput.com). Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </footer >

      {/* Modal Legal (Simplified for Home) */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-2xl p-8 rounded-[2rem] overflow-y-auto max-h-[80vh] shadow-2xl">
              <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100"><X /></button>
              <h2 className="text-2xl font-black mb-6 tracking-tight">{activeModal === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h2>
              <div className="text-slate-600 space-y-4 text-sm leading-relaxed font-medium">
                {activeModal === 'terms' ? (
                  <>
                    <p className="font-bold text-slate-800">Syarat & Ketentuan Layanan PT TEBAS RUMPUT SAPUTRA:</p>
                    <p>1. Pembayaran uang muka (DP) sebesar 30% sebagai konfirmasi booking jadwal.</p>
                    <p>2. Pelunasan pembayaran dilakukan segera setelah seluruh pekerjaan pemotongan rumput/taman selesai dikerjakan.</p>
                    <p>3. Dokumentasi berupa foto/video hasil pengerjaan sebelum (before) dan sesudah (after) akan diberikan sebagai bukti penyelesaian pekerjaan.</p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-slate-800">Kebijakan Privasi PT TEBAS RUMPUT SAPUTRA:</p>
                    <p>Kami sangat menjaga kerahasiaan dan privasi data pelanggan kami. Seluruh informasi data pribadi, alamat lokasi lahan, serta kontak WhatsApp yang Anda berikan hanya akan digunakan secara internal untuk koordinasi operasional tim kami di lapangan dan proses administrasi layanan jasa potong rumput PT TEBAS RUMPUT SAPUTRA.</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WA */}
      <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-3">
        <div className="hidden md:flex bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 animate-pulse relative">
          {/* Tooltip triangle */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-slate-100"></div>
          <p className="text-sm font-bold text-slate-800">Butuh bantuan? Chat kami sekarang!</p>
        </div>
        <button onClick={handleBooking} className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform relative z-10">
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* Modal Payment Notice */}
      <AnimatePresence>
        {showPaymentNotice && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closePaymentNotice} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-amber-500 w-6 h-6" />
                <h2 className="text-xl font-black tracking-tight">Notifikasi Penting</h2>
              </div>
              <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">Pembayaran resmi hanya dilakukan ke rekening berikut:</p>
              <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">BCA Account</p>
                <p className="text-lg font-black text-slate-900 mb-1">1160478272</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm text-slate-600">Muhamad Ridwan Saputra</p>
                  <button onClick={copyAccountNumber} className="p-2 hover:bg-white rounded-lg transition-colors">
                    {isCopied ? <Check className="text-green-500 w-4 h-4"/> : <Copy className="text-slate-400 w-4 h-4"/>}
                  </button>
                </div>
              </div>
              <button onClick={closePaymentNotice} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black shadow-xl hover:bg-black transition-all">Saya Mengerti</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Lightbox Image */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center">
              <button onClick={() => setActiveImage(null)} className="absolute -top-12 right-0 sm:-right-4 px-4 py-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all font-bold text-sm tracking-wide backdrop-blur-sm z-50">
                Kembali
              </button>
              <img src={activeImage} alt="Preview" className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-pointer" onDoubleClick={() => setActiveImage(null)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
