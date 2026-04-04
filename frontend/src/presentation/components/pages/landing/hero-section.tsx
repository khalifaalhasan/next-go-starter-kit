'use client'

import Link from 'next/link'
import {
    ArrowRight,
} from 'lucide-react'
import { Button } from '@/src/presentation/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { sliderService } from '@/src/domain/services/slider.service'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/presentation/components/ui/carousel"
import { Skeleton } from "@/src/presentation/components/ui/skeleton"
import branding from '@/src/infrastructure/data/branding.json'

export default function HeroSection() {
    const { data: sliders = [], isLoading } = useQuery({
        queryKey: ['public-sliders'],
        queryFn: () => sliderService.getPublicSliders(),
    });

    // Fallback if no sliders found or loading
    if (isLoading) {
        return (
            <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-100">
                <Skeleton className="w-full h-full" />
            </section>
        );
    }

    if (sliders.length === 0) {
        return (
            <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex items-center justify-center bg-primary/5">
                <img 
                    src="/hero-fallback.jpg" 
                    alt={branding.programName} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative text-center z-10 px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 uppercase tracking-tight">
                        {branding.programName}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        {branding.facultyName} <br /> {branding.universityName}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="relative w-full overflow-hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-0">
                    {sliders.map((slider) => (
                        <CarouselItem key={slider.id} className="pl-0 relative h-[500px] md:h-[600px] lg:h-[700px]">
                            {/* Slide Image */}
                            <img 
                                src={slider.image_url} 
                                alt={slider.title || 'Slide'} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            {/* Gradient Overlay for Text Readability */}
                            {(slider.title || slider.description) && (
                                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent flex items-center">
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="max-w-2xl text-white">
                                            {slider.title && (
                                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md animate-in fade-in slide-in-from-left duration-700">
                                                    {slider.title}
                                                </h1>
                                            )}
                                            {slider.description && (
                                                <p className="text-lg md:text-xl opacity-90 mb-8 drop-shadow-sm animate-in fade-in slide-in-from-left duration-1000">
                                                    {slider.description}
                                                </p>
                                            )}
                                            {slider.link_url && (
                                                <Link href={slider.link_url}>
                                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-none shadow-lg">
                                                        Selengkapnya
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Controls */}
                <div className="absolute bottom-10 right-10 md:right-20 flex gap-2">
                    <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/20 border-white/30 text-white hover:bg-white/40" />
                    <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/20 border-white/30 text-white hover:bg-white/40" />
                </div>
            </Carousel>
        </section>
    );
}