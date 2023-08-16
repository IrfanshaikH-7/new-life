import MasonryComponent from "@/components/MasonryComponent"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div className="flex flex-col ">
      <div className='inset-x-0 top-0 w-full sticky'>
        <div className='max-w-[90%] mx-auto'>
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col h-auto w-full sm:max-w-7xl mx-auto ">
        <h1 className="self-center text-3xl font-semibold mt-4">
          Gallery...
        </h1>
        <div className="max-w-7xl h-[1px] mt-1 bg-gradient-to-r from-white via-slate-300 to-white" />
        <div className="mt-6">
          
          <MasonryComponent />
        </div>
        
      </div>
      
    </div>
  )
}

export default page
