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
    <nav className="w-full bg-[#2B2D32] fixed top-0 z-50 pt-[10px] pb-[10px]">
        
      <div className="max-w-[1440px] mx-auto h-[40px] px-6 flex items-center justify-between">
        
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-[24px] w-auto object-contain hover:opacity-80 transition-opacity" />
        </div>


        <div className="hidden md:flex items-center h-full">
          
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

          <div className="h-[14px] w-[1px] bg-gray-500 mr-6"></div>


          <div className="flex items-center gap-x-5">
            
            <button className="flex items-center justify-center hover:opacity-80 transition-opacity">
               <span className="fi fi-us" style={{ fontSize: '16px', borderRadius: '2px' }}></span>
            </button>

            <a href="#" className="text-[13px] font-medium text-white hover:text-gray-300 transition-colors whitespace-nowrap">
              Sign In
            </a>

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

        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

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