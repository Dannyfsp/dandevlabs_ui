import AboutListItem from "./AboutListItem";
import AppButton from "../ui/AppButton"
import { IoMdSettings } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { MdAnalytics } from "react-icons/md";
import { FaBolt } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const AboutItems = [
    {
        image: <IoMdSettings size={28} className="p-2 mt-1 rounded-full shadow shadow-gray-400" />,
        title: 'Custom Built or Templated',
        detail: 'Every solution is tailored to your brand, goals, and audience — no cookie-cutter shortcuts.'
    },
    {
        image: <GiBrain size={28} className="p-2 mt-1 rounded-full shadow shadow-gray-400" />,
        title: 'End-to-end Product Thinking',
        detail: 'We don’t just design and code — we think about your users, business goals, and long-term growth.'
    },
    {
        image: <MdAnalytics size={28} className="p-2 mt-1 rounded-full shadow shadow-gray-400" />,
        title: 'Agile & Transparent Workflow',
        detail: 'You’re always in the loop with regular updates, demos, and direct communication.'
    },
    {
        image: <FaBolt size={28} className="p-2 mt-1 rounded-full shadow shadow-gray-400" />,
        title: 'Fast Turnarounds Without Compromise',
        detail: 'We deliver high-quality work on tight deadlines without cutting corners.'
    },
    {
        image: <FaLaptopCode size={28} className="p-2 mt-1 rounded-full shadow shadow-gray-400" />,
        title: 'Ongoing Support & Iteration',
        detail: 'From launch to updates, we stay involved to ensure your product stays modern and functional.'
    },
]

export default function AboutSection() {
    return (
        <div className="font-lora xl:mx-[200px] sm:mx-[32px] mx-[16px] mt-[40px]">
            <div className="relative flex grow gap-[2px]">
                <p className="lg:text-[48px] text-[32px] font-semibold">Why <span className="text-secondary">Hire Us</span>?</p>
                <div className="absolute -top-3 left-[210px] lg:left-[315px]">
                    <img className="w-[28px] h-[28px]" src="./Vector1.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-[8px] mt-[16px]">
                <div className="flex flex-col gap-[16px] flex-1">
                    <div><img className="xl:w-[540px] sm:w-[410px] xl:h-[595px] sm:h-[465px]" src="./about.png" alt="About Image" /></div>
                    <div className="flex gap-[24px] xl:gap-[120px] sm:gap-[40px] items-center">
                        <div className="flex flex-col gap-[2px]">
                            <div className="font-semibold text-[24px]">450+</div>
                            <div className="font-normal sm:text-[16px] text-[12px]">Projects Completed</div>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <div className="font-semibold text-[24px]">450+</div>
                            <div className="font-normal sm:text-[16px] text-[12px]">Projects Completed</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 flex-1 xl:mt-[56px] mt-[16px] sm:mt-2">
                    {AboutItems.map((item, index) => (
                        <AboutListItem key={index} icon={item.image} title={item.title} detail={item.detail} />
                    ))}
                    <div className="sm:mt-auto mt-4 sm:mb-2 mb-6 ml-10">
                        <AppButton className="bg-primary text-white"><span>Book Us</span></AppButton>
                    </div>
                </div>
            </div>
        </div>
    )
}