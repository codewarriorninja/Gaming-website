import React from "react"
import { Brands } from "../constant/Constant"

const Brand:React.FC = () => {
  return (
    <section className="my-10 w-full">
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex items-center justify-center flex-wrap gap-10 ">
          {Brands.map((brand,index) => (
            <div key={index}>
                <img src={brand.src} 
                 alt="brands"
                 width={100}
                 height={100}
                  className="object-contain"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brand