export interface ShopProduct {
  id: string;
  name: string;
  category: 'grinders' | 'espresso_machines' | 'drippers_kettles' | 'tea_ware' | 'artisan_beans_leaves';
  price: string;
  originalPrice?: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  vendor: string;
  badge?: string;
  affiliateUrl: string;
  description: string;
  keyFeatures: string[];
}

export const FEATURED_AFFILIATE_PRODUCTS: ShopProduct[] = [
  {
    id: 'prod-fellow-ode-v2',
    name: 'Fellow Ode Brew Grinder Gen 2',
    category: 'grinders',
    price: '$295.00',
    originalPrice: '$345.00',
    rating: 4.9,
    reviewsCount: 1420,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    vendor: 'Fellow Products',
    badge: 'Best Pour-Over Grinder',
    affiliateUrl: 'https://www.amazon.com/s?k=fellow+ode+brew+grinder+gen+2',
    description: 'Direct-drive motor with 64mm stainless steel flat burrs engineered specifically for pour-over, drip, and cold brew clarity.',
    keyFeatures: ['64mm Flat Burrs', 'Auto Stop Sensor', 'Anti-Static Technology', 'Quiet Operation']
  },
  {
    id: 'prod-breville-barista-touch',
    name: 'Breville Barista Touch Impress Espresso Machine',
    category: 'espresso_machines',
    price: '$1,499.95',
    rating: 4.95,
    reviewsCount: 890,
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop&q=80',
    vendor: 'Breville',
    badge: 'Prosumer Choice',
    affiliateUrl: 'https://www.amazon.com/s?k=breville+barista+touch+impress',
    description: 'Assisted tamping with real-time feedback, microfoam milk hands-free auto steam wand, and 3-second ThermoJet heat up.',
    keyFeatures: ['Impression Assisted Tamping', 'Auto MilQ Foam', 'ThermoJet 3s Heat', 'Touch Screen Interface']
  },
  {
    id: 'prod-baratza-encore-esp',
    name: 'Baratza Encore ESP Electric Conical Burr Grinder',
    category: 'grinders',
    price: '$199.95',
    rating: 4.88,
    reviewsCount: 2150,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
    vendor: 'Baratza',
    badge: 'Best Value Espresso Grinder',
    affiliateUrl: 'https://www.amazon.com/s?k=baratza+encore+esp+grinder',
    description: 'Re-engineered macro and micro adjustment collar allowing seamless transition from fine espresso extraction to coarse cold brew steeping.',
    keyFeatures: ['M2 Conical Burrs', 'Micro-Adjust Collar', 'Dosage Cup Included', 'High Torque Motor']
  },
  {
    id: 'prod-fellow-stagg-ekg',
    name: 'Fellow Stagg EKG Temperature Control Kettle',
    category: 'drippers_kettles',
    price: '$165.00',
    originalPrice: '$195.00',
    rating: 4.98,
    reviewsCount: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
    vendor: 'Fellow Products',
    badge: 'Barista Champion Standard',
    affiliateUrl: 'https://www.amazon.com/s?k=fellow+stagg+ekg+electric+gooseneck+kettle',
    description: 'Precision gooseneck spout engineered for counterbalanced, steady flow rate control with to-the-degree variable temperature.',
    keyFeatures: ['PID Temp Stability', '60-Min Temperature Hold', 'Brew Stopwatch', 'Counterbalanced Handle']
  },
  {
    id: 'prod-hario-v60-ceramic-set',
    name: 'Hario V60 Ceramic Pour-Over Dripper & Server Set',
    category: 'drippers_kettles',
    price: '$38.50',
    rating: 4.92,
    reviewsCount: 4100,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80',
    vendor: 'Hario Japan',
    badge: 'Drip Classic',
    affiliateUrl: 'https://www.amazon.com/s?k=hario+v60+ceramic+pour+over+set',
    description: '60-degree conical dripper with interior spiral ribs allowing maximum bed expansion and complete air turbulence during pouring.',
    keyFeatures: ['Arita Ware Ceramic', 'Heat Retentive Glass', 'Spiral Internal Ribs', '02 Size (1-4 Cups)']
  },
  {
    id: 'prod-kyoto-gaiwan-set',
    name: 'Hand-Blown Borosilicate Glass Gongfu Gaiwan Set',
    category: 'tea_ware',
    price: '$45.00',
    rating: 4.88,
    reviewsCount: 410,
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    vendor: 'Artisan Glassware',
    badge: 'Tea Connoisseur Essential',
    affiliateUrl: 'https://www.amazon.com/s?k=glass+gongfu+gaiwan+tea+set',
    description: 'Heat-resistant double-walled glass gaiwan allowing full visual appreciation of expanding tea leaves during Gongfu steeping.',
    keyFeatures: ['150ml Ideal Capacity', 'Crystal Clear Transparency', 'Heat Resistant Handle', 'Includes Pitcher & Strainer']
  },
  {
    id: 'prod-chasen-bamboo-whisk-set',
    name: 'Takayama Artisan Bamboo Chasen & Chawan Matcha Set',
    category: 'tea_ware',
    price: '$34.99',
    rating: 4.94,
    reviewsCount: 1890,
    imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&auto=format&fit=crop&q=80',
    vendor: 'Takayama Japan',
    badge: 'Authentic 100-Prong Whisk',
    affiliateUrl: 'https://www.amazon.com/s?k=bamboo+matcha+whisk+chasen+set',
    description: 'Hand-carved 100-prong white bamboo whisk crafted to create silky, micro-bubble froth on ceremonial Japanese green teas.',
    keyFeatures: ['100-Prong White Bamboo', 'Includes Whisk Stand', 'Bamboo Chashaku Scoop', 'Handmade Ceramic Bowl']
  },
  {
    id: 'prod-geisha-panama-beans',
    name: 'Panama La Esmeralda Geisha Whole Beans (250g)',
    category: 'artisan_beans_leaves',
    price: '$65.00',
    rating: 4.99,
    reviewsCount: 230,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80',
    vendor: 'Hacienda La Esmeralda',
    badge: 'World Auction Winner',
    affiliateUrl: 'https://www.amazon.com/s?k=panama+geisha+coffee+beans',
    description: 'Ultra-rare micro-lot Geisha cultivated at 1,800m altitude in Boquete, Panama. Explosive floral jasmine and bergamot intensity.',
    keyFeatures: ['Single Estate Micro-Lot', 'Light Air Roast', 'Flavors: Jasmine, Peach, Bergamot', 'Roasted-to-Order']
  },
  {
    id: 'prod-matcha-ceremonial-tin',
    name: 'Uji Pinnacle Harvest Organic Ceremonial Matcha (50g)',
    category: 'artisan_beans_leaves',
    price: '$42.00',
    rating: 4.96,
    reviewsCount: 780,
    imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&auto=format&fit=crop&q=80',
    vendor: 'Kyoto Imperial Estate',
    badge: 'First Harvest 2026',
    affiliateUrl: 'https://www.amazon.com/s?k=uji+ceremonial+matcha+green+tea',
    description: 'Shade-grown for 30 days under straw mats in Uji, Kyoto. Microscopic stone ground for intense umami and vivid emerald green foam.',
    keyFeatures: ['JAS Organic Certified', '100% Tencha First-Harvest', 'High L-Theanine', 'Nitrogen-Sealed Tin']
  },
  {
    id: 'prod-argentine-mate-gourd-set',
    name: 'Argentine Handmade Calabash Gourd & Bombilla Straw Set',
    category: 'tea_ware',
    price: '$29.95',
    rating: 4.91,
    reviewsCount: 640,
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    vendor: 'Gaucho Supply',
    badge: 'South American Tradition',
    affiliateUrl: 'https://www.amazon.com/s?k=yerba+mate+gourd+and+bombilla+set',
    description: 'Natural cured calabash gourd wrapped in genuine leather with an alpaca silver rim and stainless double-filter bombilla straw.',
    keyFeatures: ['Natural Cured Gourd', 'Alpaca Silver Rim', 'Surgical Steel Straw', 'Thermal Leather Wrap']
  }
];
