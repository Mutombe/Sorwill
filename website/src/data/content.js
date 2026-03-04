const UNSPLASH_KEY = 'SbUJWGrxKOhOXQuvjSjZV1ALSgrRusjNx6gqozus6mI';

export const images = {
  // HERO: Worker grinding metal with sparks flying
  hero: `https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80&auto=format&fit=crop`,
  // HERO2: Intersecting industrial steel beams
  hero2: `https://images.unsplash.com/photo-1759874036296-408f47302a69?w=1920&q=80&auto=format&fit=crop`,
  // HERO3: Welder at work with sparks - dramatic industrial shot
  hero3: `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80&auto=format&fit=crop`,
  // ABOUT: Steel mill interior with molten metal and industrial equipment
  about: `https://images.unsplash.com/photo-1697281679290-ad7be1b10682?w=1200&q=80&auto=format&fit=crop`,
  // PRODUCTS: Steel pipes and tubes stacked in warehouse
  products: `https://images.unsplash.com/photo-1763950865873-41f63536825b?w=1200&q=80&auto=format&fit=crop`,
  // CONSTRUCTION: Active construction site with steel rebar and workers
  construction: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop`,
  // METAL TEXTURE: Close-up metal surface
  metalTexture: `https://images.unsplash.com/photo-1673872622795-a2be268aaee6?w=1200&q=80&auto=format&fit=crop`,
  // WAREHOUSE: Industrial warehouse interior with crane and steel beams
  warehouse: `https://images.unsplash.com/photo-1766475554436-82d116d96c60?w=1200&q=80&auto=format&fit=crop`,
  // TEAM: Construction workers in hard hats and safety gear
  team: `https://images.unsplash.com/photo-1759542878135-bc80368e74ef?w=1200&q=80&auto=format&fit=crop`,
  // FABRICATION: CNC machine cutting metal - steel fabrication
  fabrication: `https://images.unsplash.com/photo-1738162837438-92ff852619a1?w=1200&q=80&auto=format&fit=crop`,
  // CITYSCAPE: Modern city skyline with steel/glass buildings
  cityscape: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop`,
  // OFFICE: Modern apartment buildings - residential complex
  office: `https://images.unsplash.com/photo-1763783695583-c0703902d318?w=1200&q=80&auto=format&fit=crop`,
  // BRIDGE: Steel suspension bridge structure
  bridge: `https://images.unsplash.com/photo-1767658586638-bf11c7873bfb?w=1200&q=80&auto=format&fit=crop`,
  // LOGISTICS: Forklift loading shipping container
  logistics: `https://images.unsplash.com/photo-1601912552080-0fb89fd08042?w=1200&q=80&auto=format&fit=crop`,
};

export async function searchUnsplash(query, count = 3) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
    );
    const data = await res.json();
    return data.results?.map((p) => ({
      url: p.urls?.regular || p.urls?.small,
      alt: p.alt_description || query,
      credit: p.user?.name
    })) || [];
  } catch {
    return [];
  }
}

