import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/SVG.png'; 

const NAV_LINKS = [
  { name: 'How it works', href: '#' },
  { name: 'All apps', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'For Teams', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Podcast', href: '#' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // FIX: Removed 'border-b' to remove the line. 
    // bg-[#2B2D32] matches the rest of the app perfectly.
    // fixed top-0 z-50 ensures it stays on top while scrolling.
    <nav className="w-full bg-[#2B2D32] fixed top-0 z-50 pt-[10px] pb-[10px]">
        
      {/* Container: Max width 1440px to match Figma grid, centered */}
      <div className="max-w-[1440px] mx-auto h-[40px] px-6 flex items-center justify-between">
        
        {/* --- LEFT: LOGO --- */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-[24px] w-auto object-contain hover:opacity-80 transition-opacity" />
        </div>

        {/* --- RIGHT CONTAINER --- */}
        <div className="hidden md:flex items-center h-full">
          
          {/* Navigation Links */}
          <ul className="flex items-center gap-x-6 mr-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[13px] font-normal text-gray-300 hover:text-white transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="h-[14px] w-[1px] bg-gray-500 mr-6"></div>

          {/* Actions Group */}
          <div className="flex items-center gap-x-5">
            
            {/* Flag Icon */}
            <button className="flex items-center justify-center hover:opacity-80 transition-opacity">
               <span className="fi fi-us" style={{ fontSize: '16px', borderRadius: '2px' }}></span>
            </button>

            {/* Sign In */}
            <a href="#" className="text-[13px] font-medium text-white hover:text-gray-300 transition-colors whitespace-nowrap">
              Sign In
            </a>

            {/* Try Free Button */}
            <a
              href="#"
              className="flex items-center justify-center border border-gray-500 rounded-[3px] text-white hover:bg-white hover:text-black transition-all duration-300"
              style={{
                width: '101px',
                height: '33px',
                paddingTop: '1px',
                fontSize: '13px',
                fontWeight: 500
              }}
            >
              Try free
            </a>
          </div>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 w-full bg-[#2B2D32] shadow-xl" style={{ top: '60px' }}>
          <div className="px-4 py-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="block text-sm text-gray-300 hover:text-white">
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-600 pt-2 mt-2 flex flex-col gap-2">
               <a href="#" className="text-sm text-gray-300">Sign In</a>
               <a href="#" className="text-sm font-bold text-white bg-gray-700 py-2 px-3 rounded text-center">Try free</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;