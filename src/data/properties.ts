export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  image: string;
  description: string;
  features: string[];
  type: string;
  status: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern 4-Bedroom Villa",
    location: "Area 43, Lilongwe",
    price: "$250,000",
    beds: 4,
    baths: 3,
    size: "350 sqm",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    description: "A stunning contemporary villa featuring high ceilings, a private pool, and a beautifully landscaped garden in the prestigious Area 43. This property offers the perfect blend of luxury and comfort, with spacious living areas and top-of-the-line finishes throughout.",
    features: ["Private Pool", "Landscaped Garden", "Solar Power", "24/7 Security", "Modern Kitchen", "Borehole"],
    type: "Villa",
    status: "For Sale"
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    location: "City Centre, Lilongwe",
    price: "$120,000",
    beds: 2,
    baths: 2,
    size: "120 sqm",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
    description: "Modern living in the heart of the city. This apartment offers panoramic views, 24/7 security, and proximity to major business hubs. Ideal for professionals or small families seeking a convenient urban lifestyle.",
    features: ["City Views", "Elevator Access", "Gym Access", "Underground Parking", "Backup Generator", "Fibre Internet"],
    type: "Apartment",
    status: "For Sale"
  },
  {
    id: 3,
    title: "Spacious Family Home",
    location: "Area 10, Lilongwe",
    price: "$180,000",
    beds: 3,
    baths: 2,
    size: "280 sqm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    description: "Perfect for a growing family, this home in Area 10 features a large backyard, modern kitchen, and quiet neighborhood surroundings. The property is well-maintained and offers ample space for outdoor activities.",
    features: ["Large Backyard", "Quiet Neighborhood", "Staff Quarters", "Electric Fence", "Carport", "Water Tank"],
    type: "House",
    status: "For Sale"
  },
  {
    id: 4,
    title: "Executive Office Space",
    location: "City Centre, Lilongwe",
    price: "$2,500 / month",
    beds: 0,
    baths: 2,
    size: "200 sqm",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    description: "Premium office space located in a high-traffic business district. Features open-plan layout, private offices, and modern amenities. Perfect for corporate headquarters or professional firms.",
    features: ["Open Plan", "Private Offices", "Reception Area", "Air Conditioning", "Server Room", "24/7 Access"],
    type: "Commercial",
    status: "For Rent"
  },
  {
    id: 5,
    title: "Cozy 2-Bedroom Cottage",
    location: "Area 12, Lilongwe",
    price: "$85,000",
    beds: 2,
    baths: 1,
    size: "100 sqm",
    image: "https://images.unsplash.com/photo-1449156001935-d28730b967b0?auto=format&fit=crop&q=80&w=1200",
    description: "A charming cottage in a peaceful setting. Features a cozy living room, functional kitchen, and a lovely small garden. Great for first-time buyers or as an investment property.",
    features: ["Small Garden", "Peaceful Area", "Secure Perimeter", "Tiled Floors", "Built-in Wardrobes"],
    type: "Cottage",
    status: "For Sale"
  },
  {
    id: 6,
    title: "Prime Residential Plot",
    location: "Area 47, Lilongwe",
    price: "$45,000",
    beds: 0,
    baths: 0,
    size: "1,200 sqm",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    description: "A flat, ready-to-build residential plot in a developed neighborhood. Close to schools and shopping centers. All utilities are available at the boundary.",
    features: ["Ready to Build", "Developed Area", "Water Connection", "Electricity Connection", "Fenced"],
    type: "Land",
    status: "For Sale"
  }
];
