
import { games, platforms } from "../constant/Constant"
import { useState } from "react"
import GameCard from "./GameCard";

const Games:React.FC = () => {
    const [selectedPlatfrom, setSelectedPlatform] = useState<string>('All');

    const filteredGame = selectedPlatfrom === 'All'
      ? games : games.filter(game => game.platform === selectedPlatfrom);
  return (
    <section className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat mt-24" style={{backgroundImage:'url(/src/assets/images/FourthBg.png)'}}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto p-4">
         <h1 className="text-center font-bold text-white text-lg md:text-3xl lg:text-4xl">Newly Released Games</h1>
         <div className="flex justify-center space-x-4 my-8">
           {platforms.map((platformd,index) => (
            <button key={index} className={`px-4 py-2 rounded ${selectedPlatfrom === platformd.name ? 'bg-orange-500' :'bg-gray-600'} text-white`} onClick={() => setSelectedPlatform(platformd.name)}>{platformd.name}</button>
           ))}
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {filteredGame.map((game,index) =>(
            <GameCard key={index} 
             {...game}
            />
           ))}
         </div>
      </div>
    </section>
  )
}

export default Games