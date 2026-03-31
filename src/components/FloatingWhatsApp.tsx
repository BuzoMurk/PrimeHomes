import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "+265999000000";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent("Hello Prime Homes, I'm interested in your services.")}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          onClick={openWhatsApp}
          className="fixed bottom-8 right-8 z-[60] bg-orange-600 text-white p-4 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-orange-700 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all group"
          aria-label="Contact us on WhatsApp"
        >
          <div className="relative">
            <MessageCircle size={32} strokeWidth={2.5} />
            <span className="absolute -top-14 right-0 bg-stone-900 text-white text-xs font-black px-4 py-2 rounded-xl border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,174,239,1)]">
              Chat with us
              <span className="absolute bottom-[-6px] right-4 w-3 h-3 bg-stone-900 border-r-2 border-b-2 border-black rotate-45" />
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
