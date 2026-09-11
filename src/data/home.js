/**
 * Homepage section content for Vision Business Setup.
 *
 * Source of truth: "Website Content_Vision.docx" (see `Website-Content-Vision.txt`).
 * Every user-facing string below is taken from that document — verbatim where
 * the document provides a full sentence, and otherwise assembled only from its
 * own headings and navigation labels. The three Business Setup jurisdictions
 * have dedicated pages in `src/data/jurisdictions.js`.
 *
 * One export per section, named to match its component.
 */

/* 1 — HERO ------------------------------------------------------------------ */

export const heroSlides = [
  {
    super: 'Vision Business Setup',
    title: 'Every Business starts with Vision',
    image: 'banner-burj-khalifa.jpg',
    buttons: [
      { label: 'About Us', href: '#our-story' },
      { label: 'Contact Us', href: '#request-callback' },
    ],
  },
  {
    super: 'UAE Mainland · UAE Free Zone · UAE Offshore',
    title: 'End-to-end business setup and corporate support services in the UAE',
    image: 'banner-palm-jumeirah.jpg',
    buttons: [
      { label: 'Business Setup', href: '#business-setup' },
      { label: 'Contact Us', href: '#request-callback' },
    ],
  },
  {
    super: 'Established in 2015',
    title: 'A trusted name in the UAE’s business setup landscape',
    image: 'banner-atlantis.webp',
    buttons: [
      { label: 'Our Services', href: '#services' },
      { label: 'Contact Us', href: '#request-callback' },
    ],
  },
]

/* 2 — BUSINESS SETUP OPTIONS --------------------------------------------- */

export const businessSetup = {
  super: 'BUSINESS SETUP',
  title: 'UAE Business',
  accent: 'Setup Options',
  intro:
    'We act as strategic advisors, helping clients choose the right structure, navigate regulations, and build a strong foundation for long-term success in the UAE.',
  options: [
    {
      title: 'UAE Mainland',
      super: 'UNMATCHED FLEXIBILITY',
      icon: 'building',
      href: '/business-setup/uae-mainland',
      text: 'A Mainland company is licensed by the Department of Economic Development & Tourism (DET) and allows you to conduct business anywhere within the UAE market.',
      benefits: [
        'No restrictions on business location within the UAE',
        'Ability to work with government and private sectors',
        'Flexibility to expand operations across multiple emirates',
      ],
      cta: 'Explore Mainland',
      bg: 'bgn-boxes-01.jpg',
    },
    {
      title: 'UAE Free Zone',
      super: '100% FOREIGN OWNERSHIP',
      icon: 'globe',
      href: '/business-setup/uae-free-zone',
      text: 'A Free Zone company is established within a designated economic zone, offering investor-friendly regulations, operational advantages and 100% foreign ownership.',
      benefits: [
        '100% foreign ownership',
        'Fast and simplified registration process',
        'Full repatriation of profits and capital',
      ],
      cta: 'Explore Free Zone',
      bg: 'bgn-boxes-02.jpg',
    },
    {
      title: 'UAE Offshore',
      super: 'INTERNATIONAL BUSINESS OPERATIONS',
      icon: 'shield',
      href: '/business-setup/uae-offshore',
      text: 'An offshore company is a legal entity established in a jurisdiction that allows businesses to operate internationally without conducting direct commercial activities within the UAE market.',
      benefits: [
        '100% foreign ownership',
        'No requirement for physical office space',
        'High level of confidentiality',
      ],
      cta: 'Explore Offshore',
      bg: 'bgn-boxes-03.jpg',
    },
  ],
}

/* 3 — WHY VISION / OUR STORY -------------------------------------------- */

