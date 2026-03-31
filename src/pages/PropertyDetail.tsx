import { motion } from "motion/react";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  MessageCircle, 
  ChevronLeft,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building2
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { properties } from "../data/properties";
import { useEffect } from "react";
import BrutalistIcon from "../components/BrutalistIcon";

const WHATSAPP_NUMBER = "+265999000000";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === Number(id));

  useEffect(() => {
    if (!property) {
      navigate('/properties');
    }
  }, [property, navigate]);

  if (!property) return null;

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors font-black uppercase tracking-wider text-sm">
          <ChevronLeft size={20} />
          Back to all properties
        </Link>
      </div>

      {/* Property Header & Images */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[16/10] overflow-hidden rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 bg-white border-2 border-black px-6 py-2 rounded-2xl text-2xl font-black text-stone-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {property.price}
                </div>
                <div className="absolute top-8 right-8 bg-orange-600 text-white border-2 border-black px-4 py-2 rounded-2xl text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {property.status}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Contact Card */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,174,239,1)] sticky top-32">
                <div className="flex items-center gap-4 mb-8">
                  <BrutalistIcon icon={Building2} size={32} containerSize="w-16 h-16" shadowColor="bg-[#FF6321]" rounded="rounded-2xl" />
                  <div>
                    <h4 className="font-black text-lg uppercase tracking-tight">Prime Homes Malawi</h4>
                    <p className="text-stone-500 text-sm font-bold">Official Listing Agent</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-stone-900 font-bold">
                    <BrutalistIcon icon={ShieldCheck} size={14} containerSize="w-7 h-7" shadowColor="bg-[#00AEEF]" />
                    <span className="text-sm">Verified Property</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-900 font-bold">
                    <BrutalistIcon icon={Calendar} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FFD700]" />
                    <span className="text-sm">Listed 2 days ago</span>
                  </div>
                </div>

                <button 
                  onClick={() => openWhatsApp(`Hi, I'm interested in the ${property.title} in ${property.location}. Can you provide more details?`)}
                  className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black hover:bg-orange-700 transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 active:translate-y-1 active:shadow-none"
                >
                  <MessageCircle size={24} />
                  Inquire via WhatsApp
                </button>
                
                <button 
                  onClick={() => openWhatsApp(`I'd like to schedule a viewing for the ${property.title} in ${property.location}.`)}
                  className="w-full bg-stone-900 text-white py-4 rounded-2xl font-black hover:bg-stone-800 transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,174,239,1)] active:translate-y-1 active:shadow-none"
                >
                  <Calendar size={20} />
                  Schedule a Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 bg-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="flex items-center gap-2 text-orange-600 font-black text-sm uppercase tracking-widest mb-4">
                  <BrutalistIcon icon={MapPin} size={14} containerSize="w-7 h-7" shadowColor="bg-[#00AEEF]" />
                  <span>{property.location}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight uppercase">{property.title}</h1>
                
                <div className="grid grid-cols-3 gap-8 py-8 border-y-2 border-stone-100">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-stone-400 mb-2">
                      <BrutalistIcon icon={Bed} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FF6321]" />
                      <span className="text-xs font-black uppercase tracking-wider">Bedrooms</span>
                    </div>
                    <div className="text-2xl font-black">{property.beds}</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-stone-400 mb-2">
                      <BrutalistIcon icon={Bath} size={14} containerSize="w-7 h-7" shadowColor="bg-[#00AEEF]" />
                      <span className="text-xs font-black uppercase tracking-wider">Bathrooms</span>
                    </div>
                    <div className="text-2xl font-black">{property.baths}</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-stone-400 mb-2">
                      <BrutalistIcon icon={Square} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FFD700]" />
                      <span className="text-xs font-black uppercase tracking-wider">Total Area</span>
                    </div>
                    <div className="text-2xl font-black">{property.size}</div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Property Description</h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-6 font-medium">
                  {property.description}
                </p>
                <p className="text-stone-600 text-lg leading-relaxed font-medium">
                  Located in one of Lilongwe's most prestigious areas, this property offers unparalleled access to local amenities while maintaining a sense of privacy and tranquility. Whether you're looking for a family home or a high-yield investment, this property represents an exceptional opportunity in the Malawian real estate market.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Key Features & Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-stone-50 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <BrutalistIcon icon={CheckCircle2} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FF6321]" />
                      <span className="font-bold text-stone-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-black mb-12 uppercase tracking-tight">Similar Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {properties.filter(p => p.id !== property.id).slice(0, 3).map((p, i) => (
              <div key={p.id} className="bg-white rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,99,33,1)] transition-all group">
                <Link to={`/properties/${p.id}`}>
                  <div className="relative h-48 overflow-hidden border-b-2 border-black">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 rounded-xl text-sm font-black text-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      {p.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-black mb-2 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{p.title}</h4>
                    <div className="flex items-center gap-2 text-stone-500 text-xs font-bold">
                      <BrutalistIcon icon={MapPin} size={10} containerSize="w-5 h-5" shadowColor="bg-[#00AEEF]" />
                      <span>{p.location}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
