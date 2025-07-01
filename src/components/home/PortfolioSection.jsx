export default function PortfolioSection() {
    return (
      <div className="xl:px-[200px] sm:px-[32px] px-[16px] flex flex-col gap-6 my-12">
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
        <div></div>
      </div>
    );
}