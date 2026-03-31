import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import BrutalistIcon from "../components/BrutalistIcon";

const team = [
  {
    name: "Chifundo Banda",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "With over 15 years in the Malawian real estate sector, Chifundo leads Prime Homes with a vision for excellence and integrity."
  },
  {
    name: "Sarah Phiri",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Sarah's expert negotiation skills and deep market knowledge have helped hundreds of families find their dream homes."
  },
  {
    name: "Mphatso Kumwenda",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "Mphatso ensures that every property in our management portfolio is maintained to the highest standards."
  },
  {
    name: "Tiwonge Maseko",
    role: "Senior Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "Tiwonge specializes in commercial real estate and investment consulting for local and international clients."
  }
];

export default function Team() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-stone-50 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Meet Our Expert Team
          </motion.h1>
          <p className="text-stone-500 text-xl max-w-3xl mx-auto">
            The dedicated professionals behind Prime Homes Malawi, committed to your real estate success.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(255,99,33,1)] transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <a href="#" className="transition-transform hover:scale-110">
                        <BrutalistIcon icon={Instagram} size={16} containerSize="w-8 h-8" shadowColor="bg-[#FF6321]" />
                      </a>
                      <a href="#" className="transition-transform hover:scale-110">
                        <BrutalistIcon icon={Facebook} size={16} containerSize="w-8 h-8" shadowColor="bg-[#00AEEF]" />
                      </a>
                      <a href="#" className="transition-transform hover:scale-110">
                        <BrutalistIcon icon={Mail} size={16} containerSize="w-8 h-8" shadowColor="bg-[#FFD700]" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange-600 font-bold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-stone-900 text-white rounded-[60px] mx-4 sm:mx-8 mb-20 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,174,239,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to join our team?</h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto">
            We're always looking for talented individuals who share our passion for real estate and excellence.
          </p>
          <button className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 hover:text-white transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
