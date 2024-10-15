import { useEffect,useState } from "react"
import { heroContent, Images } from "../constant/Constant"

const Hero:React.FC = () => {
    const [currentImage, setCurrentImage] = useState<number>(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1 ) % Images.length);
        },1000)
         
        return () => clearInterval(interval);
    },[]);
  return (
    <section className='relative min-h-screen bg-cover bg-center duration-1000 ease-in-out overflow-hidden'>
      <div className="absolute inset-0 bg-black opacity-50">
        {Images.map((image,index) =>(
            <div key={index} className={`absolute inset-0 w-full min-h-screen transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 z-10' :'opacity-0'} `} style={{backgroundImage:`url(${image.src})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="flex items-end space-x-1 md:space-x-2">
          <div className="h-1 w-14 bg-white rounded-lg"></div>
          <h1 className="text-sm text-nowrap">GAMEWORLD DISTRIBUTORS</h1>
          <div className="h-1 w-14 bg-white rounded-lg"></div> 
        </div>
        {heroContent.map((hero,index) => (
            <div key={index} className="py-3">
              <h1 className="text-lg lg:text-5xl md:text-4xl font-medium sm:max-w-md sm:text-3xl md:max-w-xl lg:max-w-2xl leading-relaxed">{hero.title}</h1>
              <button className="mt-6 py-3 px-6 bg-purple-700 text-white font-bold rounded-2xl leading-relaxed">{hero.buttonText}</button>
            </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/95 to-transparent"></div>
    </section>
  )
}

export default Hero