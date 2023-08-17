import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="h-full flex  items-center relative"  >

        <Image
          src='/assets/hero.png'
          fill
          alt="hero"
          className="object-fill rounded-lg"
        />
      
      <div className="flex flex-col items-center h-full w-5/3 ml-8 z-10">
        <div className="w-[2px] h-full bg-gradient-to-b from-white to-black text z-10 top-0" />
      <h1 className='text-5xl mt-2 mb-1 mr-24 p-1 bg-gradient-to-r from-blue-500 via-zinc-950 to-orange-500 bg-clip-text  font-extrabold  text-transparent shadow-sm'>NEW LIFE CRANE.</h1>
      <div className="text-2xl font-semibold px-2 mb-1 rounded-3xl border-b-black border-b-[1px] border-t-[1px] border-t-blue-400 cursor-pointer hover:bg-yellow-200 transition ease-in-out">
        <Link href='/contact'>
        Connect
        </Link>.</div>
      <div className="w-[2px] h-2/5 bg-gradient-to-t from-white to-black z-10 top-0" />
      </div>

    </section>
  )
}

export default Hero
