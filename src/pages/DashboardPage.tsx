import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, ExternalLink, Calendar, Tag, FileText, LayoutDashboard, ArrowRight } from 'lucide-react';
import { Blog } from '../data/constants';
import { motion } from 'motion/react';

interface DashboardPageProps {
  blogs: Blog[];
  onDeleteBlog: (id: string) => void;
}

export default function DashboardPage({ blogs, onDeleteBlog }: DashboardPageProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-4">
            <LayoutDashboard className="w-10 h-10 text-primary" /> Kelola Artikel
          </h1>
          <p className="text-slate-500 font-medium">Anda memiliki {blogs.length} artikel publik.</p>
        </div>
        <Link 
          to="/admin/dashboard/new" 
          className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]"
        >
          <Plus className="w-6 h-6" /> Tulis Artikel Baru
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6">
        {blogs.map((blog, idx) => (
          <motion.div 
            key={blog.id || idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col md:flex-row gap-8 items-start group"
          >
            <div className="flex-grow space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span className="flex items-center gap-1.5 text-primary"><Tag className="w-3.5 h-3.5" /> {blog.tags[0]}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{blog.title}</h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-2">{blog.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {blog.tags.slice(1).map(tag => (
                   <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col gap-3 shrink-0">
               <Link 
                to={`/admin/dashboard/edit/${blog.id}`}
                className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all border border-slate-100"
                title="Edit Artikel"
               >
                 <Edit2 className="w-5 h-5" />
               </Link>
               <button 
                onClick={() => { if(confirm('Hapus artikel ini?')) onDeleteBlog(blog.id!) }}
                className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all border border-slate-100"
                title="Hapus"
               >
                 <Trash2 className="w-5 h-5" />
               </button>
               <a 
                href={`/blog/${blog.slug}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-200 hover:text-slate-900 transition-all border border-slate-100"
                title="Lihat Live"
               >
                 <ExternalLink className="w-5 h-5" />
               </a>
            </div>
          </motion.div>
        ))}

        {blogs.length === 0 && (
          <div className="bg-white p-20 rounded-[3rem] border-2 border-dashed border-slate-200 text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 mx-auto">
               <FileText className="w-10 h-10" />
            </div>
            <div className="space-y-2">
               <h3 className="text-xl font-bold text-slate-600">Belum Ada Artikel</h3>
               <p className="text-slate-400">Mulai menulis artikel pertama Anda untuk menunjang SEO.</p>
            </div>
            <Link 
              to="/admin/dashboard/new" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              Tulis Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

