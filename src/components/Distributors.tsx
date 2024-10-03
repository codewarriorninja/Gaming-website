import { game } from "../assets/Icons/Icons"
import { Banner } from "../assets/Images/Image"

const Distributors:React.FC = () => {
  return (
    <section className="w-full pt-24">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between gap-10 flex-wrap">
         <div className="md:w-2/4">
          <img src={Banner} 
           alt="banner"
           className="object-contain"
          />   
         </div>
          <div className="flex flex-col gap-2 md:w-1/2 flex-1">
            <h1 className="text-white text-lg md:text-2xl lg:text-3xl max-w-md font-bold">We are the Best Game Distributors for all Gamers.</h1>
            <div className="flex items-start space-x-6 pt-5">
               <img src={game} 
                alt="game-icon"
                className="object-contain bg-[#30313F] px-2 py-2 rounded-full"
               />
               <div className="flex flex-col space-y-4">
                 <h1 className="text-white font-medium text-sm">Titles Goes Here</h1>
                 <p className="text-white font-medium leading-6 lg:max-w-sm">Find wholesale prices and suppliers of video games, consoles, and game accessories.</p>
               </div>
            </div>
            <div className="flex items-start space-x-6 pt-5">
               <img src={game} 
                alt="game-icon"
                className="object-contain bg-[#30313F] px-2 py-2 rounded-full"
               />
               <div className="flex flex-col space-y-4">
                 <h1 className="text-white font-medium text-sm">Titles Goes Here</h1>
                 <p className="text-white font-medium leading-6 lg:max-w-sm">Find wholesale prices and suppliers of video games, consoles, and game accessories.</p>
               </div>
            </div>
            <div className="flex items-start space-x-6 pt-5">
               <img src={game} 
                alt="game-icon"
                className="object-contain bg-[#30313F] px-2 py-2 rounded-full"
               />
               <div className="flex flex-col space-y-4">
                 <h1 className="text-white font-medium text-sm">Titles Goes Here</h1>
                 <p className="text-white font-medium leading-6 lg:max-w-sm">Find wholesale prices and suppliers of video games, consoles, and game accessories.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distributors