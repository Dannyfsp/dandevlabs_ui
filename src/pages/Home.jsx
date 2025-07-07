import AppHeader from "../components/ui/AppHeader"
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import CarouselSection from "../components/home/CarouselSection";
import PortfolioSection from "../components/home/PortfolioSection";
import AppFooter from "../components/ui/AppFooter";

export default function Home() {
    return (
        <div className="flex flex-col gap-[8px] min-h-screen overflow-y-auto">
            <AppHeader />
            <HeroSection />
            <AboutSection />
            <InfoSection />
            <ServicesSection />
            <TestimonialSection />
            <CarouselSection />
            <PortfolioSection />
            <AppFooter />
        </div>
    )
}