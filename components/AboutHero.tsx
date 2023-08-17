import Image from "next/image"

const AboutHero = () => {
  return (
    


    <div className=" flex  w-full h-2/3">

      <div className="flex flex-col relative  items-center justify-center w-96 rounded-lg">
        <div className="w-[2px] h-full bg-gradient-to-b from-white to-black text  top-0" />
        <h3 className="text-3xl text-black font-bold p-2">About us... </h3>
        <div className="w-[2px] h-28 bg-gradient-to-t from-white to-black textb-0 rounded-lg" />
      </div>

      <div className=" h-full w-full flex-1 relative ">
        <Image
          src='/assets/aboutbg1.png'
          alt="aboutpg"
          fill
          className="object-cover shadow-md"
        />
      </div>

    </div>
  )
}

export default AboutHero
