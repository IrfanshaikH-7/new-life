import AboutHero from "@/components/AboutHero"
import Navbar from "@/components/Navbar"
import Image from "next/image"

const page = () => {
  return (
    <>
      <div className='inset-x-0 z-50 top-0 w-auto fixed'>
          <div className='w-full  md:w-[90%] mx-auto'>
            <Navbar />
          </div>
        </div>
      <div className="h-full w-[90%] mx-auto">
        <div className="h-[60%] w-[95%] mt-24  mx-auto shadow-2xl lg:items-start  rounded-lg  items-center justify-between pt-8'">
      <AboutHero />
      </div>
      </div>
     
      <section className="md:mt-20  mt-8 max-w-7xl mx-auto">
      
      <p className="text-slate-500 text-base text-center mt-2 md:mt-12 p-2">
      Hi, I'm Khaja, the founder and owner of <b>New Life Crane Service. </b> I have over 10 years of experience in the crane industry and I love helping people with their lifting challenges. I started Life Crane Service in 2010 with a vision to provide <b>safe</b>, <b>reliable</b>, and <b>affordable</b> crane services for all kinds of projects. we have grown to become one of the leading crane service providers in the region. We value safety, integrity, excellence, and customer satisfaction above all else.””
      </p>
      </section>
      
    </>
  )
}

export default page