export const products = [
  { id: 'deformed-bars', name: 'Deformed Bars', description: 'High-tensile deformed reinforcement bars for concrete structures. Available in various diameters from 8mm to 32mm.', category: 'Reinforcement', icon: 'Barbell', features: ['Y8 to Y32 sizes', 'BS4449 compliant', 'High tensile strength', 'Superior bonding'] },
  { id: 'meshwire', name: 'Mesh Wire', description: 'Welded wire mesh for reinforcement in slabs, walls, and foundations. Factory-fabricated for consistency.', category: 'Reinforcement', icon: 'GridNine', features: ['Ref 193 to Ref 888', 'Standard sheets', 'Custom sizes available', 'Precision welded'] },
  { id: 'angle-iron', name: 'Angle Iron', description: 'Structural L-shaped steel for framing, brackets, and support structures. Equal and unequal angles.', category: 'Structural', icon: 'ArrowsOutCardinal', features: ['25x25 to 150x150mm', 'Equal & unequal', 'Hot rolled finish', 'Various thicknesses'] },
  { id: 'flat-bars', name: 'Flat Bars', description: 'Versatile flat steel bars for fabrication, brackets, and general engineering applications.', category: 'Structural', icon: 'Minus', features: ['12mm to 150mm widths', '3mm to 20mm thick', 'Mild steel grade', 'Cut to length'] },
  { id: 'beams-lintels', name: 'Beams & Lintels', description: 'Universal beams and lintels engineered for load-bearing walls and structural openings.', category: 'Structural', icon: 'Columns', features: ['UB & UC sections', 'IPE beams', 'Door & window lintels', 'Custom lengths'] },
  { id: 'window-sections', name: 'Window Sections', description: 'Cold-rolled steel window and door sections for durable, secure fenestration solutions.', category: 'Finishing', icon: 'FrameCorners', features: ['F4B & F7B profiles', 'Galvanized option', 'Burglar-proof', 'Standard lengths'] },
  { id: 'deckpans', name: 'Deck Pans', description: 'Corrugated steel decking for composite floor construction. Reduces concrete volume and speeds construction.', category: 'Roofing & Cladding', icon: 'Stack', features: ['IBR & corrugated', '0.47mm to 0.80mm', 'Galvanized steel', 'Various profiles'] },
  { id: 'reinforced-slab', name: 'Reinforced Slab', description: 'Pre-fabricated reinforced concrete slabs with integrated steel reinforcement for rapid construction.', category: 'Reinforcement', icon: 'Cube', features: ['Rib & block', 'Hollow core', 'Load-tested', 'Quick installation'] },
];

export const services = [
  { id: 'cutting-bending', title: 'Cutting & Bending', description: 'Precision cutting and bending of reinforcement steel to your exact specifications using CNC-controlled machinery.', longDescription: 'Our state-of-the-art CNC cutting and bending facility processes thousands of tonnes monthly. We deliver ready-to-install reinforcement packages that reduce on-site labour and waste.', icon: 'Scissors', stats: { accuracy: '±1mm', capacity: '500 tonnes/month' } },
  { id: 'fabrication-erection', title: 'Fabrication & Erection', description: 'Full structural steel fabrication and site erection services for commercial and industrial projects.', longDescription: 'From design-assist through final bolt-up, our fabrication division delivers complete structural steel packages. Our experienced erection crews ensure safe, on-schedule installation.', icon: 'Wrench', stats: { projects: '200+ completed', team: '50+ specialists' } },
  { id: 'assembling-fixing', title: 'Assembling & Fixing', description: 'Professional assembly and fixing services for steel components, ensuring structural integrity and compliance.', longDescription: 'Our skilled teams handle complex steel assemblies from trusses to portal frames. Every connection is inspected and certified to meet engineering specifications.', icon: 'Gear', stats: { certification: 'ISO 9001', safety: 'Zero incidents' } },
  { id: 'special-foundation', title: 'Special Foundations', description: 'Engineered foundation solutions including piling, capping beams, and reinforced ground beams.', longDescription: "When standard foundations won't do, our engineering team designs and installs special foundation systems. From driven piles to complex raft foundations.", icon: 'House', stats: { depth: 'Up to 30m', types: '5+ methods' } },
  { id: 'windows-doors', title: 'Windows & Door Frames', description: 'Custom steel window and door frame manufacturing and installation for residential and commercial buildings.', longDescription: 'We manufacture precision steel frames for windows and doors, offering superior security and durability compared to aluminum alternatives.', icon: 'Door', stats: { styles: '20+ designs', warranty: '10 years' } },
  { id: 'shuttering', title: 'Shuttering', description: 'Formwork and shuttering solutions for concrete construction, including panel systems and custom moulds.', longDescription: 'Our shuttering systems accelerate concrete construction with reusable steel formwork. Custom moulds available for architectural concrete elements.', icon: 'Wall', stats: { reuses: '100+ cycles', types: '3 systems' } },
];

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence', description: 'Pioneering steel distribution since 1999' },
  { value: 500, suffix: '+', label: 'Projects Completed', description: 'Across Zimbabwe and Southern Africa' },
  { value: 1000, suffix: '+', label: 'Tonnes Monthly', description: 'Processing and delivery capacity' },
  { value: 98, suffix: '%', label: 'Client Retention', description: 'Building lasting partnerships' },
];

