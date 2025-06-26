import AppButton from "./AppButton";

export default function AppHeader() {
    return (
        <div className="bg-primary text-white flex justify-between items-center px-[8px] sm:px-[16px] py-[6px] grow mt-[24px] mx-[16px] sm:mx-[32px] xl:mx-[200px] rounded-[12px] border font-lora relative z-50">
            <div>
                <img className="h-[40px] w-[133px]" src="./logo.png" alt="dandevlabs" />
            </div>
            <div className="hidden md:flex center-flex gap-[2px]">
                <div className="lg:px-[32px] px-[12px] lg:py-[8px] py-[4px] cursor-pointer hover:bg-gray-700 hover:rounded-full">Home</div>
                <div className="lg:px-[32px] px-[12px] lg:py-[8px] py-[4px] cursor-pointer hover:bg-gray-700 hover:rounded-full">About</div>
                <div className="lg:px-[32px] px-[12px] lg:py-[8px] py-[4px] cursor-pointer hover:bg-gray-700 hover:rounded-full">Service</div>
                <div className="lg:px-[32px] px-[12px] lg:py-[8px] py-[4px] cursor-pointer hover:bg-gray-700 hover:rounded-full">Testimonials</div>
            </div>
            <div>
                <AppButton className="border border-white">
                    <span>Contact Us</span>
                </AppButton>
            </div>
        </div>
    )
}