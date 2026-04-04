'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import branding from '@/src/infrastructure/data/branding.json'

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-16 mb-16">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="bg-white p-2 rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <img src={branding.logo} alt="Logo" className="h-10 w-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white uppercase leading-tight">
                                    {branding.programName}
                                </span>
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest leading-none mt-1">
                                    {branding.facultyName} / {branding.shortUniversityName}
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 max-w-md leading-relaxed text-sm">
                            Program Studi {branding.programName} {branding.universityName} berkomitmen dalam pengembangan keilmuan spiritualitas dan psikologi untuk kesejahteraan umat dan bangsa.
                        </p>
                        <div className="flex gap-4">
                            <a href={branding.socials.instagram} target="_blank" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href={branding.socials.facebook} target="_blank" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href={branding.socials.youtube} target="_blank" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Tautan Penting</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'Pendaftaran Mahasiswa', href: '/admission' },
                                { label: 'Berita & Kegiatan', href: '/news' },
                                { label: 'Profil Dosen', href: '/profile' },
                                { label: 'Bantuan & FAQ', href: '/help' },
                                { label: 'Sistem Informasi Akademik', href: 'https://simak.radenfatah.ac.id', external: true }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link 
                                        href={link.href} 
                                        target={link.external ? "_blank" : undefined}
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        {link.label}
                                        {link.external && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Hubungi Kami</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    {branding.address} <br /> {branding.location}
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    {branding.phone}
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    {branding.email}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} {branding.programName} {branding.shortUniversityName}. Seluruh Hak Cipta Dilindungi.
                    </p>
                    <div className="flex gap-4 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
                        <span className="opacity-30">|</span>
                        <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
