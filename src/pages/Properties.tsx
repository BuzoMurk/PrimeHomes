import { motion } from "motion/react";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Search,
  ChevronRight,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import { useState } from "react";
import BrutalistIcon from "../components/BrutalistIcon";

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const propertyTypes = ["All", "Villa", "Apartment", "House", "Commercial", "Cottage", "Land"];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || property.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-stone-900 text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Explore Our Properties
          </motion.h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Find your next home, office, or investment opportunity in Lilongwe's most sought-after locations.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b-2 border-black sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-900 z-10" size={20} />
              <input 
                type="text" 
                placeholder="Search by location or property name..." 
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-black rounded-2xl focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[6px_6px_0px_0px_rgba(255,99,33,1)] transition-all font-bold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
              <div className="flex items-center gap-2 text-stone-900 mr-2 shrink-0">
                <BrutalistIcon icon={Filter} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FFD700]" />
                <span className="text-sm font-black uppercase tracking-wider">Filter:</span>
              </div>
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all border-2 border-black ${
                    selectedType === type 
                    ? "bg-orange-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                    : "bg-white text-stone-600 hover:bg-stone-50 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProperties.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,99,33,1)] transition-all group"
                >
                  <Link to={`/properties/${property.id}`}>
                    <div className="relative h-64 overflow-hidden border-b-2 border-black">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 rounded-xl text-sm font-black text-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        {property.price}
                      </div>
                      <div className="absolute top-4 right-4 bg-orange-600 text-white border-2 border-black px-3 py-1 rounded-xl text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        {property.status}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-stone-500 text-sm mb-3 font-bold">
                      <BrutalistIcon icon={MapPin} size={12} containerSize="w-6 h-6" shadowColor="bg-[#00AEEF]" />
                      <span>{property.location}</span>
                    </div>
                    <Link to={`/properties/${property.id}`}>
                      <h3 className="text-xl font-black mb-3 hover:text-orange-600 transition-colors">{property.title}</h3>
                    </Link>
                    <p className="text-stone-600 text-sm mb-6 line-clamp-2 font-medium">
                      {property.description}
                    </p>
                    
                    <div className="flex items-center justify-between py-4 border-y-2 border-stone-100 mb-6">
                      <div className="flex items-center gap-2 text-stone-900">
                        <BrutalistIcon icon={Bed} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FF6321]" />
                        <span className="text-sm font-bold">{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-900">
                        <BrutalistIcon icon={Bath} size={14} containerSize="w-7 h-7" shadowColor="bg-[#00AEEF]" />
                        <span className="text-sm font-bold">{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-900">
                        <BrutalistIcon icon={Square} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FFD700]" />
                        <span className="text-sm font-bold">{property.size}</span>
                      </div>
                    </div>

                    <Link 
                      to={`/properties/${property.id}`}
                      className="w-full bg-stone-900 text-white py-4 rounded-xl font-black hover:bg-orange-600 transition-all flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,174,239,1)] active:translate-y-1 active:shadow-none"
                    >
                      View Details
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-stone-300 mb-6 flex justify-center">
                <BrutalistIcon icon={Search} size={48} containerSize="w-24 h-24" shadowColor="bg-stone-200" rounded="rounded-full" />
              </div>
              <h3 className="text-2xl font-black mb-2">No properties found</h3>
              <p className="text-stone-500 font-bold">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchTerm(""); setSelectedType("All");}}
                className="mt-6 text-orange-600 font-black hover:underline uppercase tracking-wider"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
