/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  CheckCircle2,
  Scissors,
  Calendar,
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
  Clock,
  Users
} from "lucide-react";
import React, { useState } from "react";

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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg shadow-primary/20 overflow-hidden">
              <Scissors className="text-white w-5 h-5 absolute -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              <Scissors className="text-white w-5 h-5 absolute rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary-dark">tebasrumput.com</span>
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
              <span>Wilayah Palembang & Sekitarnya</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-medium leading-tight text-slate-900 tracking-tight">
              Jasa <span className="font-bold">Potong Rumput</span> <br />
              Panggilan <span className="text-primary font-extrabold">Palembang</span>
              <span className="inline-block ml-4 align-middle opacity-30">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M2 28H58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 28V6M42 28V6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M18 10H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 14H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 6L4 20M42 6L56 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-slate-500 leading-relaxed font-light">
              Solusi praktis untuk halaman rumah, kantor, dan lahan kosong. <br className="hidden md:block" />
              <span className="font-medium text-slate-700">Rapi, Cepat, & Terpercaya</span> — Tim kami datang langsung ke lokasi Anda dengan peralatan modern lengkap.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 items-center">
              <button
                onClick={handleBooking}
                className="btn-primary text-lg px-12 py-5 flex items-center gap-3 shadow-lg hover:bg-primary-dark"
              >
                <MessageCircle className="w-6 h-6" /> Booking Sekarang
              </button>
              <a href="#layanan" className="text-slate-600 font-bold hover:text-primary transition-colors flex items-center gap-2">
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
            className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative"
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
      </section>

      {/* Trust / Social Proof - Marquee */}
      <section className="bg-soft-gray py-12 overflow-hidden border-y border-slate-100">
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
      </section>

      {/* Layanan Kami */}
      <section id="layanan" className="section-padding max-w-7xl mx-auto">
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
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="bg-slate-900 text-white section-padding overflow-hidden">
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
      </section>

      {/* Stats Section - Solid Version */}
      <section className="bg-primary py-16 px-6 md:px-12 lg:px-24">
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
      </section>

      {/* Cara Kerja */}
      <section className="section-padding max-w-7xl mx-auto">
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
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-soft-gray section-padding">
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
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-slate-50 overflow-hidden">
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
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-slate-50">
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
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight tracking-tight">Rumput Anda Sudah Terlalu Panjang?</h3>
            <p className="text-white/80 font-medium text-base">Jangan biarkan halaman Anda jadi hutan. Booking sekarang dan dapatkan diskon 10%!</p>
            <button onClick={handleBooking} className="bg-white text-primary px-8 py-3 rounded-full font-bold text-base shadow-lg hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2 mx-auto">
              <MessageCircle className="w-5 h-5" /> Booking Sekarang <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-xl shadow-lg overflow-hidden">
                <Scissors className="text-white w-5 h-5 absolute -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                <Scissors className="text-white w-5 h-5 absolute rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <span className="text-xl font-bold tracking-tight">tebasrumput.com</span>
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
      </footer>
      {/* Modal Legal */}
      {activeModal && (
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
      )}
    </div>
  );
}
