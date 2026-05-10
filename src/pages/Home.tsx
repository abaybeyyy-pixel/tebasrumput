import { motion, AnimatePresence } from "motion/react";
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
  AlertTriangle,
  Copy,
  Check,
  Users,
  Quote
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { INDONESIA_REGIONS, INDONESIA_CITIES } from "../data/regions";
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
    title: "Panduan Lengkap Merawat Rumput Gajah Mini di Cuaca Terik Indonesia",
    tags: ["Tips Perawatan", "Nasional", "Rumput Gajah Mini", "Taman"],
    date: "26 Mar 2026",
    desc: "Menghadapi cuaca panas Indonesia yang ekstrem? Pelajari teknik penyiraman, pemupukan, dan perlindungan rumput gajah mini agar tetap hijau royo-royo.",
    source: "https://kumparan.com/jasa-taman/cara-merawat-rumput-gajah-mini",
    content: `
      <h2>Tantangan Menanam Gajah Mini di Wilayah Tropis</h2>
      <p>Wilayah Indonesia dikenal memiliki indeks UV yang cukup tinggi dan suhu rata-rata yang bisa mencapai 35°C di siang hari. Bagi pemilik rumah di perumahan modern maupun area terbuka, rumput gajah mini adalah pilihan estetis, namun rentan menguning jika salah perawatan.</p>
      
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
      <p>Masalah utama di taman tropis adalah pertumbuhan rumput teki yang sangat cepat. Cabutlah gulma hingga ke akarnya menggunakan pencukil kecil minimal satu minggu sekali agar nutrisi tanah tidak direbut.</p>

      <blockquote>
        <p><strong>Butuh Bantuan?</strong> Jika kesibukan membuat Anda sulit merawat taman secara detail, tim <strong>Tebasrumput.com</strong> siap membantu perawatan rutin dengan tim profesional berpengalaman di seluruh wilayah Indonesia.</p>
      </blockquote>
    `
  },
  {
    title: "Kapan Waktu Terbaik Memotong Rumput di Wilayah Anda?",
    tags: ["Jadwal", "Tips", "Edukasi", "Layanan"],
    date: "25 Mar 2026",
    desc: "Frekuensi pemotongan rumput sangat dipengaruhi oleh lokasi dan cuaca. Simak panduan jadwal pemangkasan untuk hasil terbaik.",
    source: "https://www.flamboyanasri.com/2021/04/jadwal-memotong-rumput.html",
    content: `
      <h2>Mengapa Jadwal Pemotongan Berbeda-beda?</h2>
      <p>Setiap wilayah memiliki karakteristik tanah dan tingkat kelembapan yang berbeda. Hal ini mengakibatkan pertumbuhan rumput liar dan tanaman hias menjadi lebih masif di beberapa wilayah dibandingkan wilayah lainnya.</p>
      
      <h3>Strategi Pemotongan Berdasarkan Musim</h3>
      <p>Menjaga kerapian halaman bukan hanya soal estetika, tapi juga soal mencegah sarang binatang melata seperti ular atau kelabang yang sering muncul di rumput tinggi.</p>
      <ul>
        <li><strong>Musim Penghujan:</strong> Rumput tumbuh 2x lebih cepat. Lakukan pemangkasan setiap <strong>10-14 hari sekali</strong>. Jangan menunggu hingga setinggi lutut karena batang rumput akan mengeras dan sulit dirapikan.</li>
        <li><strong>Musim Kemarau:</strong> Pertumbuhan melambat, namun debu sering menempel. Potonglah setiap <strong>3-4 minggu sekali</strong> dengan ketinggian yang sedikit lebih tinggi (sekitar 5 cm) untuk menjaga kelembapan akar.</li>
      </ul>

      <h3>Manfaat Memangkas Secara Konsisten</h3>
      <p>Memotong rumput secara rutin merangsang pertumbuhan tunas baru yang lebih hijau dan lembut. Selain itu, sinar matahari akan lebih mudah masuk ke sela-sela batang rumput, mencegah pertumbuhan lumut dan jamur yang merusak visual taman Anda.</p>

      <p>Tebasrumput.com menyediakan layanan langganan bulanan di seluruh wilayah layanan kami. Hubungi kami untuk info lebih lanjut!</p>
    `
  }
];

