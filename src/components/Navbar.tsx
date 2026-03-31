import { MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import BrutalistIcon from "./BrutalistIcon";

const WHATSAPP_NUMBER = "+265999000000";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <span className="text-xl font-bold tracking-tight text-stone-900">PRIME HOMES</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-orange-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 transition-colors"
            aria-label="Toggle menu"
          >
            <BrutalistIcon 
              icon={isMenuOpen ? X : Menu} 
              size={20} 
              containerSize="w-10 h-10"
              shadowColor="bg-[#FFD700]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-stone-200 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-stone-600 hover:text-orange-600 font-medium py-2 transition-colors border-b border-stone-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                openWhatsApp("Hello Prime Homes, I'm interested in your services.");
                setIsMenuOpen(false);
              }}
              className="mt-2 bg-stone-900 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,174,239,1)]"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
