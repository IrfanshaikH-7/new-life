import Navbar from "@/components/Navbar"
import Slider from "@/components/Slider"
import Image from "next/image"

const page = () => {
  const url = "/assets/crane.jpg"
  const imgs = [
    {
      label: "page",
      image: url,
    },
    {
      label: "page2",
      image: url,
    },
    {
      label: "page3",
      image: url,
    },
    {
      label: "page4",
      image: url,
    },
    {
      label: "page5",
      image: url,
    },
    {
      label: "page6",
      image: url,
    },
    {
      label: "page7",
      image: url,
    },
    {
      label: "page8",
      image: url,
    },
    {
      label: "page9",
      image: url,
    },
  ]
  return (
    <>
      <section className="h-full w-full py-24  px-4">
        {/* <div className="mt-24 w-full flex h-full justify-center items-center">
          <div className="hidden sm:flex h-full w-full items-center justify-center  max-w-lg lg:max-w-7xl">
            <Slider />
          </div>
        </div> */}
        <div className="border flex max-w-xl md:max-w-7xl w-full h-auto mx-auto rounded-lg p-2 gap-4 overflow-x-auto overflow-y-hidden ">
          {
            imgs.map((img: any, i) => (
              <div key={img.label} className='!rounded-3xl h-full w-full '>
                <div key={img.label} className="w-96 aspect-[16/12]  relative">
                  <Image
                    src={img.image}
                    alt='img'
                    fill
                    className='object-cover rounded-lg -z-10 !aspect-video'
                  />
                </div>
              </div>
            ))
          }
        </div>




        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-7xl  mt-12 mx-auto text-center text-3xl font-semibold ">
            Work we do...
          </h1>


          <div className="flex flex-col h-full max-w-7xl mx-auto p-2">
            <p className="text-slate-500 text-base text-center ">
              The works and service provided by crane services require skilled and competent personnel who have knowledge and experience in handling different types of cranes. They also need to follow the safety rules and regulations for working with cranes. Hence,
              <br />
              We Operate cranes for various purposes, such as lifting materials, equipment, or personnel, loading or unloading trucks or ships, erecting structures, or demolishing buildings while Maintaining cranes to ensure their optimal performance and safety.
            </p>
            <div className="flex flex-col md:flex-row -w-7xl mx-auto mt-2 p-4">
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


            <div className="flex flex-col md:flex-row max-w-7xl h-full mt-10  mx-auto  p-4">

              <div className="flex-1 p-2 self-center relative hidden md:block ">
                <Image
                  src='/assets/hero.png'
                  alt="Crane-img"
                  height="0"
                  width='0'
                  className="h-56 lg:h-96 w-auto object-cover rounded-lg shadow-2xl "
                  unoptimized
                />
              </div>

              <div className="flex-1 p-2 justify-center items-center ">
                <div className="self-center lg:mt-24 mt-6 p-2" >
                  <p className="text-slate-500 text-2xl font-bold text-center">Loading or unloading trucks or ships:</p>
                  <p className="text-slate-500 text-base text-center items-center">
                    ranes can load or unload trucks or ships by lifting containers, pallets, or crates from the vehicle or vessel to the dock or vice versa. For example, mobile cranes or gantry cranes are used to load or unload trucks or ships at ports or warehouses
                  </p>
                </div>
              </div>

              <div className="flex-1 p-2 self-center relative md:hidden">
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


          <div className="flex flex-col md:flex-row max-w-7xl h-full mt-10 mx-auto p-4">
            <div className="flex-1 p-2 justify-center items-center ">
              <div className="self-center p-2 lg:mt-24 mt-6" >
                <p className="text-slate-500 text-2xl font-bold text-center">Erecting structures:</p>
                <p className="text-slate-500 text-base text-center items-center">
                  Cranes can erect structures such as towers, masts, antennas, or wind turbines by lifting and assembling the components of the structure. For example, crawler cranes or truck-mounted cranes are used to erect structures at remote or difficult locations
                </p>
              </div>
            </div>

            <div className="flex-1 p-2 self-center relative ">

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

          <div className="flex flex-col md:flex-row max-w-7xl h-full mx-auto mt-10  p-4">
            <div className=" hidden md:block flex-1 p-2 self-center relative">
              <Image
                src='/assets/hero.png'
                alt="Crane-img"
                height="0"
                width='0'
                className="h-56 lg:h-96 w-auto object-cover rounded-lg shadow-2xl "
                unoptimized
              />
            </div>
            <div className="flex-1 p-2 justify-center items-center ">

              <div className="self-center p-2 lg:mt-24 mt-6" >
                <p className="text-slate-500 text-2xl font-bold text-center">Demolishing buildings:</p>
                <p className="text-slate-500 text-base text-center items-center">
                  Cranes can demolish buildings by lifting and dropping wrecking balls, hydraulic breakers, or explosives on the structure. For example, demolition cranes or telescopic cranes are used to demolish buildings at urban or industrial sites
                </p>
              </div>
            </div>
            <div className=" md:hidden flex-1 p-2 self-center relative">

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


          <div className="text-slate-500 h-full text-center mt-8 ">
            <p >
              We offer a wide range of crane services for any project size and scope. Whether you need a crane for a day, a week, or a month, we have the right equipment and personnel for the job. We can handle any lifting challenge, from heavy machinery and materials to delicate artworks and sculptures. We have experience working with clients from various sectors, such as residential, commercial, industrial, and public.
            </p>
          </div>


        </div>

      </section>
    </>
  )
}

export default page
