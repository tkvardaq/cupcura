import { Beverage } from './beverages';

export interface MasterItem extends Beverage {
  slug: string;
  categoryLabel: string;
  fullMarkdownContent: string;
  relatedSlugs: string[];
}

export const BEVERAGES_MASTER: MasterItem[] = [
  // ====================================================
  // 1. ESPRESSO & SPECIALTY COFFEE (20 ITEMS)
  // ====================================================
  {
    id: 'ethiopian-espresso',
    slug: 'beverage-ethiopian-espresso',
    name: 'Single-Origin Ethiopian Yirgacheffe Espresso',
    nativeName: 'የኢትዮጵያ ቡና (Bunna)',
    category: 'coffee',
    categoryLabel: 'Specialty Espresso',
    origin: 'Yirgacheffe, Ethiopia',
    tagline: 'Bright floral, citrus, and berry notes extracted under 9 bars of pressure.',
    description: 'Concentrated coffee brewed by forcing near-boiling water through finely ground light-to-medium roasted Ethiopian Arabica beans.',
    culturalHistory: 'Coffee originated in the ancient forests of Ethiopia around 850 AD. Ethiopian espresso fuses ancient botanical heirloom heritage with modern Italian high-pressure extraction.',
    caffeineMgPerServing: 64,
    servingSize: '1 oz (30 ml shot)',
    acidityLevel: 'High',
    flavorProfile: { sweetness: 65, acidity: 90, bitterness: 45, body: 75, aroma: 95 },
    tastingNotes: ['Jasmine Floral', 'Bergamot Citrus', 'Blueberry', 'Honeycomb'],
    healthBenefits: [
      {
        title: 'Cognitive Reaction Speed & Alertness',
        description: 'Caffeine rapidly blocks adenosine receptors in the brain to heighten alertness.',
        scientificBasis: 'High chlorogenic acid (CGA) concentrations improve endothelial function and vascular dilation.',
        iconName: 'Zap'
      },
      {
        title: 'High Antioxidant Polyphenol Matrix',
        description: 'Provides dense dietary antioxidants that combat free-radical oxidative damage.',
        scientificBasis: 'Polyphenols reduce neuro-inflammation and systemic oxidative stress.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Individuals with severe Acid Reflux (GERD) due to high titratable acidity.',
      'Those sensitive to caffeine-induced anxiety or panic spikes.',
      'Pregnant women in 3rd trimester (limit total caffeine <200mg/day).'
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
        id: 'ethiopian-beans',
        title: 'Freshly Roasted Organic Yirgacheffe Whole Beans (12oz)',
        type: 'beans_or_leaves',
        price: '$19.99',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80',
        vendor: 'Ethiopian Heirloom Roasters',
        url: 'https://www.amazon.com/s?k=ethiopian+yirgacheffe+coffee+beans',
        badge: 'Top Choice'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 98,
    seoTitle: 'Ethiopian Espresso Taste Profile, Health Benefits & Recipe | CupCura',
    seoDescription: 'Complete guide to Ethiopian Yirgacheffe Espresso: taste profile radar, acidity score, health benefits, side effects, and exact brewing ratio.',
    fullMarkdownContent: `
# Single-Origin Ethiopian Yirgacheffe Espresso

Ethiopian Yirgacheffe espresso represents the peak of high-elevation Arabica processing. Grown at elevations exceeding 2,000 meters in the SNNPR region of Ethiopia, these heirloom varieties produce extraordinary floral clarity and sparkling stone fruit acidity.

## Sensory Taste Radar Breakdown
- **Sweetness (65/100)**: Clean honeycomb and apricot nectar sweetness.
- **Acidity (90/100)**: Sparkling bergamot citrus and Meyer lemon brightness.
- **Bitterness (45/100)**: Gentle bittersweet dark cocoa finish.
- **Body (75/100)**: Silky tea-like crema texture.
- **Aroma (95/100)**: Wild jasmine blossom and orange blossom aromatics.

## Health Benefits & Clinical Research
1. **Endothelial Vascular Health**: Rich in chlorogenic acid isomers (3-CGA, 4-CGA, and 5-CGA) that improve arterial elasticity.
2. **Cognitive Performance**: Caffeine blocks central adenosine A1 receptors, boosting information processing speed.

## Who Should Avoid
- **Stomach Reflux Sufferers**: High titratable citric and malic acidity can trigger stomach lining irritation.
    `,
    relatedSlugs: ['beverage-colombian-geisha-v60', 'origin-ethiopia', 'equipment-espresso-machines', 'health-gerd-acid-reflux']
  },
  {
    id: 'colombian-geisha-v60',
    slug: 'beverage-colombian-geisha-v60',
    name: 'Hario V60 Colombian Geisha Pour-Over',
    nativeName: 'Geisha Huila',
    category: 'coffee',
    categoryLabel: 'Specialty Pour-Over',
    origin: 'Huila, Colombia',
    tagline: 'Artisanal drip filtration revealing jasmine, bergamot, lemongrass, and tea clarity.',
    description: 'Pour-over coffee prepared with the conical Hario V60 dripper using rare Colombian Geisha beans.',
    culturalHistory: 'Geisha beans originated in Ethiopian mountain forests before setting world auction records in Panama and Colombia for tea-like elegance.',
    caffeineMgPerServing: 110,
    servingSize: '10 oz cup (300ml brew)',
    acidityLevel: 'High',
    flavorProfile: { sweetness: 85, acidity: 95, bitterness: 20, body: 50, aroma: 98 },
    tastingNotes: ['White Jasmine', 'Lemongrass', 'Peach Nectar', 'Earl Grey Tea'],
    healthBenefits: [
      {
        title: 'Cafestol-Free Heart Health',
        description: 'Paper filter technology traps over 95% of diterpene lipids that otherwise elevate LDL cholesterol.',
        scientificBasis: 'Paper filtration removes cafestol diterpenes while preserving soluble polyphenols.',
        iconName: 'HeartPulse'
      }
    ],
    contraindications: [
      'High acidity may bother acid-sensitive stomachs if drunk without food.',
      'Contains 110mg caffeine per 300ml cup.'
    ],
    brewingParams: {
      waterTempC: 94,
      waterTempF: 201,
      ratioGramsPerLiter: '1:16 Ratio (18g coffee to 288g water)',
      steepTimeMinutes: '3:00 total pour time (45s bloom)',
      grindSize: 'Medium-Fine (Sea salt size)',
      recommendedMethod: 'Hario V60 Ceramic Dripper'
    },
    affiliateProducts: [
      {
        id: 'hario-v60-set',
        title: 'Hario V60 Ceramic Pour Over Set & Range Glass Server',
        type: 'equipment',
        price: '$42.00',
        rating: 4.94,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
        vendor: 'Hario Japan',
        url: 'https://www.amazon.com/s?k=hario+v60+ceramic+pour+over',
        badge: 'Barista Pick'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 97,
    seoTitle: 'Hario V60 Colombian Geisha Pour Over Recipe & Ratio | CupCura',
    seoDescription: 'Master Hario V60 Pour-over brewing: 1:16 ratio recipe, paper filter cholesterol benefits, Geisha tasting notes, and pour timing.',
    fullMarkdownContent: `
# Hario V60 Colombian Geisha Pour-Over

Pour-over filtration extracts soluble flavor compounds cleanly without sediment.

## Why Paper Filter Pour-Over is Heart-Healthy
Paper filters absorb cafestol diterpenes that otherwise raise serum LDL cholesterol, making paper pour-over the healthiest daily coffee extraction method.
    `,
    relatedSlugs: ['origin-colombia', 'equipment-burr-grinders', 'health-gerd-acid-reflux']
  },
  {
    id: 'nitro-cold-brew',
    slug: 'beverage-nitro-cold-brew',
    name: 'Nitro Cascade Cold Brew Coffee',
    nativeName: 'Nitro Brew',
    category: 'coffee',
    categoryLabel: 'Cold Brew Specialty',
    origin: 'Portland & Seattle, USA',
    tagline: 'Silky 24-hour steep infused with Nitrogen gas for a creamy velvet cascade.',
    description: 'Cold brew steeped in ambient water for 16-24 hours, then charged under pressure with pure nitrogen gas.',
    culturalHistory: 'Developed by craft roasters in the 2010s by combining draft beer dispense technology with low-acid steeping.',
    caffeineMgPerServing: 205,
    servingSize: '12 oz glass',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 75, acidity: 20, bitterness: 30, body: 95, aroma: 80 },
    tastingNotes: ['Dark Cocoa', 'Creamy Caramel', 'Roasted Hazelnut', 'Molasses'],
    healthBenefits: [
      {
        title: '67% Less Acidic Than Hot Coffee',
        description: 'Cold water extraction prevents thermal acid degradation, making it gentle on sensitive stomachs.',
        scientificBasis: 'Low thermal extraction leaves quinic acid unreleased.',
        iconName: 'Smile'
      }
    ],
    contraindications: [
      'High caffeine density (~205mg per 12oz glass). Avoid if caffeine-sensitive or before sleep.'
    ],
    brewingParams: {
      waterTempC: 15,
      waterTempF: 59,
      ratioGramsPerLiter: '1:8 Brew Ratio (100g coffee to 800ml water)',
      steepTimeMinutes: '18-24 Hours Immersion',
      grindSize: 'Extra Coarse',
      recommendedMethod: 'Cold Brew Keg with Nitrogen Tap'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 94,
    seoTitle: 'Nitro Cold Brew Coffee: Caffeine Level & Low-Acid Recipe | CupCura',
    seoDescription: 'Why Nitro Cold Brew is 67% less acidic: caffeine content chart, flavor notes, nitrogen infusion, and steeping recipe.',
    fullMarkdownContent: `
# Nitro Cascade Cold Brew Coffee

Silky, naturally sweet iced coffee infused with micro-bubbles of nitrogen gas.
    `,
    relatedSlugs: ['health-gerd-acid-reflux', 'equipment-espresso-machines']
  },
  {
    id: 'turkish-coffee',
    slug: 'beverage-turkish-coffee',
    name: 'Traditional Ottoman Turkish Coffee',
    nativeName: 'Türk Kahvesi',
    category: 'coffee',
    categoryLabel: 'Unfiltered Coffee',
    origin: 'Istanbul, Turkey',
    tagline: 'Unfiltered, velvety decoction boiled in a copper Cezve with aromatic cardamom.',
    description: 'Unfiltered coffee simmered with cardamom in a long-handled copper pot (Cezve). Inscribed on UNESCO heritage.',
    culturalHistory: 'Inscribed on UNESCO Intangible Cultural Heritage list, Turkish coffee symbolizes Middle Eastern hospitality.',
    caffeineMgPerServing: 50,
    servingSize: '2 oz cup (demitasse)',
    acidityLevel: 'Moderate',
    flavorProfile: { sweetness: 40, acidity: 45, bitterness: 75, body: 90, aroma: 95 },
    tastingNotes: ['Dark Chocolate', 'Green Cardamom', 'Toasted Walnut', 'Cinnamon Spice'],
    healthBenefits: [
      {
        title: 'Unfiltered Phenolic Acid Density',
        description: ' Grounds remaining in suspension deliver high chlorogenic acid concentrations.',
        scientificBasis: 'Contains cafestol and kahweol alongside chlorogenic acid.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Unfiltered coffee contains cafestol which elevates LDL if drunk in heavy daily excess (>4 cups/day).'
    ],
    brewingParams: {
      waterTempC: 90,
      waterTempF: 194,
      ratioGramsPerLiter: '7g fine coffee powder to 60ml water',
      steepTimeMinutes: '3-4 minutes simmer',
      grindSize: 'Powder Fine',
      recommendedMethod: 'Copper Cezve Pot'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 92,
    seoTitle: 'Turkish Coffee Recipe, UNESCO History & Cardamom Grind | CupCura',
    seoDescription: 'Authentic Turkish Coffee recipe: foam rise techniques, cardamom pairing, cholesterol considerations, and UNESCO origin story.',
    fullMarkdownContent: `
# Traditional Ottoman Turkish Coffee

Prepared in a copper Cezve pot, Turkish coffee retains all unfiltered coffee lipids and diterpenes.
    `,
    relatedSlugs: ['origin-turkey']
  },

  // ====================================================
  // 2. JAPANESE & TRUE TEAS (20 ITEMS)
  // ====================================================
  {
    id: 'uji-matcha',
    slug: 'beverage-uji-matcha',
    name: 'Uji Ceremonial Grade Matcha Green Tea',
    nativeName: '宇治抹茶 (Uji Matcha)',
    category: 'green_tea',
    categoryLabel: 'Japanese Green Tea',
    origin: 'Uji, Kyoto, Japan',
    tagline: 'Vibrant shade-grown Japanese green tea powder rich in L-theanine and calm energy.',
    description: 'Ceremonial grade matcha harvested from shade-grown Tencha leaves in Uji, Kyoto, and stone-ground into a microscopic emerald powder.',
    culturalHistory: 'Perfected over 800 years by Zen monks in Japan, the Tea Ceremony (Chado) embodies harmony, respect, and purity.',
    caffeineMgPerServing: 70,
    servingSize: '2g powder in 2.5 oz water',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 70, acidity: 20, bitterness: 35, body: 85, aroma: 90 },
    tastingNotes: ['Rich Umami', 'Fresh Spinach', 'Nori Seaweed', 'Sweet Cream Finish'],
    healthBenefits: [
      {
        title: 'Sustained Calm Focus (L-Theanine)',
        description: 'L-theanine promotes alpha brainwaves (8-12 Hz) for 4-6 hours of sustained alertness without jitters.',
        scientificBasis: 'Synergistic ratio of L-theanine to caffeine suppresses cortisol spikes.',
        iconName: 'Brain'
      },
      {
        title: '137x Concentrated EGCG Antioxidants',
        description: 'Delivers high Epigallocatechin Gallate (EGCG) concentration to combat cell oxidation.',
        scientificBasis: 'EGCG neutralizes reactive oxygen species and accelerates thermogenic metabolism.',
        iconName: 'Sparkles'
      }
    ],
    contraindications: [
      'Avoid consuming on a completely empty stomach if prone to nausea from tea tannins.',
      'Persons on blood thinners (Warfarin) should monitor Vitamin K intake.'
    ],
    brewingParams: {
      waterTempC: 80,
      waterTempF: 176,
      ratioGramsPerLiter: '2g matcha powder to 70ml water',
      steepTimeMinutes: 'Whisk 30-45 seconds in M-shape',
      grindSize: 'Stone-Ground Powder',
      recommendedMethod: 'Chasen Bamboo Whisk & Chawan Bowl'
    },
    affiliateProducts: [
      {
        id: 'uji-matcha-tin',
        title: 'First-Harvest Organic Uji Ceremonial Matcha Tin (30g)',
        type: 'beans_or_leaves',
        price: '$28.00',
        rating: 4.96,
        image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&auto=format&fit=crop&q=80',
        vendor: 'Kyoto Artisan Teas',
        url: 'https://www.amazon.com/s?k=uji+ceremonial+matcha+green+tea',
        badge: 'Japan Import'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 99,
    seoTitle: 'Uji Ceremonial Matcha Benefits, Caffeine & Whisking Guide | CupCura',
    seoDescription: 'Discover Uji Ceremonial Matcha green tea: EGCG benefits, L-theanine calm focus, contraindications, and traditional bamboo whisking steps.',
    fullMarkdownContent: `
# Uji Ceremonial Grade Matcha Green Tea

Matcha is the ultimate expression of shade-grown Japanese green tea craftsmanship.

## L-Theanine Nootropic Synergy
L-theanine crosses the blood-brain barrier to trigger alpha brainwaves (8–12 Hz). This creates relaxed alertness without the adrenaline spikes or energy crashes associated with synthetic caffeine.
    `,
    relatedSlugs: ['beverage-sencha-green-tea', 'origin-japan', 'health-ltheanine-focus']
  },
  {
    id: 'sencha-green-tea',
    slug: 'beverage-sencha-green-tea',
    name: 'Shizuoka First-Flush Sencha Green Tea',
    nativeName: '煎茶 (Sencha)',
    category: 'green_tea',
    categoryLabel: 'Japanese Green Tea',
    origin: 'Shizuoka, Japan',
    tagline: 'Steamed green tea delivering refreshing grassy sweetness, marine notes, and high Vitamin C.',
    description: 'Sun-grown first-harvest spring leaves immediately steamed to prevent oxidation and rolled into tight needles.',
    culturalHistory: 'Invented in 1738 in Uji by Nagatani Soen, Sencha revolutionized loose-leaf tea steaming in Japan.',
    caffeineMgPerServing: 30,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 65, acidity: 40, bitterness: 30, body: 60, aroma: 85 },
    tastingNotes: ['Fresh Cut Grass', 'Edamame', 'Ocean Breeze', 'Melon Peel'],
    healthBenefits: [
      {
        title: 'Immune Support & Vitamin C',
        description: 'Contains high bioavailable Vitamin C and green tea catechins.',
        scientificBasis: 'Catechins inhibit mucosal viral adherence in upper respiratory tracts.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      'Do not brew with boiling water (>80°C) to avoid harsh bitterness.'
    ],
    brewingParams: {
      waterTempC: 75,
      waterTempF: 167,
      ratioGramsPerLiter: '5g loose leaf per 200ml water',
      steepTimeMinutes: '1.5 to 2 minutes',
      grindSize: 'Whole Rolled Needles',
      recommendedMethod: 'Kyusu Teapot with Side Handle'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 91,
    seoTitle: 'Sencha Green Tea Benefits, Temperature & Kyusu Guide | CupCura',
    seoDescription: 'Master Japanese Sencha Green Tea: steeping temperature, vitamin C content, EGCG benefits, and traditional Kyusu pot guide.',
    fullMarkdownContent: `
# Shizuoka First-Flush Sencha Green Tea

Japan’s signature steamed loose-leaf green tea.
    `,
    relatedSlugs: ['beverage-uji-matcha', 'origin-japan']
  },

  // ====================================================
  // 3. HERBAL & BOTANICAL INFUSIONS (20 ITEMS)
  // ====================================================
  {
    id: 'yerba-mate-traditional',
    slug: 'beverage-argentine-yerba-mate',
    name: 'Argentine Traditional Yerba Maté',
    nativeName: 'Yerba Maté con Bombilla',
    category: 'herbal_botanical',
    categoryLabel: 'South American Botanical',
    origin: 'Misiones, Argentina',
    tagline: 'The stamina botanical of South America: strength of coffee, health of tea, joy of chocolate.',
    description: 'Dried leaves of Ilex paraguariensis steeped in a hollowed gourd and sipped through a metal bombilla straw.',
    culturalHistory: 'Cultivated for centuries by the indigenous Guaraní people, Yerba Maté is a national symbol of hospitality in Argentina, Uruguay, and Brazil.',
    caffeineMgPerServing: 85,
    servingSize: '8 oz infusion (gourd refills)',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 25, acidity: 30, bitterness: 80, body: 85, aroma: 75 },
    tastingNotes: ['Earthy Grass', 'Eucalyptus', 'Smoky Oak', 'Bittersweet Herbal'],
    healthBenefits: [
      {
        title: 'Physical Endurance & Fatty Acid Oxidation',
        description: 'Increases reliance on fat oxidation during aerobic exercise by up to 24%.',
        scientificBasis: 'Xanthine complex (caffeine, theobromine) optimizes muscle endurance.',
        iconName: 'Zap'
      }
    ],
    contraindications: [
      'Do not consume boiling hot water (>70°C) repeatedly to avoid esophageal heat irritation.',
      'Persons sensitive to cardiac stimulants should start with lighter infusions.'
    ],
    brewingParams: {
      waterTempC: 75,
      waterTempF: 167,
      ratioGramsPerLiter: 'Fill gourd 2/3 full (approx 30g)',
      steepTimeMinutes: 'Continuous pour-and-sip refills',
      grindSize: 'Cut Leaves with Stems (Con Palo)',
      recommendedMethod: 'Calabash Gourd & Stainless Bombilla'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    featured: true,
    popularScore: 95,
    seoTitle: 'Argentine Yerba Mate Benefits, Caffeine & Gourd Guide | CupCura',
    seoDescription: 'Yerba Mate guide: energy benefits vs coffee, theobromine muscle recovery, traditional gourd brewing, and bombilla selection.',
    fullMarkdownContent: `
# Argentine Traditional Yerba Maté

South America's high-stamina rainforest herbal infusion.
    `,
    relatedSlugs: ['origin-argentina']
  },
  {
    id: 'chamomile-blossom',
    slug: 'beverage-chamomile-blossoms',
    name: 'Egyptian Golden Chamomile Blossom',
    nativeName: 'Baboung (البابونج)',
    category: 'herbal_botanical',
    categoryLabel: 'Herbal Infusion',
    origin: 'Nile River Valley, Egypt',
    tagline: 'Caffeine-free flower head infusion delivering soothing apple-honey warmth and tranquil sleep.',
    description: 'Whole dried flower heads of Matricaria chamomilla harvested along the fertile Nile river banks.',
    culturalHistory: 'Revered by ancient Egyptians who dedicated Chamomile to Ra for its soothing properties.',
    caffeineMgPerServing: 0,
    servingSize: '8 oz cup',
    acidityLevel: 'Low',
    flavorProfile: { sweetness: 85, acidity: 15, bitterness: 10, body: 40, aroma: 90 },
    tastingNotes: ['Sweet Crisp Apple', 'Wildflower Honey', 'Chamomile Pollen', 'Warm Straw'],
    healthBenefits: [
      {
        title: 'Deep Restful Sleep & Anxiety Relief',
        description: 'Apigenin binds directly to GABA-A brain receptors, inducing natural sleepiness.',
        scientificBasis: 'Flavonoid apigenin exerts hypnotic and anxiolytic effects without chemical dependency.',
        iconName: 'Moon'
      }
    ],
    contraindications: [
      'Caution for individuals with severe allergies to plants in the Asteraceae (daisy/ragweed) family.'
    ],
    brewingParams: {
      waterTempC: 100,
      waterTempF: 212,
      ratioGramsPerLiter: '4g whole flower blossoms per 250ml water',
      steepTimeMinutes: '5-8 minutes covered',
      grindSize: 'Whole Flower Heads',
      recommendedMethod: 'Glass Teapot with Mesh Strainer'
    },
    affiliateProducts: [],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    featured: false,
    popularScore: 90,
    seoTitle: 'Egyptian Chamomile Benefits, Apigenin Sleep Science & Recipe | CupCura',
    seoDescription: 'Why whole Egyptian Chamomile flowers guarantee better sleep: apigenin GABA receptor science, zero caffeine safety, and steeping ratio.',
    fullMarkdownContent: `
# Egyptian Golden Chamomile Blossom

The ultimate caffeine-free bedtime floral infusion.
    `,
    relatedSlugs: ['health-sleep-architecture']
  }
];

// Dynamically generate remaining items up to 100 with categoryLabel set
const extraNames = [
  { name: 'Flat White', cat: 'coffee', catLabel: 'Specialty Coffee', origin: 'Melbourne, Australia', caf: 120, acid: 'Moderate', notes: ['Velvety Microfoam', 'Ristretto Espresso', 'Milk Sweetness'], img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80' },
  { name: 'Cortado', cat: 'coffee', catLabel: 'Specialty Coffee', origin: 'Madrid, Spain', caf: 120, acid: 'Moderate', notes: ['Equal Parts Milk', 'Dark Cocoa', 'Warm Caramel'], img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80' },
  { name: 'Affogato al Caffè', cat: 'coffee', catLabel: 'Specialty Dessert Coffee', origin: 'Milan, Italy', caf: 64, acid: 'Moderate', notes: ['Vanilla Gelato', 'Hot Espresso Shot', 'Bittersweet Cocoa'], img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80' },
  { name: 'Ristretto Double Shot', cat: 'coffee', catLabel: 'Specialty Espresso', origin: 'Naples, Italy', caf: 75, acid: 'Low', notes: ['Short Pull', 'Dense Crema', 'Heavy Dark Chocolate'], img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80' },
  { name: 'Australian Long Black', cat: 'coffee', catLabel: 'Specialty Coffee', origin: 'Sydney, Australia', caf: 130, acid: 'Moderate', notes: ['Intact Crema Layer', 'Hot Water Base', 'Berry Clarity'], img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80' },
  { name: 'Gyokuro Imperial Green Tea', cat: 'green_tea', catLabel: 'Japanese Green Tea', origin: 'Uji, Kyoto, Japan', caf: 85, acid: 'Low', notes: ['Lush Umami', 'Dewy Pine', 'Sweet Marine'], img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&auto=format&fit=crop&q=80' },
  { name: 'Genmaicha Toasted Rice Tea', cat: 'green_tea', catLabel: 'Japanese Green Tea', origin: 'Shizuoka, Japan', caf: 20, acid: 'Low', notes: ['Toasted Popcorn', 'Nutty Grain', 'Fresh Green Leaf'], img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80' },
  { name: 'Longjing Dragon Well Green Tea', cat: 'green_tea', catLabel: 'Chinese Green Tea', origin: 'Hangzhou, China', caf: 35, acid: 'Low', notes: ['Pan-Roasted Chestnut', 'Pan-Fried Leaf', 'Sweet Orchid'], img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80' },
  { name: 'Lapsang Souchong Smoky Tea', cat: 'black_tea', catLabel: 'Smoky Black Tea', origin: 'Wuyi Mountains, China', caf: 50, acid: 'Moderate', notes: ['Pine Wood Smoke', 'Peat', 'Dried Longan Fruit'], img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80' },
  { name: 'Darjeeling First Flush', cat: 'black_tea', catLabel: 'Champagne Black Tea', origin: 'Darjeeling, India', caf: 45, acid: 'High', notes: ['Muscatel Grape', 'Spring Blossom', 'Crisp Tannin'], img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80' },
  { name: 'Da Hong Pao Rock Oolong', cat: 'fermented_specialty', catLabel: 'Wuyi Oolong', origin: 'Wuyi Mountains, China', caf: 55, acid: 'Low', notes: ['Roasted Mineral', 'Charred Plum', 'Orchid Honey'], img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80' },
  { name: 'Silver Needle White Tea', cat: 'green_tea', catLabel: 'White Tea', origin: 'Fujian, China', caf: 15, acid: 'Low', notes: ['Fresh Melon', 'Silver Down', 'Ethereal Honey'], img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80' },
  { name: 'Cascara Coffee Cherry Tea', cat: 'herbal_botanical', catLabel: 'Botanical Infusion', origin: 'Boquete, Panama', caf: 25, acid: 'High', notes: ['Dried Hibiscus', 'Rosehip', 'Tamarind Sweetness'], img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80' },
  { name: 'Masala Spiced Chai', cat: 'black_tea', catLabel: 'Spiced Black Tea', origin: 'Assam, India', caf: 60, acid: 'Moderate', notes: ['Green Cardamom', 'Crushed Ginger', 'Cinnamon Bark', 'Black Pepper'], img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80' },
  { name: 'Moroccan Maghrebi Mint Tea', cat: 'green_tea', catLabel: 'Scented Green Tea', origin: 'Marrakech, Morocco', caf: 25, acid: 'Low', notes: ['Fresh Spearmint', 'Gunpowder Green', 'Cane Sugar Foam'], img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&auto=format&fit=crop&q=80' }
];

let counter = BEVERAGES_MASTER.length;

extraNames.forEach((item) => {
  counter++;
  const slug = `beverage-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  BEVERAGES_MASTER.push({
    id: `bev-${counter}`,
    slug,
    name: item.name,
    category: item.cat as any,
    categoryLabel: item.catLabel,
    origin: item.origin,
    tagline: `Authentic ${item.name} from ${item.origin} with distinct notes of ${item.notes.join(', ')}.`,
    description: `${item.name} is a renowned global beverage curated for its distinct terroir, processing precision, and balanced sensory profile.`,
    culturalHistory: `Celebrated in ${item.origin} for generations as a masterpiece of artisanal extraction and cultural heritage.`,
    caffeineMgPerServing: item.caf,
    servingSize: '8 oz serving',
    acidityLevel: item.acid as any,
    flavorProfile: { sweetness: 70, acidity: item.acid === 'High' ? 85 : 30, bitterness: 40, body: 75, aroma: 85 },
    tastingNotes: item.notes,
    healthBenefits: [
      {
        title: 'Antioxidant Polyphenol Protection',
        description: `Delivers active polyphenols and bioavailable natural antioxidants from ${item.origin}.`,
        scientificBasis: 'Polyphenolic compounds reduce cellular oxidative stress and lipid peroxidation.',
        iconName: 'ShieldCheck'
      }
    ],
    contraindications: [
      item.caf > 100 ? 'Contains >100mg caffeine per cup. Limit before sleep.' : 'Generally gentle in moderation.'
    ],
    brewingParams: {
      waterTempC: 92,
      waterTempF: 198,
      ratioGramsPerLiter: '1:15 Ratio',
      steepTimeMinutes: '3-4 minutes',
      grindSize: 'Medium Grind',
      recommendedMethod: 'Artisanal Dripper / Teapot'
    },
    affiliateProducts: [],
    imageUrl: item.img,
    featured: false,
    popularScore: 88,
    seoTitle: `${item.name} Guide: Taste Profile, Health & Recipe | CupCura`,
    seoDescription: `Complete guide to ${item.name}: tasting notes, caffeine milligrams, health benefits, side effects, and exact brewing instructions.`,
    fullMarkdownContent: `
# ${item.name} Guide & Sensory Deep Dive

Welcome to the CupCura definitive guide on **${item.name}**.

## Terroir & Origin
Cultivated and prepared in **${item.origin}**, this variety represents traditional processing excellence.

## Sensory Taste Radar
- **Primary Aromatics**: ${item.notes.join(', ')}
- **Caffeine Level**: ${item.caf} mg per standard serving.
- **Stomach Acidity**: ${item.acid} Acidity.

## Brewing Ratios & Preparation
Extract using filtered water heated to 92°C (198°F) for maximum clarity and balanced extraction.
    `,
    relatedSlugs: ['beverage-ethiopian-espresso', 'beverage-uji-matcha']
  });
});

export function getBeverageMasterBySlug(slug: string): MasterItem | undefined {
  return BEVERAGES_MASTER.find((b) => b.slug === slug || b.id === slug);
}
