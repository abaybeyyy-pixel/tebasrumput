import React, { useState } from "react";
const motion = {
  div: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <div {...props} />,
  h1: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <h1 {...props} />,
  p: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <p {...props} />,
  span: ({ initial, animate, exit, whileInView, viewport, whileHover, variants, transition, ...props }: any) => <span {...props} />,
};
import {
  CheckCircle2,
  Users,
  Clock,
  Briefcase,
  MessageSquare,
  Wallet,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  Leaf,
  Menu,
  X,
  MessageCircle,
  Check,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { INDONESIA_REGIONS, JAKARTA_CITIES, INDONESIA_DISTRICTS } from "../data/regions";

const WA_LINK = "https://wa.me/6289502470657";

const RupiahIcon = ({ className = "" }: { className?: string }) => (
  <span className={`font-black ${className}`} style={{ fontStyle: 'normal' }}>Rp</span>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Mitra() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    pengalaman: "",
    setuju: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.setuju) {
      alert("Anda harus menyetujui sistem kerja sama.");
      return;
    }

    setIsSubmitting(true);

    // Construct WA Message
    const message = `*PENDAFTARAN MITRA TEBASRUMPUT.COM*
---------------------------------------
Nama: ${formData.nama}
WhatsApp: ${formData.whatsapp}
Lokasi: ${formData.kecamatan}, ${formData.kota}, ${formData.provinsi}
Pengalaman: ${formData.pengalaman}
---------------------------------------
Saya bersedia mengikuti sistem kerja sama dan potongan biaya layanan 10% dari TebasRumput.com.`;

    setTimeout(() => {
      window.open(`${WA_LINK}?text=${encodeURIComponent(message)}`, "_blank");
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Pendaftaran Mitra Jasa Potong Rumput Jakarta | PT Tebas Rumput Saputra</title>
        <meta name="description" content="Bergabunglah sebagai mitra penyedia jasa potong rumput profesional PT Tebas Rumput Saputra di Jakarta. Dapatkan order rutin dan bagi hasil yang menguntungkan." />
        <meta name="keywords" content="mitra potong rumput, lowongan tukang potong rumput, kerja sama potong rumput jakarta, lowongan kerja jakarta, pt tebas rumput saputra" />
      </Helmet>
      {/* Navbar */}
      <nav aria-label="Menu Utama" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center cursor-pointer group">
            <span className="text-xl font-black tracking-tighter text-black">
              tebasrumput.com
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Beranda</Link>
            <a href="#benefit" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Benefit</a>
            <a href="#cara-kerja" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Cara Kerja</a>
            <a href="#sistem" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Sistem</a>
            <a href="#daftar" className="btn-primary text-sm py-2 px-6 flex items-center gap-2">
              Daftar Sekarang
            </a>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Beranda</Link>
            <a href="#benefit" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Benefit</a>
            <a href="#cara-kerja" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Cara Kerja</a>
            <a href="#sistem" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sistem</a>
            <a href="#daftar" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
              Daftar Sekarang
            </a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: 'radial-gradient(#2E7D32 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase"
            >
              <Users className="w-4 h-4" />
              <span>Program Kemitraan Wilayah Jakarta</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight"
            >
              Jadilah Mitra Profesional <br />
              <span className="text-primary">TebasRumput.com</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Bergabunglah dengan jaringan penyedia jasa potong rumput profesional di DKI Jakarta. Dapatkan order rutin tanpa pusing mencari customer.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-4"
            >
              <a href="#daftar" className="btn-primary px-10 py-4 text-lg shadow-xl shadow-primary/20">
                Mulai Daftar Sekarang
              </a>
            </motion.div>
          </div>
        </section>

        {/* Benefit Section */}
        <section id="benefit" className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Benefit Mitra</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Mengapa Bergabung dengan Kami?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone className="w-5 h-5" />, title: "Dapat Order Tanpa Cari Customer", desc: "Kami yang melakukan pemasaran, Anda tinggal terima job." },
              { icon: <Clock className="w-5 h-5" />, title: "Fleksibel Ambil Job", desc: "Atur waktu kerja Anda sendiri. Ambil job saat Anda tersedia." },
              { icon: <Users className="w-5 h-5" />, title: "Cocok untuk Freelance", desc: "Tambah penghasilan di waktu luang Anda dengan keahlian yang dimiliki." },
              { icon: <MessageSquare className="w-5 h-5" />, title: "Sistem Mudah via WhatsApp", desc: "Koordinasi job dan konfirmasi pengerjaan cukup lewat WhatsApp." },
              { icon: <RupiahIcon className="text-lg" />, title: "Peluang Penghasilan Tambahan", desc: "Penghasilan kompetitif dengan sistem bagi hasil yang transparan." },
              { icon: <MapPin className="w-5 h-5" />, title: "Bisa Kerja Sesuai Area Domisili", desc: "Pilih job yang paling dekat dengan lokasi rumah Anda." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900 leading-snug">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cara Kerja */}
        <section id="cara-kerja" className="bg-slate-900 text-white section-padding overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-xs font-bold text-primary-light tracking-[0.2em] uppercase">Cara Kerja</h2>
              <h3 className="text-3xl md:text-5xl font-bold">5 Langkah Menjadi Mitra</h3>
            </div>

            <div className="relative">
              {/* Desktop Connector Line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-white/10 -z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                {[
                  { step: "01", title: "Daftar Menjadi Mitra", desc: "Isi form pendaftaran lengkap dengan data diri Anda." },
                  { step: "02", title: "Tim Verifikasi Data", desc: "Tim kami akan meninjau data dan pengalaman Anda." },
                  { step: "03", title: "Masuk Grup/Channel Job Area", desc: "Bergabung ke komunitas mitra sesuai domisili Anda." },
                  { step: "04", title: "Ambil Order Sesuai Lokasi", desc: "Pilih job yang tersedia dan ambil sesuai keinginan." },
                  { step: "05", title: "Selesaikan Pekerjaan & Dapat Bayaran", desc: "Kerjakan dengan rapi dan terima pendapatan Anda." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xl font-black text-primary-light shadow-[0_0_20px_rgba(76,175,80,0.1)] relative">
                      {step.step}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold">{step.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sistem Kerja Sama */}
        <section id="sistem" className="section-padding bg-soft-gray">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Sistem Kerja Sama</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Kemitraan yang Adil & Transparan</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">
                    Kami membangun ekosistem di mana mitra adalah aset terpenting. Berikut adalah aturan main dalam kemitraan TebasRumput.com:
                  </p>
                  
                  <div className="grid gap-4">
                    {[
                      "Mitra akan mendapatkan peluang order dari TebasRumput.com sesuai area domisili.",
                      "Setiap pekerjaan yang berhasil diselesaikan dikenakan biaya layanan sebesar 10% dari total nilai jasa.",
                      "Biaya layanan digunakan untuk operasional platform, pemasaran, dan distribusi order kepada mitra.",
                      "Tidak ada biaya pendaftaran (Gratis 100%).",
                      "Mitra bebas mengambil atau menolak job yang tersedia tanpa denda."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <RupiahIcon className="text-lg" />
                    </div>
                    Simulasi Pendapatan
                  </h4>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Nilai Jasa (Contoh)</span>
                      <span className="text-xl font-bold text-slate-900">Rp 500.000</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Biaya Layanan (10%)</span>
                      <span className="text-xl font-bold text-red-500">- Rp 50.000</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <span className="text-primary font-bold">Pendapatan Bersih Mitra</span>
                      <span className="text-2xl font-black text-primary">Rp 450.000</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <p className="text-[11px] text-amber-700 font-medium leading-relaxed">
                      *Biaya layanan hanya dipotong saat pekerjaan selesai. Tanpa modal, tanpa resiko.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Pendaftaran */}
        <section id="daftar" className="section-padding bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Pendaftaran</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Formulir Pendaftaran Mitra</h3>
              <p className="text-slate-500 max-w-xl mx-auto font-medium">
                Lengkapi formulir di bawah ini dengan data yang valid. Tim kami akan segera menghubungi Anda.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm max-w-2xl mx-auto"
            >
              {isSuccess ? (
                <div className="text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Pendaftaran Terkirim!</h4>
                  <p className="text-slate-600">Terima kasih telah mendaftar. Anda akan diarahkan ke WhatsApp kami untuk proses selanjutnya.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-primary font-bold hover:underline">Isi form kembali</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nama Lengkap */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ahmad Subardjo"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    />
                  </div>

                  {/* Nomor WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxx"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>

                  {/* Lokasi Dropdowns */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Provinsi Domisili</label>
                      <div className="relative">
                        <select
                          required
                          className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium appearance-none"
                          value={formData.provinsi}
                          onChange={(e) => setFormData({ ...formData, provinsi: e.target.value, kota: "", kecamatan: "" })}
                        >
                          <option value="">Pilih Provinsi</option>
                          {INDONESIA_REGIONS.map(reg => <option key={reg} value={reg}>{reg}</option>)}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Kota Administrasi</label>
                      <div className="relative">
                        <select
                          required
                          disabled={!formData.provinsi}
                          className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium appearance-none disabled:bg-slate-50 disabled:text-slate-400"
                          value={formData.kota}
                          onChange={(e) => setFormData({ ...formData, kota: e.target.value, kecamatan: "" })}
                        >
                          <option value="">{formData.provinsi ? "Pilih Kota Administrasi" : "Pilih Provinsi Dahulu"}</option>
                          {formData.provinsi && JAKARTA_CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Kecamatan / Area Kerja Utama</label>
                      <div className="relative">
                        {formData.kota && INDONESIA_DISTRICTS[formData.kota] ? (
                          <select
                            required
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium appearance-none"
                            value={formData.kecamatan}
                            onChange={(e) => setFormData({ ...formData, kecamatan: e.target.value })}
                          >
                            <option value="">Pilih Kecamatan</option>
                            {INDONESIA_DISTRICTS[formData.kota].map(dist => <option key={dist} value={dist}>{dist}</option>)}
                            <option value="Lainnya">Lainnya / Seluruh Wilayah</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            required
                            disabled={!formData.kota}
                            placeholder="Masukkan nama kecamatan"
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium disabled:bg-slate-50 disabled:text-slate-400"
                            value={formData.kecamatan}
                            onChange={(e) => setFormData({ ...formData, kecamatan: e.target.value })}
                          />
                        )}
                        {formData.kota && INDONESIA_DISTRICTS[formData.kota] && <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />}
                      </div>
                    </div>
                  </div>

                  {/* Pengalaman Kerja */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Pengalaman Kerja</label>
                    <textarea
                      required
                      placeholder="Ceritakan pengalaman singkat Anda..."
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white font-medium min-h-[100px]"
                      value={formData.pengalaman}
                      onChange={(e) => setFormData({ ...formData, pengalaman: e.target.value })}
                    />
                  </div>

                  {/* Checkbox Setuju */}
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="pt-1">
                      <input
                        type="checkbox"
                        id="setuju"
                        className="w-5 h-5 accent-primary cursor-pointer"
                        checked={formData.setuju}
                        onChange={(e) => setFormData({ ...formData, setuju: e.target.checked })}
                      />
                    </div>
                    <label htmlFor="setuju" className="text-sm text-slate-700 font-medium cursor-pointer select-none">
                      Saya bersedia mengikuti sistem kerja sama dan potongan biaya layanan 10% dari TebasRumput.com
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-5 rounded-[1.5rem] font-black text-xl shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:bg-slate-300"
                  >
                    {isSubmitting ? "Sedang Mengirim..." : (
                      <>
                        <MessageCircle className="w-6 h-6" /> Daftar Sekarang
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
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
            <p className="text-slate-400 text-sm leading-relaxed">
              Membangun jaringan profesional penyedia jasa potong rumput di seluruh wilayah DKI Jakarta. Bergabunglah menjadi mitra kami hari ini.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg text-primary-light">Program Mitra</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#benefit" className="hover:text-primary transition-colors">Benefit Menjadi Mitra</a></li>
              <li><a href="#cara-kerja" className="hover:text-primary transition-colors">Proses Pendaftaran</a></li>
              <li><a href="#sistem" className="hover:text-primary transition-colors">Sistem Bagi Hasil</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg">Halaman</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Halaman Utama</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Layanan</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Harga</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-lg">Kontak Center</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <span>WhatsApp: 0895 0247 0657</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-primary shrink-0" />
                <span>Dukungan Mitra 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>&copy; 2026 PT TEBAS RUMPUT SAPUTRA (tebasrumput.com). Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </footer>
    </div>
  );
}
