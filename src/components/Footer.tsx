import React from "react"
import { Logo } from "../assets/Images/Image"
import { FiChevronRight } from "react-icons/fi"
import { footerLinks } from "../constant/Constant"
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa6"

const Footer:React.FC = () => {
  return (
    <section className="w-full pt-24">
      <div className="max-w-6xl mx-auto p-4">
       <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
         <img src={Logo} 
          alt="logo"
          className="object-contain"
         />
         <div className="flex items-center justify-between bg-[#292945] rounded-2xl px-3 py-3 max-sm:w-full sm:w-96">
            <input type="text" className="rounded-lg bg-transparent focus:outline-none" placeholder="Email address"/>
             <span className="bg-[#596AFE] p-1 rounded-full"><FiChevronRight className="text-lg cursor-pointer flex items-center justify-center text-white font-semibold" /></span>
         </div>
       </div>
      </div>
      <hr className="border border-[#21232e]"></hr>
      <div className="max-w-6xl mx-auto p-4">
        <div className="w-full flex justify-between items-center gap-10 flex-wrap">
          <div className="flex flex-col flex-1">
            <h1 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-sm">Get updates on your favourite games</h1>
            <div className="flex items-center space-x-4 py-10">
             <h1 className="text-white font-medium text-base sm:text-lg text-nowrap">Ready to explore?</h1>
             <button className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-lg font-semibold text-nowrap">Get Started</button>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-8 lg:gap-10">
            {footerLinks.map((link,index)=>(
                <div key={index}>
                 <h4 className="text-2xl leading-normal font-medium mb-6 text-white">{link.title}</h4>
                 <ul className="w-full">
                    {link.links.map((section,index) => (
                        <li key={index} className="mt-3 text-base leading-normal text-white hover:text-slate-gray">{section.name}</li>
                    ))}
                 </ul>
                </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-8 mt-16 md:mt-10">
            <div className="flex items-center gap-8">
                <h3 className="text-white font-medium text-base">Terms & Conditions</h3>
                <h3 className="text-white font-medium text-base">Privacy Policy</h3>
            </div> 
            <div className="flex items-center space-x-4 max-sm:mx-auto">
              <FaFacebookF className="text-[#5F627E] text-xl" />
              <FaTwitter className="text-[#5F627E] text-xl" />
              <FaInstagram className="text-[#5F627E] text-xl" />
            </div>
        </div>
        <a className="text-center text-lg text-white font-semibold" href="https://www.figma.com/design/EbFCZP6TKWhzYcgumCpE72/Gaming-website-sample-(Community)?node-id=0-1&node-type=canvas&t=cGCxg18imh3Zwmya-0"><h1 className="mt-10">Inspired By Figma</h1></a>
        <a className="text-center text-lg text-white font-semibold" href="https://www.figma.com/design/EbFCZP6TKWhzYcgumCpE72/Gaming-website-sample-(Community)?node-id=0-1&node-type=canvas&t=cGCxg18imh3Zwmya-0"><h1 className="mt-3">Develop By Henok Aragaw</h1></a>
      </div>
    </section>
  )
}

export default Footer