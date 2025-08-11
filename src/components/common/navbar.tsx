import { useState } from 'react';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi'; 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const RightArrow = FiArrowRight as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;  

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center ">
         
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/images/finalcompany_logo 1.png" 
              alt="Company Logo"
              className="h-13 w-auto" 
            />
          </div>

         
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6 ">
            <a href="#" className="text-gray-600 hover:underline px-3 py-2 text-lg font-normal">Services</a>
            <a href="#" className="text-gray-600 hover:underline  px-3 py-2 text-lg font-normal">Why Us</a>
            <a href="#" className="text-gray-600 hover:underline px-3 py-2 text-lg font-normal">How It Works</a>
            <a href="#" className="text-gray-600 hover:underline px-3 py-2 text-lg font-normal">About Us</a>
            <a href="#" className="text-gray-600 hover:underline px-3 py-2 text-lg font-normal">Contact</a>
          </div>

          
          <div className="hidden md:block">
            <Button 
              bgColor="bg-[#281158]" 
              textColor="text-white"
              rounded="rounded-lg"
              className="flex items-center gap-1 px-3.5 py-3 text-lg font-normal"
            >
              Book a Consultation
              <RightArrow className="text-white" size={24} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 px-2 pt-2">
              <a href="#" className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded text-sm">Services</a>
              <a href="#" className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded text-sm">Why Us</a>
              <a href="#" className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded text-sm">How It Works</a>
              <a href="#" className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded text-sm">About Us</a>
              <a href="#" className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded text-sm">Contact</a>
              <Button 
                bgColor="bg-[#281158]"
                textColor="text-white"
                rounded="rounded-md"
                className="flex items-center justify-center gap-1 px-3 py-1.5 text-sm mt-2"
              >
                Book a Consultation
                <RightArrow className="text-white" size={14} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}