import { FEATURED_AFFILIATE_PRODUCTS } from './affiliateProducts';

export interface FlavorProfile {
  sweetness: number; // 0-100
  acidity: number;   // 0-100
  bitterness: number;// 0-100
  body: number;      // 0-100
  aroma: number;     // 0-100
}

export interface BrewingParams {
  waterTempC: number;
  waterTempF: number;
  ratioGramsPerLiter: string;
  steepTimeMinutes: string;
  grindSize: string;
  recommendedMethod: string;
}

export interface AffiliateLink {
  id: string;
  title: string;
  type: 'beans_or_leaves' | 'equipment' | 'accessory';
  price: string;
  rating: number;
  image: string;
  vendor: string;
  url: string;
  badge?: string;
}

export interface HealthBenefit {
  title: string;
  description: string;
  scientificBasis: string;
  iconName: string;
}

export interface Beverage {
  id: string;
  name: string;
  nativeName?: string;
  category: 'coffee' | 'green_tea' | 'black_tea' | 'herbal_botanical' | 'fermented_specialty';
  origin: string;
  tagline: string;
  description: string;
  culturalHistory: string;
  caffeineMgPerServing: number; // in typical 8oz/240ml serving or single shot
  servingSize: string;
  acidityLevel: 'Low' | 'Moderate' | 'High';
  flavorProfile: FlavorProfile;
  tastingNotes: string[];
  healthBenefits: HealthBenefit[];
  contraindications: string[]; // "Who Should Avoid / Use Caution"
  brewingParams: BrewingParams;
  affiliateProducts: AffiliateLink[];
  imageUrl: string;
  featured?: boolean;
  popularScore: number;
  seoTitle: string;
  seoDescription: string;
}

