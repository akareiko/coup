import { motion, useScroll, useTransform  } from "motion/react"

export default function Footer() {

    return(
        <div className="bottom-0 bg-black font-semibold text-white text-xs text-center break-words p-20">
            <div>
                <p>SINCE 2024 ©</p>
                <p>WEBSITE BY ISKENDIR</p>
                <p>ASTANA, 667</p>
            </div>
            <br />
            <div>
                <a href="https://instagram.com/iskendir" className="group block">
                    <p className="relative inline-block">
                        INSTAGRAM
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-1000 ease-in-out group-hover:w-full"></span>
                    </p>
                </a>
                <a href="https://tiktok.com/@legater" className="group block">
                    <p className="relative inline-block">
                        TIKTOK
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-1000 ease-in-out group-hover:w-full"></span>
                    </p>
                </a>
                <a href="https://x.com/isilmeriel" className="group block">
                    <p className="relative inline-block">
                        TWITTER
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-1000 ease-in-out group-hover:w-full"></span>
                    </p>
                </a>
            </div>
            <br />
            <div>
                <a className="group block">
                    <p className="relative inline-block">
                        FAQ
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-1000 ease-in-out group-hover:w-full"></span>
                    </p>
                </a>
                <a href="https://www.pusan.ac.kr/eng/" className="group block">
                    <p className="relative inline-block">
                        PUSAN NATIONAL UNIVERSITY
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-1000 ease-in-out group-hover:w-full"></span>
                    </p>
                </a>
            </div>
        </div>
    )
}
