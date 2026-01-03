// Portfolio image mapping by category
export interface PortfolioImage {
  image: string;
  title: string;
  category: string;
}

// Portfolio images by category from public/portfolio folder
export const portfolioImages: Record<string, PortfolioImage[]> = {
  'Weddings': [
    { image: '/portfolio/wedding/wedding_3.jpg', title: 'Wedding Moments', category: 'Weddings' },
    { image: '/portfolio/wedding/wedding_4.jpg', title: 'Wedding Reception', category: 'Weddings' },
    { image: '/portfolio/wedding/wedding_5.jpg', title: 'Wedding Celebration', category: 'Weddings' },
    { image: '/portfolio/wedding/wedding_6.jpg', title: 'Wedding Rituals', category: 'Weddings' },
  ],
  'Pre-Wedding': [
    { image: '/portfolio/pre-wedding/pre_wedding.jpg', title: 'Pre-Wedding Shoot', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_2.jpg', title: 'Couple Photography', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_3.jpg', title: 'Romantic Shoot', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_4.JPG', title: 'Engagement Session', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_5.jpg', title: 'Couple Moments', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_6.jpg', title: 'Pre-Wedding Story', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_7.jpg', title: 'Love Story', category: 'Pre-Wedding' },
  ],
  'Kids / Baby': [
    { image: '/portfolio/kids and baby/baby_1.JPG', title: 'Baby Portrait', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_2.JPG', title: 'Kids Portrait', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_3.JPG', title: 'Baby Moments', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_4.JPG', title: 'Children Photography', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_5.JPG', title: 'Baby Session', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_6.JPG', title: 'Kids Photography', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_7.JPG', title: 'Baby Portrait Session', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_8.JPG', title: 'Children Portrait', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/childeren.JPG', title: 'Kids Session', category: 'Kids / Baby' },
  ],
  'Candid': [
    { image: '/portfolio/candid/candid_2.JPG', title: 'Candid Moments', category: 'Candid' },
    { image: '/portfolio/candid/candid_7.jpg', title: 'Candid Shot', category: 'Candid' },
    { image: '/portfolio/candid/candid_8.jpg', title: 'Natural Moments', category: 'Candid' },
    { image: '/portfolio/candid/candid_9.JPG', title: 'Candid Photography', category: 'Candid' },
    { image: '/portfolio/candid/candid_12.jpg', title: 'Unscripted Moments', category: 'Candid' },
    { image: '/portfolio/candid/candid_14.jpg', title: 'Candid Capture', category: 'Candid' },
    { image: '/portfolio/candid/wedding_1.jpg', title: 'wedding Candid', category: 'Candid' },
    { image: '/portfolio/candid/wedding_2.JPG', title: 'Candid wedding', category: 'Candid' },
  ],
  'Studio': [
    { image: '/portfolio/studio/jpeg.jpeg', title: 'Studio Portrait', category: 'Studio' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Cover.jpg', title: 'Studio Session', category: 'Studio' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_001.jpg', title: 'Professional Portrait', category: 'Studio' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_002.jpg', title: 'Studio Photography', category: 'Studio' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_003.jpg', title: 'Engagement Photography', category: 'Studio' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_004.jpg', title: 'Studio Portrait Session', category: 'Studio' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_01_Cover.jpg', title: 'Cover Portrait', category: 'Studio' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_02.jpg', title: 'Studio Engagement', category: 'Studio' },
  ],
  'Portraits': [
    { image: '/portfolio/studio/jpeg.jpeg', title: 'Portrait Session', category: 'Portraits' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Cover.jpg', title: 'Professional Portrait', category: 'Portraits' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_001.jpg', title: 'Studio Portrait', category: 'Portraits' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_002.jpg', title: 'Portrait Photography', category: 'Portraits' },
  ],
  'Events': [
    { image: '/portfolio/wedding/wedding_3.jpg', title: 'Event Photography', category: 'Events' },
    { image: '/portfolio/wedding/wedding_4.jpg', title: 'Event Coverage', category: 'Events' },
    { image: '/portfolio/wedding/wedding_5.jpg', title: 'Celebration Event', category: 'Events' },
    { image: '/portfolio/wedding/wedding_6.jpg', title: 'Event Moments', category: 'Events' },
    { image: '/portfolio/candid/wedding_1.jpg', title: 'Candid Event', category: 'Events' },
    { image: '/portfolio/candid/wedding_2.JPG', title: 'Event Candid', category: 'Events' },
  ],
  'Photo Editing': [
    { image: '/portfolio/photo editing/candid_1.jpg', title: 'Photo Editing', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_3.jpg', title: 'Retouching', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_4.jpg', title: 'Color Correction', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_5.jpg', title: 'Photo Enhancement', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_6.JPG', title: 'Professional Editing', category: 'Photo Editing' },
  ],
};

// Get all portfolio items
export function getAllPortfolioItems(): PortfolioImage[] {
  return Object.values(portfolioImages).flat();
}

// Get portfolio items by category
export function getPortfolioItemsByCategory(category: string): PortfolioImage[] {
  if (category === 'All') {
    return getAllPortfolioItems();
  }
  return portfolioImages[category] || [];
}

// Get featured portfolio images for home page (mix of categories) - expanded with more visible images
export function getFeaturedPortfolioImages(): string[] {
  return [
    '/portfolio/pre-wedding/pre_wedding.jpg',
    '/portfolio/kids and baby/baby_1.JPG',
    '/portfolio/wedding/wedding_3.jpg',
    '/portfolio/pre-wedding/pre_wedding_5.jpg',
    '/portfolio/kids and baby/baby_2.JPG',
    '/portfolio/candid/candid_2.JPG',
    '/portfolio/pre-wedding/pre_wedding_3.jpg',
    '/portfolio/wedding/wedding_4.jpg',
    '/portfolio/kids and baby/baby_3.JPG',
    '/portfolio/candid/candid_7.jpg',
    '/portfolio/studio/jpeg.jpeg',
  ];
}

// Get service images
export function getServiceImages() {
  return {
    'Wedding Photography': '/portfolio/wedding/wedding_3.jpg',
    'Pre-Wedding Shoots': '/portfolio/pre-wedding/pre_wedding.jpg',
    'Kids & Baby Photography': '/portfolio/kids and baby/baby_1.JPG',
    'Candid Photography': '/portfolio/candid/candid_2.JPG',
    'Studio Portraits': '/portfolio/studio/jpeg.jpeg',
    'Photo Editing & Retouching': '/portfolio/photo editing/candid_6.JPG',
  };
}

