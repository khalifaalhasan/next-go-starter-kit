'use client'

import React from 'react'
import { Shield, Target, Award } from 'lucide-react'
import branding from '@/src/infrastructure/data/branding.json'

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Illustration or Image */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img 
                                src="https://images.unsplash.com/photo-1523050334887-160b215881df?q=80&w=2070&auto=format&fit=crop" 
                                alt="UIN Raden Fatah Campus" 
                                className="w-full h-full object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                <span className="h-px w-8 bg-primary" />
                                Profil Program Studi
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Menyiapkan Tenaga Profesional Berbasis Spiritualitas & Sains
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Program Studi {branding.programName} di {branding.universityName} mengintegrasikan kearifan lokal, spiritualitas tasawuf, dan ilmu psikoterapi modern untuk mencetak lulusan yang unggul.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 hover:shadow-lg transition-all">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Visi Kami</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Menjadi pusat unggulan pendidikan Tasawuf dan Psikoterapi yang berdaya saing internasional pada tahun 2030.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                                <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-700 mb-4">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Misi Utama</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Menyelenggarakan pendidikan inklusif, penelitian inovatif, dan pengabdian masyarakat berbasis terapi spiritual.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
