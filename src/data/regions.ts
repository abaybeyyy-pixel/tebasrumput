export const INDONESIA_REGIONS = [
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau",
  "Jambi", "Bengkulu", "Sumatera Selatan", "Kepulauan Bangka Belitung", "Lampung",
  "Banten", "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
  "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
  "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
  "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat",
  "Maluku", "Maluku Utara", "Papua Barat", "Papua", "Papua Selatan", "Papua Tengah", "Papua Pegunungan", "Papua Barat Daya"
];

export const INDONESIA_CITIES: Record<string, string[]> = {
  "Aceh": ["Banda Aceh", "Lhokseumawe", "Langsa", "Meulaboh", "Sabang"],
  "Sumatera Utara": ["Medan", "Binjai", "Pematangsiantar", "Tanjungbalai", "Tebing Tinggi", "Deli Serdang"],
  "Sumatera Barat": ["Padang", "Bukittinggi", "Payakumbuh", "Pariaman", "Solok"],
  "Riau": ["Pekanbaru", "Dumai"],
  "Kepulauan Riau": ["Tanjungpinang", "Batam"],
  "Jambi": ["Jambi", "Sungai Penuh"],
  "Bengkulu": ["Bengkulu"],
  "Sumatera Selatan": ["Palembang", "Lubuklinggau", "Pagar Alam", "Prabumulih", "Banyuasin", "Ogan Ilir"],
  "Kepulauan Bangka Belitung": ["Pangkal Pinang"],
  "Lampung": ["Bandar Lampung", "Metro"],
  "Banten": ["Serang", "Tangerang", "Cilegon", "Tangerang Selatan"],
  "DKI Jakarta": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Timur", "Jakarta Selatan", "Jakarta Barat"],
  "Jawa Barat": ["Bandung", "Bekasi", "Depok", "Bogor", "Cimahi", "Tasikmalaya", "Cirebon", "Sukabumi", "Banjar", "Karawang"],
  "Jawa Tengah": ["Semarang", "Surakarta", "Magelang", "Pekalongan", "Salatiga", "Tegal", "Banyumas"],
  "DI Yogyakarta": ["Yogyakarta", "Sleman", "Bantul", "Kulon Progo", "Gunung Kidul"],
  "Jawa Timur": ["Surabaya", "Malang", "Batu", "Blitar", "Kediri", "Madiun", "Mojokerto", "Pasuruan", "Probolinggo", "Sidoarjo", "Gresik"],
  "Bali": ["Denpasar", "Badung", "Gianyar", "Tabanan"],
  "Nusa Tenggara Barat": ["Mataram", "Bima"],
  "Nusa Tenggara Timur": ["Kupang"],
  "Kalimantan Barat": ["Pontianak", "Singkawang"],
  "Kalimantan Tengah": ["Palangkaraya"],
  "Kalimantan Selatan": ["Banjarmasin", "Banjarbaru"],
  "Kalimantan Timur": ["Samarinda", "Balikpapan", "Bontang"],
  "Kalimantan Utara": ["Tarakan"],
  "Sulawesi Utara": ["Manado", "Bitung", "Kotamobagu", "Tomohon"],
  "Sulawesi Tengah": ["Palu"],
  "Sulawesi Selatan": ["Makassar", "Palopo", "Parepare"],
  "Sulawesi Tenggara": ["Kendari", "Bau-Bau"],
  "Gorontalo": ["Gorontalo"],
  "Sulawesi Barat": ["Mamuju"],
  "Maluku": ["Ambon", "Tual"],
  "Maluku Utara": ["Ternate", "Tidore Kepulauan"],
  "Papua Barat": ["Manokwari"],
  "Papua": ["Jayapura"],
  "Papua Selatan": ["Merauke"],
  "Papua Tengah": ["Nabire"],
  "Papua Pegunungan": ["Wamena"],
  "Papua Barat Daya": ["Sorong"]
};

// Simplified Districts for demonstration, in a real app this would be an API call
export const INDONESIA_DISTRICTS: Record<string, string[]> = {
  "Palembang": ["Ilir Timur I", "Ilir Timur II", "Ilir Barat I", "Ilir Barat II", "Sako", "Kalidoni", "Plaju", "Seberang Ulu I", "Seberang Ulu II", "Sukarami", "Alang-Alang Lebar", "Gandus", "Kertapati"],
  "Jakarta Selatan": ["Kebayoran Baru", "Kebayoran Lama", "Pesanggrahan", "Cilandak", "Pasar Minggu", "Jagakarsa", "Mampang Prapatan", "Pancoran", "Tebet", "Setiabudi"],
  "Bandung": ["Andir", "Astana Anyar", "Antapani", "Arcamanik", "Babakan Ciparay", "Bandung Kidul", "Bandung Kulon", "Bandung Wetan", "Batununggal", "Bojongloa Kaler", "Bojongloa Kidul", "Buahbatu", "Cibeunying Kaler", "Cibeunying Kidul", "Cibiru", "Cicendo", "Cidadap", "Cinambo", "Coblong", "Gedebage", "Kiaracondong", "Lengkong", "Mandalajati", "Panyileukan", "Rancasari", "Regol", "Sukajadi", "Sukasari", "Sumur Bandung", "Ujungberung"],
  "Surabaya": ["Asemrowo", "Benowo", "Bubutan", "Bulak", "Dukuh Pakis", "Gayungan", "Genteng", "Gubeng", "Gunung Anyar", "Jambangan", "Karang Pilang", "Kenjeran", "Krembangan", "Lakar Santri", "Mulyorejo", "Pabean Cantian", "Pakal", "Rungkut", "Sambikerep", "Sawahan", "Semampir", "Simokerto", "Sukolilo", "Sukomanunggal", "Tandes", "Tegalsari", "Tenggilis Mejoyo", "Wiyung", "Wonocolo", "Wonokromo"],
  "Medan": ["Medan Amplas", "Medan Area", "Medan Barat", "Medan Baru", "Medan Belawan", "Medan Deli", "Medan Denai", "Medan Helvetia", "Medan Johor", "Medan Kota", "Medan Labuhan", "Medan Maimun", "Medan Marelan", "Medan Perjuangan", "Medan Petisah", "Medan Polonia", "Medan Selayang", "Medan Sunggal", "Medan Tembung", "Medan Timur", "Medan Tuntungan"]
};
