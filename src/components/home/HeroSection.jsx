import AppButton from "../ui/AppButton";

export default function HeroSection() {
    return (
        <div className="flex flex-col gap-[40px] sm:gap-0 sm:flex-row font-lora">
            <div className="my-[40px] flex-1 flex flex-col justify-center gap-[24px] lg:gap-[32px]">
                <div className="xl:ml-[80px] sm:ml-[32px] mx-[16px] flex flex-col xl:text-[56px] text-[32px] leading-[100%] font-semibold flex flex-col gap-[8px]">
                    <div>
                        Building Digital
                    </div>
                    <div>
                        Products, Brands,
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <div><img className="lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]" src="./and.png" alt="&" /></div><div className="text-secondary">Experience</div>
                    </div>
                </div>
                <div className="xl:ml-[80px] sm:ml-[32px] mx-[16px]">
                    <div className="max-w-[494px] w-full flex glow tracking-[-0.015em] text-[20px] font-normal">
                        From intuitive UI/UX to full-stack development and software consulting, we build experiences that convert and scale.
                    </div>
                </div>
                <div className="relative">
                    <div className="flex gap-[8px] items-center xl:ml-[80px] sm:ml-[32px] mx-[16px]">
                        <div className="flex grow max-w-[386px] w-auto h-[48px] border border-primary rounded-[8px] px-[4px]">
                            <input type="text" className="outline-none w-full" placeholder="Your Email" />
                        </div>
                        <div>
                            <AppButton className="bg-primary text-white">
                                <span>Book Us</span>
                            </AppButton>
                        </div>
                    </div>
                    <div className="xl:ml-[40px] hidden xl:flex"><img className="w-[40px] h-[40px] mt-0 mb-[2px]" src="./Vector2.png" alt="" /></div>
                </div>
            </div>
            <div className="flex flex-1">
                <img src="./hero2.png" alt="Hero" />
            </div>
        </div>
    )
}