import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { Carousel } from 'antd';

import musicianImg from '../../assets/Testimonials/Section.png';
import twitterCard from '../../assets/Testimonials/div.testimonial-card__quote (2).png';
import instaCard from '../../assets/Testimonials/div.testimonial-card__quote (1).png';
import fbCard from '../../assets/Testimonials/div.testimonial-card__quote.png';
import mainLogo from '../../assets/Vector.png';

const Testimonials = () => {

  const topCarouselRef = useRef(null);
  const bottomCarouselRef = useRef(null);

  const topSlides = [musicianImg, musicianImg, musicianImg, musicianImg];

  const testimonialData = [
    { id: 1, image: twitterCard, name: "Arash Pourhabibi", handle: "@ArashPourhabibi", icon: <Twitter size={16} className="text-[#1da1f2] fill-current" /> },
    { id: 2, image: instaCard, name: "Mauricio Sanchez", handle: "@m741s", icon: <Instagram size={16} className="text-[#e1306c]" /> },
    { id: 3, image: fbCard, name: "Meredith Sweet", handle: "@meredith.sweet.silberstein", icon: <Facebook size={16} className="text-[#3b5998] fill-current" /> },
    ];

  
  const bottomCarouselSettings = {
    dots: true, 
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section className="w-full">
      <style>{`
        /* Reset default button styles for dots */
        .ant-carousel .slick-dots li {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        .ant-carousel .slick-dots li button {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: #d1d5db !important; /* Gray-300 */
          opacity: 1 !important;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #000000 !important; /* Black active */
          transform: scale(1.2);
        }
        /* Push dots down slightly so they don't overlap content */
        .ant-carousel .slick-dots-bottom {
          bottom: -25px !important;
        }
          li.slick-active::after {
    background: transparent !important;
}
      `}</style>

      <div className="w-full flex justify-center pb-12" style={{ background: 'linear-gradient(180deg, #2B2D32 50%, #FFFFFF 50%)' }}>
        <div className="w-full max-w-[1440px] px-4 xl:px-[120px]">
          <div className="relative w-full rounded-[24px] group shadow-2xl">
            
            <Carousel 
              ref={topCarouselRef} 
              autoplay 
              autoplaySpeed={90000} 
              dots={true} 
              effect="scrollx"
            >
              {topSlides.map((imgSrc, idx) => (
                <div key={idx} className="w-full">
                  <img src={imgSrc} alt={`Slide ${idx}`} className="w-full h-auto object-cover block" />
                </div>
              ))}
            </Carousel>
 
            <div className="absolute top-8 right-8 flex gap-4 z-20">
              <button onClick={() => topCarouselRef.current.prev()} className="text-white/60 hover:text-white transition-colors p-2">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => topCarouselRef.current.next()} className="text-white hover:text-white/80 transition-colors p-2">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          {/* Spacer for the external dots (pushed down via CSS) */}
          <div className="mb-12"></div>
        </div>
      </div>

      <div className="w-full bg-white text-[#26262B] py-0 flex justify-center">
        <div className="w-full max-w-[1440px] px-4 xl:px-[120px]">

          <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-8">
            <h2 className="font-['Avenir_Next'] font-bold text-[40px] leading-[1.1] text-[#26262B]">
              Setapp in your words.
            </h2>
            <div style={{ width: '265px' }}>
              <p className="font-['Avenir_Next'] text-[18px] leading-[32px] text-[#26262B] opacity-70">
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

          <div className="flex justify-end gap-4 mb-6">
            <button onClick={() => bottomCarouselRef.current.prev()} className="text-gray-400 hover:text-gray-800 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => bottomCarouselRef.current.next()} className="text-gray-400 hover:text-gray-800 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="w-full pb-12"> {/* Added padding bottom for dots */}
            <Carousel ref={bottomCarouselRef} {...bottomCarouselSettings}>
              {testimonialData.map((item) => (
                <div key={item.id} className="h-full">
                  <div className="px-3 pb-3 h-full"> 
                    <TestimonialCard image={item.image} name={item.name} handle={item.handle} icon={item.icon} />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="w-full h-[1px] bg-[#E5E5E5] opacity-50 mb-20 mt-8"></div>
        </div>
      </div>

      <div className="w-full flex justify-center pb-24" style={{ background: 'linear-gradient(180deg, #FFFFFF 50%, #2B2D32 50%)' }}>
        <div className="w-full max-w-[1440px] px-4 xl:px-[120px]">
          <div className="w-full bg-[#F5F5F5] rounded-[24px] px-8 py-16 md:p-20 flex flex-col items-start gap-8">
            <div className="mb-4">
              <img src={mainLogo} alt="Setapp Logo" className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] object-contain" />
            </div>
            <h2 className="font-['Avenir_Next'] font-semibold text-[46px] leading-[60px] tracking-wider text-[#26262B]">
              Superpowers starting $9.99/month.<br />Free for 7 days.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-[#26262B] text-white px-8 py-4 rounded-[6px] text-[15px] font-bold hover:bg-black transition-colors">Get started now</button>
              <button className="bg-transparent border border-[#26262B]/30 text-[#26262B] px-8 py-4 rounded-[6px] text-[15px] font-medium hover:border-[#26262B] transition-colors">More about Setapp</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ bg, icon }) => (
  <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: bg }}>
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