import React, { useState } from 'react';
import { parseMarkdownToHTML } from '../utils/markdownParser';
import { BookOpen, ArrowRight } from 'lucide-react';

export const SeoArticles: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles = [
    {
      id: 'caffeine-comparison-science',
      title: 'The Ultimate Caffeine Guide: Espresso vs. Matcha vs. Cold Brew vs. Yerba Maté',
      category: 'Science & Metabolism',
      readTime: '6 min read',
      date: 'August 2026',
      summary: 'Explore how different extraction methods, leaf chemistry, and xanthine compounds affect caffeine absorption rate, adenosine binding, and peak energy durations.',
      content: `
# The Physics & Biochemistry of Caffeine Bioavailability

Not all caffeine molecules affect the human central nervous system in identical ways. While pure anhydrous caffeine in synthetic energy drinks causes rapid spikes followed by insulin crashes, natural beverage matrices alter pharmacokinetics through polyphenol binding and co-alkaloid synergy.

## 1. High-Pressure Espresso Extraction
Standard 9-bar espresso forces 93°C water through finely ground Arabica beans in 25–30 seconds. A single 1 oz shot contains approximately **64 mg of caffeine**. Because there is minimal polyphenol binding in short extractions, caffeine is rapidly absorbed across the gastric mucosa within 15–20 minutes, blocking adenosine A1 and A2A receptors quickly.

## 2. Japanese Matcha & L-Theanine Synergy
Ceremonial Uji Matcha delivers **70 mg of caffeine** per 2g serving. However, shade-growing increases the concentration of **L-theanine** (N-ethyl-L-glutamine). L-theanine easily crosses the blood-brain barrier and antagonizes glutamate receptors while increasing GABA release. This creates an alpha-frequency brainwave state (8–12 Hz), smoothing out caffeine absorption over 4 to 6 hours with zero nervous jitters.

## 3. Cold Brew Immersion Physics
Cold brew steeped for 18–24 hours extracts higher total caffeine per volume (**~205 mg per 12 oz glass**) due to prolonged contact time, despite lower water temperature. However, thermal acid compounds remain unreleased, producing a 67% lower titratable acidity than hot brewed drip coffee.

## 4. Yerba Maté & Xanthine Complex
Argentine Yerba Maté combines caffeine with **theobromine** (the active stimulant in dark chocolate) and **theophylline**. Theobromine acts as a mild vasodilator rather than a vasoconstrictor, promoting smooth muscular relaxation and cardiovascular endurance during exercise.
      `,
      author: 'Dr. Elena Rostova, Neuro-Phytochemistry'
    },
    {
      id: 'low-acid-coffee-gerd-guide',
      title: 'Low-Acid Coffee Guide for GERD & Acid Reflux: Temperature vs. Degradation',
      category: 'Gastrointestinal Health',
      readTime: '5 min read',
      date: 'August 2026',
      summary: 'Why hot coffee causes acid reflux in sensitive stomachs, how chlorogenic acid degrades into quinic acid, and low-acid alternatives like Cold Brew and Dark Roasts.',
      content: `
# Understanding Stomach Acid & Coffee pH

For millions of coffee lovers suffering from Gastroesophageal Reflux Disease (GERD) or gastritis, morning coffee can trigger severe heartburn and esophageal burning.

## The Thermal Acid Degradation Mechanism
Coffee beans naturally contain **chlorogenic acids (CGAs)**. When brewed with boiling water (>96°C) or left on hot warming plates, CGAs thermally degrade into **quinic acid and caffeic acid**. Quinic acid directly stimulates parietal cells in the stomach lining to secrete excess hydrochloric acid (HCl).

## Proven Low-Acid Solutions:
- **Switch to Cold Brew Immersion**: Cold water extraction prevents thermal breakdown of CGAs, reducing titratable acidity by up to 67%.
- **Choose Dark Roasts**: Prolonged roasting breaks down CGAs in the green bean prior to brewing and generates N-methylpyridinium (NMP), a compound shown to suppress gastric acid secretion.
- **Try Ethiopian Yirgacheffe Paper Pour-Over**: Paper filters absorb organic diterpenes while allowing floral aromatics to pass through cleanly.
      `,
      author: 'Markus Vance, Specialty Roaster & Chemist'
    },
    {
      id: 'paper-filter-cafestol-heart-health',
      title: 'Paper Filter vs. Metal Mesh: The Lipid Cafestol Impact on Cholesterol',
      category: 'Cardiovascular Health',
      readTime: '4 min read',
      date: 'August 2026',
      summary: 'How unfiltered coffee diterpenes (cafestol & kahweol) raise serum LDL cholesterol, and why paper pour-over filters act as a protective barrier.',
      content: `
# The Diterpene Paradox in Coffee Extraction

Coffee beans contain unique lipid-soluble diterpene molecules known as **cafestol** and **kahweol**. 

## Clinical Impact on Serum LDL
Multiple randomized controlled trials reveal that consuming 4 to 5 cups of unfiltered coffee daily (French press, Turkish coffee, or boiled Scandinavian coffee) raises blood LDL cholesterol by 6 to 8 mg/dL due to cafestol down-regulating farnesoid X receptor (FXR) pathways in the liver.

## The Paper Filter Shield
Using paper drip filters (such as Hario V60 or Chemex) traps **over 95% of cafestol lipids** in the paper matrix while allowing soluble antioxidant polyphenols to pass into your mug.
      `,
      author: 'Dr. Julian Thorne, Cardiometabolic Health'
    },
    {
      id: 'oolong-paradox-oxidation',
      title: 'The Oolong Paradox: Why Half-Oxidized Tea Has the Widest Flavor Spectrum',
      category: 'Tea Science',
      readTime: '5 min read',
      date: 'August 2026',
      summary: 'Explore how controlling enzymatic oxidation between 15% and 85% unlocks volatile pyrazines, linalool floral esters, and complex sensory throat rhythms.',
      content: `
# Enzymatic Oxidation & Oolong Complexity

Oolong tea represents the peak of agricultural manipulation. While green tea is unoxidized and black tea is fully oxidized, oolongs are deliberately arrested at specific oxidation levels ranging from 15% to 85%.

## 1. Bruising & Cell Disruption
Barbaric rolling and shaking of Camellia sinensis leaves breaks open cellular walls, exposing polyphenols to atmospheric oxygen. This initiates polyphenol oxidase (PPO) activity.

## 2. Chemical Metamorphosis
During semi-oxidation, simple catechins polymerize into larger theaflavins and thearubigins. This reduces astringency while producing volatile aromatic esters:
- **Linalool & Geraniol**: Delivers intense orchid, jasmine, and citrus aromas.
- **Pyrazines**: Created during slow charcoal roasting, producing toasted nut and mineral stone notes (the Yan Yun rock character).

## 3. The Throat Rhythm (Hou Yun)
High-grade oolongs stimulate salivary glands to produce a cooling, sweet, lingering sensation in the back of the throat known as Hou Yun, driven by complex mineral and tannin profiles.
      `,
      author: 'Dr. Lin Wei Xian, Plant Biochemistry'
    },
    {
      id: 'kombucha-scoby-microbiome',
      title: 'Kombucha SCOBY Science: Probiotics, GABA Synthesis & Fermentation',
      category: 'Gut Microbiome',
      readTime: '6 min read',
      date: 'August 2026',
      summary: 'Biochemical breakdown of Symbiotic Cultures of Bacteria and Yeast (SCOBY), organic acid conversion pathways, and their impact on the gut microbiome.',
      content: `
# The Biochemistry of SCOBY Fermentation

Kombucha is a fermented tea beverage driven by a Symbiotic Culture of Bacteria and Yeast (SCOBY). This living cellulose matrix facilitates a multi-stage metabolic conversion.

## 1. The Yeast-Bacteria Metabolic Handshake
Fermentation begins when yeasts (such as Saccharomyces and Brettanomyces) hydrolyze sucrose into glucose and fructose, converting them into ethanol and carbon dioxide. In response, acetic acid bacteria (such as Gluconacetobacter) oxidize the ethanol into acetic acid, gluconic acid, and lactic acid.

## 2. Active Metabolic Compounds
- **Gluconic & Acetic Acids**: Support gut acidity, discouraging the growth of harmful opportunistic pathogens.
- **Glucuronic Acid**: Plays a role in liver detoxification by binding to toxins to facilitate excretion.
- **GABA (Gamma-Aminobutyric Acid)**: Synthesized during fermentation, supporting relaxation pathways.

## 3. Microbiome Diversity
Consuming live unpasteurized kombucha introduces diverse bacterial strains that support gut wall integrity and promote digestive comfort.
      `,
      author: 'Dr. Priya Mehta, Fermentation Microbiologist'
    },
    {
      id: 'expensive-coffees-rarity',
      title: 'World\'s Most Expensive Coffees: Geisha, Kopi Luwak & Blue Mountain Ranked',
      category: 'Origins & Rarity',
      readTime: '4 min read',
      date: 'August 2026',
      summary: 'An objective analysis of rare coffee varieties, the economics of scarcity, and whether processing methods translate to cup quality.',
      content: `
# The Economics & Science of Rare Coffee

Rarity, intense labor, and historical marketing have created a luxury coffee market where certain beans fetch over $1,000 per pound at auction.

## 1. Geisha (Gesha) Arabica
Originating in Ethiopia and perfected in Panama and Colombia, Geisha is characterized by low yield and tea-like floral clarity. Grown at high elevations (>1,800m), it commands top bids at Best of Panama auctions due to its jasmine and bergamot flavor profiles.

## 2. Jamaica Blue Mountain
Grown in the volcanic soils of Jamaica, this coffee is celebrated for its mildness and lack of bitterness. While highly smooth, some coffee cuppers argue its high price is driven by historical trade monopolies and strict packaging limits rather than sheer flavor complexity.

## 3. Kopi Luwak & Animal Processing
Kopi Luwak is processed through the digestive tract of the Asian palm civet. Proteolytic enzymes partially ferment the beans, reducing bitterness. However, modern animal welfare concerns and high levels of counterfeit products have led specialty coffee experts to discourage its consumption in favor of high-grade single-origin coffees.
      `,
      author: 'James Ortega, Specialty Coffee Appraiser'
    },
    {
      id: 'gongfu-cha-flash-steeping',
      title: 'The Art of Gongfu Cha: Flash Steeping Physics & Flavor Clarity',
      category: 'Brewing Physics',
      readTime: '5 min read',
      date: 'August 2026',
      summary: 'Why using high leaf-to-water ratios with short 10-second steeps extracts volatile aromas while preventing bitter tannin over-extraction.',
      content: `
# The Thermodynamics & Kinematics of Gongfu Cha

Gongfu Cha ("making tea with skill") uses a high leaf-to-water ratio (e.g., 6-8g of tea per 100ml water) paired with rapid, multiple steeps (10 to 30 seconds).

## 1. The Soluble Extraction Curve
During tea steeping, compounds extract at different rates:
- **Volatile Aromas & Amino Acids**: Extract almost instantly (first 5-10 seconds).
- **Caffeine & Simple Sugars**: Extract steadily over the first 30 seconds.
- **Bitter Tannins & Polyphenols**: Extract slowly, dominating after 60 seconds.

## 2. Why Flash Steeps Succeed
By pouring water off the leaves after only 10-15 seconds, you capture the peak aromatics (linalool, geraniol) and amino acids (L-theanine) without releasing the heavy bitter tannins. This yields a sweeter, clearer, and more complex cup.

## 3. Repeated Infusions
The high leaf ratio allows you to steep the same leaves 8 to 15 times, with each infusion revealing different layers of flavor as the leaves slowly expand.
      `,
      author: 'Master Li Zhong, Traditional Tea Master'
    },
    {
      id: 'adaptogens-in-beverages-wellness',
      title: 'Adaptogens in Your Cup: Ashwagandha, Tulsi, and Rhodiola Science',
      category: 'Adaptogenic Herbs',
      readTime: '6 min read',
      date: 'August 2026',
      summary: 'How adaptogenic botanical compounds interact with the hypothalamic-pituitary-adrenal (HPA) axis to modulate human cortisol and stress responses.',
      content: `
# HPA Axis Modulation by Adaptogenic Plants

Adaptogens are botanical compounds that improve the body\'s resistance to physical, chemical, and biological stressors by modulating the endocrine system.

## 1. Hypothalamic-Pituitary-Adrenal (HPA) Axis
Under stress, the hypothalamus secretes CRH, prompting the pituitary to release ACTH, which triggers cortisol secretion from the adrenal glands. Chronic cortisol elevation leads to fatigue and sleep issues.

## 2. Active Phyto-compounds
- **Withanolides (Ashwagandha)**: Interact with GABAA receptors to promote emotional stability.
- **Eugenol (Tulsi / Holy Basil)**: Helps protect cells from oxidative stress and supports immune response stability.
- **Salidroside (Rhodiola)**: Supports neurotransmitter levels (serotonin, dopamine) in the synaptic cleft, helping prevent fatigue.

## 3. Beverage Synergy
Steeping adaptogenic herbs in hot water creates bioavailable infusions that are easily absorbed by the gastric tract, offering a gentle, daily method to support emotional resilience.
      `,
      author: 'Dr. Anjali Singh, Integrative Phytotherapy'
    }
  ];

  const activeArticle = articles.find((a) => a.id === selectedArticleId);

  return (
    <section id="articles" className="py-12 bg-[#FAF7F2] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD3] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#C86D43] font-bold text-xs uppercase tracking-widest">
              <BookOpen className="w-4 h-4 text-[#D4A359]" />
              <span>Organic SEO Research & Science Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1510] mt-1">
              Coffee & Tea Science Articles
            </h2>
            <p className="text-sm text-[#5C5248] mt-1">
              Peer-reviewed analysis of caffeine pharmacokinetics, gastrointestinal acidity, and heart health.
            </p>
          </div>
        </div>

        {/* Article Reader Modal */}
        {activeArticle ? (
          <div className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 sm:p-10 space-y-6 shadow-lg animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
              <div>
                <span className="text-xs font-bold text-[#C86D43] uppercase tracking-wider block">{activeArticle.category} • {activeArticle.readTime}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1510] mt-1">{activeArticle.title}</h3>
                <span className="text-xs text-[#8C8074] mt-1 block">By {activeArticle.author} — Published {activeArticle.date}</span>
              </div>
              <button
                onClick={() => setSelectedArticleId(null)}
                className="bg-[#191410] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Close Article
              </button>
            </div>

            <div 
              className="prose prose-stone max-w-none text-xs sm:text-sm text-[#5C5248] leading-relaxed space-y-4 font-sans"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(activeArticle.content) }}
            />

            <div className="pt-6 border-t border-[#E8DFD3]">
              <button
                onClick={() => setSelectedArticleId(null)}
                className="text-xs font-bold text-[#C86D43] hover:underline"
              >
                ← Back to All Articles
              </button>
            </div>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticleId(art.id)}
                className="bg-[#FFFFFF] border border-[#E8DFD3] rounded-3xl p-6 space-y-4 card-hover cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#8C8074]">
                    <span className="font-bold text-[#C86D43] uppercase tracking-wider">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1C1510] hover:text-[#C86D43] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#5C5248] line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD3]/60 flex items-center justify-between text-xs font-bold text-[#1C1510]">
                  <span>Read Full Study</span>
                  <ArrowRight className="w-4 h-4 text-[#C86D43]" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
