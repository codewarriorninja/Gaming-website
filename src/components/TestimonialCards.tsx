import { Testimonial } from "../constant/Constant"
import { FaStar } from "react-icons/fa"

const TestimonialCards = ({text, name, image, profession}:Testimonial) => {
  return (
    <div className="flex items-center flex-col lg:flex-row gap-8 bg-[#292945] rounded-lg px-2 w-full overflow-y-clip max-sm:overflow-x-clip">
      <div className="flex flex-col items-start space-y-4 p-8">
        <div className="flex items-center">
          {[...Array(5)].map((_,i) => (
            <FaStar key={i} className="text-[#FFB820]" />
          ))}
        </div>
        <p className="text-white md:max-w-xs font-medium leading-7">{text}</p>
        <p className="text-white font-medium text-sm">{name}</p>
        <p className="text-[#9BA5FE] font-medium">{profession}</p>
      </div>
      <div>
        <img src={image} 
        alt={name}
        className="w-full object-contain scale-125"
        />
      </div>
    </div>
  )
}

export default TestimonialCards