// Portfolio image mapping by category
export interface PortfolioImage {
  image: string;
  title: string;
  category: string;
}

// Portfolio images by category from public/portfolio folder
export const portfolioImages: Record<string, PortfolioImage[]> = {
  'Weddings': [
    { image: '/portfolio/wedding/wedding_3.webp', title: 'Wedding Moments', category: 'Weddings' },
    { image: '/portfolio/wedding/wedding_4.webp', title: 'Wedding Reception', category: 'Weddings' },
    { image: '/portfolio/wedding/wedding_5.webp', title: 'Wedding Celebration', category: 'Weddings' },
    { image: '/portfolio/wedding/wedding_6.webp', title: 'Wedding Rituals', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Cover.webp', title: 'Engagement Cover', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_001.webp', title: 'Engagement Page 1', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_002.webp', title: 'Engagement Page 2', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_003.webp', title: 'Engagement Page 3', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_004.webp', title: 'Engagement Page 4', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_005.webp', title: 'Engagement Page 5', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_006.webp', title: 'Engagement Page 6', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_007.webp', title: 'Engagement Page 7', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_008.webp', title: 'Engagement Page 8', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_009.webp', title: 'Engagement Page 9', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_010.webp', title: 'Engagement Page 10', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_011.webp', title: 'Engagement Page 11', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_012.webp', title: 'Engagement Page 12', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_013.webp', title: 'Engagement Page 13', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_014.webp', title: 'Engagement Page 14', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_015.webp', title: 'Engagement Page 15', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_016.webp', title: 'Engagement Page 16', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_017.webp', title: 'Engagement Page 17', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_018.webp', title: 'Engagement Page 18', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikoduku/Engagement Gyaneshwar Jhansi_Page_030.webp', title: 'Engagement Page 30', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_01_Cover.webp', title: 'Engagement Cover 2', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_02.webp', title: 'Engagement Page 2', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_003.webp', title: 'Engagement Page 3', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_004.webp', title: 'Engagement Page 4', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_005 jpg.webp', title: 'Engagement Page 5', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_006.webp', title: 'Engagement Page 6', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_007.webp', title: 'Engagement Page 7', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_008.webp', title: 'Engagement Page 8', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_009jpg.webp', title: 'Engagement Page 9', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi ext_Page_014.webp', title: 'Engagement Page 14', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_010jpg.webp', title: 'Engagement Page 10', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_011jpg.webp', title: 'Engagement Page 11', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_012jpg.webp', title: 'Engagement Page 12', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_013jpg.webp', title: 'Engagement Page 13', category: 'Weddings' },
    { image: '/portfolio/studio/Pellikuthuru/Engagement Gyaneshwar Jhansi_Page_015.webp', title: 'Engagement Page 15', category: 'Weddings' },
  ],
  'Pre-Wedding': [
    { image: '/portfolio/pre-wedding/pre_wedding.webp', title: 'Pre-Wedding Shoot', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_2.webp', title: 'Couple Photography', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_3.webp', title: 'Romantic Shoot', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_4.webp', title: 'Engagement Session', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_5.webp', title: 'Couple Moments', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_6.webp', title: 'Pre-Wedding Story', category: 'Pre-Wedding' },
    { image: '/portfolio/pre-wedding/pre_wedding_7.webp', title: 'Love Story', category: 'Pre-Wedding' },
  ],
  'Kids / Baby': [
    { image: '/portfolio/kids and baby/baby_1.webp', title: 'Baby Portrait', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_2.webp', title: 'Kids Portrait', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_3.webp', title: 'Baby Moments', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_4.webp', title: 'Children Photography', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_5.webp', title: 'Baby Session', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_6.webp', title: 'Kids Photography', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_7.webp', title: 'Baby Portrait Session', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/baby_8.webp', title: 'Children Portrait', category: 'Kids / Baby' },
    { image: '/portfolio/kids and baby/childeren.webp', title: 'Kids Session', category: 'Kids / Baby' },
  ],
  'Candid': [
    { image: '/portfolio/candid/candid_2.webp', title: 'Candid Moments', category: 'Candid' },
    { image: '/portfolio/candid/candid_7.webp', title: 'Candid Shot', category: 'Candid' },
    { image: '/portfolio/candid/candid_8.webp', title: 'Natural Moments', category: 'Candid' },
    { image: '/portfolio/candid/candid_9.webp', title: 'Candid Photography', category: 'Candid' },
    { image: '/portfolio/candid/candid_12.webp', title: 'Unscripted Moments', category: 'Candid' },
    { image: '/portfolio/candid/candid_14.webp', title: 'Candid Capture', category: 'Candid' },
    { image: '/portfolio/candid/wedding_1.webp', title: 'wedding Candid', category: 'Candid' },
    { image: '/portfolio/candid/wedding_2.webp', title: 'Candid wedding', category: 'Candid' },
  ],
  'Studio': [
    { image: '/portfolio/studio/jpeg.jpeg', title: 'Studio Portrait', category: 'Studio' },
  ],
  'Portraits': [
    { image: '/portfolio/studio/jpeg.jpeg', title: 'Portrait Session', category: 'Portraits' },
  ],
  'Events': [
    { image: '/portfolio/wedding/wedding_3.webp', title: 'Event Photography', category: 'Events' },
    { image: '/portfolio/wedding/wedding_4.webp', title: 'Event Coverage', category: 'Events' },
    { image: '/portfolio/wedding/wedding_5.webp', title: 'Celebration Event', category: 'Events' },
    { image: '/portfolio/wedding/wedding_6.webp', title: 'Event Moments', category: 'Events' },
    { image: '/portfolio/candid/wedding_1.webp', title: 'Candid Event', category: 'Events' },
    { image: '/portfolio/candid/wedding_2.webp', title: 'Event Candid', category: 'Events' },
  ],
  'Photo Editing': [
    { image: '/portfolio/photo editing/candid_1.webp', title: 'Photo Editing', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_3.webp', title: 'Retouching', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_4.webp', title: 'Color Correction', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_5.webp', title: 'Photo Enhancement', category: 'Photo Editing' },
    { image: '/portfolio/photo editing/candid_6.webp', title: 'Professional Editing', category: 'Photo Editing' },
  ],
};

// Get all portfolio items (excluding Pellikoduku and Pellikuthuru photos from Studio, and removing duplicates)
export function getAllPortfolioItems(): PortfolioImage[] {
  const allItems = Object.values(portfolioImages).flat();
  // Filter out Pellikoduku and Pellikuthuru photos (they should only appear in Weddings section)
  const filteredItems = allItems.filter(item => 
    !item.image.includes('Pellikoduku') && !item.image.includes('Pellikuthuru')
  );
  
  // Remove duplicates based on image path - keep the first occurrence
  const seenImages = new Set<string>();
  const uniqueItems: PortfolioImage[] = [];
  
  for (const item of filteredItems) {
    if (!seenImages.has(item.image)) {
      seenImages.add(item.image);
      uniqueItems.push(item);
    }
  }
  
  return uniqueItems;
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
    '/portfolio/pre-wedding/pre_wedding.webp',
    '/portfolio/kids and baby/baby_1.webp',
    '/portfolio/wedding/wedding_3.webp',
    '/portfolio/pre-wedding/pre_wedding_5.webp',
    '/portfolio/kids and baby/baby_2.webp',
    '/portfolio/candid/candid_2.webp',
    '/portfolio/pre-wedding/pre_wedding_3.webp',
    '/portfolio/wedding/wedding_4.webp',
    '/portfolio/kids and baby/baby_3.webp',
    '/portfolio/candid/candid_7.webp',
    '/portfolio/studio/jpeg.jpeg',
  ];
}

// Get service images
export function getServiceImages() {
  return {
    'Wedding Photography': '/portfolio/wedding/wedding_3.webp',
    'Pre-Wedding Shoots': '/portfolio/pre-wedding/pre_wedding.webp',
    'Kids & Baby Photography': '/portfolio/kids and baby/baby_1.webp',
    'Candid Photography': '/portfolio/candid/candid_2.webp',
    'Studio Portraits': '/portfolio/studio/jpeg.jpeg',
    'Photo Editing & Retouching': '/portfolio/photo editing/candid_6.webp',
  };
}