export const ourStory = {
  badge: 'About Us',
  title: 'Our Story',
  checklist: [
    'Company formation across Mainland, Free Zone, and Offshore jurisdictions',
    'Visa processing and PRO services, managed with precision and efficiency',
    'Strategic advisory that goes beyond documentation — structure, regulations, foundation',
    'Established in 2015 — a trusted name in the UAE’s business setup landscape',
  ],
  buttonText: 'Read our full story',
  buttonHref: '/about',
  /*
   * Homepage teaser only — two sentences lifted verbatim from the document's
   * first and second paragraphs. The full three-paragraph story runs on
   * /about, which is where this section's button leads.
   */
  lead: [
    'At Vision Business Setup, we provide end-to-end business setup and corporate support services in the UAE.',
    'Established in 2015, we have grown into a trusted name in the UAE’s business setup landscape.',
  ],
  image: 'our-story-advisory.jpg',
  quote:
    'Our journey has been defined by one simple principle: putting our clients first in everything we do.',
  paragraphs: [
    'At Vision Business Setup, we provide end-to-end business setup and corporate support services in the UAE. From company formation across Mainland, Free Zone, and Offshore jurisdictions to visa processing and PRO services, we manage the entire process with precision and efficiency. Our role goes beyond documentation—we act as strategic advisors, helping clients choose the right structure, navigate regulations, and build a strong foundation for long-term success in the UAE.',
    'Established in 2015, Vision Business Setup has grown into a trusted name in the UAE’s business setup landscape. Over the years, we have had the privilege of working with high-value clients, entrepreneurs, and well-connected business networks across the region—delivering solutions that are not only efficient, but also strategically aligned with long-term success.',
    'Our journey has been defined by one simple principle: putting our clients first in everything we do.',
  ],
}

/* 5b — TRUSTED BY SOME BIGGEST NAMES (testimonials) -------------------- */

/*
 * Recreated 1:1 from the Avantage Business reference section
 * ("Trusted by some Biggest Names"). Quote copy, names, companies, ratings
 * and the avatar images are the theme's originals, kept verbatim.
 */
export const testimonials = {
  super: 'GREAT REVIEWS FOR OUR SERVICES',
  title: 'Trusted by some',
  accent: 'Biggest Names',
  items: [
    {
      image: 'img-quote-01.jpg',
      title: 'Absolutely spot-on!',
      quote:
        'Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals.',
      name: 'James Brisk',
      company: 'HSBC Bank',
      rating: 5,
    },
    {
      image: 'img-quote-02.jpg',
      title: 'Best decision ever',
      quote:
        'Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.',
      name: 'Howard McMillan',
      company: 'Hotel Berg',
      rating: 5,
    },
    {
      image: 'img-quote-03.jpg',
      title: 'Saved my Business',
      quote:
        'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.',
      name: 'Maria Gothenburg',
      company: 'Applauz Startup',
      rating: 5,
    },
  ],
}

/* 4 — WHAT SETS US APART ----------------------------------------------- */

export const whatSetsUsApart = {
  super: 'WHAT SETS US APART',
  title: 'Why founders',
  accent: 'choose Vision',
  intro:
    'At Vision Business Setup, we believe that true value lies not just in delivering a service—but in how that service is delivered.',
  cta: 'Contact Us',
  ctaHref: '#request-callback',
  items: [
    {
      icon: 'handshake-heart',
      title: 'Client-Centric Approach',
      text: 'We take the time to understand your business, your goals, and your challenges before recommending solutions. Every strategy we provide is tailored, not templated.',
    },
    {
      icon: 'badge-check',
      title: 'Uncompromised Service Quality',
      text: 'Our commitment to quality is one of the core pillars of our business. The consistent positive feedback we receive from our clients reflects our attention to detail and dedication to excellence.',
    },
    {
      icon: 'headset',
      title: 'Round-the-Clock Support',
      text: 'Unlike traditional firms, our relationship with clients does not operate within fixed hours. Our team is available beyond the conventional 9-to-5 framework, ensuring you have support whenever you need it.',
    },
    {
      icon: 'network',
      title: 'Strong Network & Industry Understanding',
      text: 'Having worked with well-established clients and networks in the UAE, we bring valuable connections and real-world expertise to every engagement.',
    },
  ],
}

/* 5 — WHO WE WORK WITH ------------------------------------------------- */

