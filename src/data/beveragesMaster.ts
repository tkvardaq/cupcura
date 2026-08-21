import { Beverage, BEVERAGES_DATA } from './beverages';

export interface MasterItem extends Beverage {
  slug: string;
  categoryLabel: string;
  fullMarkdownContent: string;
  relatedSlugs: string[];
}

export const BEVERAGES_MASTER: MasterItem[] = BEVERAGES_DATA.map((bev) => {
  // Generate a standard slug
  const slug = `beverage-${bev.id}`;
  
  // Pretty category label
  let categoryLabel = '';
  switch (bev.category) {
    case 'coffee':
      categoryLabel = 'Specialty Coffee';
      break;
    case 'green_tea':
      categoryLabel = 'Green Tea & Matcha';
      break;
    case 'black_tea':
      categoryLabel = 'Orthodox Black Tea';
      break;
    case 'herbal_botanical':
      categoryLabel = 'Herbal & Botanical';
      break;
    case 'fermented_specialty':
      categoryLabel = 'Fermented Specialty';
      break;
    default:
      categoryLabel = 'Specialty Beverage';
  }
  
  // Construct a beautiful, detailed Markdown page for this beverage
  const fullMarkdownContent = `
# ${bev.name}

${bev.description}

---

## Terroir & Cultural Heritage
${bev.culturalHistory}

---

## Taste Radar & Flavor Profile
- **Sweetness**: ${bev.flavorProfile.sweetness}/100
- **Acidity**: ${bev.flavorProfile.acidity}/100
- **Bitterness**: ${bev.flavorProfile.bitterness}/100
- **Body**: ${bev.flavorProfile.body}/100
- **Aroma**: ${bev.flavorProfile.aroma}/100

### Tasting Notes
${bev.tastingNotes.map(note => `- ${note}`).join('\n')}

---

## Scientific Health Mechanisms & Benefits
${bev.healthBenefits.map((benefit, idx) => `
### ${idx + 1}. ${benefit.title}
${benefit.description}
*Scientific Basis:* ${benefit.scientificBasis}
`).join('\n')}

---

## Contraindications & Safety Guidelines
${bev.contraindications.map(warn => `- ${warn}`).join('\n')}

---

## Barista Guide & Preparation Recipe
- **Recommended Extraction Method**: ${bev.brewingParams.recommendedMethod}
- **Water Temperature**: ${bev.brewingParams.waterTempC}°C (${bev.brewingParams.waterTempF}°F)
- **Ratio (Grams per Liter)**: ${bev.brewingParams.ratioGramsPerLiter}
- **Extraction / Steeping Time**: ${bev.brewingParams.steepTimeMinutes}
- **Grind Size Setting**: ${bev.brewingParams.grindSize}
`;

  // Dynamically pull related items of the same category (excluding current)
  const related = BEVERAGES_DATA
    .filter(other => other.category === bev.category && other.id !== bev.id)
    .slice(0, 3)
    .map(other => `beverage-${other.id}`);

  return {
    ...bev,
    slug,
    categoryLabel,
    fullMarkdownContent,
    relatedSlugs: related.length > 0 ? related : ['beverage-espresso-single-origin', 'beverage-matcha-ceremonial-grade']
  };
});

export function getBeverageMasterBySlug(slug: string): MasterItem | undefined {
  return BEVERAGES_MASTER.find((b) => b.slug === slug || b.id === slug);
}
