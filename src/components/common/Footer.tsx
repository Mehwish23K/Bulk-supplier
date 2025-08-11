import Button from "./Button";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const Facebook = FaFacebook as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;
  const Linkedin = FaLinkedin as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;
  const Youtube = FaYoutube as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;
  const Instagram = FaInstagram as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;
  const ArrowRight = FaArrowRight as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;

  return (
    <div className="w-full flex justify-center bg-white pt-[120px] pb-[42px]">
      <div 
        className="bg-[#170639] text-white rounded-xl flex flex-col justify-between"
        style={{
          width: '1365px',
          height: '510px',
          padding: '38px 37px'
        }}
      >
        {/* Main Content */}
        <div className="flex justify-between h-full">
          {/* Brand and description */}
          <div className="max-w-md">
            <img 
              src="/images/finalcompany_logo 1.png"
              alt="Forth and Vale" 
              width={147.3} 
              height={64}
              className="mb-4"
            />
            <p className="text-lg opacity-80 mb-6">
              Premium leather craftsmanship with over 6 years of experience. Creating exceptional leather goods for discerning clients worldwide.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-[45px] h-[45px] rounded-full border-2"
                style={{
                  background: 'linear-gradient(#170639, #170639) padding-box, linear-gradient(to right, #B27C47, #804409) border-box',
                  border: '2px solid transparent',
                  color: 'white'
                }}>
                <Linkedin size={13.5} />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-[45px] rounded-full border-2"
                style={{
                  background: 'linear-gradient(#170639, #170639) padding-box, linear-gradient(to right, #B27C47, #804409) border-box',
                  border: '2px solid transparent',
                  color: 'white'
                }}>
                <Facebook size={13.5} />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-[45px] rounded-full border-2"
                style={{
                  background: 'linear-gradient(#170639, #170639) padding-box, linear-gradient(to right, #B27C47, #804409) border-box',
                  border: '2px solid transparent',
                  color: 'white'
                }}>
                <Youtube size={13.5} />
              </a>
              <a href="#" className="flex items-center justify-center w-[45px] h-[45px] rounded-full border-2"
                style={{
                  background: 'linear-gradient(#170639, #170639) padding-box, linear-gradient(to right, #B27C47, #804409) border-box',
                  border: '2px solid transparent',
                  color: 'white'
                }}>
                <Instagram size={13.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 opacity-80">
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Services</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Products</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">About us</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Why Choose us</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Our Process</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <Button 
              variant="primary" 
              size="lg" 
              rounded="rounded-full"
              className="mt-2 flex items-center gap-2"
            >
              Get Contact
              <ArrowRight className="text-white" size={16} />
            </Button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center pt-8 border-t border-white/20">
          <p className="opacity-80">© 2025 Forth Vale. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="opacity-80">Online Support Available</span>
            </div>
            <button className="opacity-80 hover:opacity-100 transition-opacity bg-white text-[#170639] px-4 py-2 rounded-full">
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}