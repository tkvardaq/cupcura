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

export const BEVERAGES_DATA: Beverage[] = [
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
  }
];

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
