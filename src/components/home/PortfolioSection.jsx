import { LuArrowUpRight } from "react-icons/lu";

export default function PortfolioSection() {
    return (
      <div className="xl:px-[200px] sm:px-[32px] px-[16px] flex flex-col gap-6 my-12 font-lora">
        <div className="flex flex-col gap-2">
          <div className="relative flex grow gap-[2px] mb-2">
            <p className="lg:text-[48px] text-[32px] font-semibold">
              Our <span className="text-secondary">Portfolios</span>
            </p>
            <div className="absolute -top-2 left-[210px] lg:left-[315px]">
              <img className="w-[28px] h-[28px]" src="./Vector1.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[20px]">Let's have a look at our portfolios</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-8 sm:gap-1 lg:gap-0 text-white">
          <div className="relative flex flex-col gap-4 bg-[url('./bg-green.png')] xl:w-[416px] xl:h-[508px] sm:w-[280px] lg:w-[310px] sm:h-[308px] w-[320px] h-[408px] bg-contain bg-no-repeat">
            <div className="text-2xl ml-6 mt-6 font-semibold">
                UI/UX
            </div>
            <div className="absolute xl:bottom-0 xl:right-0 sm:bottom-4 sm:right-0 lg:bottom-0 lg:right-14 bottom-5 right-1 xl:w-[114px] xl:h-[114px] sm:w-[70px] sm:h-[70px] w-[85px] h-[85px] flex justify-center items-center bg-primary hover:bg-secondary cursor-pointer rounded-full">
              <LuArrowUpRight className="xl:h-20 xl:w-20 h-14 w-14 sm:w-10 sm:h-10" />
            </div>
          </div>
          <div className="relative flex flex-col gap-4 bg-[url('./bg-dark.png')] xl:w-[416px] xl:h-[508px] sm:w-[280px] lg:w-[310px] sm:h-[308px] w-[320px] h-[408px] bg-contain bg-no-repeat">
            <div className="text-2xl ml-6 mt-6 font-semibold">
                Frontend Dev
            </div>
            <div className="absolute xl:bottom-0 xl:right-0 sm:bottom-4 sm:right-0 lg:bottom-0 lg:right-14 bottom-5 right-1 xl:w-[114px] xl:h-[114px] sm:w-[70px] sm:h-[70px] w-[85px] h-[85px] flex justify-center items-center bg-primary hover:bg-secondary cursor-pointer rounded-full">
              <LuArrowUpRight className="xl:h-20 xl:w-20 h-14 w-14 sm:w-10 sm:h-10" />
            </div>
          </div>
          <div className="relative flex flex-col gap-4 bg-[url('./bg-gray.png')] xl:w-[416px] xl:h-[508px] sm:w-[280px] lg:w-[310px] sm:h-[308px] w-[320px] h-[408px] bg-contain bg-no-repeat">
            <div className="text-2xl ml-6 mt-6 font-semibold">
                Backend Dev
            </div>
            <div className="absolute xl:bottom-0 xl:right-0 sm:bottom-4 sm:right-0 lg:bottom-0 lg:right-14 bottom-5 right-1 xl:w-[114px] xl:h-[114px] sm:w-[70px] sm:h-[70px] w-[85px] h-[85px] flex justify-center items-center bg-primary hover:bg-secondary cursor-pointer rounded-full">
              <LuArrowUpRight className="xl:h-20 xl:w-20 h-14 w-14 sm:w-10 sm:h-10" />
            </div>
          </div>
        </div>
      </div>
    );
}