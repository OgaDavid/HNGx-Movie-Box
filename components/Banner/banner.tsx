import Image from "next/image"
import BannerDetails from "@/components/Banner/details"

const Banner = () => {
    return (
        <div>
           <Image className="max-h-[600px] -z-[1]" objectFit="cover" alt="Banner image" fill src="/images/banner.png" />
           <BannerDetails />
        </div>
    )
}

export default Banner