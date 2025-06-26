import AppHeader from "../components/ui/AppHeader"
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";

export default function Home() {
    return (
        <div className="flex flex-col gap-[8px] min-h-screen overflow-y-auto">
            <AppHeader />
            <HeroSection />
            <AboutSection />
            <InfoSection />
        </div>
    )
}