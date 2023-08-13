import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='flex flex-col justify-center items-center '>
      <div className='relative z-10 h-screen w-full flex flex-col justify-center items-center bg-white'>
        <div className='w-[90%] h-[80%] bg-blue-200 rounded-lg z-[9999] shadow-2xl'>
        <Hero />
        </div>
        <div className='w-[90%] h-auto absolute  bottom-10'>
          <Navbar />
        </div>
      </div>

      <div className='relative h-auto w-full'>

        <div className='inset-x-0 top-0  fixed'>
          <div className='max-w-[90%] mx-auto z-40 '>
            <Navbar />
          </div>
        </div>

        <div className='relative -z-10 flex flex-col mx-auto w-full max-w-4xl overflow-hidden p-16'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum neque ratione modi molestias eveniet libero incidunt, sed, dolorem odit laudantium cupiditate asperiores corrupti voluptatem deleniti fugiat? Odit neque provident nam quasi architecto rerum id tempora eveniet animi nemo in recusandae ex esse consequatur sint minima ratione vitae ipsa porro doloribus explicabo, voluptatum voluptatem voluptatibus! Voluptas rem modi maxime iure dolore tempore laudantium quasi ratione similique nostrum ab nemo voluptate ipsum consectetur quidem aliquam fugiat, excepturi enim iusto. Itaque sunt delectus iure doloribus voluptates ducimus dolore, at perferendis ratione expedita beatae commodi et numquam corrupti ad officia iste exercitationem vel veritatis neque. Quibusdam natus soluta, exercitationem iste aut quas nisi distinctio vitae deserunt. Quod expedita magni dignissimos deserunt incidunt et, praesentium nisi perspiciatis saepe fugit accusantium placeat sapiente explicabo dolores possimus, porro repellat voluptatibus. Optio voluptate nisi dolor necessitatibus rem provident aliquam debitis quod in quasi laudantium cum distinctio, deserunt odio, accusamus expedita modi? Sunt voluptas ipsa dolorem recusandae maxime vel iure voluptatum natus cumque cupiditate! Saepe tenetur architecto itaque culpa recusandae amet aut sed quidem minima iure excepturi praesentium eius beatae magnam dolorem fuga, facilis quae iusto officiis repellat! Ducimus perferendis culpa quis, beatae doloremque corrupti harum sint optio. Perspiciatis impedit recusandae ea porro sequi eligendi repudiandae fugit laudantium sunt excepturi tempora aliquid, repellat dolorum quaerat, pariatur odit quisquam laboriosam at necessitatibus incidunt quo voluptas provident dolore. Eaque at eos dolores, veritatis nemo labore rerum, earum ipsum dignissimos minus soluta blanditiis facilis hic eius quaerat! Natus velit sit unde laudantium, ipsum odit facere dolorem et ad excepturi? Quae doloribus, explicabo vero nesciunt expedita totam at velit iste fugit similique dolorum commodi rerum aperiam nisi culpa quas necessitatibus optio adipisci nemo molestiae consectetur perferendis libero ut temporibus! Expedita quis aliquid illo reprehenderit doloribus necessitatibus. Saepe quis asperiores nulla magnam reiciendis enim sint, quasi, nisi molestias provident voluptate repellendus tempora labore esse ab quas autem deleniti at odio culpa repellat sapiente, obcaecati ex pariatur? Veritatis, temporibus quam delectus dolor ullam natus eligendi. Dolorem iusto quidem officiis ipsa ducimus iure, ex maxime pariatur, qui facilis eveniet ratione labore in excepturi recusandae, exercitationem saepe. Deleniti inventore ratione odio voluptas necessitatibus iusto quibusdam expedita laborum ipsa! Aspernatur at ad officiis quaerat dignissimos, nisi tenetur praesentium, magni expedita rem quidem. Dicta eum maxime, cupiditate ab voluptatem temporibus reiciendis illo sit quas, porro qui at asperiores ipsum voluptatum quaerat obcaecati nam veritatis odio deserunt accusantium vitae!

        </div>


      </div>
    </section>
  )
}
