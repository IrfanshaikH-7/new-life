import Image from "next/image"

const Hero = () => {
  return (
    <section className="h-full flex justify-center items-center relative"  >

        <Image
          src='/assets/hero.png'
          fill
          alt="hero"
          className="object-fill rounded-lg"
        />

      <div className="flex p-4 bg-black/10 z-10 justify-center items-center ">
      <div className='text-4xl text-red-600'>NEW LIFE CRANE.</div>

      </div>

    </section>
  )
}

export default Hero
