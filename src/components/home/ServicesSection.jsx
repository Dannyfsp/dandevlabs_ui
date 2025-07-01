import ServicesItem from "./ServicesItem"

const ServiceItems = [
    {
        heading: "UI/UX Design",
        title1: "Wireframing;",
        detail1: "Visual blueprints to map out structure and flow.",
        title2: "Prototyping",
        detail2: "Interactive models for user testing and stakeholder feedback.",
        title3: "User Research;",
        detail3: "Data-driven insights to align design with real user needs etc.",
    },
    {
        heading: "Frontend Development",
        title1: "React & React Native;",
        detail1: "Modern JavaScript frameworks for dynamic, SPA development.",
        title2: "HTML5/CSS3",
        detail2: "Clean, semantic, and mobile-friendly layouts.",
        title3: "Tailwind/Bootstrap;",
        detail3: "Rapid styling and UI component integration etc.",
    },
    {
        heading: "Backend Development",
        title1: "NodeJS/Express;",
        detail1: "Fast, event-driven server environments.",
        title2: "Go/Gin;",
        detail2: "High-performance, compiled concurrency with minimal memory footprint",
        title3: "Databases;",
        detail3: "MySQL, PostgreSQL, MongoDB, Firebase & cloud integrations. etc.",
    },
]

export default function ServicesSection() {
    return (
        <div className="bg-[#1A1A1A] min-h-auto w-full text-white rounded-[32px] xl:py-[150px] py-[100px] my-[40px] font-lora">
            <div className="sm:bg-[url('./services-desktop-bg.png')] bg-[url('./service-mobile-bg.png')] bg-cover bg-no-repeat bg-center xl:px-[200px] sm:px-[32px] px-[16px] h-auto xl:h-[800px] flex flex-col gap-[90px]">
                <div className="flex flex-col gap-2">
                    <div className="relative flex grow gap-[2px] mb-2">
                        <p className="lg:text-[48px] text-[32px] font-semibold">Our <span className="text-secondary">Services</span></p>
                        <div className="absolute -top-2 left-[195px] lg:left-[295px]">
                            <img className="w-[28px] h-[28px]" src="./Vector3.png" alt="" />
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col gap-0">
                        <p className="text-[20px]">Tailored solutions for startups, entrepreneurs,</p>
                        <p className="text-[20px]">and enterprises.</p>
                    </div>
                    <div className="flex sm:hidden">
                        <p className="text-[20px]">Tailored solutions for startups, entrepreneurs, and enterprises.</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-16 sm:gap-4 gap-8">
                    {ServiceItems.map((item, index) => (
                        <ServicesItem key={index} heading={item.heading} title1={item.title1} detail1={item.detail1} 
                            title2={item.title2} detail2={item.detail2} title3={item.title3} detail3={item.detail3}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}