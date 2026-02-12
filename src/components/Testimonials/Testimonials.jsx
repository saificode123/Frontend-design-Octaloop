import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

import musicianImg from '../../assets/Testimonials/Section.png';
import twitterCard from '../../assets/Testimonials/div.testimonial-card__quote (2).png';
import instaCard from '../../assets/Testimonials/div.testimonial-card__quote (1).png';
import fbCard from '../../assets/Testimonials/div.testimonial-card__quote.png';
import mainLogo from '../../assets/Vector.png';

const Testimonials = () => {
  // --- STATE FOR TOP SLIDER ---
  const [topSlideIndex, setTopSlideIndex] = useState(0);
  // Creating an array of 4 images for the top slider (using the same img for demo)
  const topSlides = [musicianImg, musicianImg, musicianImg, musicianImg];

  const nextTopSlide = () => {
    setTopSlideIndex((prev) => (prev === topSlides.length - 1 ? 0 : prev + 1));
  };
  const prevTopSlide = () => {
    setTopSlideIndex((prev) => (prev === 0 ? topSlides.length - 1 : prev - 1));
  };

  // --- STATE FOR BOTTOM SLIDER (TESTIMONIALS) ---
  const [cardIndex, setCardIndex] = useState(0);
  
  // Data for the bottom cards
  const testimonialData = [
    {
      id: 1,
      image: twitterCard,
      name: "Arash Pourhabibi",
      handle: "@ArashPourhabibi",
      icon: <Twitter size={16} className="text-[#1da1f2] fill-current" />
    },
    {
      id: 2,
      image: instaCard,
      name: "Mauricio Sanchez",
      handle: "@m741s",
      icon: <Instagram size={16} className="text-[#e1306c]" />
    },
    {
      id: 3,
      image: fbCard,
      name: "Meredith Sweet",
      handle: "@meredith.sweet.silberstein",
      icon: <Facebook size={16} className="text-[#3b5998] fill-current" />
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };
    // Set initial
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCardSlide = () => {
    // Stop sliding when we reach the end
    const maxIndex = testimonialData.length - visibleCards;
    setCardIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevCardSlide = () => {
    const maxIndex = testimonialData.length - visibleCards;
    setCardIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full">

      {/* =========================================
          PART 1: JASON STACZEK SLIDER
          Background: Split 50% Dark (#2B2D32) / 50% White
         ========================================= */}
      <div
        className="w-full flex justify-center pb-12"
        style={{ background: 'linear-gradient(180deg, #2B2D32 50%, #FFFFFF 50%)' }}
      >
        <div className="w-full max-w-[1440px] px-4 xl:px-[120px]">

          <div className="relative w-full rounded-[24px] overflow-hidden group shadow-2xl">
            {/* The Sliding Track */}
            <div 
                className="w-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${topSlideIndex * 100}%)` }}
            >
                {topSlides.map((imgSrc, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        <img
                            src={imgSrc}
                            alt={`Testimonial Slide ${idx}`}
                            className="w-full h-auto object-cover block"
                        />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <div className="absolute top-8 right-8 flex gap-4 z-20">
              <button onClick={prevTopSlide} className="text-white/60 hover:text-white transition-colors p-2">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTopSlide} className="text-white hover:text-white/80 transition-colors p-2">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots (On the White half) */}
          <div className="flex justify-center gap-3 mt-8 mb-4">
            {topSlides.map((_, index) => (
              <div
                key={index}
                onClick={() => setTopSlideIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  topSlideIndex === index ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></div>
            ))}
          </div>

        </div>
      </div>


      {/* =========================================
          PART 2: SETAPP IN YOUR WORDS (CARDS SLIDER)
          Background: White
         ========================================= */}
      <div className="w-full bg-white text-[#26262B] py-0 flex justify-center">
        <div className="w-full max-w-[1440px] px-4 xl:px-[120px]">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-8">
            <h2 className="font-['Avenir_Next'] font-bold text-[40px] leading-[1.1] text-[#26262B]">
              Setapp in your words.
            </h2>

            {/* Description */}
            <div style={{ width: '265px' }}>
              <p style={{
                fontFamily: '"Avenir Next"',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '32.04px',
                letterSpacing: '0%',
                color: '#26262B',
                opacity: 0.7
              }}>
                What you say about how Setapp powers you up.
              </p>
            </div>

            <div className="flex gap-3">
              <SocialIcon bg="#3b5998" icon={<Facebook size={18} fill="white" stroke="none" />} />
              <SocialIcon bg="#1da1f2" icon={<Twitter size={18} fill="white" stroke="none" />} />
              <SocialIcon bg="#e1306c" icon={<Instagram size={18} color="white" />} />
              <SocialIcon bg="#ff0000" icon={<Youtube size={18} fill="white" stroke="none" />} />
            </div>
          </div>

          {/* Navigation Arrows for Cards */}
          <div className="flex justify-end gap-4 mb-6">
            <button 
                onClick={prevCardSlide}
                className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextCardSlide}
                className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Cards Carousel Container */}
          <div className="w-full overflow-hidden">
             <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                // The magic calculation: shift by percentage of a single card's width (100% / visibleCards) * current index
                style={{ transform: `translateX(-${cardIndex * (100 / visibleCards)}%)` }}
             >
                {testimonialData.map((item) => (
                   <div 
                     key={item.id} 
                     // Force width: 100% on mobile, 33.333% minus gap adjustments on desktop
                     // Note: We use min-w to prevent shrinking in flex
                     className="min-w-[100%] md:min-w-[calc(33.333%-16px)]"
                   >
                       <TestimonialCard
                         image={item.image}
                         name={item.name}
                         handle={item.handle}
                         icon={item.icon}
                       />
                   </div>
                ))}
             </div>
          </div>

          {/* Dots for Card Sections (Optional visual aid) */}
          <div className="flex justify-center gap-3 mt-12 mb-12">
            {/* Just showing static dots for design, or map them if needed */}
             <div className="w-2 h-2 rounded-full bg-black"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-[1px] bg-[#E5E5E5] opacity-50 mb-20"></div>

        </div>
      </div>


      {/* =========================================
          PART 3: SUPERPOWERS CTA
          Background: Split 50% White / 50% Dark (#2B2D32)
         ========================================= */}
      <div
        className="w-full flex justify-center pb-24"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 50%, #2B2D32 50%)' }}
      >
        <div className="w-full max-w-[1440px] px-4 xl:px-[120px]">
          
          <div className="w-full bg-[#F5F5F5] rounded-[24px] px-8 py-16 md:p-20 flex flex-col items-start gap-8">
            <div className="mb-4">
              <img src={mainLogo} alt="Setapp Logo" className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] object-contain" />
            </div>

            <h2 style={{
              fontFamily: '"Avenir Next"',
              fontWeight: 600,
              fontSize: '46px',
              lineHeight: '59.8px',
              letterSpacing: '1.3px',
              color: '#26262B'
            }}>
              Superpowers starting $9.99/month.<br />
              Free for 7 days.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-[#26262B] text-white px-8 py-4 rounded-[6px] text-[15px] font-bold hover:bg-black transition-colors">
                Get started now
              </button>
              <button className="bg-transparent border border-[#26262B]/30 text-[#26262B] px-8 py-4 rounded-[6px] text-[15px] font-medium hover:border-[#26262B] transition-colors">
                More about Setapp
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

// --- HELPER COMPONENTS ---

const SocialIcon = ({ bg, icon }) => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
    style={{ backgroundColor: bg }}
  >
    {icon}
  </div>
);

const TestimonialCard = ({ image, name, handle, icon }) => (
  <div className="flex flex-col bg-[#F5F5F7] rounded-[12px] overflow-hidden h-full">
    <div className="w-full">
      <img src={image} alt="Quote" className="w-full h-auto object-cover" />
    </div>
    <div className="p-5 flex items-center justify-between mt-auto">
      <div>
        <p className="font-bold text-[13px] text-[#26262B]">{name}</p>
        <p className="text-[11px] text-gray-400 mt-0.5">{handle}</p>
      </div>
      <div>{icon}</div>
    </div>
  </div>
);

export default Testimonials;