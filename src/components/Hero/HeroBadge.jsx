import React from 'react';

const HeroBadge = ({ image, size = 'w-24', position, animationType = 'float' }) => {
  
  // Choose animation class based on type
  // 'float' = Horizontal Movement
  // 'rotate' = Continuous Rotation
  const animClass = animationType === 'rotate' ? 'animate-spin-slow' : 'animate-float-horizontal';

  return (
    <div
      className={`absolute z-10 hidden lg:block select-none ${animClass}`}
      style={{
        ...position, // Spreads top/left/right/bottom
      }}
    >
      <img 
        src={image} 
        alt="Badge" 
        className={`${size} object-contain drop-shadow-2xl`} 
      />
    </div>
  );
};

export default HeroBadge;