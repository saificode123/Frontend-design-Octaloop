import React from 'react';
import HeroBadge from './HeroBadge';

// --- IMPORT YOUR ASSETS ---
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
    // Main Section: Dark Background #2B2D32
    // overflow-hidden prevents horizontal scrollbars on smaller screens
    <section className="relative w-full min-h-screen bg-[#2B2D32] text-white flex justify-center overflow-hidden pt-[80px] md:pt-[120px] pb-24">
      
      {/* CONTAINER: 
          - On Large Screens (xl): 1440px fixed width (Your exact Figma layout).
          - On Smaller Screens: 100% width with flexbox centering.
      */}
      <div className="relative w-full max-w-[1440px] h-full flex flex-col items-center xl:block">

        {/* =======================
            LEFT SIDE BADGES
            (Visible on XL screens, hidden or scaled on mobile to prevent clutter)
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
            CENTER CONTENT (Responsive)
           ======================= */}
        <div className="relative z-20 flex flex-col items-center w-full px-4 xl:pt-[60px] xl:px-0">
            
            {/* Logo Box */}
            <div className="mb-8 xl:mb-10 w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] bg-black rounded-[30px] xl:rounded-[40px] flex items-center justify-center shadow-2xl border border-[#333]">
                <img src={mainLogo} alt="Setapp Logo" className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] object-contain" />
            </div>

            {/* Headline Text */}
            <div className="w-full max-w-[567px] text-center">
                <h1 className="font-bold text-[40px] leading-[1.1] md:text-[64px] md:leading-[67.84px] tracking-wide text-white font-['Avenir_Next']">
                    Dozens of apps.<br />
                    One subscription.<br />
                    $9.99
                </h1>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                {/* Try Free Button - Text Color #26262B */}
                <button 
                    className="bg-white text-[#26262B] font-bold text-[17px] hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center whitespace-nowrap"
                    style={{ width: '210px', height: '52px', borderRadius: '6px' }}
                >
                    Try free for 7 days
                </button>
                
                <div className="flex gap-4">
                    {/* Apple Button */}
                    <button 
                        className="bg-white hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                        style={{ width: '62px', height: '52px', borderRadius: '6px' }}
                    >
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.84-.71 1.61.08 2.65.62 3.39 1.76-2.94 1.76-2.45 6.53.53 7.84-.53 1.41-1.29 2.45-2.84 3.34zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.5-3.74 4.25z"/>
                        </svg>
                    </button>

                    {/* Google Button */}
                    <button 
                        className="bg-white hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                        style={{ width: '62px', height: '52px', borderRadius: '6px' }}
                    >
                        <svg className="w-7 h-7" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
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
      </div>

      {/* Responsive Separator Line */}
      <div className="absolute bottom-0 w-[90%] xl:w-[1440px] h-[1px] bg-gray-600 opacity-40"></div>
    </section>
  );
};

export default Hero;