const RAW_BEVERAGES_DATA: Beverage[] = [
  {
    id: 'espresso-single-origin',
    name: 'Single-Origin Ethiopian Espresso',
    nativeName: 'የኢትዮጵያ ቡና (Bunna)',
    category: 'coffee',
    origin: 'Yirgacheffe, Ethiopia',
    tagline: 'Bright floral, citrus, and berry notes extracted under 9 bars of pressure.',
    description: 'Concentrated coffee brewed by forcing near-boiling water through finely-ground light-to-medium roasted Ethiopian Arabica beans. Known as the birthplace of coffee, Yirgacheffe espresso delivers unmatched clarity, jasmine aroma, and sparkling stone fruit acidity.',
    culturalHistory: 'Coffee originated in the ancient forests of Ethiopia, where the legend of Kaldi the goat herder began around 850 AD. Ethiopian espresso represents the fusion of ancient botanical heritage with Italian high-pressure extraction technology.',
    caffeineMgPerServing: 64,
    servingSize: '1 oz (30 ml shot)',
    acidityLevel: 'High',
    flavorProfile: {
      sweetness: 65,
      acidity: 90,
      bitterness: 45,
      body: 75,
      aroma: 95
    },
    tastingNotes: ['Jasmine Floral', 'Bergamot Citrus', 'Blueberry', 'Honeycomb'],
    healthBenefits: [
      {
        title: 'Cognitive Speed & Alertness',
        description: 'Rapidly absorbed caffeine blocks adenosine receptors to boost mental clarity and reaction times.',
        scientificBasis: 'Contains high chlorogenic acid (CGA) concentrations that improve endothelial function and metabolic rate.',
        iconName: 'Zap'
      },
      {
        title: 'Rich Antioxidant Density',
        description: 'Provides more dietary antioxidants per serving than most fruits and vegetables.',
        scientificBasis: 'Polyphenols reduce systemic oxidative stress and systemic neuro-inflammation.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Individuals with severe Acid Reflux (GERD) due to high titratable acidity.',
      'Those with caffeine hypersensitivity or panic/anxiety disorders.',
      'Pregnant women in 3rd trimester (limit caffeine to <200mg/day).'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '1:2 Brew Ratio (18g in -> 36g out)',
      steepTimeMinutes: '25-30 seconds',
      grindSize: 'Ultra-Fine Espresso',
      recommendedMethod: '9-Bar Espresso Machine'
    },
    affiliateProducts: [
      {
        id: 'ethiopian-yirgacheffe-beans',
        title: 'Freshly Roasted Organic Yirgacheffe Whole Beans (12oz)',
        type: 'beans_or_leaves',
        price: '$19.99',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80',
        vendor: 'Ethiopian Heirloom Roasters',
        url: '#affiliate-buy-beans',
        badge: 'Top Editor Pick'
      },
      {
        id: 'flair-58-espresso',
        title: 'Flair 58 Manual Lever Espresso Press',
        type: 'equipment',
        price: '$579.00',
        rating: 4.95,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
        vendor: 'Flair Espresso',
        url: '#affiliate-buy-gear',
        badge: 'Pro Barista Gear'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 98,
    seoTitle: 'Ethiopian Espresso Taste Profile, Health Benefits & Brewing Ratio | CupCura',
    seoDescription: 'Complete guide to Ethiopian Yirgacheffe Espresso: flavor profile radar, acidity score, health benefits, side effects, and exact 1:2 brewing ratio guide.'
  },
  {
    id: 'matcha-ceremonial-grade',
    name: 'Uji Ceremonial Grade Matcha',
    nativeName: '宇治抹茶 (Uji Matcha)',
    category: 'green_tea',
    origin: 'Uji, Kyoto, Japan',
    tagline: 'Vibrant shade-grown Japanese green tea powder rich in L-theanine and calm energy.',
    description: 'Ceremonial grade matcha is harvested from shade-grown Camellia sinensis leaves (Tencha) in Uji, Kyoto. Stone-ground into a microscopic green powder, it is whisked with bamboo into hot water so you consume the whole tea leaf.',
    culturalHistory: 'Perfected over 800 years by Zen monks like Sen no Rikyu, the Japanese Tea Ceremony (Chado) embodies harmony, respect, purity, and tranquility through the preparation of Uji matcha.',
    caffeineMgPerServing: 70,
    servingSize: '2g powder in 2.5 oz water',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 70,
      acidity: 20,
      bitterness: 35,
      body: 85,
      aroma: 90
    },
    tastingNotes: ['Rich Umami', 'Fresh Spinach', 'Nori Seaweed', 'Sweet Cream Finish'],
    healthBenefits: [
      {
        title: 'Sustained Calm Focus (L-Theanine)',
        description: 'L-Theanine promotes alpha brainwaves, smoothing out caffeine absorption for 4-6 hours of steady alertness without jitters.',
        scientificBasis: 'Synergistic ratio of L-theanine to caffeine suppresses cortisol spikes and enhances alpha-frequency activity.',
        iconName: 'Brain'
      },
      {
        title: 'Concentrated EGCG Antioxidants',
        description: 'Delivers up to 137x more Epigallocatechin Gallate (EGCG) than standard brewed green tea bags.',
        scientificBasis: 'EGCG neutralizes reactive oxygen species and accelerates thermogenic lipid oxidation.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Avoid consuming on a completely empty stomach if prone to nausea due to high tannin concentration.',
      'Individuals taking blood thinners (Warfarin) should monitor Vitamin K intake.',
      'Limit intake if sensitive to heavy metal bioaccumulation from low-quality tea soils (always choose certified organic Uji).'
    ],
    brewingParams: {
      waterTempC: 80,
      waterTempF: 176,
      ratioGramsPerLiter: '2g matcha powder to 70ml water',
      steepTimeMinutes: 'Whisk 30-45 seconds in M-shape',
      grindSize: 'Microscopic Stone-Ground Powder',
      recommendedMethod: 'Chasen (Bamboo Whisk) & Chawan Bowl'
    },
    affiliateProducts: [
      {
        id: 'uji-matcha-tin',
        title: 'First-Harvest Organic Uji Ceremonial Matcha Tin (30g)',
        type: 'beans_or_leaves',
        price: '$28.00',
        rating: 4.96,
        image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0A?w=500&auto=format&fit=crop&q=80',
        vendor: 'Kyoto Artisan Teas',
        url: '#affiliate-buy-matcha',
        badge: 'Direct Japan Import'
      },
      {
        id: 'matcha-bamboo-whisk-set',
        title: 'Handcrafted Golden Bamboo Chasen & Porcelain Whisk Stand',
        type: 'equipment',
        price: '$24.95',
        rating: 4.88,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Matcha Craft Tokyo',
        url: '#affiliate-buy-whisk'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 99,
    seoTitle: 'Uji Ceremonial Matcha Benefits, Caffeine vs Coffee & Whisking Guide | CupCura',
    seoDescription: 'Discover Uji Ceremonial Matcha green tea: EGCG benefits, L-theanine calm focus, contraindications, and traditional bamboo whisking guide.'
  },
  {
    id: 'yerba-mate-traditional',
    name: 'Argentine Traditional Yerba Maté',
    nativeName: 'Yerba Maté con Bombilla',
    category: 'herbal_botanical',
    origin: 'Misiones, Argentina & Southern Brazil',
    tagline: 'The stamina botanical of South America: strength of coffee, health benefits of tea, joy of chocolate.',
    description: 'Yerba Maté is an infusion made from dried leaves of Ilex paraguariensis, a holly tree native to the South American rainforest. Steeped in a hollowed gourd (Calabaza) and sipped through a filtered metal straw (Bombilla), it is legendary for physical endurance and social sharing.',
    culturalHistory: 'First cultivated by the indigenous Guaraní people of Paraguay and Argentina, Yerba Maté is a national icon of community, hospitality, and endurance across Argentina, Uruguay, and Southern Brazil.',
    caffeineMgPerServing: 85,
    servingSize: '8 oz infusion (gourd refills)',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 25,
      acidity: 30,
      bitterness: 80,
      body: 85,
      aroma: 75
    },
    tastingNotes: ['Earthy Grass', 'Eucalyptus', 'Smoky Oak', 'Bittersweet Herbal'],
    healthBenefits: [
      {
        title: 'Physical Endurance & Glycogen Sparing',
        description: 'Increases fatty acid oxidation during exercise by up to 24%, boosting physical stamina.',
        scientificBasis: 'Xanthines (mateine, theobromine) optimize muscular endurance and delayed onset fatigue.',
        iconName: 'Activity'
      },
      {
        title: 'Abundant Minerals & Vitamin B Complex',
        description: 'Contains 24 vitamins and minerals including Potassium, Magnesium, and Manganese.',
        scientificBasis: 'Comprehensive micro-nutrient density paired with saponins that lower LDL cholesterol.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'Do not consume boiling hot water (>70°C) repeatedly due to esophageal irritation risks associated with smoked varieties.',
      'Persons sensitive to cardiac stimulants should start with light infusions.',
      'Avoid high doses when taking MAO inhibitors or heart medication.'
    ],
    brewingParams: {
      waterTempC: 75,
      waterTempF: 167,
      ratioGramsPerLiter: 'Fill gourd 2/3 full (approx 30g)',
      steepTimeMinutes: 'Continuous pour-and-sip refills',
      grindSize: 'Cut Leaves with Dust (Con Palo)',
      recommendedMethod: 'Calabash Gourd & Stainless Bombilla'
    },
    affiliateProducts: [
      {
        id: 'argentine-mate-gourd-set',
        title: 'Authentic Ceramic Maté Gourd with Alpaca Bombilla Straw',
        type: 'equipment',
        price: '$32.50',
        rating: 4.85,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=80',
        vendor: 'Pampa Crafts',
        url: '#affiliate-buy-gourd'
      },
      {
        id: 'playadito-yerba-bag',
        title: 'Playadito Elaborada con Palo Argentine Yerba Maté (1kg Bag)',
        type: 'beans_or_leaves',
        price: '$16.99',
        rating: 4.92,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Misiones Harvest',
        url: '#affiliate-buy-mate'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 95,
    seoTitle: 'Yerba Mate Benefits, Caffeine Content & Traditional Gourd Guide | CupCura',
    seoDescription: 'Complete Argentine Yerba Mate guide: energy benefits vs coffee, theobromine impact, brewing temp, and bombilla selection.'
  },
  {
    id: 'cold-brew-nitro',
    name: 'Nitro Cascade Cold Brew Coffee',
    nativeName: 'Nitro Cold Brew',
    category: 'coffee',
    origin: 'Portland & Seattle, USA',
    tagline: 'Silky 24-hour steep infused with food-grade Nitrogen gas for a creamy Guinness-like cascade.',
    description: 'Cold brew coffee steeped in ambient water for 16-24 hours to eliminate bitter acids, then charged with pure nitrogen gas under pressure. Micro-bubbles yield a velvety head of foam and naturally sweet mouthfeel without added milk or sugar.',
    culturalHistory: 'Developed by third-wave specialty roasters in the early 2010s, Nitro Cold Brew revolutionized iced coffee by combining draft stout dispense technology with low-acid extraction.',
    caffeineMgPerServing: 205,
    servingSize: '12 oz glass',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 75,
      acidity: 20,
      bitterness: 30,
      body: 95,
      aroma: 80
    },
    tastingNotes: ['Dark Cocoa', 'Creamy Caramel', 'Roasted Hazelnut', 'Molasses'],
    healthBenefits: [
      {
        title: '67% Less Acidic Than Hot Coffee',
        description: 'Cold water extraction prevents the degradation of quinic and tannic acids, making it gentle on sensitive stomachs.',
        scientificBasis: 'Low heat extraction leaves thermal acid compounds unreleased, preserving stomach pH balance.',
        iconName: 'Smile'
      },
      {
        title: 'High Athletic Focus & Endurance',
        description: 'Higher caffeine per volume delivers powerful ergonomic enhancement for workouts.',
        scientificBasis: 'High caffeine density stimulates central nervous system glycogen mobilization.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'Caution for caffeine-sensitive individuals: 12oz glass contains >200mg caffeine.',
      'Avoid late afternoon/evening consumption to protect sleep architecture.',
      'Not recommended for people with untreated hypertension.'
    ],
    brewingParams: {
      waterTempC: 15,
      waterTempF: 59,
      ratioGramsPerLiter: '1:8 Brew Ratio (100g coarse coffee to 800ml water)',
      steepTimeMinutes: '18-24 Hours Immersion',
      grindSize: 'Extra Coarse (French Press / Rock Salt size)',
      recommendedMethod: 'Cold Brew Keg with N2 Charger Tap'
    },
    affiliateProducts: [
      {
        id: 'nitro-cold-brew-dispenser',
        title: 'uKeg Nitro Cold Brew Coffee Maker & Dispenser (64 oz)',
        type: 'equipment',
        price: '$219.00',
        rating: 4.89,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80',
        vendor: 'GrowlerWerks',
        url: '#affiliate-buy-nitro',
        badge: 'Best Home Nitro System'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 94,
    seoTitle: 'Nitro Cold Brew Coffee: Caffeine Level, Low-Acid Benefits & Recipe | CupCura',
    seoDescription: 'Why Nitro Cold Brew is 67% less acidic: caffeine content chart, flavor notes, nitrogen infusion physics, and home steeping guide.'
  },
  {
    id: 'pu-erh-shou-aged',
    name: 'Aged Fermented Shou Pu-erh Tea',
    nativeName: '熟普洱茶 (Ripe Pu-erh)',
    category: 'fermented_specialty',
    origin: 'Yunnan Province, China',
    tagline: 'Post-fermented dark tea cake offering comforting notes of wet earth, camphor, and cacao.',
    description: 'Pu-erh is a microbial fermented tea produced in Yunnan from large-leaf Camellia sinensis var. assamica. Shou (Ripe) Pu-erh undergoes a wet-piling process (Wo Dui) that accelerates fermentation, creating a dark, rich broth with zero astringency.',
    culturalHistory: 'Transported for centuries along the Ancient Tea Horse Road to Tibet, Pu-erh aged naturally in bamboo tongs. Highly prized by tea collectors as liquid art that improves with decade-long aging.',
    caffeineMgPerServing: 60,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 80,
      acidity: 10,
      bitterness: 15,
      body: 95,
      aroma: 85
    },
    tastingNotes: ['Moist Forest Floor', 'Dark Cacao', 'Camphor Wood', 'Dried Plum'],
    healthBenefits: [
      {
        title: 'Lipid Cleansing & Digestive Comfort',
        description: 'Traditionally drunk after greasy meals in China to aid digestion and breakdown fats.',
        scientificBasis: 'Lovastatin analogs and probiotic metabolites generated during micro-fermentation reduce blood triglycerides.',
        iconName: 'Utensils'
      },
      {
        title: 'Microbiome Support',
        description: 'Contains active beneficial gut fungi and bacterial cultures from post-fermentation.',
        scientificBasis: 'Promotes short-chain fatty acid (SCFA) production in the lower gastrointestinal tract.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Check sourcing for quality assurance to ensure no mold contaminants from improper storage.',
      'Mild diuretic effect; stay hydrated.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '6g per 150ml Gaiwan',
      steepTimeMinutes: 'Rinse 5 sec, then 15-30 sec flash steeps (up to 12 infusions)',
      grindSize: 'Pried Tea Cake Flakes',
      recommendedMethod: 'Yixing Clay Teapot or Porcelain Gaiwan'
    },
    affiliateProducts: [
      {
        id: 'shou-puerh-cake-2018',
        title: '2018 Aged Menghai Ripe Pu-erh Tea Cake (357g)',
        type: 'beans_or_leaves',
        price: '$45.00',
        rating: 4.91,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Yunnan Tea Treasury',
        url: '#affiliate-buy-puerh',
        badge: 'Collector Vintage'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'Shou Pu-erh Tea Health Benefits, Aging & Gaiwan Brewing | CupCura',
    seoDescription: 'Comprehensive Aged Shou Pu-erh Tea guide: cholesterol lipid reduction, digestive benefits, earthy tasting notes, and Gongfu brewing steps.'
  },
  {
    id: 'turkish-coffee-traditional',
    name: 'Traditional Ottoman Turkish Coffee',
    nativeName: 'Türk Kahvesi',
    category: 'coffee',
    origin: 'Istanbul, Turkey & Arabia',
    tagline: 'Unfiltered, velvety decoction boiled in a copper Cezve with aromatic cardamom.',
    description: 'Turkish coffee is prepared by simmering powder-fine roast coffee with water (and optional sugar or cardamom) in a long-handled copper pot called a Cezve or Ibrik. It is served unfiltered in small cups where the grounds settle to the bottom.',
    culturalHistory: 'Inscribed on UNESCO’s Intangible Cultural Heritage list, Turkish coffee symbolizes hospitality, romance, and fortune-telling (Tasseography) in coffee grounds across the Middle East and Balkans.',
    caffeineMgPerServing: 50,
    servingSize: '2 oz cup (demitasse)',
    acidityLevel: 'Moderate',
    flavorProfile: {
      sweetness: 40,
      acidity: 45,
      bitterness: 75,
      body: 90,
      aroma: 95
    },
    tastingNotes: ['Dark Chocolate', 'Green Cardamom', 'Toasted Walnut', 'Cinnamon Spice'],
    healthBenefits: [
      {
        title: 'Unfiltered Phenolic Acid Matrix',
        description: 'Because grounds remain in suspension during brewing, it contains higher concentrations of active diterpenes and antioxidants.',
        scientificBasis: 'Contains cafestol and kahweol alongside chlorogenic acid for potent free-radical scavenging.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Unfiltered coffee contains cafestol, which can raise LDL cholesterol if consumed in excessive daily quantities (>4 cups/day).',
      'Do not swallow the sediment (telve) at the bottom of the cup.'
    ],
    brewingParams: {
      waterTempC: 90,
      waterTempF: 194,
      ratioGramsPerLiter: '7g ultra-fine coffee powder per 60ml cold water',
      steepTimeMinutes: 'Slow simmer 3-4 mins until foam rises twice',
      grindSize: 'Powder Fine (Finer than espresso, flour consistency)',
      recommendedMethod: 'Hand-Hammered Copper Cezve / Ibrik'
    },
    affiliateProducts: [
      {
        id: 'copper-cezve-set',
        title: 'Handmade Copper Turkish Cezve Coffee Pot with Wooden Handle',
        type: 'equipment',
        price: '$29.99',
        rating: 4.88,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
        vendor: 'Grand Bazaar Artisans',
        url: '#affiliate-buy-cezve'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 92,
    seoTitle: 'Turkish Coffee Recipe, UNESCO History & Cardamom Grind Guide | CupCura',
    seoDescription: 'Learn how to brew authentic Turkish Coffee in a Cezve pot: foam rise techniques, cardamom pairing, cholesterol considerations, and UNESCO origin story.'
  },
  {
    id: 'sencha-japanese-green',
    name: 'Shizuoka First-Flush Sencha',
    nativeName: '煎茶 (Sencha Green Tea)',
    category: 'green_tea',
    origin: 'Shizuoka, Japan',
    tagline: 'Steamed green tea delivering refreshing grassy sweetness, marine notes, and high Vitamin C.',
    description: 'Sencha is Japan’s most popular green tea. Sun-grown leaves are harvested in spring (Ichiban-cha), immediately steamed to prevent oxidation, rolled into needle-like shapes, and dried. Steaming locks in bright green color and vegetal sweetness.',
    culturalHistory: 'Invented in 1738 by Nagatani Soen in Uji, Sencha transformed Japanese tea culture by introducing loose-leaf steaming as an alternative to whisked powder.',
    caffeineMgPerServing: 30,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 65,
      acidity: 40,
      bitterness: 30,
      body: 60,
      aroma: 85
    },
    tastingNotes: ['Fresh Cut Grass', 'Edamame', 'Ocean Breeze', 'Melon Peel'],
    healthBenefits: [
      {
        title: 'Immune System Support & Vitamin C',
        description: 'Contains high levels of bioavailable Vitamin C alongside green tea polyphenols.',
        scientificBasis: 'Catechins inhibit viral adherence to mucosal membranes in upper respiratory tracts.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Metabolic & Cardiovascular Health',
        description: 'Regular consumption supports healthy vascular dilation and blood sugar response.',
        scientificBasis: 'EGCG regulates glucose transporter GLUT4 expression.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'Do not brew with boiling water (100°C) or it will become harshly bitter; steep at 70-80°C.',
      'Mild tannin content can bind iron; take 1 hour apart from iron supplements.'
    ],
    brewingParams: {
      waterTempC: 75,
      waterTempF: 167,
      ratioGramsPerLiter: '5g loose leaf per 200ml water',
      steepTimeMinutes: '1.5 to 2 minutes',
      grindSize: 'Whole Rolled Needles',
      recommendedMethod: 'Kyusu Teapot with Side Handle'
    },
    affiliateProducts: [
      {
        id: 'shizuoka-sencha-leaves',
        title: 'Organic First-Flush Shizuoka Sencha Loose Leaf (100g)',
        type: 'beans_or_leaves',
        price: '$22.00',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Shizuoka Green Estates',
        url: '#affiliate-buy-sencha'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Japanese Sencha Green Tea Benefits, Temp Guide & Kyusu Brewing | CupCura',
    seoDescription: 'Master Shizuoka Sencha Green Tea: steeping temperature, vitamin C content, EGCG benefits, and traditional Japanese Kyusu pot guide.'
  },
  {
    id: 'earl-grey-bergamot-black',
    name: 'High-Grown Bergamot Earl Grey',
    nativeName: 'Earl Grey Black Tea',
    category: 'black_tea',
    origin: 'Ceylon & Calabria, Italy',
    tagline: 'Robust single-origin black tea scented with cold-pressed natural Italian Bergamot oil.',
    description: 'Earl Grey blends full-bodied black tea leaves (often Sri Lankan Ceylon or Indian Assam) infused with citrus oil cold-pressed from the rind of the Bergamot orange (Citrus bergamia), native to Reggio Calabria, Italy.',
    culturalHistory: 'Named after British Prime Minister Charles Grey in the 1830s, who allegedly received the citrus tea recipe as a diplomatic gift from a Chinese mandarin envoy.',
    caffeineMgPerServing: 47,
    servingSize: '8 oz cup',
    acidityLevel: 'Moderate',
    flavorProfile: {
      sweetness: 45,
      acidity: 55,
      bitterness: 50,
      body: 70,
      aroma: 95
    },
    tastingNotes: ['Citrus Bergamot', 'Malt', 'Black Tea Tannin', 'Orange Blossom'],
    healthBenefits: [
      {
        title: 'Cardiovascular Support (Bergamot Flavonoids)',
        description: 'Bergamot citrus compounds mimic statin-like action in balancing cholesterol levels.',
        scientificBasis: 'Neoeriocitrin and naringin inhibit HMG-CoA reductase to optimize lipid panels.',
        iconName: 'HeartPulse'
      },
      {
        title: 'Digestive Soothing',
        description: 'Black tea tannins gently calm lower intestinal muscle spasticity.',
        scientificBasis: 'Tannic compounds act as mild astringents to gastrointestinal lining.',
        iconName: 'Utensils'
      }
    ],
    contraindications: [
      'Avoid extreme consumption of low-grade synthetic bergamot oil which can cause muscle cramps.',
      'Contains black tea caffeine; monitor if sensitive.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '3g loose leaf per 250ml water',
      steepTimeMinutes: '3-5 minutes',
      grindSize: 'Full Whole Leaf CTC/Orthodox',
      recommendedMethod: 'English Bone China Teapot'
    },
    affiliateProducts: [
      {
        id: 'loose-earl-grey-tin',
        title: 'Imperial Earl Grey with Pure Calabrian Bergamot Oil (125g Loose Leaf)',
        type: 'beans_or_leaves',
        price: '$18.50',
        rating: 4.93,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'London Tea Merchants',
        url: '#affiliate-buy-earlgrey'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 93,
    seoTitle: 'Earl Grey Tea: Real Bergamot Oil Benefits, Caffeine & Steep Time | CupCura',
    seoDescription: 'Discover authentic Earl Grey Tea: natural bergamot flavonoid cholesterol benefits, caffeine per cup, brewing temperature, and pairing ideas.'
  },
  {
    id: 'chamomile-blossom-herbal',
    name: 'Egyptian Golden Chamomile Blossom',
    nativeName: 'Baboung (البابونج)',
    category: 'herbal_botanical',
    origin: 'Nile River Valley, Egypt',
    tagline: 'Caffeine-free flower head infusion delivering soothing apple-honey warmth and tranquil sleep.',
    description: 'Whole dried flower heads of Matricaria chamomilla harvested along the fertile Nile Valley. Steeping yields a golden herbal tisane overflowing with apigenin flavonoids that promote deep neuromuscular relaxation.',
    culturalHistory: 'Revered by ancient Egyptians who dedicated Chamomile to the Sun God Ra for its healing power against fevers and stress. A timeless bedtime ritual across Europe and the Mediterranean.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 85,
      acidity: 15,
      bitterness: 10,
      body: 40,
      aroma: 90
    },
    tastingNotes: ['Sweet Crisp Apple', 'Wildflower Honey', 'Chamomile Pollen', 'Warm Straw'],
    healthBenefits: [
      {
        title: 'Deep Restful Sleep & Anxiety Relief',
        description: 'Apigenin binds directly to GABA-A receptors in the brain, inducing natural sleepiness.',
        scientificBasis: 'Flavonoid apigenin exerts hypnotic and anxiolytic effects without chemical dependency.',
        iconName: 'Moon'
      },
      {
        title: 'Gastrointestinal & Anti-Spasmodic Relief',
        description: 'Relaxes smooth muscles throughout the stomach and intestinal track.',
        scientificBasis: 'Bisabolol and chamazulene suppress pro-inflammatory prostaglandin synthesis.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Caution for individuals with severe allergies to plants in the Asteraceae / Daisy family (ragweed, marigolds).',
      'May interact mildly with heavy sedative medications.'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '4g whole flower blossoms per 250ml water',
      steepTimeMinutes: '5-8 minutes covered',
      grindSize: 'Whole Flower Heads',
      recommendedMethod: 'Glass Teapot with Fine Mesh Infuser'
    },
    affiliateProducts: [
      {
        id: 'egyptian-chamomile-tin',
        title: 'Whole Organic Egyptian Chamomile Flowers (100g Tin)',
        type: 'beans_or_leaves',
        price: '$16.00',
        rating: 4.95,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Nile Botanical Reserve',
        url: '#affiliate-buy-chamomile'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 90,
    seoTitle: 'Egyptian Chamomile Flower Benefits, Apigenin Sleep Science & Recipe | CupCura',
    seoDescription: 'Why whole Egyptian Chamomile flowers guarantee better sleep: apigenin GABA receptor science, zero caffeine safety, and steeping ratio.'
  },
  {
    id: 'pourover-v60-colombian',
    name: 'Hario V60 Colombian Geisha Pour-Over',
    nativeName: 'Colombian Geisha V60',
    category: 'coffee',
    origin: 'Huila, Colombia',
    tagline: 'Artisanal drip filtration revealing jasmine, bergamot, lemongrass, and sparkling acidity.',
    description: 'Pour-over coffee prepared with the iconic Hario V60 conical dripper. Hot water is manually poured over medium-coarse ground Colombian Geisha coffee in spiraling pours. The 60-degree angle and internal ribs optimize flow rate for pristine clarity.',
    culturalHistory: 'Originated in Panama and Colombia from rare Ethiopian forest cuttings, Geisha (Gesha) coffee beans set world auction records for their tea-like complexity and ethereal florals.',
    caffeineMgPerServing: 110,
    servingSize: '10 oz cup (300ml brew)',
    acidityLevel: 'High',
    flavorProfile: {
      sweetness: 85,
      acidity: 95,
      bitterness: 20,
      body: 50,
      aroma: 98
    },
    tastingNotes: ['White Jasmine', 'Lemongrass', 'Peach Nectar', 'Earl Grey Tea'],
    healthBenefits: [
      {
        title: 'Pure Clean Extraction without Lipids',
        description: 'Paper filter traps cafestol diterpenes, making paper pour-over the healthiest coffee method for heart health.',
        scientificBasis: 'Paper filtration removes >95% of lipid-soluble diterpenes that otherwise elevate LDL cholesterol.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'High acidity may bother stomach acid sufferers if drunk without food.',
      'Contains ~110mg caffeine per 300ml mug.'
    ],
    brewingParams: {
      waterTempC: 94,
      waterTempF: 201,
      ratioGramsPerLiter: '1:16 Ratio (18g coffee to 288g water)',
      steepTimeMinutes: '3:00 total pour time (45s bloom)',
      grindSize: 'Medium-Fine (Sea salt size)',
      recommendedMethod: 'Hario V60 Ceramic Dripper & Gooseneck Kettle'
    },
    affiliateProducts: [
      {
        id: 'hario-v60-craft-set',
        title: 'Hario V60 Ceramic Pour Over Set with Glass Range Server',
        type: 'equipment',
        price: '$42.00',
        rating: 4.94,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
        vendor: 'Hario Japan',
        url: '#affiliate-buy-v60',
        badge: 'Iconic Dripper'
      },
      {
        id: 'fellow-stagg-kettle',
        title: 'Fellow Stagg EKG Electric Gooseneck Temperature Control Kettle',
        type: 'equipment',
        price: '$165.00',
        rating: 4.97,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80',
        vendor: 'Fellow Products',
        url: '#affiliate-buy-kettle',
        badge: 'Precision Pouring'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 97,
    seoTitle: 'Hario V60 Pour Over Guide: Colombian Geisha Ratio & Technique | CupCura',
    seoDescription: 'Master Hario V60 Pour-over brewing: 1:16 ratio recipe, paper filter cholesterol benefits, Geisha tasting notes, and pour timing.'
  },
  {
    id: 'rooibos-red-bush-herbal',
    name: 'South African Organic Red Rooibos',
    nativeName: 'Red Bush (Afrikaans)',
    category: 'herbal_botanical',
    origin: 'Cederberg Mountains, South Africa',
    tagline: 'Naturally caffeine-free red bush infusion packed with rare aspalathin antioxidants & honey sweetness.',
    description: 'Rooibos (Aspalathus linearis) is a broom-like leguminous plant endemic to the Cederberg region of Western Cape, South Africa. Leaves undergo needle oxidation, turning mahogany red with naturally sweet, nutty, and woody notes.',
    culturalHistory: 'Used for centuries by the indigenous Khoisan people of South Africa, Rooibos gained global prominence in World War II as a soothing alternative to imported black tea.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 80,
      acidity: 15,
      bitterness: 15,
      body: 65,
      aroma: 80
    },
    tastingNotes: ['Honeybush', 'Vanilla Bean', 'Toasted Oak', 'Nutmeg'],
    healthBenefits: [
      {
        title: 'Rare Aspalathin & Polyphenol Matrix',
        description: 'Contains Aspalathin, a unique antioxidant found exclusively in Rooibos that regulates blood sugar.',
        scientificBasis: 'Aspalathin improves glucose uptake in muscle cells and balances insulin secretion.',
        iconName: 'Sparkles'
      },
      {
        title: 'Zero Caffeine & Zero Oxalates',
        description: 'Completely safe for kidney stone sufferers because it contains no oxalic acid.',
        scientificBasis: 'Absence of oxalates prevents calcium oxalate crystal formation in kidneys.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Generally considered one of the safest herbal infusions worldwide with zero known toxicities.',
      'Extremely high doses (>10 cups/day) rarely affect liver enzymes.'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '4g needle leaves per 250ml water',
      steepTimeMinutes: '5-7 minutes (cannot over-steep)',
      grindSize: 'Oxidized Red Needles',
      recommendedMethod: 'Teapot or French Press'
    },
    affiliateProducts: [
      {
        id: 'cederberg-rooibos-organic',
        title: 'Cederberg Organic Loose Leaf Red Rooibos Tea (200g)',
        type: 'beans_or_leaves',
        price: '$14.99',
        rating: 4.92,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Capetown Tea Harvest',
        url: '#affiliate-buy-rooibos'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 88,
    seoTitle: 'South African Rooibos Benefits, Aspalathin Science & Oxalate-Free Guide | CupCura',
    seoDescription: 'Why Red Rooibos Tea is the ultimate caffeine-free super-infusion: Aspalathin blood sugar science, kidney safety, and steeping recipe.'
  },
  {
    id: 'vietnamese-egg-coffee',
    name: 'Hanoi Traditional Egg Coffee',
    nativeName: 'Cà Phê Trứng',
    category: 'coffee',
    origin: 'Hanoi, Vietnam',
    tagline: 'Decadent Hanoi delicacy featuring bold Robusta espresso under a velvety whipped egg yolk custard.',
    description: 'Cà Phê Trứng is a famous Vietnamese beverage created by whipping raw egg yolks with condensed milk and sugar into a silky, airy meringue foam, floated over a strong dark-roasted Vietnamese Robusta phin drip coffee.',
    culturalHistory: 'Invented in 1946 by Giang Van Giang, a bartender at the Sofitel Legend Metropole Hotel in Hanoi, when fresh milk was scarce during the First Indochina War. Egg yolks provided a luscious creamy substitute.',
    caffeineMgPerServing: 140,
    servingSize: '6 oz glass cup',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 95,
      acidity: 15,
      bitterness: 60,
      body: 100,
      aroma: 88
    },
    tastingNotes: ['Liquid Tiramisu', 'Condensed Milk', 'Dark Cocoa', 'Toasted Custard'],
    healthBenefits: [
      {
        title: 'Nutrient-Dense Protein & Choline Boost',
        description: 'Egg yolk provides bioavailable choline, lutein, and fat-soluble vitamins A, D, and E.',
        scientificBasis: 'Choline supports cell membrane integrity and neurotransmitter synthesis.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'High calorie and sugar density; treat as a dessert coffee.',
      'Ensure pasteurized fresh eggs are used to prevent salmonella risk.',
      'Robusta beans contain ~2x caffeine of Arabica (~140mg per cup).'
    ],
    brewingParams: {
      waterTempC: 96,
      waterTempF: 205,
      ratioGramsPerLiter: '15g Robusta in Phin Filter + 2 Egg Yolks + 25g Condensed Milk',
      steepTimeMinutes: '5 mins phin drip + 3 mins yolk whip',
      grindSize: 'Medium-Coarse Robusta',
      recommendedMethod: 'Traditional Vietnamese Stainless Steel Phin Filter'
    },
    affiliateProducts: [
      {
        id: 'vietnamese-phin-filter-set',
        title: 'Stainless Steel Gravity Press Phin Filter & Saigon Robusta Beans',
        type: 'equipment',
        price: '$18.99',
        rating: 4.87,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
        vendor: 'Hanoi Brew Supply',
        url: '#affiliate-buy-phin'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 93,
    seoTitle: 'Vietnamese Egg Coffee (Cà Phê Trứng) Recipe & Hanoi History | CupCura',
    seoDescription: 'Authentic Hanoi Egg Coffee recipe: how to whip egg yolks & condensed milk, Robusta caffeine content, phin filter steps, and Indochina history.'
  },
  {
    id: 'golden-milk-turmeric-latte',
    name: 'Ayurvedic Golden Milk Turmeric Latte',
    nativeName: 'Haldi Doodh (हल्दी दूध)',
    category: 'herbal_botanical',
    origin: 'Kerala, India',
    tagline: 'Ancient warming Ayurvedic tonic with turmeric curcumin, black pepper piperine, and coconut milk.',
    description: 'Haldi Doodh is a traditional Indian remedy made by simmering crushed fresh turmeric root (Curcuma longa), freshly cracked black pepper, ginger, cinnamon, and cardamom in rich milk (or coconut/oat milk).',
    culturalHistory: 'Rooted in 5,000-year-old Vedic science (Ayurveda), Golden Milk is consumed in Indian households for immunity, wound healing, joint vitality, and evening soothing.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 60,
      acidity: 10,
      bitterness: 35,
      body: 80,
      aroma: 92
    },
    tastingNotes: ['Earth Spice', 'Warm Ginger', 'Coconut Milk', 'Peppery Finish'],
    healthBenefits: [
      {
        title: 'Potent Anti-Inflammatory (Curcumin + Piperine)',
        description: 'Black pepper piperine enhances curcumin bioavailability by 2,000%, shutting down inflammatory pathways.',
        scientificBasis: 'Inhibits NF-kB inflammatory cascade and inflammatory cytokines TNF-alpha and IL-6.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Joint Vitality & Immune Balance',
        description: 'Eases morning joint stiffness and supports innate cellular immunity.',
        scientificBasis: 'Curcumin modulates immune cell proliferation and suppresses oxidative enzyme COX-2.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'High medicinal doses of turmeric should be paused prior to major surgeries due to mild blood thinning.',
      'Consult physician if taking heavy anti-coagulants.'
    ],
    brewingParams: {
      waterTempC: 90,
      waterTempF: 194,
      ratioGramsPerLiter: '1 tsp ground organic turmeric + pinch black pepper + 1 cup warm oat/coconut milk',
      steepTimeMinutes: 'Simmer low heat 5 minutes',
      grindSize: 'Fine Ground Spices',
      recommendedMethod: 'Stovetop Saucepan Whisking'
    },
    affiliateProducts: [
      {
        id: 'organic-turmeric-latte-mix',
        title: 'Organic Kerala Turmeric Golden Milk Elixir Blend (250g)',
        type: 'beans_or_leaves',
        price: '$19.50',
        rating: 4.91,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Ayurveda Botanicals',
        url: '#affiliate-buy-turmeric'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 92,
    seoTitle: 'Golden Milk Turmeric Latte Benefits, Piperine Science & Recipe | CupCura',
    seoDescription: 'Discover Ayurvedic Haldi Doodh (Golden Milk): 2000% curcumin absorption boost with black pepper piperine, joint health, and recipe.'
  },

  // =========================================================
  // NEW ENTRIES — PHASE 2 EXPANSION
  // =========================================================
  {
    id: 'gyokuro-imperial',
    name: 'Gyokuro Imperial Shade-Grown Green Tea',
    nativeName: '玉露 (Gyokuro)',
    category: 'green_tea',
    origin: 'Uji, Kyoto, Japan',
    tagline: 'The pinnacle of Japanese green tea: 3 weeks of shade-growing produces an intense umami sweetness unmatched in the plant kingdom.',
    description: 'Gyokuro is the most premium Japanese loose-leaf green tea, shaded under black cloth (kabuse) for 20–25 days before harvest. The stress of shade-growing triggers explosive L-theanine and chlorophyll production, creating a jewel-like emerald liquor with thick, oceanic sweetness.',
    culturalHistory: 'First cultivated in 1835 by Yamamoto Kahei VI in Uji, Gyokuro ("Jade Dew") was gifted to the Tokugawa shogunate as a tribute. Its name refers to the glistening pale green dew that forms on the carefully shaded leaves at dawn.',
    caffeineMgPerServing: 85,
    servingSize: '3 oz (90ml) small bowl',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 90,
      acidity: 15,
      bitterness: 25,
      body: 95,
      aroma: 98
    },
    tastingNotes: ['Rich Umami Seaweed', 'Lush Pine Forest', 'Dewy Melon', 'Sweet Marine Algae'],
    healthBenefits: [
      {
        title: 'Highest L-Theanine Concentration of Any Tea',
        description: 'Shade-growing prevents photosynthesis from converting L-theanine into catechins, producing 3–4x more L-theanine than regular green tea for hours of calm focus.',
        scientificBasis: 'Shade suppresses photosynthetic catechin conversion, elevating free amino acid content including L-theanine (Camellia sinensis var. sinensis).',
        iconName: 'Brain'
      },
      {
        title: 'Exceptional EGCG Antioxidant Matrix',
        description: 'Despite shade growing, retains high concentrations of EGCG catechins that scavenge free radicals and support cellular DNA protection.',
        scientificBasis: 'EGCG (Epigallocatechin-3-Gallate) inhibits reactive oxygen species and down-regulates NF-κB pro-inflammatory pathways.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Brew strictly below 55°C (131°F) — higher temperatures destroy L-theanine and produce bitter tannin harshness.',
      'High caffeine density (85mg) for small 90ml serving — avoid in late evening.',
      'Very expensive leaves demand filtered, soft water (TDS 50–100 ppm) to reveal full flavor.'
    ],
    brewingParams: {
      waterTempC: 50,
      waterTempF: 122,
      ratioGramsPerLiter: '5g per 90ml water',
      steepTimeMinutes: '90 seconds (first steep)',
      grindSize: 'Whole Needle Leaves',
      recommendedMethod: 'Shiboridashi or Tokoname Kyusu Teapot'
    },
    affiliateProducts: [
      {
        id: 'gyokuro-uji-leaves',
        title: 'Premium Uji Gyokuro Loose Leaf Tea (50g) — First Harvest',
        type: 'beans_or_leaves',
        price: '$48.00',
        rating: 4.97,
        image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&auto=format&fit=crop&q=80',
        vendor: 'Kyoto Artisan Teas',
        url: 'https://www.amazon.com/s?k=uji+gyokuro+japanese+green+tea',
        badge: 'First Harvest Import'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 96,
    seoTitle: 'Gyokuro Imperial Green Tea: L-Theanine Science, Shade-Growing & Recipe | CupCura',
    seoDescription: 'Complete guide to Gyokuro Jade Dew green tea: why shade-growing maximizes L-theanine, 50°C brew temperature, umami flavor radar, and Uji origin.'
  },

  {
    id: 'darjeeling-first-flush',
    name: 'Darjeeling First Flush Black Tea',
    nativeName: 'दार्जिलिंग चाय (Pratham Flush)',
    category: 'black_tea',
    origin: 'Darjeeling, West Bengal, India',
    tagline: 'The Champagne of Teas: spring\'s first pluck at 2,000m altitude delivers muscatel grape sweetness and ephemeral floral perfume.',
    description: 'Harvested from late February to mid-April at high Himalayan elevations, Darjeeling First Flush produces a delicate, lightly oxidized leaf with extraordinary floral nuance. The cool mountain air and morning mist create the iconic Muscatel character prized by tea connoisseurs worldwide.',
    culturalHistory: 'Tea cultivation in Darjeeling began under British colonial rule in 1841, when Dr. Arthur Campbell planted Chinese Camellia sinensis seeds in the mountain air of Darjeeling. Today, its 87 estates produce a GI-protected (Geographical Indication) tea recognized alongside French Champagne for unique terroir.',
    caffeineMgPerServing: 45,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'High',
    flavorProfile: {
      sweetness: 75,
      acidity: 85,
      bitterness: 30,
      body: 50,
      aroma: 96
    },
    tastingNotes: ['Muscatel Grape', 'Spring Blossom', 'Crisp Green Tannin', 'Apricot Dried Fruit'],
    healthBenefits: [
      {
        title: 'Theaflavin Cardiovascular Protection',
        description: 'Light oxidation preserves unique theaflavins that improve endothelial function and support healthy blood vessel flexibility.',
        scientificBasis: 'Theaflavins and thearubigins in lightly oxidized teas inhibit LDL oxidation and support vascular elasticity.',
        iconName: 'HeartPulse'
      },
      {
        title: 'Moderate Caffeine with Natural L-Theanine',
        description: 'Lower caffeine than Assam with residual L-theanine from high-altitude Chinese-origin plants creates calm, sustained alertness.',
        scientificBasis: 'High-altitude Camellia sinensis var. sinensis retains greater amino acid content than lowland Assamica varietals.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'Very high-grade First Flush can be expensive and easily over-steeped — never exceed 95°C or 3 minutes.',
      'Pregnant women should limit black tea intake due to tannin iron-absorption interference.',
      'GI-tagged Darjeeling should be purchased from verified vendors to avoid blended impostors.'
    ],
    brewingParams: {
      waterTempC: 90,
      waterTempF: 194,
      ratioGramsPerLiter: '2.5g per 240ml water',
      steepTimeMinutes: '2–3 minutes (no milk)',
      grindSize: 'Whole Leaf Orthodox',
      recommendedMethod: 'White Porcelain Teapot or Glass Pitcher'
    },
    affiliateProducts: [
      {
        id: 'darjeeling-estate-tea',
        title: 'Margaret\'s Hope Estate First Flush Darjeeling (100g)',
        type: 'beans_or_leaves',
        price: '$32.00',
        rating: 4.93,
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&auto=format&fit=crop&q=80',
        vendor: 'Margaret\'s Hope Estate',
        url: 'https://www.amazon.com/s?k=darjeeling+first+flush+black+tea',
        badge: 'GI-Certified Estate'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 93,
    seoTitle: 'Darjeeling First Flush Tea: Muscatel Flavor, GI Heritage & Recipe | CupCura',
    seoDescription: 'Complete guide to Darjeeling First Flush — the Champagne of Teas: muscatel grape tasting notes, theaflavin heart benefits, 90°C brewing, and estate selection.'
  },

  {
    id: 'da-hong-pao-oolong',
    name: 'Da Hong Pao Wuyi Rock Oolong',
    nativeName: '大红袍 (Dà Hóng Páo)',
    category: 'fermented_specialty',
    origin: 'Wuyi Mountains, Fujian, China',
    tagline: 'China\'s most mythologized tea: mineral-roasted rock oolong with charred plum, orchid, and lingering 喉韵 (throat rhythm).',
    description: 'Da Hong Pao ("Big Red Robe") is a heavily roasted oolong from ancient rock crevices of the Wuyi Mountains. The rocky "yan" mineral soil infuses the leaf with a distinctive rock mineral character (岩韵 Yányùn). The original mother plants are over 350 years old and produce less than 1kg of tea annually — now a national treasure.',
    culturalHistory: 'Legend says a Ming Dynasty emperor cured his mother with tea from four ancient bushes on Tianxin Rock. He draped red imperial robes over the plants in gratitude — naming them "Da Hong Pao." The original four mother plants, protected by the Wuyi government, last sold in 2002 at $1.2 million per kg at auction.',
    caffeineMgPerServing: 55,
    servingSize: '4 oz Gongfu serving',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 60,
      acidity: 25,
      bitterness: 40,
      body: 90,
      aroma: 97
    },
    tastingNotes: ['Roasted Mineral Stone', 'Charred Plum', 'Orchid Honey', 'Dark Walnut Lingering'],
    healthBenefits: [
      {
        title: 'Metabolic Rate & Fat Oxidation',
        description: 'Oolong polyphenols activate adipose lipase enzymes, promoting fat cell breakdown and supporting healthy body composition.',
        scientificBasis: 'Oolong catechins and polymerized polyphenols activate AMPK metabolic signaling pathways, increasing fat oxidation by 12–15% vs. controls.',
        iconName: 'Flame'
      },
      {
        title: 'Mineral-Rich Rock Micronutrient Profile',
        description: 'Wuyi rock soil deposits trace minerals (zinc, manganese, selenium) that absorb into the tea leaf during slow growth in crevices.',
        scientificBasis: 'Volcanic rock weathering produces mineral-rich clay that transfers bioavailable zinc and selenium into Camellia sinensis during photosynthesis.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Medium-high caffeine (55mg) — avoid consuming more than 3 Gongfu sessions in late evening.',
      'Heavy roast can irritate highly sensitive stomachs on an empty morning stomach.',
      'Authentic Da Hong Pao from non-certified vendors is often blended; look for Zhengyan ("Correct Rock") certification.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '7g per 120ml gaiwan',
      steepTimeMinutes: '10–15 second flash steeps (8+ infusions)',
      grindSize: 'Whole Twisted Rope Leaves',
      recommendedMethod: 'Gongfu Gaiwan or Yixing Purple Clay Teapot'
    },
    affiliateProducts: [
      {
        id: 'gongfu-gaiwan-glass',
        title: 'Borosilicate Glass Gongfu Gaiwan Set with Pitcher & Strainer',
        type: 'equipment',
        price: '$45.00',
        rating: 4.88,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Artisan Glassware',
        url: 'https://www.amazon.com/s?k=glass+gongfu+gaiwan+tea+brewing+set',
        badge: 'Oolong Connoisseur Essential'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 95,
    seoTitle: 'Da Hong Pao Wuyi Rock Oolong: Mineral Taste, Legend & Gongfu Recipe | CupCura',
    seoDescription: 'Complete Da Hong Pao guide: the $1.2M/kg national tea treasure, Yanyun rock mineral character, AMPK fat-oxidation science, and Gongfu steeping.'
  },

  {
    id: 'silver-needle-white-tea',
    name: 'Fuding Silver Needle White Tea',
    nativeName: '白毫银针 (Bái Háo Yín Zhēn)',
    category: 'green_tea',
    origin: 'Fuding, Fujian, China',
    tagline: 'The most minimally processed tea on earth: only the single unopened bud, covered in silver down, with ethereal melon and honey delicacy.',
    description: 'Silver Needle (Baihao Yinzhen) consists exclusively of the single unopened spring bud of Fuding Dabai or Dahao tea cultivars, covered in fine white hair (pekoe). Minimal processing — only withering and drying — preserves the highest concentration of antioxidants of any tea category.',
    culturalHistory: 'Recorded in Song Dynasty tea texts (960–1279 AD), white tea was reserved for imperial tribute. Emperor Huizong of Song described seeking the "whitest tea" as the highest form of tea appreciation in his treatise "Daguan Cha Lun" (Great View of Tea).',
    caffeineMgPerServing: 15,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 80,
      acidity: 20,
      bitterness: 10,
      body: 35,
      aroma: 88
    },
    tastingNotes: ['Fresh Honeydew Melon', 'Silver Pekoe Down', 'Ethereal Wildflower', 'Cucumber Water'],
    healthBenefits: [
      {
        title: 'Highest Free Polyphenol Antioxidant Retention',
        description: 'Minimal processing preserves the most native polyphenols of any tea, with zero oxidation degrading catechin structures.',
        scientificBasis: 'White tea retains 3–4x more active polyphenol concentration than oxidized black teas due to zero enzymatic degradation.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Lowest Caffeine for Sensitive or Evening Use',
        description: 'At only 15mg per serving, Silver Needle is appropriate for caffeine-sensitive individuals, pregnant women, or evening relaxation.',
        scientificBasis: 'Unopened buds contain lower caffeine synthesis than mature leaves due to reduced alkaloid production in young meristematic tissue.',
        iconName: 'Moon'
      }
    ],
    contraindications: [
      'Extremely delicate leaves are ruined by boiling water — never exceed 75°C.',
      'Genuine Fuding Silver Needle is expensive; lower-cost alternatives may be blended leaf material.'
    ],
    brewingParams: {
      waterTempC: 70,
      waterTempF: 158,
      ratioGramsPerLiter: '3g per 240ml water',
      steepTimeMinutes: '2–3 minutes',
      grindSize: 'Whole Silver Bud',
      recommendedMethod: 'Glass Pitcher or White Porcelain Gaiwan'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 88,
    seoTitle: 'Silver Needle White Tea: Polyphenols, Low Caffeine & Imperial Heritage | CupCura',
    seoDescription: 'Complete Silver Needle White Tea guide: maximum antioxidant preservation, 15mg caffeine content, 70°C brewing, and Song Dynasty imperial history.'
  },

  {
    id: 'masala-chai',
    name: 'Assam Masala Spiced Chai',
    nativeName: 'मसाला चाय (Masala Chai)',
    category: 'black_tea',
    origin: 'Assam, India',
    tagline: 'India\'s beloved warming elixir: bold CTC black tea boiled with cardamom, ginger, cinnamon, clove, and full-fat milk.',
    description: 'Masala Chai ("spiced tea") combines robust Assam CTC black tea steeped in a boiling blend of aromatic spices and whole milk or plant milk. Each household, city, and chai wallah has a unique spice recipe passed down through generations.',
    culturalHistory: 'Masala Chai has roots in the 9,000-year-old Ayurvedic practice of "kadha" — medicinal herbal decoctions. The British Colonial East India Company introduced Assam black tea to the masala brew in the late 1800s, creating the modern chai as Indians adopted and transformed the colonial tea habit into their own cultural treasure.',
    caffeineMgPerServing: 60,
    servingSize: '8 oz (240ml) cup with milk',
    acidityLevel: 'Moderate',
    flavorProfile: {
      sweetness: 70,
      acidity: 40,
      bitterness: 45,
      body: 85,
      aroma: 92
    },
    tastingNotes: ['Green Cardamom Pod', 'Crushed Fresh Ginger', 'Cinnamon Bark', 'Peppery Clove Finish'],
    healthBenefits: [
      {
        title: 'Ginger Gingerol Anti-Nausea & Digestion',
        description: 'Fresh ginger provides 6-gingerol and 8-gingerol compounds that suppress nausea, reduce bloating, and stimulate gastric motility.',
        scientificBasis: 'Gingerols bind to 5-HT3 serotonin receptors in the gut to inhibit nausea pathways, validated in RCTs for pregnancy sickness and chemotherapy.',
        iconName: 'Smile'
      },
      {
        title: 'Cardamom Cardiovascular & Blood Pressure Support',
        description: 'Green cardamom contains cineole, limonene, and terpinen compounds that dilate blood vessels and support healthy blood pressure.',
        scientificBasis: 'Cardamom extracts reduce systolic blood pressure by 12–14 mmHg in controlled trials through calcium channel modulation.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'CTC Assam tea is high tannin — avoid drinking on an empty stomach as it can cause nausea.',
      'Adding sugar raises glycemic load; diabetics should use stevia or monk fruit sweeteners.',
      'Large amounts of ginger can interact with blood-thinning medications (Warfarin).'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '2 tsp CTC tea + spices to 300ml water, add 150ml milk',
      steepTimeMinutes: '5–6 minutes simmered (not steeped)',
      grindSize: 'CTC Pellet or Crushed Leaf',
      recommendedMethod: 'Steel Saucepan Simmer & Strainer'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 94,
    seoTitle: 'Masala Chai Recipe: Assam Tea, Spice Science & Ayurvedic History | CupCura',
    seoDescription: 'Authentic Masala Chai guide: cardamom blood pressure benefits, ginger gingerol digestion science, CTC Assam ratio, and street chai wallah history.'
  },

  {
    id: 'flat-white',
    name: 'Australian Flat White Espresso',
    nativeName: 'Flat White',
    category: 'coffee',
    origin: 'Melbourne & Sydney, Australia',
    tagline: 'The espresso drink that conquered the world: a double ristretto drowned in velvety microfoam — stronger than a latte, silkier than a cappuccino.',
    description: 'Flat White is a concentrated espresso beverage made with a smaller milk volume than a latte but poured over a double ristretto shot. The result is a higher coffee-to-milk ratio with microfoam so fine it creates a glossy, paint-like surface texture. Starbucks popularized it globally in 2010s, but its roots remain fiercely contested between Melbourne and Sydney.',
    culturalHistory: 'The Flat White was simultaneously claimed by both New Zealand and Australia in the early 1980s café scenes. Melbourne\'s specialty café culture — driven by Italian espresso immigrants — created the specific microfoam technique that defines the drink. By 2010, London\'s Third Wave cafés had adopted it, followed by its global Starbucks launch in 2015.',
    caffeineMgPerServing: 130,
    servingSize: '5.5 oz (165ml)',
    acidityLevel: 'Moderate',
    flavorProfile: {
      sweetness: 65,
      acidity: 55,
      bitterness: 50,
      body: 80,
      aroma: 85
    },
    tastingNotes: ['Ristretto Concentrated Espresso', 'Steamed Milk Sweetness', 'Velvety Microfoam', 'Dark Cocoa Finish'],
    healthBenefits: [
      {
        title: 'Calcium & Vitamin D Delivery',
        description: 'Steamed whole milk provides highly bioavailable calcium and naturally occurring Vitamin D for bone density maintenance.',
        scientificBasis: 'Dairy proteins increase calcium bioavailability vs plant-based alternatives, with steaming pasteurization retaining full nutritional matrix.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'High Coffee Polyphenol Concentration',
        description: 'Double ristretto extraction provides a concentrated polyphenol shot in less liquid than a regular espresso lungo.',
        scientificBasis: 'Short ristretto pulls maximize chlorogenic acid density per ml while minimizing bitter quinic acid release.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'At 130mg caffeine for a 165ml drink, it has a very high caffeine density — 1–2 cups maximum daily.',
      'Whole milk adds ~80 kcal per serving; opt for oat milk for lower-calorie version.',
      'The double ristretto base is highly acidic — not ideal for acid-reflux sufferers without food.'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '18g in → 28g out (ristretto ratio)',
      steepTimeMinutes: '22–25 seconds extraction',
      grindSize: 'Ultra-Fine Espresso (finer than latte)',
      recommendedMethod: 'Espresso Machine + Milk Steam Wand'
    },
    affiliateProducts: [
      {
        id: 'breville-barista-touch-flat',
        title: 'Breville Barista Touch Impress Espresso Machine',
        type: 'equipment',
        price: '$1,499.95',
        rating: 4.95,
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80',
        vendor: 'Breville',
        url: 'https://www.amazon.com/s?k=breville+barista+touch+impress',
        badge: 'Home Barista Standard'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Flat White Coffee: Melbourne Origin, Ristretto Ratio & Microfoam Guide | CupCura',
    seoDescription: 'Complete Flat White guide: Melbourne vs Sydney origin debate, double ristretto difference from latte, microfoam steaming, and 130mg caffeine content.'
  },

  {
    id: 'cascara-coffee-cherry',
    name: 'Cascara Coffee Cherry Tea',
    nativeName: 'Qishr / Cascara',
    category: 'herbal_botanical',
    origin: 'Boquete, Panama & Sana\'a, Yemen',
    tagline: 'Coffee\'s forgotten secret: dried fruit husk of the coffee cherry brews into a tangy hibiscus-tamarind elixir with gentle caffeine.',
    description: 'Cascara is brewed from the dried husks (cascara = husk in Spanish) of the coffee cherry fruit — the outer red fruit pulp discarded during wet coffee processing. In Yemen it is called Qishr and brewed with ginger spices as a traditional daily drink. In Panama and Bolivia, coffee farmers discovered its culinary value in the specialty beverage renaissance of 2010s.',
    culturalHistory: 'While global specialty coffee culture only recently discovered Cascara, Yemeni families have been brewing Qishr (dried coffee husks with ginger and cinnamon) for over 500 years in San\'a\'a and Aden. In 2011 the EU initially classified cascara as a "novel food" requiring approval — but its ancient Yemeni heritage overturned that classification.',
    caffeineMgPerServing: 25,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'High',
    flavorProfile: {
      sweetness: 75,
      acidity: 80,
      bitterness: 15,
      body: 40,
      aroma: 82
    },
    tastingNotes: ['Dried Hibiscus', 'Rosehip Tartness', 'Tamarind Sweetness', 'Dried Cherry'],
    healthBenefits: [
      {
        title: 'Fruit-Derived Polyphenols & Vitamin B Complex',
        description: 'Coffee cherry fruit pulp contains unique hydroxycinnamic acids, B vitamins, and rutin not found in roasted coffee beans.',
        scientificBasis: 'Coffee cherry pulp is rich in rutin flavonoid and chlorogenic acid precursors with anti-inflammatory and microbiome-supportive activity.',
        iconName: 'Sparkles'
      },
      {
        title: 'Very Low Caffeine for Late-Day Enjoyment',
        description: '25mg caffeine per cup allows enjoyment in the afternoon or evening without sleep disruption.',
        scientificBasis: 'Coffee cherry pulp husk caffeine content ranges 25–55mg depending on brew strength, far below bean-derived coffee.',
        iconName: 'Moon'
      }
    ],
    contraindications: [
      'High tartaric and citric acid content — may irritate acid-reflux sufferers.',
      'The EU "novel food" classification means some commercial products are underregulated; source from quality specialty vendors.',
      'Always cold-rinse husks before brewing to remove residual fermentation compounds.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '15g dried husk per 350ml water',
      steepTimeMinutes: '4–5 minutes steeping',
      grindSize: 'Whole Dried Husks',
      recommendedMethod: 'Cold Brew (12hr) or Hot Steep with Fine Strainer'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 85,
    seoTitle: 'Cascara Coffee Cherry Tea: Qishr History, Caffeine & Hibiscus Flavor | CupCura',
    seoDescription: 'Complete Cascara guide: coffee fruit husk beverage history in Yemen (Qishr), 25mg caffeine, rosehip tasting notes, and cold brew recipe.'
  },

  {
    id: 'genmaicha-roasted-rice',
    name: 'Genmaicha Toasted Brown Rice Green Tea',
    nativeName: '玄米茶 (Genmaicha)',
    category: 'green_tea',
    origin: 'Shizuoka, Japan',
    tagline: 'Japan\'s most comforting everyday tea: roasted popcorn grains blended with Bancha green tea for a warm, nutty, completely approachable cup.',
    description: 'Genmaicha ("brown rice tea") is a uniquely Japanese blend of Bancha or Sencha green tea leaves combined with roasted brown rice (genmai). The roasting causes some grains to puff like popcorn, earning the folk name "popcorn tea." Its lower cost and gentle flavor made it historically popular among Japanese working-class families who added toasted rice to extend expensive tea supplies.',
    culturalHistory: 'During the Edo Period (1603–1868), Japan\'s poor mixed roasted brown rice into their green tea to make expensive leaves go further. Some historians trace it to 15th-century Japanese Buddhist monks who served the blended tea during zazen meditation. The accidental popping of rice in hot pans eventually became a deliberate flavor feature prized for its warmth.',
    caffeineMgPerServing: 20,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: {
      sweetness: 60,
      acidity: 25,
      bitterness: 20,
      body: 55,
      aroma: 78
    },
    tastingNotes: ['Toasted Popcorn', 'Warm Nutty Grain', 'Fresh Cut Grass', 'Savory Rice Broth'],
    healthBenefits: [
      {
        title: 'Lowest Caffeine Among Green Teas',
        description: 'Rice dilutes the tea leaf ratio, reducing caffeine to only 20mg — making this ideal for children, elderly, or caffeine-sensitive individuals.',
        scientificBasis: 'The 50/50 blend ratio of roasted rice to tea leaf proportionally halves the caffeine and tannin density versus pure Sencha.',
        iconName: 'Moon'
      },
      {
        title: 'GABA-Enriched for Calm & Digestive Comfort',
        description: 'Slow roasting of brown rice produces GABA (gamma-aminobutyric acid) analogs that support calm digestive function and reduce post-meal bloating.',
        scientificBasis: 'Thermal processing of rice produces pyrazines and GABA precursors that modulate gut serotonin receptors and intestinal smooth muscle tension.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Contains gluten-adjacent proteins from rice — individuals with celiac disease should confirm rice sourcing.',
      'Very low caffeine may be insufficient for those seeking a stimulating morning beverage.'
    ],
    brewingParams: {
      waterTempC: 80,
      waterTempF: 176,
      ratioGramsPerLiter: '5g per 200ml water',
      steepTimeMinutes: '1–2 minutes',
      grindSize: 'Whole Blend (Tea Needles + Puffed Rice)',
      recommendedMethod: 'Kyusu Side-Handle Teapot or Covered Mug'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 87,
    seoTitle: 'Genmaicha Toasted Rice Green Tea: History, Low Caffeine & Recipe | CupCura',
    seoDescription: 'Complete Genmaicha guide: why popcorn tea is Japan\'s most comforting everyday green tea, 20mg caffeine, GABA benefits, and Bancha steeping recipe.'
  },
  {
    id: 'vietnamese-phin-drip',
    name: 'Traditional Vietnamese Phin Drip Coffee',
    nativeName: 'Cà Phê Phin',
    category: 'coffee',
    origin: 'Buon Ma Thuot, Vietnam',
    tagline: 'Strong, bold Robusta drip coffee extracted slowly through a metal Phin filter, served over sweet condensed milk.',
    description: 'Traditional Vietnamese coffee brewed using a Phin filter — a small metal drip chamber that sits on top of the cup. Utilizing dark-roasted Robusta beans, this slow extraction produces a thick, intensely caffeinated brew balanced by sweet, creamy condensed milk.',
    culturalHistory: 'Coffee was introduced to Vietnam by French colonists in 1857. Due to shortages of fresh milk, condensed milk became the standard pairing. Vietnam is now the world\'s second-largest coffee exporter, and Phin brewing remains a central pillar of social life in Hanoi and Saigon.',
    caffeineMgPerServing: 150,
    servingSize: '6 oz cup',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 60, acidity: 15, bitterness: 85, body: 90, aroma: 80 },
    tastingNotes: ['Dark Cocoa', 'Roasted Hazelnut', 'Caramel Butter', 'Earthy Spices'],
    healthBenefits: [
      {
        title: 'High Antioxidant & Neuroprotective Load',
        description: 'Robusta beans contain higher levels of chlorogenic acid and caffeine than Arabica, offering strong antioxidant defense.',
        scientificBasis: 'Robusta has nearly double the chlorogenic acid content of Arabica, providing significant protection against cognitive decline.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Very high caffeine (150mg per small serving) — limit consumption if sensitive to stimulants.',
      'Condensed milk adds substantial sugar and calories; drink black for low-calorie option.'
    ],
    brewingParams: {
      waterTempC: 96,
      waterTempF: 205,
      ratioGramsPerLiter: '20g per 120ml water',
      steepTimeMinutes: '5-7 minutes slow drip',
      grindSize: 'Medium-Coarse (Sand-like)',
      recommendedMethod: 'Stainless Steel Phin Drip Filter'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Vietnamese Phin Coffee: Robusta Caffeine & Recipe | CupCura',
    seoDescription: 'Learn authentic Vietnamese Phin drip coffee: slow metal filter extraction, Robusta beans, condensed milk pairing, and caffeine profile.'
  },
  {
    id: 'affogato-classic',
    name: 'Traditional Italian Affogato al Caffè',
    nativeName: 'Affogato',
    category: 'coffee',
    origin: 'Milan, Italy',
    tagline: 'Hot meets cold: a rich scoop of artisanal vanilla gelato drowned in a hot shot of double espresso.',
    description: 'An elegant Italian dessert consisting of a scoop of premium fior di latte or vanilla bean gelato "drowned" (affogato) in a freshly pulled shot of double espresso. The contrast between hot espresso and freezing ice cream creates a luxurious, bittersweet cream texture.',
    culturalHistory: 'Originating in Italy, the Affogato gained global popularity in the late 20th century as café culture merged with dessert menus. It represents the Italian philosophy of simple, high-quality ingredients combining to create complex flavors.',
    caffeineMgPerServing: 120,
    servingSize: '4 oz serving',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 85, acidity: 40, bitterness: 50, body: 80, aroma: 90 },
    tastingNotes: ['Vanilla Bean custard', 'Crema Bitter Cocoa', 'Sweet Cream', 'Warm Caramel'],
    healthBenefits: [
      {
        title: 'Digestive Stimulation & Endorphin Release',
        description: 'Post-meal espresso stimulates gastric acid and bile secretion to aid digestion, while sweet fats trigger serotonin release.',
        scientificBasis: 'Espresso compounds stimulate gallbladder contraction and prompt stomach acid release, accelerating digestion.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Contains dairy and sugar — not suitable for lactose-intolerant or diabetic diets without alternatives.',
      'Contains 120mg caffeine — avoid late at night despite being served as a dessert.'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '1:2 Espresso Ratio over 1 scoop gelato',
      steepTimeMinutes: '25-30 seconds extraction',
      grindSize: 'Fine Espresso',
      recommendedMethod: '9-Bar Espresso Machine'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'Italian Affogato Recipe: Espresso & Gelato Synergy | CupCura',
    seoDescription: 'Master the perfect Italian Affogato: double espresso shot extraction, vanilla gelato pairing, temperature contrasts, and digestive benefits.'
  },
  {
    id: 'cortado-espresso',
    name: 'Spanish Cortado Espresso',
    nativeName: 'Cortado',
    category: 'coffee',
    origin: 'Madrid, Spain',
    tagline: 'Perfect balance: equal parts double espresso and warm steamed milk with minimal foam to cut the acidity.',
    description: 'A Spanish classic made of equal parts espresso and warm, textured milk. The word "cortado" comes from the Spanish verb cortar (to cut), referring to the milk cutting the espresso\'s intensity and acidity without diluting its rich body.',
    culturalHistory: 'Originating in the Basque country of Spain and spreading to Madrid, the Cortado is traditionally served in a small glass (gibraltar) with a metal handle. It was designed to offer a quick, balanced coffee break that is stronger than a café con leche.',
    caffeineMgPerServing: 120,
    servingSize: '4 oz glass',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 60, acidity: 40, bitterness: 45, body: 75, aroma: 85 },
    tastingNotes: ['Toasted Caramel', 'Bittersweet Cocoa', 'Creamy Milk', 'Roasted Almond'],
    healthBenefits: [
      {
        title: 'Gentle on Stomach Lining',
        description: 'Steamed milk proteins bind to coffee tannins, reducing stomach irritation and minimizing acid spikes.',
        scientificBasis: 'Dairy proteins (casein) bind to acidic chlorogenic compounds, smoothing out gastric transit.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Contains dairy (can use oat or almond milk alternatives).',
      'High caffeine concentration per volume.'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '2 oz espresso + 2 oz steamed milk',
      steepTimeMinutes: '25 seconds pour',
      grindSize: 'Fine Espresso',
      recommendedMethod: 'Espresso Machine + Steam Wand'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 93,
    seoTitle: 'Spanish Cortado Coffee Guide: Espresso Milk Ratio | CupCura',
    seoDescription: 'How to brew a perfect Spanish Cortado: 1:1 espresso to steamed milk ratio, taste radar profile, and stomach-friendly dairy science.'
  },
  {
    id: 'ristretto-double',
    name: 'Italian Ristretto Double Shot',
    nativeName: 'Caffè Ristretto',
    category: 'coffee',
    origin: 'Naples, Italy',
    tagline: 'Short and sweet: a restricted espresso pull extracting only the sweetest floral compounds with zero bitter finish.',
    description: 'A ristretto is a short shot of espresso brewed with the same amount of coffee but half the water volume. By restricting the extraction time, it captures the early soluble compounds (acids and sugars) while leaving behind the bitter compounds extracted at the end of a shot.',
    culturalHistory: 'Ristretto is the choice of espresso purists in southern Italy, particularly Naples, where dark, intense roasts are pulled short to create a thick, syrup-like concentrate that is drank standing at the bar with a glass of water.',
    caffeineMgPerServing: 110,
    servingSize: '1.5 oz double shot',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 80, acidity: 35, bitterness: 30, body: 90, aroma: 95 },
    tastingNotes: ['Concentrated Molasses', 'Dark Cocoa Nib', 'Marzipan Sweetness', 'Toasted Walnut'],
    healthBenefits: [
      {
        title: 'Lower Bitter Tannin Concentration',
        description: 'Short extraction avoids pulling bitter chlorogenic breakdown products (quinic acid), making it exceptionally smooth.',
        scientificBasis: 'Ristretto restricts brew time to 15-20 seconds, avoiding the hydro-lysis of heavier, bitter polyphenols.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Very dense and syrupy; can be overwhelming for casual coffee drinkers.',
      'High caffeine density.'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '18g in -> 22g out (1:1.2 ratio)',
      steepTimeMinutes: '15-18 seconds extraction',
      grindSize: 'Ultra-Fine Espresso',
      recommendedMethod: '9-Bar Espresso Machine'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'Ristretto Espresso Guide: Short Ratio vs Espresso | CupCura',
    seoDescription: 'Learn Ristretto brewing mechanics: 1:1 ratio extraction, short pull sweetness science, caffeine content, and Neapolitan traditions.'
  },
  {
    id: 'long-black',
    name: 'Australian Long Black Coffee',
    nativeName: 'Long Black',
    category: 'coffee',
    origin: 'Sydney, Australia',
    tagline: 'Crema first: double espresso extracted directly over hot water, preserving the delicate crema and aromatics.',
    description: 'An Australian and New Zealand specialty coffee favorite. It is prepared by pulling a double shot of espresso directly over hot water (usually 4-6 oz). This specific order of preparation preserves the golden crema and delicate volatile aromatics, unlike an Americano where water is poured over espresso.',
    culturalHistory: 'Developed in Australia in the 1980s to replicate the strength of filter coffee for Italian immigrants who found local drip coffee too weak. Pulling the espresso last preserves the integrity of the crema, which Australians consider vital for flavor complexity.',
    caffeineMgPerServing: 120,
    servingSize: '6 oz cup',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 65, acidity: 50, bitterness: 45, body: 60, aroma: 90 },
    tastingNotes: ['Fruity Brightness', 'Citrus Peel', 'Bittersweet Crema', 'Toasted Pecan'],
    healthBenefits: [
      {
        title: 'Preserved Crema Bioactive Compounds',
        description: 'Preserving the crema retains coffee lipids and micro-bubbles that hold aromatic volatile compounds, aiding olfactory sensory pathways.',
        scientificBasis: 'Crema colloids slow the release of caffeine, extending the alerting effect and protecting delicate lipids from oxidation.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'High acidity can trigger heartburn if consumed on an empty stomach.',
      'Contains 120mg caffeine; restrict in late afternoon.'
    ],
    brewingParams: {
      waterTempC: 92,
      waterTempF: 198,
      ratioGramsPerLiter: 'Double Espresso shot over 120ml hot water',
      steepTimeMinutes: '25 seconds pour over hot base',
      grindSize: 'Fine Espresso',
      recommendedMethod: 'Espresso Machine + Hot Water Spout'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 90,
    seoTitle: 'Australian Long Black: Crema Preservation & Ratio | CupCura',
    seoDescription: 'Why the Long Black differs from the Americano: order of extraction, crema preservation, caffeine content, and Melbourne recipe.'
  },
  {
    id: 'yemen-mocha',
    name: 'Yemen Ancient Harazi Mocha Coffee',
    nativeName: 'قهوة الموكا (Qahwah)',
    category: 'coffee',
    origin: 'Haraz Mountains, Yemen',
    tagline: 'The historic origin of coffee trade: dry-processed wild heirloom beans with intense chocolate, blueberry, and spice character.',
    description: 'Yemen Mocha (Harazi) is cultivated on ancient stone terraces carved into the Haraz mountains at elevations up to 2,200 meters. The beans are dry-processed (sun-dried on rooftops), producing a highly concentrated, complex, and wild cup characterized by natural chocolate notes, deep berry acidity, and spice undertones.',
    culturalHistory: 'Yemen is the birthplace of the commercial coffee trade. From the 15th to the 18th centuries, the port of Al-Mukha (Mocha) held a monopoly on global coffee exports. The natural chocolate notes of Yemeni beans inspired Europeans to mix cocoa into coffee, giving rise to the modern "cafe mocha" dessert drink.',
    caffeineMgPerServing: 80,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'High',
    flavorProfile: { sweetness: 70, acidity: 80, bitterness: 40, body: 70, aroma: 95 },
    tastingNotes: ['Dark Bakers Chocolate', 'Fermented Blueberry', 'Cardamom Spice', 'Earthy Leather'],
    healthBenefits: [
      {
        title: 'Polyphenol & Anti-Inflammatory Density',
        description: 'High-altitude dry processing concentrates unique chlorogenic isomers that help reduce systemic vascular inflammation.',
        scientificBasis: 'Dry-processed high-altitude Arabica seeds exhibit higher levels of total phenolics and anti-inflammatory caffeoylquinic acids.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Acidity is highly pronounced — not recommended for GERD sufferers.',
      'Yemeni beans are scarce and expensive; beware of cheap "Mocha blends" that lack authentic origin.'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '1:15 Ratio (16g coffee to 240g water)',
      steepTimeMinutes: '3:30 minutes pour time',
      grindSize: 'Medium-Fine',
      recommendedMethod: 'Hario V60 or Kalita Wave Pour-Over'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 92,
    seoTitle: 'Yemen Harazi Mocha Coffee: History, Terroir & Recipe | CupCura',
    seoDescription: 'Discover authentic Yemen Mocha coffee: Haraz mountain dry-processing, natural chocolate notes, historical Mocha port, and V60 recipe.'
  },
  {
    id: 'jamaica-blue-mountain',
    name: 'Clifton Mount Estate Jamaica Blue Mountain Coffee',
    nativeName: 'Blue Mountain Coffee',
    category: 'coffee',
    origin: 'Blue Mountains, Jamaica',
    tagline: 'World-renowned mildness: volcanic soil and blue mountain mist produce a smooth, silk-bodied cup with zero bitterness.',
    description: 'Jamaica Blue Mountain is a certified single-origin specialty coffee grown in the volcanic soil of the Blue Mountains of Jamaica. The unique microclimate — cool temperatures, heavy rainfall, and constant mist — slows down cherry development, yielding beans with a remarkably smooth, mild flavor profile and clean sweet finish.',
    culturalHistory: 'Introduced to Jamaica in 1728 by Governor Nicholas Lawes, Blue Mountain coffee became highly prized by British royalty. Today, the industry is strictly regulated by the Jamaica Agricultural Commodities Regulatory Authority (JACRA) to protect the brand, and it is traditionally shipped in handmade wooden barrels.',
    caffeineMgPerServing: 70,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 85, acidity: 30, bitterness: 20, body: 75, aroma: 85 },
    tastingNotes: ['Sweet Herbal Cream', 'Milk Chocolate', 'Mild Hazelnut', 'Floral Cedarwood'],
    healthBenefits: [
      {
        title: 'Mild Stomach & Low Bitterness Profile',
        description: 'Extremely low bitterness and balanced acidity make this coffee gentle on stomach lining and esophageal tissues.',
        scientificBasis: 'Alkaloid testing reveals lower concentrations of bitter quinic and caffeic acids, reducing gastric acid secretion stimuli.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Very expensive leaves/beans — demand precision extraction scales to avoid waste.',
      'Avoid adding heavy cream or syrups which overpower the delicate, mild character of the coffee.'
    ],
    brewingParams: {
      waterTempC: 92,
      waterTempF: 198,
      ratioGramsPerLiter: '1:16 Ratio (15g coffee to 240g water)',
      steepTimeMinutes: '3:00 minutes extraction',
      grindSize: 'Medium',
      recommendedMethod: 'Chemex Classic or French Press'
    },
    affiliateProducts: [
      {
        id: 'prod-jamaica-blue-mountain',
        title: 'Wallenford Estate Jamaica Blue Mountain Whole Beans (227g)',
        type: 'beans_or_leaves',
        price: '$69.00',
        rating: 4.92,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80',
        vendor: 'Wallenford Estate',
        url: 'https://www.amazon.com/s?k=jamaica+blue+mountain+coffee+beans',
        badge: 'Rarest Island Origin'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 94,
    seoTitle: 'Jamaica Blue Mountain Coffee: Smoothness Science & Recipe | CupCura',
    seoDescription: 'Why Jamaica Blue Mountain coffee has zero bitterness: slow mist maturation, volcanic soils, regulations, and Chemex recipe.'
  },
  {
    id: 'kona-coffee',
    name: 'Hawaiian Kona Extra Fancy Volcanic Coffee',
    nativeName: 'Kona Coffee',
    category: 'coffee',
    origin: 'Kona Coast, Big Island, Hawaii, USA',
    tagline: 'Sun-kissed luxury: volcanic microclimate cultivation creates a rich, sweet cup with bright fruit notes and buttery body.',
    description: 'Kona coffee is cultivated exclusively on the slopes of Hualalai and Mauna Loa on the Big Island of Hawaii. The morning sun, afternoon clouds, and mineral-rich volcanic soil create a unique terroir that yields dense, high-quality seeds graded "Extra Fancy" for their size and lack of defects.',
    culturalHistory: 'Samuel Ruggles planted the first coffee cuttings in Kona in 1828. During the late 19th century, Japanese immigrants leased small coffee farms, establishing family-run estates that perfected wet-processing methods. Authentic Kona is highly sought after and protected by Hawaii state laws.',
    caffeineMgPerServing: 85,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 80, acidity: 55, bitterness: 30, body: 70, aroma: 90 },
    tastingNotes: ['Brown Sugar', 'Bright Apricot', 'Toasted Macadamia Nut', 'Honeyed Body'],
    healthBenefits: [
      {
        title: 'Endothelial Function Support',
        description: 'Rich in caffeoylquinic acids that support healthy arterial expansion and vascular lining wellness.',
        scientificBasis: 'Lava-soil grown arabica cultivars retain high concentration of bioavailable caffeoylquinic acids.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'Ensure the packaging states "100% Kona Coffee" — cheap "Kona Blends" contain only 10% genuine beans.',
      'High price point makes it an occasional luxury rather than an everyday option.'
    ],
    brewingParams: {
      waterTempC: 93,
      waterTempF: 200,
      ratioGramsPerLiter: '1:15 Ratio (16g coffee to 240g water)',
      steepTimeMinutes: '3:00 minutes',
      grindSize: 'Medium',
      recommendedMethod: 'Hario V60 or Kalita Wave Pour-Over'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Hawaiian Kona Coffee: Extra Fancy Volcanic Terroir | CupCura',
    seoDescription: 'Complete Kona Coffee guide: Hawaii volcanic microclimate terroir, Extra Fancy grading scale, and optimal V60 pour-over parameters.'
  },
  {
    id: 'english-breakfast',
    name: 'High-Grown English Breakfast Black Tea',
    nativeName: 'English Breakfast',
    category: 'black_tea',
    origin: 'Assam (India), Ceylon (Sri Lanka) & Kenya',
    tagline: 'The morning classic: a robust, malted blend of black teas designed to pair perfectly with milk and sugar.',
    description: 'A traditional blend of robust Assam, brisk Ceylon, and bright Kenyan black teas. English Breakfast is designed to be strong, full-bodied, and highly tannic to easily cut through milk and sweeteners, serving as a reliable morning stimulant.',
    culturalHistory: 'Invented in Edinburgh, Scotland, by tea master Robert Drysdale in 1843, the blend was popularized in England when Queen Victoria tasted it at Balmoral Castle and took a large supply back to London. It quickly became the definitive British breakfast beverage.',
    caffeineMgPerServing: 50,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 50, acidity: 35, bitterness: 60, body: 80, aroma: 80 },
    tastingNotes: ['Malted Barley', 'Rich Oakwood', 'Dark Molasses', 'Crisp Tannic Grip'],
    healthBenefits: [
      {
        title: 'Polyphenol Cardiovascular Defense',
        description: 'Rich in theaflavins and thearubigins that support healthy cholesterol levels and cardiovascular lining health.',
        scientificBasis: 'Polymerized black tea theaflavins act as potent antioxidant agents that protect lipids from peroxidation.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'High tannin content can cause stomach irritation if drunk on a completely empty stomach without milk.',
      'Tannins bind to non-heme iron; avoid drinking immediately after iron-rich meals.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '3g per 240ml water',
      steepTimeMinutes: '3-4 minutes (add milk if desired)',
      grindSize: 'Broken Leaf / Fannings',
      recommendedMethod: 'Teapot with Infuser Basket'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'English Breakfast Tea: Blending Secrets & Tannin Science | CupCura',
    seoDescription: 'Master the English Breakfast blend: Assam, Ceylon & Kenya balance, caffeine levels, tannin properties, and optimal milk pairing temperature.'
  },
  {
    id: 'tieguanyin-oolong',
    name: 'Anxi Tieguanyin Iron Goddess Oolong',
    nativeName: '铁观音 (Tiě Guānyīn)',
    category: 'fermented_specialty',
    origin: 'Anxi, Fujian, China',
    tagline: 'The Iron Goddess of Mercy: lightly oxidized oolong delivering explosive jade floral aroma and a sweet nectar finish.',
    description: 'Tieguanyin is a premium Chinese oolong tea from Anxi County. Characterized by tightly rolled jade-green nuggets, this tea undergoes a complex multi-step process including tossing, bruising, and light oxidation (~20%). It yields a golden-green liquor with a signature orchid aroma and lingering sweetness.',
    culturalHistory: 'Named after the Buddhist Bodhisattva Guanyin (Goddess of Mercy). According to legend, a poor farmer named Wei repaired a run-down iron statue of Guanyin. In his dreams, the Goddess guided him to a cave containing a single tea shoot. He cultivated the plant, naming it Tieguanyin (Iron Goddess) in honor of the heavy, iron-like leaves.',
    caffeineMgPerServing: 40,
    servingSize: '6 oz cup (180ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 80, acidity: 20, bitterness: 25, body: 70, aroma: 98 },
    tastingNotes: ['Steamed Orchid Blossom', 'Fresh Sweet Pea', 'Coconut Nectar', 'Lingering Mineral Sweetness'],
    healthBenefits: [
      {
        title: 'Oral Health & Fluoride Bio-Availability',
        description: 'Contains bio-available catechins and natural fluoride that help strengthen tooth enamel and inhibit oral bacteria.',
        scientificBasis: 'Oolong leaves absorb soil fluoride naturally, which combines with polyphenols to inhibit Streptococcus mutans growth.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'High-grade Tieguanyin can be infused up to 8 times; do not throw away leaves after only one steep.',
      'Moderate caffeine — avoid consuming large amounts before bedtime.'
    ],
    brewingParams: {
      waterTempC: 90,
      waterTempF: 194,
      ratioGramsPerLiter: '7g per 120ml gaiwan',
      steepTimeMinutes: '15-20 second flash infusions',
      grindSize: 'Tightly Rolled Nuggets',
      recommendedMethod: 'Porcelain Gaiwan'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 93,
    seoTitle: 'Tieguanyin Oolong Tea: Anxi Orchid Taste & Legend | CupCura',
    seoDescription: 'Complete Anxi Tieguanyin Iron Goddess guide: jade rolled leaves, orchid aroma profile, oral health benefits, and Gongfu Gaiwan brewing.'
  },
  {
    id: 'white-peony-tea',
    name: 'Fuding White Peony White Tea',
    nativeName: '白牡丹 (Bái Mǔdān)',
    category: 'green_tea',
    origin: 'Fuding, Fujian, China',
    tagline: 'Comforting floral simplicity: a balanced pluck of single buds and young leaves offering sweet melon and soft hay notes.',
    description: 'White Peony (Bai Mudan) is a popular white tea consisting of one bud and two young leaves. Because it includes mature leaves alongside the silver down buds, it delivers a slightly fuller body, darker golden liquor, and sweeter, more rustic flavor profile than Silver Needle.',
    culturalHistory: 'Originating in Fuding, White Peony represents a more accessible imperial-style tea compared to Silver Needle. It is traditionally harvested in early spring when the buds are plump and the young leaves are tender, offering a balanced taste profile that ages beautifully over years.',
    caffeineMgPerServing: 25,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 75, acidity: 20, bitterness: 15, body: 50, aroma: 85 },
    tastingNotes: ['Sweet Honeysuckle', 'Roasted Chestnut', 'Autumn Hay', 'Dried Pear'],
    healthBenefits: [
      {
        title: 'Skin Cellular Health & Anti-Aging',
        description: 'High concentration of catechins helps protect skin cells from UV-induced free radical damage and collagen breakdown.',
        scientificBasis: 'White tea extracts demonstrate inhibition of elastase and collagenase enzyme activities, supporting skin matrix health.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Delicate leaves can be scalded by boiling water — brew below 85°C to preserve sweetness.',
      'Aged White Peony (older than 3 years) has different health and flavor profiles; check storage conditions.'
    ],
    brewingParams: {
      waterTempC: 80,
      waterTempF: 176,
      ratioGramsPerLiter: '4g per 240ml water',
      steepTimeMinutes: '3 minutes',
      grindSize: 'Unrolled Bud and Leaf',
      recommendedMethod: 'Porcelain Gaiwan or Glass Teapot'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 86,
    seoTitle: 'White Peony (Bai Mudan) Tea: Aging, Skin Science & Recipe | CupCura',
    seoDescription: 'Learn about White Peony (Bai Mudan) white tea: skin anti-aging benefits, bud-to-leaf ratio flavor, aging potential, and 80°C brewing.'
  },
  {
    id: 'green-rooibos',
    name: 'South African Organic Green Rooibos',
    nativeName: 'Green Rooibos',
    category: 'herbal_botanical',
    origin: 'Cederberg Mountains, South Africa',
    tagline: 'Unoxidized wellness: caffeine-free South African red bush leaf preserved green for double the antioxidants and a light, herbal sweet cup.',
    description: 'Green Rooibos is made from the same Aspalathus linearis plant as traditional red rooibos, but it is dried immediately after harvest to prevent oxidation. This preserves its natural green color, resulting in a lighter, woodier flavor profile with higher levels of the rare antioxidant aspalathin.',
    culturalHistory: 'Developed in South Africa in the late 1990s as a high-antioxidant alternative to fermented red rooibos. Green rooibos is harvested in the wild Cederberg region and processed quickly using technologies similar to green tea to lock in its botanical profile.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 70, acidity: 30, bitterness: 10, body: 45, aroma: 80 },
    tastingNotes: ['Sweet Green Herbs', 'Light Apple Wood', 'Spring Grass', 'Mild Honey'],
    healthBenefits: [
      {
        title: 'Blood Glucose Regulation (Aspalathin)',
        description: 'Contains high levels of aspalathin, a rare polyphenol that supports insulin sensitivity and glucose uptake in muscle cells.',
        scientificBasis: 'Aspalathin helps regulate glucose homeostasis through AMPK pathways, reducing metabolic stress markers in trials.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Generally extremely safe and free of side effects; has zero caffeine and low tannin levels.',
      'May exhibit mild phytoestrogenic activity in rare cases.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '4g per 240ml water',
      steepTimeMinutes: '5-7 minutes covered',
      grindSize: 'Fine Needle Cut',
      recommendedMethod: 'French Press or Fine Mesh Infuser'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'Green Rooibos Tea: Aspalathin Blood Sugar Science | CupCura',
    seoDescription: 'Why Green Rooibos tea outperforms red: unoxidized aspalathin benefits, glucose regulation science, zero caffeine, and steeping recipe.'
  },
  {
    id: 'hibiscus-rosehip',
    name: 'Egyptian Hibiscus Rosehip Botanical Infusion',
    nativeName: 'Karkadeh (كركديه)',
    category: 'herbal_botanical',
    origin: 'Upper Egypt & Andes Mountains',
    tagline: 'Tart and vibrant: a crimson, caffeine-free infusion of whole hibiscus calyces and vitamin-dense rosehips for blood pressure support.',
    description: 'A crimson botanical blend combining dried Egyptian hibiscus calyces (Karkadeh) with wild Andean rosehips. This caffeine-free infusion is tart, fruity, and highly acidic, packed with Vitamin C and anthocyanin pigments that support cardiovascular wellness.',
    culturalHistory: 'Hibiscus tea has been enjoyed in North Africa and the Middle East since the time of the Pharaohs. In modern Egypt and Sudan, cold Karkadeh is served at weddings and social gatherings, celebrated for its cooling properties and tart, cranberry-like flavor.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'High',
    flavorProfile: { sweetness: 50, acidity: 90, bitterness: 15, body: 50, aroma: 85 },
    tastingNotes: ['Tart Cranberry', 'Steamed Rose Petal', 'Sour Cherry', 'Earthy Honey'],
    healthBenefits: [
      {
        title: 'Blood Pressure & Heart Support (Anthocyanins)',
        description: 'Anthocyanins in hibiscus act as natural ACE inhibitors, helping to relax blood vessels and support healthy blood pressure.',
        scientificBasis: 'Clinical trials demonstrate that daily hibiscus consumption significantly lowers systolic blood pressure via diuretic and vasodilatory pathways.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'Very high acidity can erode tooth enamel; rinse mouth with water after drinking.',
      'Hibiscus may exhibit mild estrogenic activity; consult a doctor if pregnant.',
      'May lower blood pressure too far if taken alongside prescription antihypertensives.'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '5g whole calyces per 250ml water',
      steepTimeMinutes: '5-10 minutes',
      grindSize: 'Whole Dried Petals and Pods',
      recommendedMethod: 'Teapot or Cold Brew (2 hours)'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Hibiscus Rosehip Tea: Blood Pressure Anthocyanin Science | CupCura',
    seoDescription: 'Complete Hibiscus Rosehip guide: natural ACE-inhibitor blood pressure science, high Vitamin C rosehip synergy, and Karkadeh history.'
  },
  {
    id: 'butterfly-pea',
    name: 'Thai Butterfly Pea Flower Tea',
    nativeName: 'Nam Dok Anchan (น้ำดอกอัญชัน)',
    category: 'herbal_botanical',
    origin: 'Chiang Mai, Thailand',
    tagline: 'Nature\'s color-shifting magic: cobalt-blue flower infusion that turns bright purple with a drop of lemon juice, rich in skin-protecting antioxidants.',
    description: 'Brewed from the dried petals of Clitoria ternatea, a vine native to Southeast Asia. This caffeine-free infusion is prized for its vivid cobalt blue color, driven by highly stable anthocyanin pigments (delphinidin). When an acidic agent like lemon juice is added, the pH shifts, turning the liquor brilliant violet.',
    culturalHistory: 'In Thailand and Vietnam, Anchan tea is served cold as a welcoming drink in spas and hotels, often sweetened with honey and mixed with lime. It is also used as a natural food coloring in traditional sticky rice desserts like Pulut Tai Tai.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 40, acidity: 10, bitterness: 15, body: 35, aroma: 60 },
    tastingNotes: ['Earthy Sweet Pea', 'Alfalfa Hay', 'Mild Corn Silk', 'Neutral Woody Finish'],
    healthBenefits: [
      {
        title: 'Delphinidin Antioxidant & Skin Glow',
        description: 'Packed with delphinidins, potent antioxidants that combat oxidative stress and support skin elasticity.',
        scientificBasis: 'Delphinidins suppress advanced glycation end-products (AGEs) in skin collagen, helping prevent premature cellular aging.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Folk medicine warns against consuming large amounts during pregnancy due to uterine-stimulating compounds.',
      'Flavor is extremely mild/earthy; usually requires lemon and honey to be palatable.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '10 flowers per 250ml water',
      steepTimeMinutes: '5 minutes',
      grindSize: 'Whole Dried Flowers',
      recommendedMethod: 'Glass Teapot (to watch the color shift)'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 88,
    seoTitle: 'Butterfly Pea Flower Tea: pH Color Shift & Delphinidin Science | CupCura',
    seoDescription: 'Why Thai Butterfly Pea tea shifts from blue to purple: pH indicator chemistry, delphinidin collagen skin benefits, and spa recipes.'
  },
  {
    id: 'guayusa-energy',
    name: 'Amazonian Guayusa Energy Infusion',
    nativeName: 'Guayusa',
    category: 'herbal_botanical',
    origin: 'Napo Province, Ecuador',
    tagline: 'Amazonian clean energy: a relative of yerba maté delivering smooth caffeine, L-theanine properties, and zero bitterness.',
    description: 'Guayusa is an herbal infusion brewed from the leaves of the Ilex guayusa holly tree endemic to the Ecuadorian Amazon rainforest. Unlike its cousin yerba maté, guayusa is low in bitter tannins, producing a naturally sweet, smooth cup packed with caffeine, chlorogenic acids, and theobromine.',
    culturalHistory: 'Cultivated for thousands of years by the indigenous Kichwa people, guayusa is drank early in the morning around communal fires (guayusada) to interpret dreams and prepare hunters with "clean energy" that heightens focus without leaving jitters.',
    caffeineMgPerServing: 90,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 70, acidity: 20, bitterness: 15, body: 60, aroma: 75 },
    tastingNotes: ['Smooth Sweet Leaf', 'Soft Earthy Wood', 'Very Light Honey', 'Mild Green Grass'],
    healthBenefits: [
      {
        title: 'Jitter-Free Clean Energy Complex',
        description: 'Natural combination of caffeine and theobromine stimulates the central nervous system while keeping blood vessels relaxed.',
        scientificBasis: 'Theobromine behaves as a cardiac vasodilator, counteracting the vasoconstrictive spike of caffeine for smooth mental clarity.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'Contains 90mg of caffeine per serving — avoid in late evening to protect sleep hygiene.',
      'Kichwa tradition recommends slow sipping; avoid chugging to prevent rapid caffeine spikes.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '4g per 240ml water',
      steepTimeMinutes: '5-7 minutes (cannot be oversteeped)',
      grindSize: 'Cut Leaves',
      recommendedMethod: 'French Press or Traditional Boiling'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 90,
    seoTitle: 'Amazonian Guayusa Tea: Clean Caffeine & Theobromine Science | CupCura',
    seoDescription: 'Discover Ecuador Guayusa tea: how theobromine prevents caffeine jitters, low tannin sweetness, and indigenous morning rituals.'
  },
  {
    id: 'kava-kava-tea',
    name: 'Pacific Kava Kava Soothing Ceremonial Brew',
    nativeName: 'Kava / \'Awa',
    category: 'herbal_botanical',
    origin: 'Vanuatu & Fiji Islands',
    tagline: 'The peace botanical of the South Pacific: a cold-emulsified root infusion delivering anxiety relief and muscle relaxation without cognitive fog.',
    description: 'Kava is brewed by cold-emulsifying the ground root of the Piper methysticum shrub in cold water. Active lactones (kavalactones) produce a numbing sensation in the mouth and prompt significant physical relaxation, stress relief, and tranquility.',
    culturalHistory: 'Kava has been used for over 3,000 years in the Pacific islands of Fiji, Vanuatu, Samoa, and Tonga for religious, political, and social gatherings. The ceremonial consumption of Kava is a sacred ritual to welcome guests, seal alliances, and resolve community disputes in peace.',
    caffeineMgPerServing: 0,
    servingSize: '4 oz shell bowl',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 20, acidity: 10, bitterness: 80, body: 60, aroma: 50 },
    tastingNotes: ['Earthy Bitter Root', 'Peppery Bite', 'Wood Sap', 'Numbing Astringency'],
    healthBenefits: [
      {
        title: 'Anxiety Relief & GABAA Potentiation',
        description: 'Kavalactones modulate GABAA brain receptors to reduce anxiety, relax skeletal muscles, and promote peaceful sleep without altering motor coordination.',
        scientificBasis: 'Kavalactones (e.g. kavain) behave as positive allosteric modulators of GABAA receptors, verified in clinical trials to match placebo-controlled anxiolytics.',
        iconName: 'Moon'
      }
    ],
    contraindications: [
      'Heavy regular consumption is associated with kava dermopathy (dry, scaly skin).',
      'Do not combine with alcohol or prescription sedatives due to hepatotoxic risk synergies.',
      'Flavor is strongly earthy and bitter, leaving a temporary numb sensation on the tongue.'
    ],
    brewingParams: {
      waterTempC: 25,
      waterTempF: 77,
      ratioGramsPerLiter: '30g ground root in 500ml room temp water',
      steepTimeMinutes: '10 minutes kneading and squeezing in strainer bag',
      grindSize: 'Medium Ground Root',
      recommendedMethod: 'Traditional Kneading in Muslin Strainer Bag'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 86,
    seoTitle: 'Pacific Kava Kava: Numbing Kavalactone Science & Recipe | CupCura',
    seoDescription: 'Discover traditional Pacific Kava Kava: cold root kneading process, GABAA receptor anxiety relief science, and mouth-numbing properties.'
  },
  {
    id: 'peppermint-herbal',
    name: 'Oregon Organic Peppermint Soothing Infusion',
    nativeName: 'Peppermint Tea',
    category: 'herbal_botanical',
    origin: 'Willamette Valley, Oregon, USA',
    tagline: 'Pure digestive comfort: cool, refreshing menthol infusion that naturally relaxes gastrointestinal muscles.',
    description: 'An herbal infusion made from the dried leaves of Mentha × piperita. Highly concentrated in essential volatile oils, particularly menthol and menthone, it delivers an intensely cooling aroma and clean, crisp finish that aids digestion.',
    culturalHistory: 'Peppermint is a natural hybrid of spearmint and watermint, first described by English botanist John Ray in 1696. The Willamette Valley in Oregon features ideal rich soils and dry summer heat, producing the highest essential oil concentration peppermint in the global market.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 50, acidity: 15, bitterness: 10, body: 40, aroma: 95 },
    tastingNotes: ['Cool Menthol Blast', 'Sweet Camphor', 'Crisp Mint Leaf', 'Clean Herb Finish'],
    healthBenefits: [
      {
        title: 'Smooth Muscle Relaxation (Digestive Aid)',
        description: 'Menthol exerts a direct antispasmodic effect on the smooth muscles of the digestive tract, easing cramps, gas, and indigestion.',
        scientificBasis: 'Menthol acts as a natural calcium channel blocker in intestinal smooth muscle, verified in studies to alleviate symptoms of IBS.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Avoid if suffering from severe acid reflux (GERD), as relaxing the lower esophageal sphincter can worsen heartburn.',
      'Safe for all ages and late-night use due to zero caffeine.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '4g dried leaf per 250ml water',
      steepTimeMinutes: '5-7 minutes covered',
      grindSize: 'Cut Leaf',
      recommendedMethod: 'Teapot with Mesh Infuser'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'Oregon Peppermint Tea: Menthol IBS Muscle Science | CupCura',
    seoDescription: 'Why Peppermint tea is the ultimate digestive antispasmodic: menthol calcium channel blocker science, GERD precautions, and brewing.'
  },
  {
    id: 'spearmint-digestive',
    name: 'Moroccan Organic Spearmint Digestive Infusion',
    nativeName: 'Naanaa (نعناع)',
    category: 'herbal_botanical',
    origin: 'Souss-Massa, Morocco',
    tagline: 'Gentle mint sweetness: aromatic spearmint rich in carvone for soothing nausea and gastric upset.',
    description: 'An herbal infusion of dried Mentha spicata leaves. Spearmint contains carvone rather than menthol as its primary volatile oil, giving it a sweeter, gentler mint character that is highly effective at relieving nausea without aggravating reflux.',
    culturalHistory: 'Spearmint (Naanaa) is the heart of Moroccan hospitality, traditionally brewed with gunpowder green tea and sugar to make Maghrebi Mint Tea. Drank throughout the day in small glasses poured from high heights to create a sweet foam crown.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 75, acidity: 15, bitterness: 10, body: 35, aroma: 90 },
    tastingNotes: ['Sweet Mint Candy', 'Spiced Green Leaf', 'Mild Honey', 'Cool Fresh Finish'],
    healthBenefits: [
      {
        title: 'Gastric Comfort & Anti-Emetic Activity',
        description: 'Carvone relaxes stomach muscles and helps alleviate nausea, motion sickness, and abdominal discomfort.',
        scientificBasis: 'Volatile carvone demonstrates anti-inflammatory and gut-motility regulating properties in clinical models.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'High doses may affect hormone levels; consult a doctor if dealing with hormone-sensitive conditions.',
      'Extremely gentle and safe for children.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '4g leaves per 240ml water',
      steepTimeMinutes: '5 minutes covered',
      grindSize: 'Whole Leaf',
      recommendedMethod: 'Glass Teapot'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 87,
    seoTitle: 'Moroccan Spearmint Tea: Carvone Nausea Science | CupCura',
    seoDescription: 'Learn Spearmint tea digestive benefits: carvone stomach relaxation vs peppermint menthol, Maghrebi tea culture, and brewing guide.'
  },
  {
    id: 'lemon-balm',
    name: 'Bavarian Lemon Balm Calming Infusion',
    nativeName: 'Melisse',
    category: 'herbal_botanical',
    origin: 'Bavaria, Germany',
    tagline: 'Gentle nervous support: citrusy lemon balm rich in rosmarinic acid to soothe anxiety, reduce stress, and aid sleep.',
    description: 'An herbal infusion of dried Melissa officinalis leaves. Lemon balm is a member of the mint family, containing high concentrations of rosmarinic acid and terpenes that promote relaxation and cognitive stability.',
    culturalHistory: 'Introduced by Arab physicians to Europe in the 10th century, Lemon Balm was cultivated in monastery gardens for its heart-calming and memory-enhancing qualities. Carmelite water, an alcoholic tonic containing lemon balm, was patented by French Carmelite nuns in 1611.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 65, acidity: 40, bitterness: 10, body: 40, aroma: 85 },
    tastingNotes: ['Sweet Lemon Zest', 'Mild Herb Mint', 'Lemongrass Grassiness', 'Honeyed Floral'],
    healthBenefits: [
      {
        title: 'Anxiolytic Calm & GABA-T Inhibition',
        description: 'Rosmarinic acid inhibits GABA-transaminase (GABA-T) enzymes, keeping GABA active longer to promote calm focus.',
        scientificBasis: 'Clinical studies show rosmarinic acid suppresses the enzyme that breaks down GABA, acting as a natural mild sedative.',
        iconName: 'Brain'
      }
    ],
    contraindications: [
      'May lower thyroid hormone levels; consult a physician if dealing with hypothyroidism.',
      'Avoid consuming large amounts before driving due to potential drowsiness.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '4g per 240ml water',
      steepTimeMinutes: '5-8 minutes covered to retain oils',
      grindSize: 'Whole Leaf',
      recommendedMethod: 'Porcelain Teapot or Mug with Lid'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 88,
    seoTitle: 'Lemon Balm Calm Tea: Rosmarinic Acid GABA Science | CupCura',
    seoDescription: 'Discover Lemon Balm (Melisse) calming benefits: rosmarinic acid GABA-T enzyme inhibition science, thyroid warnings, and recipe.'
  },
  {
    id: 'tulsi-holy-basil',
    name: 'Ayurvedic Tulsi Holy Basil Adaptogen Tea',
    nativeName: 'तुलसी (Tulsi)',
    category: 'herbal_botanical',
    origin: 'Uttar Pradesh, India',
    tagline: 'The Queen of Herbs: premier adaptogen containing eugenol to help the body adapt to physical and environmental stress.',
    description: 'An herbal infusion of Ocimum tenuiflorum (Holy Basil) leaves, particularly Krishna and Rama cultivars. Rich in volatile eugenol, caryophyllene, and ursolic acid, it functions as a potent metabolic and psychological adaptogen.',
    culturalHistory: 'Revered in Hinduism as an earthly manifestation of the goddess Vrinda, Tulsi is planted in the courtyards of traditional Indian homes. In Ayurveda, it is termed "The Incomparable One" and used for 5,000 years to restore emotional balance, clarify thoughts, and boost immunity.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 55, acidity: 20, bitterness: 30, body: 50, aroma: 92 },
    tastingNotes: ['Spiced Clove', 'Peppermint Mintiness', 'Sweet Anise', 'Anise Seed Finish'],
    healthBenefits: [
      {
        title: 'Cortisol Regulation & Stress Adaptability',
        description: 'Eugenol and ursolic acid modulate adrenal stress response pathways, lowering cortisol spikes and balancing energy.',
        scientificBasis: 'Ursolic acid reduces oxidative stress in tissue cells, while eugenol supports healthy immune cytokine levels.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'May lower blood glucose; diabetics should monitor blood sugar levels.',
      'Avoid regular therapeutic consumption if trying to conceive, as traditional usage suggests mild anti-fertility effects.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '3g per 240ml water',
      steepTimeMinutes: '5-10 minutes covered',
      grindSize: 'Cut Leaves',
      recommendedMethod: 'Covered Tea Mug'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Tulsi Holy Basil: Eugenol Cortisol Stress Science | CupCura',
    seoDescription: 'Learn Tulsi Holy Basil adaptogenic benefits: eugenol cortisol balance, Ayurvedic history, Rama/Krishna types, and covered brewing recipe.'
  },
  {
    id: 'valerian-root',
    name: 'Traditional Valerian Root Nighttime Tea',
    nativeName: 'Valeriana',
    category: 'herbal_botanical',
    origin: 'Polish Forest Meadows',
    tagline: 'Nature\'s sedative: an earthy, pungent root infusion rich in valerenic acid to promote deep, restorative sleep.',
    description: 'An herbal infusion prepared from the dried roots of Valeriana officinalis. Notable for its strong, pungent, musky aroma, it contains valerenic acid and valeranone compounds that act directly on the brain\'s sleep pathways to encourage deep rest.',
    culturalHistory: 'Used since ancient Greece and Rome, Valerian was described by Hippocrates and Galen as a remedy for insomnia. During World War II, it was widely prescribed in England to calm the nerves of citizens during air raids.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 30, acidity: 15, bitterness: 75, body: 60, aroma: 40 },
    tastingNotes: ['Damp Forest Floor', 'Pungent Root Muski', 'Bittersweet Earth', 'Wood Bark Finish'],
    healthBenefits: [
      {
        title: 'Valerenic Acid Sleep Induction',
        description: 'Valerenic acid inhibits the breakdown of GABA in brain synapses, inducing drowsiness and improving deep sleep architecture.',
        scientificBasis: 'Valerenic acid binds to GABAA receptors to stimulate GABA release and block synaptic reuptake, lowering sleep latency.',
        iconName: 'Moon'
      }
    ],
    contraindications: [
      'Do not consume alongside prescription sedatives, sleep aids, or alcohol.',
      'Pungent, musky aroma can be unpleasant; best blended with peppermint, chamomile, or honey.',
      'Avoid consuming in the morning or before driving due to potential motor lag.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '4g dried root per 240ml water',
      steepTimeMinutes: '10-15 minutes covered',
      grindSize: 'Cut Root Pieces',
      recommendedMethod: 'Glass Teapot (Covered to trap heavy volatile compounds)'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 85,
    seoTitle: 'Valerian Root Tea: Valerenic Acid Sleep Induction | CupCura',
    seoDescription: 'Why Valerian root acts as a natural sedative: valerenic acid synaptic GABA pathways, interaction warnings, and flavor blending guide.'
  },
  {
    id: 'ginger-root-tea',
    name: 'Fresh Ginger Root Warming Decoction',
    nativeName: 'Adrak Chai (अदरक का काढ़ा)',
    category: 'herbal_botanical',
    origin: 'Kerala, India',
    tagline: 'Spicy digestive fire: gingerol-rich root simmered into a warming decoction to stimulate gut motility and soothe nausea.',
    description: 'A spicy infusion prepared by simmering fresh rhizomes of Zingiber officinale. Unlike steep brewing, simmering (decoction) extracts the maximum amount of gingerol, yielding an intensely warming, spicy beverage that supports digestion and immunity.',
    culturalHistory: 'Ginger has been cultivated in South Asia for over 5,000 years. In Ayurveda, it is termed the "Universal Medicine" (Vishwabhesaja) and used to stimulate "Agni" (digestive fire). It remains a staple home remedy across Asia for colds, nausea, and morning sickness.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 50, acidity: 40, bitterness: 20, body: 55, aroma: 85 },
    tastingNotes: ['Fiery Spice Ginger', 'Sweet Lemon Citrus', 'Pungent Peppery Bite', 'Warming Throat Zing'],
    healthBenefits: [
      {
        title: 'Gingerol Gut Motility & Anti-Nausea',
        description: 'Gingerols stimulate gastric emptying and accelerate gut transit, helping to relieve bloating, gas, and stomach upset.',
        scientificBasis: 'Gingerols function as selective antagonists at serotonin 5-HT3 and cholinergic receptors in the GI tract, reducing nausea.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Very spicy brew can cause mild heartburn if consumed in heavy excess on an empty stomach.',
      'Ginger has mild anti-platelet activity; avoid high doses before scheduled surgery.'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '20g sliced fresh root per 300ml water',
      steepTimeMinutes: '10-15 minutes simmering on stovetop',
      grindSize: 'Sliced or Crushed Fresh Root',
      recommendedMethod: 'Stovetop Simmer (Decoction)'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 90,
    seoTitle: 'Ginger Root Decoction: Gingerol Gut Motility Science | CupCura',
    seoDescription: 'How to make a fresh ginger root decoction: stovetop simmer times, gingerol 5-HT3 receptor anti-nausea science, and digestion.'
  },
  {
    id: 'milk-oolong',
    name: 'Taiwanese Jin Xuan Milk Oolong',
    nativeName: '金萱茶 (Jīn Xuān Chá)',
    category: 'fermented_specialty',
    origin: 'Alishan Mountains, Chiayi, Taiwan',
    tagline: 'Nature\'s creamy illusion: cultivar-specific oolong harvested at 1,500m elevation offering natural butter and sweet cream notes with zero artificial additives.',
    description: 'Jin Xuan (Taiwan Tea No. 12) is a specialized oolong cultivar developed in Taiwan in 1980. Harvested from Alishan\'s volcanic mountain farms, the semi-oxidized leaves naturally synthesize volatile lactone compounds during light bruising, yielding a sweet cream and butter flavor profile.',
    culturalHistory: 'Developed by the Taiwan Tea Research and Extension Station (TRES) and named in honor of the mother of the lead researcher. True Milk Oolong has no milk or dairy added; its signature creamy mouthfeel is purely a product of agricultural cultivar selection and oxidation manipulation.',
    caffeineMgPerServing: 35,
    servingSize: '6 oz cup (180ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 85, acidity: 20, bitterness: 15, body: 75, aroma: 92 },
    tastingNotes: ['Sweet Whipped Cream', 'Warm Salted Butter', 'Light Gardenia Flower', 'Silky Coconut Milk'],
    healthBenefits: [
      {
        title: 'Mild Digestive Activation & Relaxation',
        description: 'Semi-oxidized polyphenols stimulate mild pancreatic lipase activity while maintaining low tannins for easy stomach transit.',
        scientificBasis: 'Jin Xuan oolong polyphenols promote gut microbiome diversity and support healthy postprandial glucose rates.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'Beware of cheap "Milk Oolongs" that are artificially flavored with milk powders or chemical sprays; genuine Jin Xuan is unflavored.',
      'Moderate caffeine; reuse leaves up to 6 times using Gongfu style.'
    ],
    brewingParams: {
      waterTempC: 90,
      waterTempF: 194,
      ratioGramsPerLiter: '6g per 120ml gaiwan',
      steepTimeMinutes: '20-30 second steep times',
      grindSize: 'Tightly Rolled Emerald Balls',
      recommendedMethod: 'Porcelain Gaiwan or Clay Teapot'
    },
    affiliateProducts: [
      {
        id: 'prod-yixing-clay-pot',
        title: 'Handmade Yixing Purple Clay Zisha Teapot (200ml)',
        type: 'equipment',
        price: '$75.00',
        rating: 4.86,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        vendor: 'Jiangsu Tea Artisan',
        url: 'https://www.amazon.com/s?k=yixing+purple+clay+teapot',
        badge: 'Oolong Specialist'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 94,
    seoTitle: 'Taiwanese Milk Oolong: Jin Xuan Cream Lactone Science | CupCura',
    seoDescription: 'Complete Jin Xuan Milk Oolong guide: why it has a natural butter flavor without dairy additions, Alishan terroir, and Gaiwan parameters.'
  },
  {
    id: 'jun-kombucha',
    name: 'Jun Kombucha Raw Probiotic Tea',
    nativeName: 'Jun',
    category: 'fermented_specialty',
    origin: 'Himalayan Foothills, Tibet',
    tagline: 'The champagne of kombuchas: green tea fermented with raw wildflower honey for a effervescent probiotic elixir.',
    description: 'Jun is a fermented beverage brewed from green tea and raw honey, fermented by a specialized symbiotic culture of bacteria and yeast (SCOBY). Unlike standard black tea kombucha that utilizes cane sugar, Jun relies on wild honey, yielding a lighter, floral, effervescent probiotic tonic.',
    culturalHistory: 'Originating in Tibet and the Himalayan regions, Jun was historically guarded as a secret monastic recipe. It was prized by monks for its ability to restore vitality, aid meditation clarity, and settle digestion after raw grain diets.',
    caffeineMgPerServing: 20,
    servingSize: '8 oz glass',
    acidityLevel: 'High',
    flavorProfile: { sweetness: 65, acidity: 80, bitterness: 15, body: 55, aroma: 88 },
    tastingNotes: ['Fruity Honey Tart', 'Effervescent White Grape', 'Steamed Green Leaf', 'Mild Vinegar Tang'],
    healthBenefits: [
      {
        title: 'Prebiotic Honey Digestives & Probiotics',
        description: 'Raw honey fermentation preserves active prebiotics and lactic acid bacteria that support beneficial gut flora.',
        scientificBasis: 'SCOBY yeasts convert honey sugars into gluconic and acetic acids, populating the gut with live probiotic cultures.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Contains trace alcohol (~0.5% - 1.5% ABV) due to natural yeast fermentation.',
      'Active live cultures — avoid if immunocompromised or dealing with severe candida overgrowth.',
      'High acidity; drink in moderation to protect tooth enamel.'
    ],
    brewingParams: {
      waterTempC: 80,
      waterTempF: 176,
      ratioGramsPerLiter: '6g green tea + 100g honey + SCOBY per Liter',
      steepTimeMinutes: '7-10 days primary fermentation',
      grindSize: 'Loose Leaf Tea Base',
      recommendedMethod: 'Glass Jar Fermentation (SCOBY + Honey)'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'Jun Kombucha: Honey SCOBY Fermentation & Probiotics | CupCura',
    seoDescription: 'Discover Tibetan Jun Kombucha: honey SCOBY fermentation science, probiotic gut benefits, green tea base, and trace alcohol warnings.'
  },
  {
    id: 'hong-kong-milk-tea',
    name: 'Traditional Hong Kong Style Milk Tea',
    nativeName: '港式奶茶 (Góng Sīk Nái Cà)',
    category: 'black_tea',
    origin: 'Kowloon, Hong Kong',
    tagline: 'Silk stocking strength: bold, concentrated black tea pulled multiple times and blended with rich evaporated milk.',
    description: 'A highly concentrated black tea blend (usually Ceylon and broken orange pekoe) brewed in a large pot, filtered through a sack-like cloth (stocking filter) multiple times to maximize extraction, and combined with sweet, thick evaporated milk.',
    culturalHistory: 'Born in colonial Hong Kong cafes (Cha Chaan Tengs) in the 1950s, this beverage adapted British afternoon tea to Chinese palates. The "silk stocking" filter refers to the stained cotton filter bags. It is recognized as part of Hong Kong\'s Intangible Cultural Heritage.',
    caffeineMgPerServing: 110,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 70, acidity: 35, bitterness: 65, body: 90, aroma: 75 },
    tastingNotes: ['Strong Malty Ceylon', 'Evaporated Milk Cream', 'Bold Tannin Grip', 'Sweet Caramelized Sugar'],
    healthBenefits: [
      {
        title: 'Endothelial Protection & Rapid Awakening',
        description: 'Concentrated black tea provides a high caffeine and teaflavin shot for cardiovascular stimulation and quick alertness.',
        scientificBasis: 'Evaporated milk fats reduce the astringency of high-tannin teas, protecting the stomach lining from acid secretion.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'Very high caffeine content — restrict consumption in the afternoon.',
      'Evaporated milk is calorie-dense and contains lactose.'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '40g tea per Liter of water',
      steepTimeMinutes: '15-20 minutes simmer and pull',
      grindSize: 'Broken Orange Pekoe Dust',
      recommendedMethod: 'Traditional Stocking Pot Simmer and Pull'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 88,
    seoTitle: 'Hong Kong Milk Tea: Stocking Filter & Evaporated Milk | CupCura',
    seoDescription: 'Authentic Hong Kong Milk Tea recipe: stocking filter pulling method, evaporated milk ratio, caffeine levels, and Cha Chaan Teng history.'
  },
  {
    id: 'french-press',
    name: 'Classic French Press Coarse Coffee',
    nativeName: 'Cafetière',
    category: 'coffee',
    origin: 'Paris, France / Milan, Italy',
    tagline: 'Full immersion clarity: coarse grinds steeped to capture every natural lipid, cafestol oil, and chocolatey note.',
    description: 'A classic full-immersion coffee brewing method. Coarsely ground coffee is steeped in hot water for 4 minutes before a mesh metal plunger is pressed down to separate the grounds. By avoiding paper filtration, it preserves the natural lipids and heavy oils.',
    culturalHistory: 'Patented in France by Mayer and Delforge in 1852, then refined and patented in Italy by Attilio Calimani in 1929. The French press represents the standard for evaluating coffee body and extraction uniformity in cuppings.',
    caffeineMgPerServing: 110,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 70, acidity: 45, bitterness: 50, body: 85, aroma: 80 },
    tastingNotes: ['Heavy Dark Chocolate', 'Roasted Walnut', 'Earthy Cedar', 'Rich Coffee Crema'],
    healthBenefits: [
      {
        title: 'Full Lipid Extraction benefits',
        description: 'Immersion extraction retains natural coffee oils and diterpenes that support brain health and cognitive function.',
        scientificBasis: 'Releasing lipophilic coffee diterpenes (cafestol/kahweol) provides cellular antioxidants and cell lining support.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Unfiltered coffee diterpenes (cafestol) can elevate LDL cholesterol; limit if managing hypercholesterolemia.',
      'Coarse grinds must be steeped for 4 minutes minimum to prevent sour under-extraction.'
    ],
    brewingParams: {
      waterTempC: 94,
      waterTempF: 201,
      ratioGramsPerLiter: '60g coarse grinds per Liter of water',
      steepTimeMinutes: '4 minutes immersion',
      grindSize: 'Coarse (Sea salt size)',
      recommendedMethod: 'Glass French Press / Plunger'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'French Press Coffee: Immersion Ratio & Cafestol Science | CupCura',
    seoDescription: 'Master French Press brewing: 60g/L immersion ratio, cafestol lipid cholesterol impact science, and coarse grind extraction.'
  },
  {
    id: 'moka-pot',
    name: 'Traditional Stovetop Moka Pot Espresso',
    nativeName: 'Macchinetta',
    category: 'coffee',
    origin: 'Piedmont, Italy',
    tagline: 'Steam-pressured intensity: stovetop extraction producing a thick, concentrated brew that is the heart of Italian home coffee.',
    description: 'A stovetop coffee maker that brews coffee by passing boiling water pressurized by steam through ground coffee. While not true 9-bar espresso (reaching ~1.5 to 2 bars), it produces a rich, highly concentrated, full-bodied cup.',
    culturalHistory: 'Patented in Italy by Alfonso Bialetti in 1933, the Bialetti Moka Express revolutionized Italian coffee culture by allowing home users to replicate cafe-style espresso. The octagonal aluminum design remains a global design icon.',
    caffeineMgPerServing: 110,
    servingSize: '2 oz double cup',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 65, acidity: 40, bitterness: 60, body: 85, aroma: 85 },
    tastingNotes: ['Caramelized Brown Sugar', 'Dark Cocoa Finish', 'Toasted Hazelnut', 'Intense Espresso Crema'],
    healthBenefits: [
      {
        title: 'Concentrated Antioxidant Polyphenols',
        description: 'Pressurized steam extraction pulls dense polyphenols and chlorogenic acids in a small volume of liquid.',
        scientificBasis: 'Moka extraction processes seeds at high pressure, magnifying the concentration of antioxidant polyphenols.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Alumunium pots must be cleaned with hot water only — soap destroys the seasoned coffee coating.',
      'High extraction temp can easily burn grounds; start with pre-heated water in the base.'
    ],
    brewingParams: {
      waterTempC: 95,
      waterTempF: 203,
      ratioGramsPerLiter: '15g ground coffee to 100ml water',
      steepTimeMinutes: '3-4 minutes extraction',
      grindSize: 'Medium-Fine (Fine Sand)',
      recommendedMethod: 'Stovetop Bialetti Moka Pot'
    },
    affiliateProducts: [
      {
        id: 'prod-grosche-moka-pot',
        title: 'GROSCHE Milano Stovetop Espresso Moka Pot',
        type: 'equipment',
        price: '$29.95',
        rating: 4.72,
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80',
        vendor: 'GROSCHE',
        url: 'https://www.amazon.com/s?k=grosche+milano+moka+pot',
        badge: 'Stovetop Classic'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 92,
    seoTitle: 'Stovetop Moka Pot Recipe: Bialetti Pressure Extraction | CupCura',
    seoDescription: 'Learn Stovetop Moka Pot extraction: Bialetti pressure mechanics, pre-heated water tips, grind size recommendations, and Neapolitan style.'
  },
  {
    id: 'aeropress',
    name: 'AeroPress Travel Drip Coffee',
    nativeName: 'AeroPress',
    category: 'coffee',
    origin: 'California, USA',
    tagline: 'Barista playground: micro-filtered immersion press allowing endless variation in strength, temperature, and grind.',
    description: 'A versatile manual brewing device consisting of a cylindrical chamber and plunger with a airtight silicone seal. Coffee is steeped inside the chamber and then forced through a paper filter using air pressure.',
    culturalHistory: 'Invented in 2005 by Alan Adler, the toy maker behind the Aerobie flying disc. Its unique versatility inspired the World AeroPress Championship, a global competition where baristas compete with creative recipes.',
    caffeineMgPerServing: 90,
    servingSize: '8 oz cup (240ml)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 75, acidity: 40, bitterness: 25, body: 65, aroma: 85 },
    tastingNotes: ['Fruity Sweetness', 'Toasted Almond', 'Milk Chocolate', 'Crisp Clean Finish'],
    healthBenefits: [
      {
        title: 'Micro-Filtered Low Cafestol Heart Protection',
        description: 'Micro-paper filtration traps diterpenes, ensuring a clean cup that supports healthy cholesterol levels.',
        scientificBasis: 'AeroPress paper filters remove diterpenes (cafestol) while extracting full antioxidants and caffeine.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'Be careful when pressing down to prevent slipping or spills.',
      'Paper filters are required (or a metal mesh disk alternative).'
    ],
    brewingParams: {
      waterTempC: 85,
      waterTempF: 185,
      ratioGramsPerLiter: '15g coffee per 220ml water',
      steepTimeMinutes: '2 minutes steep and press',
      grindSize: 'Medium-Fine',
      recommendedMethod: 'AeroPress (Inverted or Standard Method)'
    },
    affiliateProducts: [
      {
        id: 'prod-aeropress-go',
        title: 'AeroPress Go Travel Coffee Maker',
        type: 'equipment',
        price: '$39.95',
        rating: 4.93,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
        vendor: 'AeroPress Inc.',
        url: 'https://www.amazon.com/s?k=aeropress+go',
        badge: 'Travel Classic'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 93,
    seoTitle: 'AeroPress Coffee Guide: Inverted Method & Filters | CupCura',
    seoDescription: 'Master the AeroPress travel brewer: inverted method recipe, micro-filtration cafestol science, water temperature guides, and parameters.'
  },
  {
    id: 'london-fog',
    name: 'London Fog Earl Grey Tea Latte',
    nativeName: 'London Fog',
    category: 'black_tea',
    origin: 'Vancouver, Canada',
    tagline: 'Cozy citrus comfort: Earl Grey black tea steeped concentrated, sweetened with vanilla syrup, and topped with steamed milk.',
    description: 'A cozy tea latte made by combining concentrated Earl Grey black tea (scented with bergamot) with warm steamed milk and sweet vanilla syrup. It offers a warm, floral, comforting taste profile.',
    culturalHistory: 'Invented in Vancouver, Canada, in the late 1990s by Mary Loria, a customer who was pregnant and looking for a low-caffeine alternative to coffee. It soon became a standard offering across North American coffee shops.',
    caffeineMgPerServing: 47,
    servingSize: '12 oz cup',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 85, acidity: 35, bitterness: 25, body: 70, aroma: 92 },
    tastingNotes: ['Sweet Vanilla Pod', 'Floral Bergamot', 'Warm Steamed Milk', 'Malt Black Tea'],
    healthBenefits: [
      {
        title: 'Relaxation & Emotional Comfort',
        description: 'Floral bergamot and warm milk promote physical comfort and reduce stress markers during consumption.',
        scientificBasis: 'Bergamot oil inhalation and consumption lowers cortisol levels and calms central nervous pathways.',
        iconName: 'Brain'
      }
    ],
    contraindications: [
      'Vanilla syrup adds high sugar content; use sugar-free or natural sweeteners if monitoring glycemic load.',
      'Evaporated milk or whole milk contains lactose.'
    ],
    brewingParams: {
      waterTempC: 98,
      waterTempF: 208,
      ratioGramsPerLiter: '5g loose Earl Grey in 150ml water, add 150ml milk',
      steepTimeMinutes: '4 minutes steep (concentrated), then mix',
      grindSize: 'Loose Leaf Tea',
      recommendedMethod: 'Teapot + Milk Frother / Steamer'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 89,
    seoTitle: 'London Fog Tea Latte: Vancouver History & Recipe | CupCura',
    seoDescription: 'Learn to brew a perfect London Fog latte: Earl Grey concentration, milk frothing ratios, vanilla bean pairing, and history.'
  }
];

export const BEVERAGES_DATA: Beverage[] = RAW_BEVERAGES_DATA.map((bev) => {
  if (bev.affiliateProducts && bev.affiliateProducts.length > 0) {
    return bev;
  }
  
  const matches: any[] = [];
  
  if (bev.id.includes('mate') || bev.id.includes('kava')) {
    const mateSet = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-argentine-mate-gourd-set');
    if (mateSet) matches.push(mateSet);
  }
  
  if (bev.category === 'coffee') {
    const grinder = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-comandante-c40') || FEATURED_AFFILIATE_PRODUCTS.find(p => p.category === 'grinders');
    const machine = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-gaggia-classic-pro') || FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-flair-58');
    const beans = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-geisha-panama-beans') || FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-jamaica-blue-mountain');
    if (grinder) matches.push(grinder);
    if (machine) matches.push(machine);
    if (beans) matches.push(beans);
  } else if (bev.category === 'green_tea') {
    const whisk = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-chasen-bamboo-whisk-set');
    const kyusu = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-tokoname-kyusu');
    const leaves = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-uji-gyokuro-premium') || FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-matcha-ceremonial-tin');
    if (whisk && bev.id.includes('matcha')) matches.push(whisk);
    if (kyusu) matches.push(kyusu);
    if (leaves) matches.push(leaves);
  } else if (bev.category === 'black_tea') {
    const kettle = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-fellow-stagg-ekg');
    const teapot = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-yixing-clay-pot');
    const leaves = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-darjeeling-margarets-hope');
    if (kettle) matches.push(kettle);
    if (teapot) matches.push(teapot);
    if (leaves) matches.push(leaves);
  } else {
    const kettle = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-fellow-stagg-ekg');
    const pot = FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-grosche-moka-pot') || FEATURED_AFFILIATE_PRODUCTS.find(p => p.id === 'prod-hario-v60-ceramic-set');
    if (kettle) matches.push(kettle);
    if (pot) matches.push(pot);
  }

  if (matches.length === 0) {
    matches.push(FEATURED_AFFILIATE_PRODUCTS[0]);
  }

  const mappedProducts = matches.map(p => ({
    id: p.id,
    title: p.name,
    type: (p.category === 'artisan_beans_leaves' ? 'beans_or_leaves' : 
          (p.category === 'tea_ware' || p.category === 'drippers_kettles' ? 'accessory' : 'equipment')) as any,
    price: p.price,
    rating: p.rating,
    image: p.imageUrl,
    vendor: p.vendor,
    url: p.affiliateUrl,
    badge: p.badge
  }));

  return {
    ...bev,
    affiliateProducts: mappedProducts
  };
});

export function getBeverageById(id: string): Beverage | undefined {
  return BEVERAGES_DATA.find(b => b.id === id);
}

export function generateBeverageSchema(beverage: Beverage) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": beverage.name,
    "image": beverage.imageUrl,
    "description": beverage.description,
    "keywords": beverage.tastingNotes.join(', '),
    "recipeCategory": beverage.category,
    "recipeCuisine": beverage.origin,
    "prepTime": "PT3M",
    "cookTime": beverage.brewingParams.steepTimeMinutes,
    "totalTime": "PT6M",
    "nutrition": {
      "@type": "NutritionInformation",
      "caffeineContent": `${beverage.caffeineMgPerServing} mg`,
      "servingSize": beverage.servingSize
    },
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": `Heat water to exactly ${beverage.brewingParams.waterTempC}°C (${beverage.brewingParams.waterTempF}°F).`
      },
      {
        "@type": "HowToStep",
        "text": `Measure doses using ${beverage.brewingParams.ratioGramsPerLiter}. Grind size: ${beverage.brewingParams.grindSize}.`
      },
      {
        "@type": "HowToStep",
        "text": `Extract using ${beverage.brewingParams.recommendedMethod} for ${beverage.brewingParams.steepTimeMinutes}.`
      }
    ]
  };
}
