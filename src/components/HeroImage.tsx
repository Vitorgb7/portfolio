import logo1 from "../../public/avatar-portifolio.png"
import Image from "next/image"

const HeroImage = ()  => {
    return(
        <>
          <Image
          src={logo1}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
        />
        </>
    )
}
export default HeroImage