const testimonials = [
  { name: "Andi Saputra", role: "Pemilik Rumah", text: "Wah rapi bener hasilnya, timnya juga sopan dateng tepat waktu. Halaman jadi seger lagi.", rating: 5 },
  { name: "Siska Wijaya", role: "Ibu Rumah Tangga", text: "Biasanya susah nyari tukang rumput, sekarang tinggal WA beres. Mantap tebasrumput!", rating: 5 },
  { name: "Budi Pratama", role: "Pengelola Kantor", text: "Harganya worth it banget buat hasil yang bersih kayak gini. Udah langganan buat kantor.", rating: 5 },
  { name: "Dewi Lestari", role: "Pemilik Lahan", text: "Panggil buat bersihin lahan kosong, beres sekejap. Gak nyesel langganan di sini.", rating: 5 },
  { name: "Rian Hidayat", role: "Wiraswasta", text: "Sistem bookingnya gampang banget, timnya profesional bawa alat lengkap. Recomended!", rating: 4 },
  { name: "Maya Indah", role: "Pemilik Cafe", text: "Taman cafe saya jadi rapi terus sejak pakai jasa rutin tebasrumput. Customer jadi betah.", rating: 5 }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);
  const [activeBlog, setActiveBlog] = useState<any>(null);
  const [showPaymentNotice, setShowPaymentNotice] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

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
    service: "Custom / Borongan"
  });

  const handleBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let message = "Halo tebasrumput.com, saya ingin memesan jasa potong rumput.";
    if (formData.name || formData.region) {
      const location = formData.city ? `${formData.city}, ${formData.region}` : (formData.region || "Indonesia");
      message = `Halo tebasrumput.com, saya ${formData.name || "Pelanggan"} dari ${location} ingin memesan layanan potong rumput.`;
    }

    window.open(`${WA_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <nav aria-label="Menu Utama" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Leaf className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform shrink-0" />
            <span className="text-xl font-black tracking-tighter text-black">
              tebasrumput.com
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Layanan</a>
            <a href="#keunggulan" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Keunggulan</a>
            <a href="#testimoni" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Testimoni</a>
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
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Testimoni</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">FAQ</a>
            <button onClick={handleBooking} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Booking Sekarang
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 -z-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(22, 163, 74, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 163, 74, 0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-10"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase">
                <MapPin className="w-3 h-3" />
                <span>Panggilan <span className="text-primary font-bold">Seluruh Indonesia</span></span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 tracking-tight">
                <span className="font-bold text-primary text-[10px] md:text-xs block mb-2 uppercase tracking-[0.2em] opacity-90">Jasa Potong Rumput Panggilan Indonesia</span>
                <span className="text-slate-900 block">Murah, Cepat</span>
                <span className="text-primary block">& Profesional</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-sm md:text-base text-slate-500 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Layanan <span className="font-medium text-slate-700 italic">Jasa Potong Rumput</span> praktis untuk halaman rumah, kantor, dan lahan kosong di <span className="font-medium text-slate-700">seluruh Indonesia</span>. 
                <span className="block mt-1 font-medium text-slate-800">Rapi, Bersih, dan Terjangkau.</span>
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={handleBooking}
                  className="btn-primary w-full sm:w-auto text-base px-10 py-4 flex items-center justify-center gap-3 shadow-lg hover:bg-primary-dark"
                >
                  <MessageCircle className="w-5 h-5" /> Booking Sekarang
                </button>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Provinsi</label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-sm"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value, city: "" })}
                        required
                      >
                        <option value="" disabled>Pilih Provinsi</option>
                        {INDONESIA_REGIONS.map(region => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kota / Kabupaten</label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-sm disabled:bg-slate-50 disabled:text-slate-400"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        disabled={!formData.region}
                      >
                        <option value="" disabled>{formData.region ? "Pilih Kota" : "Pilih Provinsi Dulu"}</option>
                        {formData.region && INDONESIA_CITIES[formData.region]?.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4"
                >
                  <MessageCircle className="w-6 h-6" /> Kirim Ke WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </section >

        {/* Layanan Kami */}
        < section id="layanan" className="section-padding max-w-7xl mx-auto" >
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Layanan Kami</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Solusi Lengkap Untuk Halaman Anda</h3>
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
                whileHover={{ y: -3 }}
                className="card p-6 group"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section >

        {/* Testimonials Marquee */}
        <section id="testimoni" className="py-24 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
             <h2 className="text-xs font-bold text-primary-light tracking-[0.2em] uppercase mb-4">Testimoni Pelanggan</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Apa Kata Mereka?</h3>
          </div>
          
          <div className="flex flex-col gap-8">
            {/* First Row */}
            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-[300px] md:w-[380px] mx-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-slate-300 italic text-sm leading-relaxed">"{t.text}"</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-slate-500 text-[10px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].reverse().map((t, i) => (
                <div key={i} className="w-[300px] md:w-[380px] mx-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-slate-300 italic text-sm leading-relaxed">"{t.text}"</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-slate-500 text-[10px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keunggulan Section */}
        <section id="keunggulan" className="section-padding bg-soft-gray">
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
                  <div key={i} className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
                { q: "Area layanan di mana saja?", a: "Kami melayani seluruh wilayah di Indonesia. Tim profesional kami siap datang ke lokasi Anda sesuai dengan jadwal yang telah disepakati." },
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
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg">Tautan Cepat</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#layanan" className="hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#testimoni" className="hover:text-primary transition-colors">Testimoni</a></li>
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
                <span>Seluruh Indonesia (HQ: Kalidoni, Palembang)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0895 0247 0657</span>
              </li>
            </ul>
          </div>
        </div>
      </footer >

      {/* Modal Legal (Simplified for Home) */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-2xl p-8 rounded-3xl overflow-y-auto max-h-[80vh]">
              <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100"><X /></button>
              <h2 className="text-2xl font-bold mb-6">{activeModal === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h2>
              <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
                {activeModal === 'terms' ? (
                  <p>1. DP 20% untuk booking jadwal. <br/> 2. Pelunasan setelah pengerjaan selesai. <br/> 3. Dokumentasi hasil akan diberikan.</p>
                ) : (
                  <p>Kami menjaga privasi data Anda. Informasi hanya digunakan untuk koordinasi layanan potong rumput.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WA */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <button onClick={handleBooking} className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* Modal Payment Notice */}
      <AnimatePresence>
        {showPaymentNotice && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closePaymentNotice} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-sm rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-amber-500" />
                <h2 className="text-lg font-bold">Notifikasi Penting</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">Pembayaran resmi hanya ke rekening:</p>
              <div className="bg-slate-50 p-4 rounded-2xl mb-6">
                <p className="text-xs font-bold text-slate-400">BCA - 1160478272</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-bold text-sm">Muhamad Ridwan Saputra</p>
                  <button onClick={copyAccountNumber}>{isCopied ? <Check className="text-green-500 w-4 h-4"/> : <Copy className="text-slate-400 w-4 h-4"/>}</button>
                </div>
              </div>
              <button onClick={closePaymentNotice} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold">Saya Mengerti</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
