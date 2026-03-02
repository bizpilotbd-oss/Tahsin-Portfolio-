export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: { name: string; bgClass: string; textClass: string }[];
  overlayClass: string;
  hoverTextClass: string;
  results: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: 'techstartup-organic-growth',
    title: 'TechStartup Organic Growth',
    shortDescription: 'Increased organic traffic by 300% in 6 months through technical SEO optimization and a targeted content marketing strategy.',
    fullDescription: 'This B2B SaaS startup was struggling to gain visibility in a highly competitive market. They had a great product but their website was practically invisible to search engines due to technical issues and a lack of targeted content.',
    challenge: 'The main challenge was overcoming a deeply flawed site architecture that prevented search engines from crawling their pages effectively, coupled with a complete lack of authoritative backlinks in their niche.',
    solution: 'I conducted a comprehensive technical SEO audit, restructured their site architecture, and implemented a robust content strategy focused on high-intent, long-tail keywords. We also launched a targeted outreach campaign to build high-quality backlinks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450',
    tags: [
      { name: 'SEO', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-400' },
      { name: 'Content Strategy', bgClass: 'bg-white/5', textClass: 'text-zinc-300' }
    ],
    overlayClass: 'bg-emerald-500/20',
    hoverTextClass: 'hover:text-emerald-400',
    results: [
      '300% Increase in Organic Traffic',
      'Page 1 Rankings for 50+ Target Keywords',
      '120% Increase in Inbound Leads'
    ]
  },
  {
    id: 'ecommerce-roas-scaling',
    title: 'E-Commerce ROAS Scaling',
    shortDescription: 'Restructured Google Ads account and implemented smart bidding, resulting in a 4.5x ROAS and 150% increase in sales.',
    fullDescription: 'A mid-sized e-commerce brand was burning through their ad budget with a ROAS (Return on Ad Spend) of just 1.2x. Their campaigns were poorly structured, targeting was too broad, and they were bleeding money on irrelevant search terms.',
    challenge: 'The account had years of messy historical data. We needed to restructure the entire account without completely halting their current (albeit inefficient) revenue stream during the transition.',
    solution: 'I implemented a phased restructuring approach, moving them to a SKAG (Single Keyword Ad Group) structure for top performers, and heavily utilizing negative keyword lists. We then transitioned to value-based smart bidding once we had enough clean conversion data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    tags: [
      { name: 'PPC', bgClass: 'bg-cyan-500/10', textClass: 'text-cyan-400' },
      { name: 'Google Ads', bgClass: 'bg-white/5', textClass: 'text-zinc-300' }
    ],
    overlayClass: 'bg-cyan-500/20',
    hoverTextClass: 'hover:text-cyan-400',
    results: [
      '4.5x Return on Ad Spend (ROAS)',
      '150% Increase in Monthly Sales',
      '40% Reduction in Cost Per Acquisition (CPA)'
    ]
  },
  {
    id: 'saas-conversion-redesign',
    title: 'SaaS Conversion Redesign',
    shortDescription: 'Designed and developed a high-converting landing page that decreased bounce rate by 40% and doubled sign-ups.',
    fullDescription: 'A growing SaaS company was driving plenty of traffic to their landing page, but visitors weren\'t converting. The page was slow, the messaging was confusing, and the call-to-action was buried.',
    challenge: 'We needed to completely overhaul the user experience and messaging while ensuring the new page loaded lightning-fast to prevent drop-offs.',
    solution: 'I redesigned the page with a clear, benefit-driven hierarchy and rebuilt it from scratch using React and Tailwind CSS for maximum performance. We implemented A/B testing to continuously refine the headline and CTA placement.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800&h=450',
    tags: [
      { name: 'Web Dev', bgClass: 'bg-purple-500/10', textClass: 'text-purple-400' },
      { name: 'React', bgClass: 'bg-white/5', textClass: 'text-zinc-300' }
    ],
    overlayClass: 'bg-purple-500/20',
    hoverTextClass: 'hover:text-purple-400',
    results: [
      '40% Decrease in Bounce Rate',
      '100% Increase in Free Trial Sign-ups',
      'Page Load Time Reduced to < 1s'
    ]
  },
  {
    id: 'local-business-domination',
    title: 'Local Business Domination',
    shortDescription: 'End-to-end digital transformation including a new website, local SEO, and Meta ads to dominate the local market.',
    fullDescription: 'A local service business was relying entirely on word-of-mouth and traditional print advertising. They were losing market share to newer, more digitally-savvy competitors.',
    challenge: 'They had zero digital footprint. We had to build their online presence from the ground up and establish trust in a market where their competitors already had hundreds of reviews.',
    solution: 'I built a fast, mobile-optimized website, claimed and optimized their Google Business Profile, and launched a targeted local Meta Ads campaign offering a compelling introductory offer to drive immediate foot traffic.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800&h=450',
    tags: [
      { name: 'Full-Stack', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-400' },
      { name: 'Marketing', bgClass: 'bg-white/5', textClass: 'text-zinc-300' }
    ],
    overlayClass: 'bg-emerald-500/20',
    hoverTextClass: 'hover:text-emerald-400',
    results: [
      '#1 Ranking in Local Map Pack',
      '300+ New Customer Leads in Month 1',
      '5x Return on Marketing Investment'
    ]
  }
];
