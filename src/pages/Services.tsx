import { motion } from "motion/react";
import { 
  Building2, 
  Key, 
  BarChart3, 
  Search, 
  ShieldCheck, 
  MessageCircle
} from "lucide-react";
import BrutalistIcon from "../components/BrutalistIcon";

const WHATSAPP_NUMBER = "+265999000000";

export default function Services() {
  const openWhatsApp = (service: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in your ${service} services.`)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: Building2,
      shadowColor: "bg-[#FF6321]",
      title: "Property Sales",
      description: "We represent premium residential and commercial properties, ensuring a smooth transaction for both buyers and sellers.",
      features: ["Market analysis", "Professional photography", "Targeted marketing", "Negotiation support"]
    },
    {
      icon: Key,
      shadowColor: "bg-[#00AEEF]",
      title: "Property Management",
      description: "Comprehensive management services for landlords, including tenant screening, maintenance, and rent collection.",
      features: ["Tenant vetting", "Regular inspections", "Financial reporting", "Maintenance coordination"]
    },
    {
      icon: BarChart3,
      shadowColor: "bg-[#FFD700]",
      title: "Real Estate Consulting",
      description: "Expert advice for investors looking to enter or expand within the Malawian real estate market.",
      features: ["Investment analysis", "Feasibility studies", "Portfolio strategy", "Market trends"]
    },
    {
      icon: Search,
      shadowColor: "bg-[#FF6321]",
      title: "Valuation Services",
      description: "Professional property valuations for sales, insurance, or financial reporting purposes.",
      features: ["Accurate appraisals", "Detailed reports", "Certified valuers", "Quick turnaround"]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-orange-600 text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Professional Services
          </motion.h1>
          <p className="text-orange-100 text-xl max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to the Malawian market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,174,239,1)] transition-all"
              >
                <div className="mb-8">
                  <BrutalistIcon 
                    icon={service.icon} 
                    size={32} 
                    containerSize="w-16 h-16" 
                    shadowColor={service.shadowColor}
                    rounded="rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-stone-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-stone-700 font-medium">
                      <ShieldCheck size={18} className="text-orange-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openWhatsApp(service.title)}
                  className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <MessageCircle size={20} />
                  Inquire About This Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-stone-50 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              A streamlined, professional process designed to deliver results efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs and goals to understand how we can best serve you."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a customized plan based on current market data and your requirements."
              },
              {
                step: "03",
                title: "Execution",
                description: "We handle the heavy lifting, from marketing to negotiations and closing."
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-stone-200 mb-6">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
