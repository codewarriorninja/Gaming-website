import { Card } from "../constant/Constant"


const ServiceCards:React.FC<Card> = ({ImgUrl, title, text}) => {
  return (
    <div className="pt-10 px-5 pb-5 border-t-2 border-t-[#DF667C] bg-[#20202E] rounded-lg shadow-lg w-full">
        <img src={ImgUrl} 
         alt="image-placeholder"
         width={60}
         height={60}
          className="object-contain"
        />
        <h1 className="py-3 text-white font-medium text-lg">{title}</h1>
        <p className="text-white font-medium">{text}</p>
    </div>
  )
}

export default ServiceCards