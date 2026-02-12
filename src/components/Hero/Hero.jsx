import React from 'react';
import HeroBadge from './HeroBadge';

import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import mainLogo from '../../assets/Vector.png'; 
import workPics from '../../assets/Hero/pics.svg.png';
import macPaw from '../../assets/Hero/macpaw.svg.png';
import pdfVpn from '../../assets/Hero/pdf.svg.png';
import boostTeam from '../../assets/Hero/teamwork.svg.png';
import staySecure from '../../assets/Hero/secure.svg.png';
import fixWifi from '../../assets/Hero/wifi.svg.png';
import planDay from '../../assets/Hero/plan.svg.png';
import convertHeic from '../../assets/Hero/converter.svg.png';
import manageMac from '../../assets/Hero/manage.svg.png';
import codeEasier from '../../assets/Hero/code.svg.png';

const Hero = () => {
  return (

    <section className="relative w-full min-h-screen bg-[#2B2D32] text-white flex justify-center overflow-hidden pt-[250px] md:pt-[120px] pb-0 md:pb-0 mb:pt-10 ">
      
      <div className="relative w-full max-w-[1440px] h-full flex flex-col items-center xl:block">

        {/* =======================
            LEFT SIDE BADGES
           ======================= */}
        
        {/* 1. Work With Pics */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '46px', left: '140px', width: '173px', height: '173px', zIndex: 10 }}>
          <img src={workPics} alt="Work with Pics" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 2. MacPaw */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '177px', left: '130px', width: '58px', height: '58px', zIndex: 11 }}>
           <img src={macPaw} alt="MacPaw" className="w-full h-full object-contain drop-shadow-xl" />
        </div>

        {/* 3. PDF VPN */}
        <div className="absolute hidden xl:block animate-spin-slow" 
             style={{ top: '169px', left: '290px', width: '142px', height: '142px', zIndex: 10 }}>
           <img src={pdfVpn} alt="PDF VPN" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 4. Boost Teamwork */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '338px', left: '120px', width: '227px', height: '114px', zIndex: 10 }}>
           <img src={boostTeam} alt="Boost Teamwork" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 5. Stay Secure */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '418px', left: '150px', width: '175px', height: '176px', zIndex: 10 }}>
           <img src={staySecure} alt="Stay Secure" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>


        {/* =======================
            RIGHT SIDE BADGES
           ======================= */}

        {/* 6. Fix Wifi */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '64px', left: '1100px', width: '202px', height: '126px', zIndex: 10 }}>
           <img src={fixWifi} alt="Fix Wifi" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 7. Plan Your Day */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '124px', left: '1020px', width: '169px', height: '169px', zIndex: 10 }}>
           <img src={planDay} alt="Plan Your Day" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 8. Convert HEIC */}
        <div className="absolute hidden xl:block animate-spin-slow" 
             style={{ top: '235px', left: '1180px', width: '155px', height: '153px', zIndex: 10 }}>
           <img src={convertHeic} alt="Convert HEIC" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 9. Manage Your Mac */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '350px', left: '1060px', width: '230px', height: '128px', zIndex: 10 }}>
           <img src={manageMac} alt="Manage Your Mac" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        {/* 10. Code Easier */}
        <div className="absolute hidden xl:block animate-float-horizontal" 
             style={{ top: '460px', left: '1140px', width: '152px', height: '153px', zIndex: 10 }}>
           <img src={codeEasier} alt="Code Easier" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>


        {/* =======================
            CENTER CONTENT
           ======================= */}
        <div className="relative z-20 flex flex-col items-center w-full px-4 xl:pt-[60px] xl:px-0">
            
            {/* Logo Box */}
            <div className="mb-8 xl:mb-10 w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] bg-black rounded-[30px] xl:rounded-[40px] flex items-center justify-center shadow-2xl border border-[#333]">
                <img src={mainLogo} alt="Setapp Logo" className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] object-contain" />
            </div>

            {/* Headline Text */}
            <div className="w-full max-w-[567px] text-center">
                <h1 className="font-bold text-[40px] leading-[1.1] md:text-[64px] md:leading-[67.84px] tracking-wide text-white font-['Avenir Next']">
                    Dozens of apps.<br />
                    One subscription.<br />
                    $9.99
                </h1>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                {/* Try Free Button */}
                <button 
                    className="bg-white text-[#26262B] font-bold text-[17px] hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center whitespace-nowrap"
                    style={{ width: '210px', height: '52px', borderRadius: '6px' }}
                >
                    Try free for 7 days
                </button>
                
                <div className="flex gap-4">
                    {/* Apple Button (Using React Icons) */}
                    <button 
                        className="bg-white hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                        style={{ width: '62px', height: '52px', borderRadius: '6px' }}
                    >
                        <FaApple size={30} className="text-black" />
                    </button>

                    {/* Google Button (Using React Icons) */}
                    <button 
                        className="bg-white hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                        style={{ width: '62px', height: '52px', borderRadius: '6px' }}
                    >
                        <FcGoogle size={28} />
                    </button>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-12 xl:mt-16 text-center max-w-[317px]">
                <p className="font-['Avenir_Next'] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[32.04px] text-white">
                    Power up your workflow with Setapp, a smart way to get apps.
                </p>
            </div>
        </div>
        <div className="w-full h-[1px] bg-[#E5E5E5] opacity-20 mt-20"></div>
      </div>

    </section>
  );
};

export default Hero;