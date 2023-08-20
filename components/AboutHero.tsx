import Image from "next/image"

const AboutHero = () => {
  return (
    


    <div className=" flex flex-col justify-center items-center lg:flex-row w-full h-2/3">

      <div className="flex  flex-col relative  items-center justify-center w-96 rounded-lg">
        <div className="w-[2px] h-full hidden lg:flex bg-gradient-to-b from-white to-black text  top-0" />
        <h3 className="text-3xl text-black font-bold p-2">About us... </h3>
        <div className="w-[2px] h-28 hidden lg:flex bg-gradient-to-t from-white to-black textb-0 rounded-lg" />
      </div>

      <div className=" h-[370px] w-[500px]  md:w-full md:h-full md:flex-1 relative ">
        <Image
          src='/assets/aboutbg1.png'
          alt="aboutpg"
          fill
          className="object-contain p-4 shadow-md"
        />
      </div>

    </div>
  )
}

export default AboutHero
