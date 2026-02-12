import React from 'react';
import { ArrowRight } from 'lucide-react';

// --- IMPORT ASSETS ---
import keepCleanImg from '../../assets/Features/pic.png';    
import writeCodeImg from '../../assets/Features/Link.png';   
import joinMeetImg from '../../assets/Features/Link (1).png';

const Features = () => {
  return (
    <section className="w-full bg-[#2B2D32] text-white flex justify-center pb-24 md:pt-0">
      
      {/* MAIN CONTAINER: 1440px wide */}
      <div className="w-full max-w-[1440px] flex flex-col px-4 xl:px-0">
        

        {/* --- HEADER TEXT ROW --- */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full px-4 md:px-10 xl:px-[120px] mb-16 gap-8">
          
          {/* Title */}
          <div className="w-full md:w-[435px]">
            <h2 style={{
              fontFamily: '"Avenir Next"',
              fontWeight: 600,
              fontSize: '34px',
              lineHeight: '51.84px',
              letterSpacing: '1px',
              color: '#FFFFFF'
            }}>
              What you get on Setapp.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full md:w-[545px]">
            <p style={{
              fontFamily: '"Avenir Next"',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '32.04px',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
            </p>
          </div>
        </div>

        {/* --- FEATURE CARDS GRID --- */}
        <div className="flex flex-col gap-6 px-4 md:px-10 xl:px-[120px]">
          
          {/* 1. Large Top Card */}
          <div className="w-full overflow-hidden rounded-[24px] hover:scale-[1.005] transition-transform duration-500 cursor-pointer">
            <img src={keepCleanImg} alt="Keep your Mac clean" className="w-full h-auto object-cover" />
          </div>

          {/* 2. Bottom Row (Two Columns) */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Left: Write Code */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-[24px] hover:scale-[1.01] transition-transform duration-500 cursor-pointer">
              <img src={writeCodeImg} alt="Write code" className="w-full h-auto object-cover" />
            </div>
            
            {/* Right: Join Meetings */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-[24px] hover:scale-[1.01] transition-transform duration-500 cursor-pointer">
              <img src={joinMeetImg} alt="Join meetings" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* --- VIEW ALL SUPERPOWERS LINK --- */}
        <div className="flex justify-center mt-12 mb-24">
          <a href="#" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            {/* Arrow is now inside the link for better UX */}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <span style={{
               fontFamily: '"Avenir Next"',
               fontWeight: 500,       
               fontSize: '20px',
               lineHeight: '30px',
               letterSpacing: '1.6px',
               textAlign: 'center',
               color: '#FFFFFF'
            }}>
              View all superpowers
            </span>
          </a>
        </div>


        {/* --- YOUR SETAPP JOURNEY SECTION --- */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full px-4 md:px-10 xl:px-[120px] gap-8">
          
          {/* Title */}
          <div style={{ width: '365px', maxWidth: '100%' }}>
            <h2 style={{
              fontFamily: '"Avenir Next"',
              fontWeight: 600,       
              fontSize: '34px',
              lineHeight: '51.84px',
              letterSpacing: '1px',
              color: '#FFFFFF'
            }}>
              Your Setapp journey.
            </h2>
          </div>

          {/* Description */}
          <div style={{ width: '458px', maxWidth: '100%' }}>
            <p style={{
              fontFamily: '"Avenir Next"',
              fontWeight: 400,       
              fontSize: '18px',
              lineHeight: '32.04px',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Type in your task into Setapp search and get instant app recommendations.
            </p>
          </div>
        </div>

        {/* Bottom Separator Line */}
        <div className="w-full h-[1px] bg-[#E5E5E5] opacity-20 mt-20"></div>

      </div>
    </section>
  );
};

export default Features;