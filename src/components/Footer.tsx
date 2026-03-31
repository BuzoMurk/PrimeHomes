import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import BrutalistIcon from "./BrutalistIcon";

const WHATSAPP_NUMBER = "+265999000000";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-stone-900 text-white pt-20 pb-10 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9" />
              <span className="text-xl font-black tracking-tight text-white uppercase">PRIME HOMES</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-bold">
              The leading real estate agency in Lilongwe, Malawi. We specialize in premium residential and commercial properties.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="transition-transform hover:scale-110">
                <BrutalistIcon icon={Instagram} size={16} containerSize="w-8 h-8" shadowColor="bg-[#FF6321]" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <BrutalistIcon icon={Facebook} size={16} containerSize="w-8 h-8" shadowColor="bg-[#00AEEF]" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <BrutalistIcon icon={Twitter} size={16} containerSize="w-8 h-8" shadowColor="bg-[#FFD700]" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Properties", path: "/properties" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "/team" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-stone-400 hover:text-orange-600 transition-colors flex items-center gap-2 group font-bold">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Property Sales", path: "/services" },
                { name: "Property Management", path: "/services" },
                { name: "Real Estate Consulting", path: "/services" },
                { name: "Valuation Services", path: "/services" }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-stone-400 hover:text-orange-600 transition-colors flex items-center gap-2 group font-bold">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <BrutalistIcon icon={MapPin} size={14} containerSize="w-7 h-7" shadowColor="bg-[#00AEEF]" />
                <span className="text-stone-400 font-bold">Suite 402, Golden Peacock Complex, City Centre, Lilongwe</span>
              </li>
              <li className="flex items-center gap-3">
                <BrutalistIcon icon={Phone} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FF6321]" />
                <span className="text-stone-400 font-bold">{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <BrutalistIcon icon={Mail} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FFD700]" />
                <span className="text-stone-400 font-bold">info@primehomesmalawi.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm font-bold">
            © {currentYear} Prime Homes Malawi. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-bold">
            <Link to="/privacy" className="text-stone-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-stone-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
