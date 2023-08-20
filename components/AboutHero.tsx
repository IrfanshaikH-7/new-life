import Image from "next/image"

const AboutHero = () => {
  return (
    


    <div className=" flex flex-col md:flex-row lg:items-center items-center w-full h-1/2">

      <div className="flex  lg:flex-col flex-col relative  items-center justify-center w-96 rounded-lg ">
        <div className="w-[2px] h-96 hidden  lg:flex bg-gradient-to-b from-white to-black top-0" />
        <h3 className="text-3xl text-black font-bold p-2">About us... </h3>
        <div className="w-[2px] h-28 hidden lg:flex bg-gradient-to-t from-white to-black bottom-0 rounded-lg" />
      </div>

      <div className="flex items-center justify-center w-96  z-50 md:w-full md:h-full relative ">
        <Image 
          src='/assets/aboutHr.png'
          alt="aboutHr"
          height='0'
          width='0'
          className="object-contain h-[200px] sm:h-80 sm:w-96 md:h-full w-[300px] md:w-[920px]"
          unoptimized
        />
        </div>

    </div>
  )
}

export default AboutHero
