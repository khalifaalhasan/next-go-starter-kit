'use client'

import { ReactNode, useState } from 'react'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

interface MainLayoutProps {
    children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex flex-col">
                <Navbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
