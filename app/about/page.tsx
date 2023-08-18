import AboutHero from "@/components/AboutHero"
import Navbar from "@/components/Navbar"
import Image from "next/image"

const page = () => {
  return (
    <>
      <div className='inset-x-0 z-10 top-0 w-full sticky'>
        <div className='max-w-[90%] mx-auto'>
          <Navbar />
        </div>
      </div>
      <section className="mt-20 justify-between h-screen max-w-7xl mx-auto">
      <AboutHero />
      <p className="text-slate-500 text-base text-center mt-12 p-2">
      Hi, I'm Khaja, the founder and owner of <b>New Life Crane Service. </b> I have over 10 years of experience in the crane industry and I love helping people with their lifting challenges. I started Life Crane Service in 2010 with a vision to provide <b>safe</b>, <b>reliable</b>, and <b>affordable</b> crane services for all kinds of projects. we have grown to become one of the leading crane service providers in the region. We value safety, integrity, excellence, and customer satisfaction above all else.””
      </p>
      </section>
      
    </>
  )
}

export default page
