import { LuArrowUpRight } from "react-icons/lu";
import AppButton from "./AppButton";

export default function AppFooter() {
    return (
        <div className="bg-primary mt-8 rounded-t-3xl xl:px-[200px] sm:px-[32px] px-[16px] py-4 flex flex-col gap-4 text-white font-lora">
            <div className="my-8 flex items-center justify-between">
                <div className="text-2xl font-semibold">Let's Connect</div>
                <div>
                    <AppButton className="bg-secondary">
                        <span>Hire Us</span>
                        <span><LuArrowUpRight className="w-6 h-6" /></span>
                    </AppButton>
                </div>
            </div>
            <div className="h-[1px] bg-gray-600 w-full"></div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-start">
                <div className="flex grow w-full max-w-[568px]">
                    <div className="flex flex-col gap-4">
                        <div><img className="h-[40px] w-[133px]" src="./logo.png" alt="dandevlabs" /></div>
                        <div className="leading-6 text-lg">We believe technology should be simple, powerful, and user-focused — whether it’s a sleek interface or a complex backend system. Our mission is to help individuals, startups, and corporations transform their ideas into fully functional digital products that perform, scale, and inspire.</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-secondary font-semibold text-lg mb-3">Navigation</div>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Services</div>
                    <div>Testimonials</div>
                    <div>Portfolios</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-secondary font-semibold text-lg mb-3">Contact</div>
                    <div>+234 704 919 6644</div>
                    <div>dandevlabs@gmail.com</div>
                    <div>danbogare@gmail.com</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-secondary font-semibold text-lg mb-3">Get the latest information</div>
                    <div className="flex">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}