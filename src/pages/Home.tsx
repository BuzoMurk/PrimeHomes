import { motion } from "motion/react";
import { 
  MapPin, 
  MessageCircle, 
  Bed, 
  Bath, 
  Square, 
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import BrutalistIcon from "../components/BrutalistIcon";

const WHATSAPP_NUMBER = "+265999000000";

export default function Home() {
  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                Premium Real Estate in Malawi
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                Find Your Perfect <br />
                <span className="text-orange-600">Home in Lilongwe</span>
              </h1>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-xl">
                Discover curated luxury properties in Malawi's capital. From modern villas to city apartments, we help you find the space you'll love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/properties"
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all text-center flex items-center justify-center gap-2 group border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  Browse Properties
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => openWhatsApp("I'd like to schedule a viewing.")}
                  className="bg-white border-2 border-black text-stone-900 px-8 py-4 rounded-xl font-semibold hover:bg-stone-50 transition-all text-center shadow-[4px_4px_0px_0px_rgba(0,174,239,1)]"
                >
                  Schedule a Viewing
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 -z-10 hidden lg:block" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[600px] hidden lg:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern Home" 
            className="w-full h-full object-cover rounded-l-[40px] shadow-2xl border-l-4 border-y-4 border-black"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Properties Sold", value: "250+" },
              { label: "Happy Clients", value: "180+" },
              { label: "Years Experience", value: "12+" },
              { label: "Awards Won", value: "15" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-stone-900 mb-1">{stat.value}</div>
                <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Listings</h2>
              <p className="text-stone-600 max-w-md">
                Explore our handpicked selection of premium properties currently available in Lilongwe.
              </p>
            </div>
            <Link to="/properties" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View all listings <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[8px_8px_0px_0px_rgba(255,99,33,0.2)] transition-all group"
              >
                <Link to={`/properties/${property.id}`}>
                  <div className="relative h-64 overflow-hidden border-b-2 border-black">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 rounded-full text-sm font-bold text-stone-900 shadow-[2px_2px_0px_0px_rgba(0,174,239,1)]">
                      {property.price}
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-stone-500 text-sm mb-4">
                    <BrutalistIcon icon={MapPin} size={12} containerSize="w-6 h-6" shadowColor="bg-[#FFD700]" />
                    <span className="font-medium">{property.location}</span>
                  </div>
                  <Link to={`/properties/${property.id}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-orange-600 transition-colors">{property.title}</h3>
                  </Link>
                  <p className="text-stone-600 text-sm mb-6 line-clamp-2">
                    {property.description}
                  </p>
                  
                  <div className="flex items-center justify-between py-4 border-y-2 border-stone-100 mb-6">
                    <div className="flex items-center gap-2 text-stone-600">
                      <BrutalistIcon icon={Bed} size={12} containerSize="w-6 h-6" shadowColor="bg-[#00AEEF]" />
                      <span className="text-sm font-bold">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-600">
                      <BrutalistIcon icon={Bath} size={12} containerSize="w-6 h-6" shadowColor="bg-[#FF6321]" />
                      <span className="text-sm font-bold">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-600">
                      <BrutalistIcon icon={Square} size={12} containerSize="w-6 h-6" shadowColor="bg-[#FFD700]" />
                      <span className="text-sm font-bold">{property.size}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/properties/${property.id}`}
                    className="w-full bg-stone-900 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    View Details
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to find your dream home?</h2>
            <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
              Our expert team is ready to guide you through every step of your real estate journey in Malawi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => openWhatsApp("I'm looking for a property in Lilongwe.")}
                className="bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all flex items-center gap-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,174,239,1)]"
              >
                <MessageCircle size={24} />
                Contact us on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
