'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, Globe, ChevronDown } from 'lucide-react'
import { Button } from '@/src/presentation/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/src/presentation/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/presentation/components/ui/dropdown-menu"
import { useLocaleStore } from '@/src/infrastructure/stores/locale-store'
import { cn } from '@/src/lib/utils'

import branding from '@/src/infrastructure/data/branding.json'

interface NavbarProps {
    onMenuToggle?: () => void
}

export function Navbar({ onMenuToggle }: NavbarProps) {
    const t = useTranslations('nav')
    const pathname = usePathname()
    const { locale, setLocale, hasHydrated } = useLocaleStore()

    const navItems = [
        { label: t('profile'), href: '/profile' },
        {
            label: t('admission'),
            isDropdown: true,
            items: [
                { label: t('span_ptkin'), href: '/admission/span-ptkin' },
                { label: t('um_ptkin'), href: '/admission/um-ptkin' },
                { label: t('mandiri'), href: '/admission/mandiri' },
            ]
        },
        { label: t('news'), href: '/news' },
        { label: t('research'), href: '/research' },
        { label: t('academic'), href: '/academic' },
        { label: t('zawiyah'), href: '/zawiyah' },
    ]

    const handleLocaleChange = (newLocale: 'en' | 'id') => {
        setLocale(newLocale)
    }

    if (!hasHydrated) return null

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-backdrop-filter:bg-white shadow-sm font-sans">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
                    <div className="p-1 rounded-lg shrink-0">
                        <img src={branding.logo} alt="University Logo" className="h-10 w-10" />
                    </div>
                </Link>

                {/* Horizontal Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-0.5">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            {navItems.map((item) => {
                                const isActive = item.href === pathname || 
                                    (item.isDropdown && item.items?.some(subItem => subItem.href === pathname));
                                
                                return (
                                    <NavigationMenuItem key={item.label} className="relative">
                                        {item.isDropdown ? (
                                            <>
                                                <NavigationMenuTrigger className={cn(
                                                    "!bg-transparent font-medium transition-colors px-3 py-1.5 h-9 text-sm",
                                                    "hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[active]:!bg-transparent",
                                                    "relative inline-flex items-center group",
                                                    isActive ? "text-primary data-[state=open]:!text-primary" : "text-gray-600 hover:text-primary data-[state=open]:!text-primary"
                                                )}>
                                                    <span className="relative">
                                                        {item.label}
                                                        <div className={cn(
                                                            "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100",
                                                            isActive && "scale-x-100"
                                                        )} />
                                                    </span>
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[240px] gap-1 p-2 bg-white shadow-2xl rounded-xl border border-gray-100">
                                                        {item.items?.map((subItem) => {
                                                            const isSubActive = subItem.href === pathname;
                                                            return (
                                                                <li key={subItem.label}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={subItem.href || '#'}
                                                                            className={cn(
                                                                                "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all",
                                                                                "hover:bg-gray-50 text-black font-medium",
                                                                                isSubActive && "bg-primary/5 text-primary"
                                                                            )}
                                                                        >
                                                                            <div className="text-sm leading-none">{subItem.label}</div>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <Link href={item.href || '#'} legacyBehavior passHref>
                                                <NavigationMenuLink className={cn(
                                                    "!bg-transparent font-medium transition-colors px-3 py-1.5 h-9 text-sm inline-flex items-center",
                                                    "hover:!bg-transparent focus:!bg-transparent data-[active]:!bg-transparent",
                                                    "relative group",
                                                    isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                                                )}>
                                                    <span className="relative">
                                                        {item.label}
                                                        <div className={cn(
                                                            "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100",
                                                            isActive && "scale-x-100"
                                                        )} />
                                                    </span>
                                                </NavigationMenuLink>
                                            </Link>
                                        )}
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="h-6 w-px bg-gray-200 mx-4" />

                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-primary hover:bg-primary/5 h-8">
                                <Globe className="h-3.5 w-3.5" />
                                <span className="uppercase text-xs">{locale}</span>
                                <ChevronDown className="h-3 w-3 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32 p-1">
                            <DropdownMenuItem 
                                onClick={() => handleLocaleChange('id')}
                                className={cn("cursor-pointer", locale === 'id' && "bg-primary/5 text-primary font-semibold")}
                            >
                                Indonesia
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                                onClick={() => handleLocaleChange('en')}
                                className={cn("cursor-pointer", locale === 'en' && "bg-primary/5 text-primary font-semibold")}
                            >
                                English
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center lg:hidden gap-2">
                    {/* Compact Lang Switch for mobile */}
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-2 h-8 w-8 rounded-full bg-gray-50 text-[10px] font-bold"
                        onClick={() => handleLocaleChange(locale === 'id' ? 'en' : 'id')}
                    >
                        {locale === 'id' ? 'EN' : 'ID'}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onMenuToggle}
                        className="h-8 w-8 text-primary hover:bg-primary/5"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
