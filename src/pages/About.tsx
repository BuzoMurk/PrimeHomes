import { motion } from "motion/react";
import { CheckCircle2, Users, Target, ShieldCheck } from "lucide-react";
import BrutalistIcon from "../components/BrutalistIcon";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-stone-900 text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About Prime Homes Malawi
          </motion.h1>
          <p className="text-stone-400 text-xl max-w-3xl mx-auto">
            Setting the standard for luxury real estate and professional property services in Malawi since 2014.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Founded in Lilongwe, Prime Homes Malawi began with a simple mission: to provide a transparent, professional, and client-focused real estate experience in a rapidly growing market.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Over the past decade, we have grown from a small consultancy into Malawi's premier real estate agency, representing some of the most prestigious properties in the capital and beyond. Our deep understanding of the local market combined with international standards of service sets us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Market Expertise",
                  "Client Transparency",
                  "Premium Portfolio",
                  "Professional Integrity"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-800 font-bold">
                    <BrutalistIcon icon={CheckCircle2} size={14} containerSize="w-7 h-7" shadowColor="bg-[#FF6321]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Office" 
                className="rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-4 border-black"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-8 rounded-2xl hidden sm:block border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,174,239,1)]">
                <div className="text-4xl font-black mb-1">12+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              These principles guide everything we do, from the properties we list to the way we treat our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                shadowColor: "bg-[#FF6321]",
                title: "Client First",
                description: "We listen to your needs and work tirelessly to find the perfect solution for your real estate goals."
              },
              {
                icon: Target,
                shadowColor: "bg-[#00AEEF]",
                title: "Precision",
                description: "From valuations to contracts, we ensure every detail is handled with absolute accuracy and care."
              },
              {
                icon: ShieldCheck,
                shadowColor: "bg-[#FFD700]",
                title: "Trust",
                description: "Building long-term relationships through honesty, transparency, and ethical business practices."
              }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-stone-50 rounded-3xl text-center border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,99,33,0.2)] transition-all">
                <div className="inline-flex items-center justify-center mb-6">
                  <BrutalistIcon 
                    icon={value.icon} 
                    size={32} 
                    containerSize="w-16 h-16" 
                    shadowColor={value.shadowColor}
                    rounded="rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-stone-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
