import { CTA } from "../assets/Images/Image"

const Banner = () => {
  return (
    <section className="w-full pt-24">
      <div className="max-w-6xl mx-auto p-4">
        <div className="relative z-10  flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-start">
            <div className="flex items-end space-x-2 pb-5">
              <div className="h-1 w-12 bg-[#F68E5F] rounded-lg"></div>
              <h3 className="text-[#F68E5F] text-nowrap">EXPLORE A NEW DIMENSION</h3>
            </div>
            <h2 className="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:max-w-sm">Ready to unlock your potentials in a world of fun?</h2>
            <button className="mt-6 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-lg font-semibold">Join for Free</button>
          </div>
          <div className="w-full">
            <img src={CTA } 
             alt="cta"
             className="w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner