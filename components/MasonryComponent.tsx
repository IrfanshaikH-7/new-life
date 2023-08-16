"use client"
import Image from "next/image"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"




const MasonryComponent = () => {
  const url = "/assets/hero2.jpeg"
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
      image: "/assets/gallery.jpg",
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
      image: "/assets/gallery2.jpg",
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
      image: "/assets/gallery3.jpg",
    },
    {
      label: "page10",
      image: url,
    },
    {
      label: "page11",
      image: url,
    },
    {
      label: "page12",
      image: url,
    },
    {
      label: "page13",
      image: "/assets/crane.jpg",
    },
    {
      label: "page14",
      image: "/assets/gallery1.jpg",
    },
  ]

  return (
    
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}
            >
                <Masonry>
                    {imgs.map((img) => (
                      <div className=" p-1">
                      <Image 
                      src={img.image}
                      alt="img"
                      width='0'
                      height='0'
                      className="block w-full p-[1px] h-full shadow-sm rounded-3xl"
                      unoptimized
                      />
                      </div>
                      
                    ))}
                </Masonry>
            </ResponsiveMasonry> 
  )
}

export default MasonryComponent
