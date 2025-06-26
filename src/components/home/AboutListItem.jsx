export default function AboutListItem({icon, title, detail}) {
    return (
        <div className="flex xl:gap-[24px] gap-[16px]">
            <div className="">
                {icon}
            </div>
            <div className="flex flex-col gap-1 sm:gap-0 lg:gap-2 grow max-w-[500px]">
                <div className="sm:text-[20px] text-[18px] font-semibold">{title}</div>
                <div className="sm:text-[16px] text-[14px] leading-6 xl:leading-7 sm:leading-5 lg:leading-6">{detail}</div>
            </div>
        </div>
    )
}