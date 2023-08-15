import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <section className='flex flex-col justify-center items-center '>
      <div className='relative z-10 h-screen w-full flex flex-col justify-center items-center bg-white'>
        <div className='w-[90%] h-[80%] bg-blue-200 rounded-lg z-[9999] shadow-2xl'>
          <Hero />
        </div>
        <div className='w-[90%] max-2xl max-md:hidden h-auto absolute  bottom-10'>
          <Navbar />
        </div>
      </div>

      <div className='relative h-auto w-full'>

        <div className='inset-x-0 top-0  fixed'>
          <div className='max-w-[90%] mx-auto z-40 '>
            <Navbar />
          </div>
        </div>

        <div className='relative -z-10 flex flex-col mx-auto w-full h-full max-w-7xl
        max overflow-hidden px-4 justify-center items-center text-center'>
          <h1 className='max-md:text-base text-3xl font-semibold mx-auto'>What we offer...</h1>
          <p className='text-slate-500 p-4 text-base'>
            At <span className='font-bold'>New Life Crane Services</span>, we offer a range of crane solutions for your lifting needs. Whether you need a crane for construction, industrial, or residential projects, we have the right equipment and expertise to handle any job.
          </p>
          <div>
            <p className='text-slate-500 font-bold text-center'>Some of the services we offer are:</p>
            <ul className='p-1 flex text-justify flex-col'>
              <li className='text-base text-slate-500 p-2'>
                <span className='font-bold' >
                  Mobile crane rental:
                </span> We have a fleet of mobile cranes that can be transported to any location and set up quickly. Our mobile cranes can lift up to 200 tons and reach up to 60 meters in height. They are ideal for moving heavy materials, equipment, or structures in tight spaces.</li>
              <li className='text-base text-slate-500 p-2'>
                <span className='font-bold' >
                  Tower crane rental:
                </span> We have a variety of tower cranes that can be installed on site and operated remotely. Our tower cranes can lift up to 500 tons and reach up to 80 meters in height. They are perfect for building high-rise structures, bridges, or dams.</li>
              <li className='text-base text-slate-500 p-2'>
                <span className='font-bold' >
                  Crane operator training:
                </span> We have a team of certified and experienced crane operators who can train you or your staff on how to operate our cranes safely and efficiently. We offer both theoretical and practical training courses that cover all aspects of crane operation, maintenance, and safety.</li>
              <li className='text-base text-slate-500 p-2'>
                <span className='font-bold' >
                  Crane maintenance and repair:
                </span> We have a dedicated service team that can provide regular maintenance and repair services for our cranes. We use the latest tools and technology to ensure that our cranes are always in optimal condition and ready for use.</li>
            </ul>
            <p className='text-base text-slate-500 p-2'>
              If you are looking for a reliable and professional crane service provider in Hyderabad, Telangana, and India, look no further than <span className='font-bold'>New Life Crane Services</span>. Contact us today to get a free quote and consultation for your crane needs. We are available 24/7 and ready to serve you with excellence. 🏗️
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
