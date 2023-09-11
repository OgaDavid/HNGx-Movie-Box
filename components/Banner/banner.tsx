import Image from "next/image"
import BannerDetails from "@/components/Banner/details"

const Banner = () => {
    return (
        <div>
           <Image className="h-[600px] w-full -z-[1]" objectFit="cover" width={1440} height={600} alt="Banner image" src="/images/banner.png" />
           <BannerDetails />
        </div>
    )
}

export default Banner