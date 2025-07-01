import { FaStar } from "react-icons/fa";

export default function TestimonialItem({img, name, position, comment}) {
    return (
        <div className="bg-gray-100 flex flex-col gap-6 xl:min-w-[660px] xl:max-w-[660px] sm:min-w-[500px] sm:max-w-[500px] min-w-[300px] max-w-[300px] p-4">
            <div className="flex justify-between items-center w-full relative">
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <div>
                            <img className="rounded-full w-[55px] h-[55px]" src={img} alt={name} />
                        </div>
                        <div className="flex flex-col gap-[1px]">
                            <div className="font-semibold">{name}</div>
                            <div className="text-sm sm:text-base">{position}</div>
                        </div>
                    </div>
                    <div className="flex gap-[2px]">
                        <FaStar className="w-4 h-4 inline-block text-[#FD853A]" />
                        <FaStar className="w-4 h-4 inline-block text-[#FD853A]" />
                        <FaStar className="w-4 h-4 inline-block text-[#FD853A]" />
                        <FaStar className="w-4 h-4 inline-block text-[#FD853A]" />
                        <FaStar className="w-4 h-4 inline-block text-[#FD853A]" />
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <img className="w-[90px] h-[90px]" src="./quote-down.png" alt="" />
                </div>
                <div className="absolute top-0 right-0 sm:hidden">
                    <img className="w-[30px] h-[30px]" src="./quote-down.png" alt="" />
                </div>
            </div>
            <div className="leading-6 text-sm">
                {comment}
            </div>
        </div>
    )
}