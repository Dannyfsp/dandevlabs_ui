import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function ServicesItem({ heading, title1, detail1, title2, detail2, title3, detail3 }) {
    return (
        <div className="flex flex-col flex-1 h-full">
            {/* Card Container */}
            <div className="flex flex-col rounded-3xl w-full h-full">
                {/* Top Section */}
                <div className="flex flex-col gap-8 text-white bg-[rgba(255,255,255,0.085)] backdrop-blur-md pt-8 pb-12 rounded-t-3xl">
                    <div className="xl:text-2xl text-lg font-semibold pl-4">{heading}</div>
                    <div className="h-[1px] w-full bg-white"></div>
                </div>

                {/* Bottom Section */}
                <div className="flex-1 flex flex-col justify-between rounded-t-xl rounded-b-3xl bg-white text-black py-12 px-4 gap-4">
                    {[{ title: title1, detail: detail1 }, { title: title2, detail: detail2 }, { title: title3, detail: detail3 }].map(
                        ({ title, detail }, idx) => (
                            <div className="flex gap-2" key={idx}>
                                <div className="pt-1">
                                    <IoMdCheckmarkCircleOutline className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="font-medium xl:text-lg text-base">{title}</div>
                                    <div>{detail}</div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
