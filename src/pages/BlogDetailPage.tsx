import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, ArrowLeft, Calendar, Tag, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Blog, WA_LINK } from '../data/constants';

interface BlogDetailPageProps {
  blogs: Blog[];
}

export default function BlogDetailPage({ blogs }: BlogDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const foundBlog = blogs.find(b => b.slug === slug);
    setBlog(foundBlog || null);
  }, [slug, blogs]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans text-slate-500">
        <div className="text-center space-y-4">
          <Leaf className="w-12 h-12 text-primary/20 mx-auto" />
          <h1 className="text-2xl font-bold text-slate-900">Artikel Tidak Ditemukan</h1>
          <Link to="/" className="text-primary font-bold hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    window.open(`${WA_LINK}?text=${encodeURIComponent(`Halo tebasrumput.com, saya tertarik dengan artikel "${blog.title}". Saya ingin memesan layanan.`)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      <Helmet>
        <title>{blog.metaTitle || blog.title} | Tebasrumput.com</title>
        <meta name="description" content={blog.metaDescription || blog.desc} />
        <link rel="canonical" href={`https://www.tebasrumput.com/blog/${blog.slug}`} />
      </Helmet>

      {/* Hero Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <Leaf className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform shrink-0" />
            <span className="text-2xl font-black tracking-tighter text-black">
              tebasrumput.com
            </span>
          </Link>
          <Link to="/" className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Beranda
          </Link>
        </div>
      </nav>

      <main className="pt-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
               <span className="px-3 py-1 bg-primary/10 rounded-full">{blog.tags[0]}</span>
               <span className="text-slate-400 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">{blog.title}</h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{blog.desc}</p>
          </motion.div>

          {/* Article Content */}
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-slate-100 blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA Footer */}
          <div className="bg-primary p-8 md:p-16 rounded-[2.5rem] text-white text-center space-y-8 shadow-xl">
             <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Butuh Jasa Tebas Rumput Sekarang?</h3>
             <p className="text-white/80 font-medium">Tim profesional kami siap membantu merapikan halaman Anda di wilayah Palembang.</p>
             <button onClick={handleBooking} className="bg-white text-primary px-10 py-4 rounded-full font-black flex items-center justify-center gap-3 mx-auto shadow-lg hover:bg-slate-50 transition-all active:scale-95">
                <MessageCircle className="w-6 h-6" /> Hubungi Kami via WhatsApp <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}
