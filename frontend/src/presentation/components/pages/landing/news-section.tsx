'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { blogService } from '@/src/domain/services/blog.service'
import { Skeleton } from '@/src/presentation/components/ui/skeleton'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export function NewsSection() {
    const { data: newsData, isLoading } = useQuery({
        queryKey: ['public-news'],
        queryFn: () => blogService.getPublicBlogs({ limit: 3 }),
    });

    const blogs = newsData?.items || [];

    return (
        <section id="news" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Informasi Terkini</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Berita & Artikel Kampus
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Ikuti perkembangan terbaru mengenai kegiatan akademik, penelitian, dan acara kemahasiswaan di lingkungan program studi kami.
                        </p>
                    </div>
                    <Link href="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 group">
                        Lihat Seluruh Berita
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="h-64 w-full rounded-2xl" />
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        ))}
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                        <p className="text-gray-500 italic">Belum ada berita yang diterbitkan.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <Link 
                                key={blog.id} 
                                href={`/news/${blog.slug}`}
                                className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={blog.thumbnail || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"} 
                                        alt={blog.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-primary/80 backdrop-blur-md rounded-full shadow-lg">
                                            {blog.category?.name || 'Berita'}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1 space-y-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-400">
                                        <div className="flex items-center gap-1.5 flex-1 truncate">
                                            <Calendar className="h-3.5 w-3.5 text-primary" />
                                            {blog.created_at ? format(new Date(blog.created_at), 'dd MMMM yyyy', { locale: id }) : '-'}
                                        </div>
                                        <div className="flex items-center gap-1.5 truncate">
                                            <User className="h-3.5 w-3.5 text-primary" />
                                            {blog.author?.name || 'Admin'}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                        {blog.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-1">
                                        {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                                    </p>
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs font-bold text-primary group-hover:underline">Baca Selengkapnya</span>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
