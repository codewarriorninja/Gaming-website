import { Testimonials } from "../constant/Constant"
import TestimonialCards from "./TestimonialCards"

const Testimonial:React.FC = () => {
  return (
    <section className="w-full pt-24">
      <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-end space-x-1 md:space-x-2">
          <div className="h-1 w-12 bg-[#F68E5F] rounded-lg"></div>
          <h1 className="text-sm text-nowrap text-[#F68E5F] font-bold">TESTIMONIALS</h1>
          <div className="h-1 w-12 bg-[#F68E5F] rounded-lg"></div>
        </div>
          <h1 className="text-xl md:text-3xl text-white py-5 lg:text-4xl font-bold max-w-lg text-center leading-normal">What our Customers are saying</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {Testimonials.map((testimonial,index) =>(
            <TestimonialCards key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial