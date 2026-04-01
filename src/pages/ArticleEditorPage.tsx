import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  FileText, 
  Search, 
  Tag, 
  Globe, 
  Type, 
  AlignLeft, 
  Clock, 
  AlertCircle,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { Blog } from '../data/constants';
import { motion } from 'motion/react';

interface ArticleEditorPageProps {
  blogs: Blog[];
  onSaveBlog: (blog: Blog) => void;
}

export default function ArticleEditorPage({ blogs, onSaveBlog }: ArticleEditorPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<Blog>({
    title: '',
    slug: '',
    tags: [],
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    desc: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (isEditing) {
      const existingBlog = blogs.find(b => b.id === id);
      if (existingBlog) {
        setFormData(existingBlog);
      } else {
        navigate('/admin/dashboard');
      }
    }
  }, [id, blogs, isEditing, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveBlog({
      ...formData,
      id: isEditing ? id : Math.random().toString(36).substr(2, 9),
    });
    navigate('/admin/dashboard');
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tagToRemove) });
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setFormData({ ...formData, slug });
  };

  return (
    <div className="space-y-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-6">
          <Link 
             to="/admin/dashboard" 
             className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="space-y-1">
             <h1 className="text-3xl font-black text-slate-900 tracking-tight">
               {isEditing ? 'Edit Artikel' : 'Tulis Artikel Baru'}
             </h1>
             <p className="text-slate-500 font-medium text-sm">Optimalisasi konten untuk visibilitas maksimal.</p>
          </div>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="bg-primary text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]"
        >
          <Save className="w-6 h-6" /> {isEditing ? 'Simpan Perubahan' : 'Terbitkan Sekarang'}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Type className="w-3.5 h-3.5" /> Judul Artikel
               </label>
               <input 
                 type="text" 
                 value={formData.title}
                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                 onBlur={generateSlug}
                 className="w-full text-2xl md:text-3xl font-bold text-slate-900 placeholder:text-slate-100 border-none focus:ring-0 outline-none p-0"
                 placeholder="Masukkan judul yang menarik..."
                 required
               />
               <div className="h-[1px] bg-slate-100 w-full"></div>
            </div>

            <div className="space-y-4">
               <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <AlignLeft className="w-3.5 h-3.5" /> Konten Artikel (HTML)
               </label>
               <textarea 
                 value={formData.content}
                 onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                 className="w-full min-h-[500px] text-slate-700 leading-relaxed border border-slate-100 rounded-3xl p-8 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                 placeholder="Gunakan tag HTML seperti <h2>, <p>, <ul>, <li> untuk struktur yang baik..."
                 required
               />
            </div>
          </section>

          {/* SEO Performance Section */}
          <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] space-y-10 border border-white/5 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="space-y-2 relative z-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Search className="w-4 h-4 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold">SEO Optimization</h3>
                </div>
                <p className="text-slate-400 text-sm">Pastikan artikel Anda muncul di halaman pertama Google.</p>
             </div>

             <div className="space-y-8 relative z-10">
                <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Meta Title (SEO Title)</label>
                   <input 
                     type="text" 
                     value={formData.metaTitle}
                     onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-slate-200"
                     placeholder="Contoh: Jasa Potong Rumput Jakarta Termurah | Tebasrumput.com"
                   />
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Meta Description</label>
                   <textarea 
                     value={formData.metaDescription}
                     onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-slate-200 min-h-[100px]"
                     placeholder="Ringkasan singkat untuk hasil pencarian Google (150-160 karakter)..."
                   />
                </div>

                {/* Google Preview */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
                   <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-2">
                     <Eye className="w-3 h-3" /> Preview Google
                   </h4>
                   <div className="space-y-1 py-4 px-6 bg-white rounded-2xl">
                      <div className="text-xs text-slate-500 flex items-center gap-1">tebasrumput.com › blog › {formData.slug || 'slug-artikel'}</div>
                      <div className="text-lg text-blue-600 hover:underline cursor-pointer font-medium leading-tight line-clamp-1">{formData.metaTitle || formData.title || 'Judul Artikel Anda Akan Muncul di Sini'}</div>
                      <div className="text-xs text-slate-500 leading-relaxed line-clamp-2">{formData.metaDescription || formData.desc || 'Ringkasan artikel akan muncul di sini sebagai cuplikan di hasil pencarian Google.'}</div>
                   </div>
                </div>
             </div>
          </section>
        </div>

        {/* Sidebar Settings Area */}
        <div className="space-y-8">
           <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <h3 className="font-bold text-slate-900 border-b border-slate-50 pb-4">Pengaturan Publikasi</h3>
              
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5" /> URL Slug
                    </label>
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500">
                       <span className="shrink-0">tebasrumput.com/</span>
                       <input 
                         type="text" 
                         value={formData.slug}
                         onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                         className="bg-transparent outline-none flex-grow"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" /> Tanggal Perbitan
                    </label>
                    <input 
                      type="text" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm"
                    />
                 </div>
              </div>
           </section>

           <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <h3 className="font-bold text-slate-900 border-b border-slate-50 pb-4">Kategorisasi</h3>
              
              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5" /> Label / Tags
                    </label>
                    <input 
                      type="text" 
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:border-primary transition-all"
                      placeholder="Ketik tag lalu tekan Enter..."
                    />
                    <div className="flex flex-wrap gap-2 pt-2">
                       {formData.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-2 group">
                             {tag}
                             <button onClick={() => removeTag(tag)} className="hover:text-red-500">×</button>
                          </span>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" /> Ringkasan (Excerpt)
                    </label>
                    <textarea 
                      value={formData.desc}
                      onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                      className="w-full min-h-[100px] px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:border-primary transition-all"
                      placeholder="Teks singkat yang muncul di daftar blog..."
                    />
                 </div>
              </div>
           </section>

           <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <div className="space-y-1">
                 <h4 className="text-sm font-bold text-emerald-900">Optimalisasi Aktif</h4>
                 <p className="text-xs text-emerald-700 leading-relaxed">Konten Anda akan diindeks dengan metadata terbaru secara otomatis.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