export const testimonials = [
  { name: 'Eng. Tawanda Moyo', role: 'Chief Structural Engineer', company: 'Apex Construction Group', text: 'Sorwil Steel has been our preferred supplier for over a decade. Their consistency in quality and delivery timelines is unmatched in the Zimbabwean market.', rating: 5 },
  { name: 'Rumbidzai Chikwanha', role: 'Procurement Director', company: 'ZimBuild Holdings', text: 'What sets Sorwil apart is their technical support. Their team helped us optimize our reinforcement schedules, saving us 15% on material costs.', rating: 5 },
  { name: 'David Mutemeri', role: 'Project Manager', company: 'Southern Infrastructure Ltd', text: 'From emergency orders to complex fabrication work, Sorwil delivers every time. Their cut-and-bend service alone has transformed our site efficiency.', rating: 5 },
];

export const careers = [
  { id: 1, title: 'Structural Steel Fabricator', department: 'Production', location: 'Southerton, Harare', type: 'Full-time', description: 'Join our fabrication team to produce world-class structural steel components. Minimum 3 years experience with MIG/TIG welding required.' },
  { id: 2, title: 'Sales Executive - Construction', department: 'Commercial', location: 'Harare / Bulawayo', type: 'Full-time', description: 'Drive revenue growth across our product portfolio. Strong relationships in the construction industry and technical knowledge of steel products essential.' },
  { id: 3, title: 'Quality Control Inspector', department: 'Quality Assurance', location: 'Southerton, Harare', type: 'Full-time', description: 'Ensure all products meet international standards. Experience with NDT testing and ISO 9001 quality systems preferred.' },
  { id: 4, title: 'CNC Machine Operator', department: 'Production', location: 'Southerton, Harare', type: 'Full-time', description: 'Operate and maintain CNC cutting and bending machinery. Technical diploma in mechanical engineering or equivalent required.' },
];

export const navLinks = [
  { label: 'Company', children: [
    { label: 'Our Story', href: '/about', description: 'Two decades of steel excellence' },
    { label: 'Leadership', href: '/about#leadership', description: 'Meet the team driving innovation' },
    { label: 'Sustainability', href: '/about#sustainability', description: 'Our commitment to the future' },
    { label: 'Certifications', href: '/about#certifications', description: 'Quality you can trust' },
  ]},
  { label: 'Products', children: [
    { label: 'Reinforcement Steel', href: '/products#reinforcement', description: 'Deformed bars, mesh wire & more' },
    { label: 'Structural Steel', href: '/products#structural', description: 'Beams, angles & flat bars' },
    { label: 'Roofing & Cladding', href: '/products#roofing', description: 'Deckpans & corrugated sheets' },
    { label: 'Full Catalog', href: '/products', description: 'Browse our complete range' },
  ]},
  { label: 'Solutions', children: [
    { label: 'Cutting & Bending', href: '/services#cutting-bending', description: 'CNC precision processing' },
    { label: 'Fabrication', href: '/services#fabrication-erection', description: 'Design to delivery' },
    { label: 'Special Foundations', href: '/services#special-foundation', description: 'Engineered ground solutions' },
    { label: 'All Services', href: '/services', description: 'Explore our full capabilities' },
  ]},
  { label: 'Resources', children: [
    { label: 'Projects Portfolio', href: '/projects', description: 'See our work in action' },
    { label: 'Technical Library', href: '/projects#technical', description: 'Specs, guides & downloads' },
    { label: 'Careers', href: '/careers', description: 'Join our growing team' },
    { label: 'News & Insights', href: '/projects#news', description: 'Industry updates & company news' },
  ]},
];

export const companyInfo = {
  name: 'Sorwil Steel',
  tagline: 'Innovative Steel Solutions',
  description: "Zimbabwe's premier steel distribution and fabrication company, delivering excellence in structural steel, reinforcement, and specialized construction solutions since 1999.",
  address: '14 Barrow Road, Southerton, Harare',
  phone: ['+263 772 203 806', '+263 774 259 928/9'],
  email: 'sales@sorwil.co.zw',
  website: 'www.sorwil.co.zw',
  hours: 'Monday - Friday: 7:00 AM - 5:00 PM | Saturday: 8:00 AM - 1:00 PM',
};
