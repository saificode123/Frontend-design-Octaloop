import React from 'react';
import { ChevronRight, ChevronDown, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import mainLogo from '../../assets/SVG.png'; 

const Footer = () => {
  return (
    <footer className="w-full bg-[#2B2D32] text-white pt-20 pb-10 border-t border-gray-700/30">
      
      <div className="w-full max-w-[1440px] px-4 xl:px-[120px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-32 mb-24">
          
          <div className="w-full lg:max-w-[380px] flex flex-col items-start">
            
            <div className="flex items-center gap-3 mb-6">
               <img src={mainLogo} alt="Setapp" className="w-8 h-8 object-contain" />
               <span className="font-['Avenir_Next'] font-bold text-[20px] tracking-widest text-white uppercase">SETAPP</span>
            </div>

            <p className="font-['Avenir_Next'] text-[15px] text-white mb-4 font-medium">
              Updates from our team, written with love 🧡
            </p>

            <div className="relative w-full h-[50px] mb-8">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-full bg-[#48484C] rounded-[6px] pl-4 pr-14 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all text-[15px]"
              />
              <button className="absolute right-1 top-1 bottom-1 w-[42px] bg-white rounded-[4px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                 <ChevronRight className="text-black w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer mt-auto">
               <div className="bg-[#555] text-[10px] font-bold px-2 py-[3px] rounded-l-[2px] text-white border border-gray-500 border-r-0">DMCA</div>
               <div className="bg-[#555] text-[10px] font-bold px-2 py-[3px] rounded-r-[2px] text-white border border-gray-500">PROTECTED</div>
            </div>

          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col gap-4">
               <FooterLink text="Home" />
               <FooterLink text="How It Works" />
               <FooterLink text="All Apps" />
               <FooterLink text="Pricing" />
               <FooterLink text="Setapp for Teams" />
               <FooterLink text="Blog" />
               <FooterLink text="Podcast" />
               <FooterLink text="Download" />
            </div>

            <div className="flex flex-col gap-4">
               <FooterLink text="About" />
               <FooterLink text="Support" />
               <FooterLink text="Education Discount" />
               <FooterLink text="Family Plan" />
               <FooterLink text="For Developers" />
               <FooterLink text="Gift Cards" />
               <FooterLink text="Redeem Card or Code" />
               <FooterLink text="Setapp Reviews" />
               <FooterLink text="Affiliate Program" />
               <FooterLink text="Mac Developer Survey 2023" />
            </div>

            <div className="flex flex-col gap-4">
               <FooterLink text="Getting started with Setapp" />
               <FooterLink text="Remote access to other Mac" />
               <FooterLink text="Fix macOS Ventura problems" />
               <FooterLink text="Best productivity apps" />
               <FooterLink text="Best YouTube downloaders" />
               <FooterLink text="Uninstall apps" />
            </div>

          </div>

        </div>

        <div className="flex justify-end mb-6">
           <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group">
              {/* US Flag Icon */}
              <div className="flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="fi fi-us" style={{ fontSize: '16px', borderRadius: '2px' }}></span>
              </div>
              <span className="text-[14px] font-medium text-white">English</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white" />
           </div>
        </div>

        <div className="w-full h-[1px] bg-white opacity-30 mb-8"></div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6">
          
          <div className="flex flex-col gap-4 text-center md:text-left">
             <p className="text-[11px] text-white opacity-90 leading-relaxed max-w-[600px]">
               © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
             </p>
             <div className="flex gap-6 justify-center md:justify-start">
               <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">Terms of Use</a>
               <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
             </div>
          </div>

          <div className="flex gap-4">
             <SocialIcon icon={<Facebook size={18} fill="currentColor" strokeWidth={0} />} />
             <SocialIcon icon={<Twitter size={18} fill="currentColor" strokeWidth={0} />} />
             <SocialIcon icon={<Instagram size={18} />} />
             <SocialIcon icon={<Youtube size={18} fill="currentColor" strokeWidth={0} />} />
          </div>

        </div>

      </div>
    </footer>
  );
};

const FooterLink = ({ text }) => (
  <a href="#" className="text-[14px] text-white hover:text-gray-300 transition-colors font-normal">
    {text}
  </a>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-8 h-8 bg-[#888888] rounded-full flex items-center justify-center text-[#2B2D32] hover:bg-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;