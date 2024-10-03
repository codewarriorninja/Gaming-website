import React from "react"
import { GameCardProps } from "../constant/Constant"
import { AiFillStar } from "react-icons/ai"

const GameCard:React.FC<GameCardProps> = ({title,company,platform,image,rating,order,price}) => {
  return (
    <div className="bg-gray-[#C9CAD8] backdrop-blur-md w-full">
      <img src={image}
      alt={title}
       className="object-contain w-full"
       />
       <div className="pt-4 px-4">
         <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
         <h4 className="text-white font-medium text-sm">{company}</h4>
         <p className="text-white font-medium text-sm">{platform}</p>
         <p className="pt-3 text-white font-medium text-sm">Price: {price}</p>
         <div className="pt-7 pb-5 flex justify-between items-center gap-1">
            <div className="flex items-center space-x-2">
            <AiFillStar className="text-[#FFB820]" /><span className="text-white font-normal">{rating}</span>
            </div>
           <h3 className="text-white font-normal text-sm">{order}</h3>
           <button className="bg-[#F68E5F] text-white text-sm p-1  rounded-2xl">Order Now</button>
         </div>
       </div>
    </div>
  )
}

export default GameCard