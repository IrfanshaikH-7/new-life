import Navbar from "@/components/Navbar"
import Slider from "@/components/Slider"
import Image from "next/image"

const page = () => {
  return (
    <>
      <section>
        <div className='inset-x-0 top-0 z-[99999]  fixed'>
          <div className='max-w-[90%] mx-auto '>
            <Navbar />
          </div>
        </div>
        <div className="  mt-52 w-full flex h-full justify-center items-center">
          <div className="hidden sm:flex h-full w-full items-center justify-center">
            <Slider />
          </div>
        </div>
        <div>
          <h1 className="max-w-7xl  mt-12 mx-auto text-center text-3xl ">
            Work we do...
          </h1>


          <div className="flex flex-col h-full ">
            <p className="text-slate-500 text-base text-center px-4">
              Operating cranes for various purposes, such as lifting materials, equipment, or personnel, loading or unloading trucks or ships, erecting structures, or demolishing buildings
            </p>
            <div className="flex flex-col md:flex-row 
            max-w-7xl mx-auto mt-2 p-4">
              <div className="flex-1 p-2 justify-center items-center ">

                <div className="self-center lg:mt-24 mt-6" >
                  <p className="text-slate-500 text-2xl font-bold text-center">Lifting materials:</p>
                  <p className="text-slate-500 text-base text-center items-center">
                    Cranes can lift materials such as concrete, steel, wood, or bricks from the ground to higher levels or from one place to another. For example, tower cranes are used to construct tall buildings or bridges by lifting materials to the desired height and position1.
                  </p>
                </div>
              </div>
              <div className="flex-1 p-2 self-center relative">

                <Image
                  src='/assets/hero.png'
                  alt="Crane-img"
                  height="0"
                  width='0'
                  className="h-56 lg:h-96 w-auto object-cover rounded-lg shadow-2xl "
                  unoptimized
                />
              </div>
            </div>
          </div>


          <div className="flex flex-col h-full ">
            <p className="text-slate-500 text-base text-center px-4">
              Operating cranes for various purposes, such as lifting materials, equipment, or personnel, loading or unloading trucks or ships, erecting structures, or demolishing buildings
            </p>
            <div className="flex flex-col md:flex-row 
            max-w-7xl mx-auto mt-2 p-4">
              <div className="flex-1 p-2 justify-center items-center ">

                <div className="self-center lg:mt-24 mt-6" >
                  <p className="text-slate-500 text-2xl font-bold text-center">Lifting materials:</p>
                  <p className="text-slate-500 text-base text-center items-center">
                    Cranes can lift materials such as concrete, steel, wood, or bricks from the ground to higher levels or from one place to another. For example, tower cranes are used to construct tall buildings or bridges by lifting materials to the desired height and position1.
                  </p>
                </div>
              </div>
              <div className="flex-1 p-2 self-center relative">

                <Image
                  src='/assets/hero.png'
                  alt="Crane-img"
                  height="0"
                  width='0'
                  className="h-56 lg:h-96 w-auto object-cover rounded-lg shadow-2xl "
                  unoptimized
                />
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default page
