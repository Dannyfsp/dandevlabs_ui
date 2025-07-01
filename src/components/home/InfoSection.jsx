import AppButton from "../ui/AppButton";

export default function InfoSection() {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 xl:mx-[200px] sm:mx-[32px] mx-[16px] mt-[110px] mb-[60px] font-lora">
            <div className="flex flex-col gap-4 xl:max-w-[600px] sm:max-w-[400px] lg:max-w-[500px] self-start">
                 <div className="relative flex grow gap-[2px] mb-2">
                    <p className="lg:text-[48px] text-[32px] font-semibold">About <span className="text-secondary">Dandevlabs</span></p>
                    <div className="absolute -top-2 left-[270px] lg:left-[410px]">
                        <img className="w-[28px] h-[28px]" src="./Vector1.png" alt="" />
                    </div>
                </div>
                <div className="leading-9 font-semibold text-[28px]">
                    We are a team of experienced tech enthusiasts, passionate about building purposeful digital experiences.
                </div>
                <div className="leading-6 text-[16px]">
                    Our mission is to help individuals, startups, and corporations transform their ideas into fully functional digital products that perform, scale, and inspire.
                </div>
                <div className="flex gap-[32px] items-center">
                    <AppButton className="bg-primary border text-white"><span>Book Us</span></AppButton>
                    <AppButton className="border"><span>Contact Us</span></AppButton>
                </div>
            </div>
            <div className="flex sm:items-end pb-4">
                <img className="sm:w-[561px] sm:h-[300px] lg:w-auto lg:h-auto" src="./aboutinfo.png" alt="About Info" />
            </div>
        </div>
    )
}