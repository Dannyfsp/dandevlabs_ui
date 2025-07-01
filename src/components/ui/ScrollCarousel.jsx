import Marquee from "react-fast-marquee";
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiPhp, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function ScrollCarousel() {
    return (
        <Marquee
            gradient={false}
            speed={50} // you can adjust this
            pauseOnHover
            className="py-2 bg-gray-100"
        >
            <div class="flex gap-8">
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>Figma</div>
                    <div><FaFigma className="w-6 h-6" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>HTML5</div>
                    <div><FaHtml5 className="w-6 h-6 text-orange-500" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>CSS3</div>
                    <div><FaCss3Alt className="w-6 h-6 text-blue-500" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>Tailwind</div>
                    <div><RiTailwindCssFill className="w-6 h-6 text-blue-400" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>Bootstrap</div>
                    <div><FaBootstrap className="w-6 h-6 text-purple-600" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>Javascript</div>
                    <div><SiJavascript className="w-6 h-6 text-[#f0db4f]" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>React</div>
                    <div><FaReact className="w-6 h-6 text-blue-500" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>Typescript</div>
                    <div><SiTypescript className="w-6 h-6 text-blue-600" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>NodeJs</div>
                    <div><FaNodeJs className="w-6 h-6 text-green-600" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>GO</div>
                    <div><FaGolang className="w-8 h-8 text-blue-500" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center">
                    <div>React Native</div>
                    <div><TbBrandReactNative className="w-6 h-6" /></div>
                </div>
                <img className="w-[30px] h-[30px] inline-block" src="./star.png" alt="star" />
                <div className="flex gap-1 items-center mr-4">
                    <div>PHP</div>
                    <div><SiPhp className="w-8 h-8 text-purple-500" /></div>
                </div>
            </div>
        </Marquee>
    )
}