export const whoWeWorkWith = {
  super: 'WHO WE WORK WITH',
  title: 'Trusted across',
  accent: 'every industry',
  intro:
    'Our diverse client base spans multiple industries, reflecting our ability to adapt, understand, and deliver across different business environments. We have successfully supported:',
  items: [
    {
      num: '01',
      tag: 'Real Estate & Development',
      icon: 'building',
      title: 'Real estate and property development companies',
      image: 'industry-real-estate.jpg',
      desc: 'Licensing, RERA developer registrations, mainland structuring, and commercial office acquisitions in prime business hubs.',
      features: ['RERA Broker & Developer Licences', 'Land & Development Structuring', 'Commercial Office Leasing'],
    },
    {
      num: '02',
      tag: 'Food & Beverage Ventures',
      icon: 'utensils',
      title: 'Food & beverage ventures',
      image: 'industry-food-beverage.jpg',
      desc: 'Turnkey hospitality setup including Dubai Municipality food safety approvals, layout clearances, and commercial restaurant lease advisory.',
      features: ['DED Restaurant & Cafe Permits', 'Food Safety & Health Clearances', 'Liquor & Entertainment Approvals'],
    },
    {
      num: '03',
      tag: 'Trading & General Commerce',
      icon: 'briefcase',
      title: 'Trading and general commerce businesses',
      image: 'industry-trading-commerce.jpg',
      desc: 'General trading licenses, customs code clearance, warehouse leasing, and multi-currency international corporate banking.',
      features: ['General Trading Licences', 'Dubai Customs & Code Registration', 'Corporate Banking & Tax Structuring'],
    },
    {
      num: '04',
      tag: 'Salons & Lifestyle Brands',
      icon: 'sparkle',
      title: 'Salons and lifestyle brands',
      image: 'industry-salons-lifestyle.jpg',
      desc: 'Health authority clearances, specialized salon and wellness facility licensing, aesthetics permits, and luxury retail agreements.',
      features: ['Municipality & Health Approvals', 'Specialized Aesthetics Licensing', 'Prime Retail & Mall Leases'],
    },
    {
      num: '05',
      tag: 'Manpower & Workforce Supply',
      icon: 'users',
      title: 'Manpower and workforce supply companies',
      image: 'industry-manpower-workforce.jpg',
      desc: 'MOHRE labor supply licensing, bank guarantee compliance, quota approvals, and bulk corporate visa mobility across UAE emirates.',
      features: ['MOHRE Labour Supply Licences', 'Quota & Bank Guarantee Approvals', 'Bulk Visa & Workforce Mobility'],
    },
  ],
  closing:
    'This cross-industry experience allows us to offer practical insights and tailored strategies that go beyond standard setup services.',
}

/* 6 — OUR SERVICES -------------------------------------------------- */

export const ourServices = {
  super: 'OUR SERVICES',
  title: 'Everything your company needs,',
  accent: 'under one roof',
  intro: 'Licensing, visas, banking and the day-to-day compliance work that keeps a UAE company running \u2014 handled end to end by one team.',
  cta: 'Request a Callback',
  ctaHref: '#request-callback',
  groups: [
    {
      icon: 'id-card',
      title: 'Licence',
      items: ['License Renewal', 'License Modification', 'License Cancellation', 'License Freezing'],
    },
    {
      icon: 'passport',
      title: 'Visa',
      items: ['Residence Visa', 'Dependent Visa', 'Remote Work Visa', 'Golden Visa', 'Freelance Visa', 'Domestic Worker Visa'],
    },
    {
      icon: 'bank',
      title: 'Finance & Banking',
      items: ['Bank Account Opening', 'Corporate Tax Guide', 'Bookkeeping & VAT Registration'],
    },
    {
      icon: 'grid',
      title: 'Other',
      items: ['VIP Medical & Emirates ID Assistance', 'Customs Registration', 'Office Spaces'],
    },
  ],
}

/* 7 — OUR APPROACH / COMMITMENT ---------------------------------- */

export const commitment = {
  super: 'OUR COMMITMENT',
  title: 'Partners well beyond',
  accent: 'day one',
  text: 'At Vision Business Setup, we don’t just help you start a business—we partner with you throughout your journey. From initial setup to ongoing support, our focus remains on delivering value, building trust, and ensuring your business operates with confidence in the UAE.',
  cta: 'Request a Callback',
  ctaHref: '#request-callback',
  image: 'our-commitment-clean.avif',
  closing: {
    tagline: 'Every Business starts with Vision.',
    lines: [
      'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication.',
      'Connect with Vision Business Setup and experience a service built around you.',
    ],
  },
}

/* 8 — OUR FOUNDER ---------------------------------------------- */

