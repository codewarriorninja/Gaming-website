import React from "react"
import { Cards } from "../constant/Constant"
import ServiceCards from "./ServiceCards"
import { Rocket } from "../assets/Images/Image"
const Service:React.FC = () => {
  return (
    <section className="w-full relative">
        <div className="absolute left-0 w-64 h-5/6 bg-glowLeft/30 blur-3xl rounded-full shadow-left-glow -z-10"></div>
        <div className="absolute right-0 w-64 h-5/6 bg-glowLeft/30 blur-3xl rounded-full shadow-left-glow -z-10"></div>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col justify-center items-center">
        <div className="flex items-end space-x-1 md:space-x-2">
          <div className="h-1 w-12 bg-[#F68E5F] rounded-lg"></div>
          <h1 className="text-sm text-nowrap text-[#F68E5F] font-bold">What we do</h1>
          <div className="h-1 w-12 bg-[#F68E5F] rounded-lg"></div>
        </div>
          <h1 className="text-xl md:text-3xl text-white py-5 lg:text-4xl font-bold max-w-xl text-center leading-normal">Meeting the needs of players across the world</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-12 place-items-center">
          {Cards.map((card,index) =>(
            <ServiceCards key={index} {...card} />
          ))}
            <div className="sm:col-span-2 lg:col-span-1 pt-10 px-5 pb-5 border-t-2 border-t-[#DF667C] bg-[#20202E] rounded-lg shadow-lg w-full">
                <img src={Rocket} 
                alt="image-placeholder"
                width={60}
                height={60}
                className="object-contain"
                />
                <h1 className="py-3 text-white font-medium text-lg">Future Releases</h1>
                <p className="text-white font-medium">Release dates and information on upcoming or recently released video games.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Service