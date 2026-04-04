'use client'

import React from 'react'
import { BookOpen, Sprout, Heart, Users, GraduationCap, Microscope } from 'lucide-react'
import branding from '@/src/infrastructure/data/branding.json'

const features = [
    {
        title: "Kajian Tasawuf",
        description: "Mendalami khazanah spiritualitas Islam dari perspektif klasik hingga kontemporer.",
        icon: Sprout,
    },
    {
        title: "Teori Psikoterapi",
        description: "Integrasi berbagai aliran psikoterapi modern dengan pendekatan holisitik.",
        icon: Microscope,
    },
    {
        title: "Praktik Klinis",
        description: "Pengalaman lapangan di berbagai instansi kesehatan mental dan lembaga spiritual.",
        icon: GraduationCap,
    },
    {
        title: "Konseling Spiritual",
        description: "Layanan konsultasi kesehatan mental berbasis nilai-nilai ketuhanan.",
        icon: Heart,
    },
    {
        title: "Penelitian Inovatif",
        description: "Pengembangan ilmu pengetahuan baru di persimpangan spiritualitas dan psikologi.",
        icon: BookOpen,
    },
    {
        title: "Layanan Pengabdian",
        description: "Penerapan ilmu untuk membantu masyarakat dalam mengatasi problem kejiwaan.",
        icon: Users,
    },
];

export function AcademicSection() {
    return (
        <section id="academic" className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Unggulan Akademik</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Mengapa Memilih {branding.programName}?
                    </h3>
                    <p className="text-lg text-gray-600">
                        Kami menawarkan kurikulum yang komprehensif, menggabungkan teori mendalam dengan aplikasi praktis untuk menjawab tantangan kesehatan mental global.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