export const founder = {
  super: 'OUR FOUNDER',
  name: 'Viekram Sadwani',
  role: 'Founder, Vision Business Setup',
  initials: 'VS',
  quote: 'Successful businesses are built on strong relationships, clear understanding, and a commitment to solving real challenges.',
  /*
   * `heading` carries the document's own sub-headings ("A People-First
   * Approach", "Commitment Beyond Expectations"); paragraphs without one
   * simply continue the section.
   */
  paragraphs: [
    {
      text: 'Vision Business Setup is led by Viekram Sadwani, a seasoned professional with deep-rooted experience in the UAE market since 2008. He began his career in the real estate sector, gaining valuable insights into the region’s business landscape before establishing Vision Business Setup in 2015.',
    },
    {
      text: 'With a strong understanding of how businesses operate in the UAE, Viekram built the company with a clear focus—delivering reliable, high-quality solutions that genuinely support clients in achieving their goals.',
    },
    {
      heading: 'A People-First Approach',
      text: 'What distinguishes Viekram’s leadership is his genuine, people-centric mindset. He believes that successful businesses are built on strong relationships, clear understanding, and a commitment to solving real challenges. This philosophy continues to shape the way Vision Business Setup engages with every client.',
    },
    {
      heading: 'Commitment Beyond Expectations',
      text: 'Viekram is known for his hands-on approach and unwavering dedication to service excellence. He consistently goes beyond conventional expectations to ensure that every client receives not just a service, but a complete and dependable experience.',
    },
    {
      text: 'His focus on quality, attention to detail, and commitment to delivering results have become foundational principles within the organization—setting a standard that is increasingly rare in today’s fast-paced business environment.',
    },
  ],
}

/* 9 — CORE VALUES ------------------------------------------- */

export const coreValues = {
  super: 'OUR CORE VALUES',
  title: 'What we stand',
  accent: 'behind',
  /* The document gives no introductory line for this section, so none is shown. */
  subtitle: '',
  items: [
    {
      num: '01',
      icon: 'shield',
      title: 'Trust',
      text: 'We build long-term relationships through honesty, reliability, and consistency.',
      image: 'trust.jpg',
    },
    {
      num: '02',
      icon: 'eye',
      title: 'Transparency',
      text: 'Clear communication and straightforward processes are at the heart of how we operate.',
      image: 'transparency.jpg',
    },
    {
      num: '03',
      icon: 'chat',
      title: 'Understanding',
      text: 'We listen before we advise—ensuring every solution is aligned with your unique needs.',
      image: 'understanding.jpg',
    },
    {
      num: '04',
      icon: 'puzzle',
      title: 'Tailored Solutions',
      text: 'No two businesses are the same. Our approach reflects that in every recommendation we make.',
      image: 'tailored-solutions.jpg',
    },
    {
      num: '05',
      icon: 'star',
      title: 'Quality Service',
      text: 'We maintain high standards in every interaction, every process, and every outcome.',
      image: 'quality-service.jpg',
    },
    {
      num: '06',
      icon: 'sync',
      title: 'Reliability & Consistency',
      text: 'Our clients depend on us—and we deliver, every time.',
      image: 'reliability.jpg',
    },
    {
      num: '07',
      icon: 'route',
      title: 'End-to-End Support',
      text: 'From initial idea to operational launch, we stay with you at every step.',
      image: 'end-to-end-support.jpg',
    },
  ],
}

/* 10 — STRONG CTA BANNER ---------------------------------- */

export const ctaBanner = {
  super: 'EVERY BUSINESS STARTS WITH VISION',
  title: 'Speak with a Vision Business Setup consultant',
  text: 'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity and dedication.',
  cta: 'Request a Callback',
  ctaHref: '#request-callback',
  bg: 'bgn-searching.jpg',
}

/* 11 — REQUEST A CALLBACK FORM --------------------------- */

export const callbackForm = {
  super: 'EVERY BUSINESS STARTS WITH VISION',
  title: 'Request a',
  accent: 'Callback',
  text: 'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication. Connect with Vision Business Setup and experience a service built around you.',
  points: [
    'Round-the-Clock Support — beyond the conventional 9-to-5 framework',
    'Tailored Solutions — every strategy is tailored, not templated',
    'End-to-End Support — from initial idea to operational launch',
  ],
  fields: [
    { name: 'name', label: 'Full name', type: 'text', placeholder: 'e.g. Mohammed Al Mansoori', autoComplete: 'name', required: true },
    { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+971 50 000 0000', autoComplete: 'tel', required: true },
    { name: 'email', label: 'Email address', type: 'email', placeholder: 'mohammed@example.com', autoComplete: 'email', required: true },
    { name: 'message', label: 'How can we help?', type: 'textarea', placeholder: 'Tell us about your business setup requirements...', required: false },
  ],
  submitLabel: 'Request a Callback',
}
