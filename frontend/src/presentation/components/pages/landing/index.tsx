import HeroSection from "./hero-section"
import { AboutSection } from "./about-section"
import { AcademicSection } from "./academic-section"
import { NewsSection } from "./news-section"
import { Footer } from "./footer"

export function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                <HeroSection />
                <AboutSection />
                <AcademicSection />
                <NewsSection />
            </main>
            <Footer />
        </div>
    )
}