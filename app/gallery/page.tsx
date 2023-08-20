import MasonryComponent from "@/components/MasonryComponent"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div className="flex w-auto h-screen flex-col ">
      <div className='inset-x-0 md:flex top-0 fixed'>
        <div className='md:w-[90%] w-full mx-auto'>
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col h-full overflow-hidden w-full sm:max-w-7xl mx-auto mt-16 ">
        <h1 className="self-center text-3xl font-semibold ">
          Gallery...
        </h1>

        <div className="max-w-7xl h-[1px] mt-1 bg-gradient-to-r from-white via-slate-300 to-white relative" />
        <div className="mt-6 overflow-scroll  no-scrollbar">

          <MasonryComponent />
        </div>

      </div>
      
      

    </div>
  )
}

export default page
