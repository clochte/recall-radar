export interface HazardInfo {
  title: string;
  body: string;
  tip?: string;
}

export function getHazardInfo(recall: {
  title: string;
  rawDescription: string;
  reason: string;
  category: string;
}): HazardInfo | null {
  const text = `${recall.title} ${recall.rawDescription} ${recall.reason}`.toLowerCase();

  if (text.includes('listeria')) {
    return {
      title: 'About Listeria contamination',
      body: 'Listeria monocytogenes is a bacterium that causes listeriosis, a serious foodborne illness. Symptoms — including fever, muscle aches, nausea, and diarrhea — typically appear 1 to 30 days after exposure, making it difficult to trace back to a specific food. Listeriosis is especially dangerous for pregnant women, where it can cause miscarriage, stillbirth, or premature delivery; adults 65 and older; and people with weakened immune systems due to illness or medication.',
      tip: 'If you are pregnant, elderly, or immunocompromised and have recently consumed the recalled product, contact your healthcare provider promptly, even if you feel well.',
    };
  }

  if (text.includes('salmonella')) {
    return {
      title: 'About Salmonella contamination',
      body: 'Salmonella is one of the most common causes of foodborne illness in the United States, responsible for an estimated 1.35 million infections annually. Symptoms include diarrhea, fever, and abdominal cramps, usually appearing 6 hours to 6 days after exposure and lasting 4 to 7 days. Most people recover without treatment, but young children, elderly adults, and immunocompromised individuals are at higher risk of serious illness requiring hospitalization.',
      tip: 'Wash hands thoroughly after handling any recalled product and disinfect any surfaces it may have contacted before disposal.',
    };
  }

  if (text.includes('e. coli') || text.includes('e coli') || text.includes('escherichia')) {
    return {
      title: 'About E. coli contamination',
      body: "Certain strains of Escherichia coli — particularly E. coli O157:H7 and other Shiga toxin-producing strains — can cause severe illness. Symptoms include severe stomach cramps, bloody diarrhea, and vomiting, typically appearing 3 to 4 days after exposure. In a small percentage of cases, especially in children under 5, the infection can lead to hemolytic uremic syndrome (HUS), a type of kidney failure that can be life-threatening.",
      tip: 'Seek medical attention immediately if you develop severe abdominal pain or bloody diarrhea after consuming a recalled product.',
    };
  }

  if (
    text.includes('hepatitis a') ||
    text.includes('hepatitis-a') ||
    text.includes('hep a')
  ) {
    return {
      title: 'About Hepatitis A contamination',
      body: 'Hepatitis A is a contagious liver infection caused by the hepatitis A virus. It can be spread through contaminated food or water. Symptoms — including fatigue, nausea, abdominal pain, jaundice, and dark urine — typically appear 15 to 50 days after exposure. Most people recover fully, but the illness can be severe in older adults. A hepatitis A vaccine is available and provides effective protection.',
      tip: 'If you were exposed to the recalled product within the last 2 weeks, a post-exposure hepatitis A vaccination may prevent or reduce illness — contact your doctor.',
    };
  }

  const allergenKeywords = [
    'undeclared', 'allergen', 'peanut', 'tree nut', 'milk', 'wheat',
    'soy', 'shellfish', 'sesame', 'egg', 'fish', 'walnut', 'almond',
    'cashew', 'pecan', 'pistachio', 'hazelnut',
  ];
  if (allergenKeywords.some((k) => text.includes(k))) {
    return {
      title: 'About undeclared allergen recalls',
      body: 'Undeclared allergen recalls occur when a food product contains one or more of the major food allergens — peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish, or sesame — without listing them on the label. For most consumers this is a labeling compliance issue, but for individuals with food allergies or intolerances it can cause reactions ranging from hives and swelling to anaphylaxis, a severe and potentially life-threatening reaction.',
      tip: 'If you have a known allergy to the undeclared ingredient and have consumed the product, monitor for symptoms. If you carry an epinephrine auto-injector, keep it accessible. Consult your allergist if you are unsure.',
    };
  }

  if (text.includes('fire') || text.includes('burn') || text.includes('overheat') || text.includes('ignit') || text.includes('combust')) {
    return {
      title: 'About fire and burn hazards',
      body: 'Fire and burn hazards in consumer products are often caused by overheating lithium-ion batteries, faulty electrical wiring, flammable materials used in construction, or manufacturing defects that create short circuits. These recalls are classified as urgent because fire and burn injuries can occur rapidly, often without warning. Overheating batteries in particular can enter a state called thermal runaway, which generates intense heat and can cause a fire even when a device appears to be functioning normally.',
      tip: 'Stop using the product immediately and do not charge it if it is battery-powered. Keep it away from flammable materials and in a cool, well-ventilated area until you can safely dispose of or return it.',
    };
  }

  if (text.includes('chok') && (text.includes('hazard') || text.includes('risk') || text.includes('child') || text.includes('infant'))) {
    return {
      title: 'About choking hazards',
      body: "Choking is one of the leading causes of injury and death among children under 5. Products recalled for choking hazards typically contain small parts, components that can break off under normal use, or pieces that fall within the small-parts testing cylinder (which simulates a child's throat). Keep the recalled product away from all children immediately, even if no incidents have been reported.",
      tip: 'Remove the product from any area accessible to children right away. Do not wait until you have processed a refund or replacement — the hazard exists as long as the product is in use.',
    };
  }

  if (text.includes('strangulat') || text.includes('entanglement') || (text.includes('cord') && text.includes('hazard'))) {
    return {
      title: 'About strangulation and entanglement hazards',
      body: 'Strangulation hazards typically involve cords, strings, or loops that can wrap around a child\'s neck. These include drawstrings on children\'s clothing, crib accessories, window blind cords, and toys with long strings. Entanglement hazards can occur when loose parts or loops catch on furniture or equipment. These incidents can be fatal and can occur in seconds without warning.',
      tip: 'Remove the product from use and keep it away from children of all ages immediately.',
    };
  }

  if (text.includes('airbag') || text.includes('air bag') || text.includes('inflator')) {
    return {
      title: 'About airbag recalls',
      body: 'Airbag recalls — particularly those involving Takata inflators — are among the most serious vehicle safety issues in recent history. Faulty inflators can rupture and send metal fragments into the vehicle cabin at high velocity during deployment, causing serious injury or death. Airbag recalls are not limited to new vehicles; inflators can degrade over time, meaning older vehicles may be at greater risk. Exposure to heat and humidity accelerates the degradation of affected inflators.',
      tip: 'Contact your dealership immediately to schedule a free repair. If your vehicle is on this recall and you are in a high-risk region (hot and humid climate), NHTSA may recommend limiting use of the vehicle until the repair is completed.',
    };
  }

  if (text.includes('brake') && recall.category === 'vehicles') {
    return {
      title: 'About brake system recalls',
      body: 'Brake system defects are among the most critical vehicle safety issues because they directly affect the driver\'s ability to slow or stop the vehicle. Recalls may involve master cylinders, brake lines, calipers, anti-lock braking system (ABS) components, or electronic stability control systems. Brake defects can result in extended stopping distances, complete brake failure, or unexpected vehicle behavior during emergency maneuvers.',
      tip: 'Have the vehicle inspected by a dealer before driving in high-traffic conditions or at highway speeds. Brake repairs are always performed free of charge under a safety recall.',
    };
  }

  if (text.includes('lead') && (text.includes('paint') || text.includes('coating') || text.includes('toy') || text.includes('children') || text.includes('child'))) {
    return {
      title: 'About lead hazards',
      body: "Lead exposure is especially dangerous for young children because their bodies absorb lead more readily than adults, and because lead can damage the developing brain and nervous system even at low levels. Lead poisoning in children can cause learning disabilities, behavioral problems, and slowed growth. There is no safe level of lead exposure for children. Products recalled for lead typically involve toys, jewelry, or painted surfaces that exceed the federal limit of 90 parts per million of lead in children's products.",
      tip: "If your child has handled the recalled product frequently, ask your pediatrician about a blood lead level test.",
    };
  }

  if (
    text.includes('foreign material') ||
    text.includes('foreign object') ||
    text.includes('metal fragment') ||
    text.includes('glass fragment') ||
    text.includes('plastic fragment') ||
    text.includes('contaminated with') ||
    text.includes('extraneous material')
  ) {
    return {
      title: 'About foreign material contamination',
      body: 'Foreign material contamination occurs when physical objects — such as metal fragments, glass shards, plastic pieces, bone chips, or other materials — are inadvertently introduced into a product during manufacturing or packaging. Ingesting foreign objects can cause cuts to the mouth, throat, or digestive tract; dental damage; choking; or internal injury. These recalls are typically issued after consumer complaints or internal quality checks identify the problem.',
      tip: 'Inspect any remaining units of the product for visible foreign material before disposal, and report any injuries to the FDA at 1-800-FDA-1088.',
    };
  }

  if (text.includes('mislabel') || text.includes('misbranded') || (text.includes('incorrect') && text.includes('label'))) {
    return {
      title: 'About mislabeling recalls',
      body: "Mislabeling recalls occur when a product's packaging contains incorrect information — wrong ingredients, inaccurate net weight, incorrect usage instructions, or packaging mix-ups where the wrong product ends up in a container. While many mislabeling issues are low-risk, they can be dangerous when the label omits allergens, provides incorrect dosing information for a medication, or creates confusion about a product's contents.",
      tip: 'Check any remaining product carefully against the official recall notice to confirm whether your specific lot or batch is affected.',
    };
  }

  if (recall.category === 'medications' && (text.includes('potency') || text.includes('sub-potent') || text.includes('superpotent'))) {
    return {
      title: 'About medication potency recalls',
      body: "Potency recalls occur when a drug product contains more or less of the active ingredient than the labeled amount. Sub-potent medications may be ineffective for their intended purpose — a sub-potent blood pressure medication may leave a patient's condition untreated, for example. Superpotent medications can deliver an unintended overdose. These recalls are often issued after routine quality testing reveals the discrepancy.",
      tip: 'Contact your pharmacist to check whether your dispensed lot is affected. Do not stop taking a prescription medication without consulting your doctor first.',
    };
  }

  if (recall.category === 'medications' && (text.includes('sterility') || text.includes('sterile') || text.includes('contamination'))) {
    return {
      title: 'About sterility and contamination recalls',
      body: 'Sterility recalls for medications are issued when injectable, ophthalmic, or other sterile drug products are found to be contaminated with bacteria, fungus, or particulate matter — or when they fail sterility testing. Non-sterile injectable drugs can cause serious infections, sepsis, or meningitis. These recalls are treated as among the most urgent in the pharmaceutical category.',
      tip: 'Stop using the product immediately. If you have already administered the product, monitor for signs of infection including fever, chills, or pain at the injection site, and contact your healthcare provider.',
    };
  }

  return null;
}

// ─── Agency block ────────────────────────────────────────────────────────────

export interface AgencyBlock {
  name: string;
  abbreviation: string;
  body: string;
  website: string;
}

function detectSource(recall: { sourceUrl: string; category: string }): 'fda-food' | 'usda' | 'nhtsa' | 'cpsc' | 'fda-drug' {
  const url = recall.sourceUrl.toLowerCase();
  if (url.includes('fsis') || url.includes('usda')) return 'usda';
  if (url.includes('nhtsa') || recall.category === 'vehicles') return 'nhtsa';
  if (url.includes('cpsc') || recall.category === 'products') return 'cpsc';
  if (recall.category === 'medications') return 'fda-drug';
  return 'fda-food';
}

export function getSourceAgencyBlock(recall: { sourceUrl: string; category: string }): AgencyBlock {
  switch (detectSource(recall)) {
    case 'usda':
      return {
        name: 'USDA Food Safety and Inspection Service',
        abbreviation: 'USDA FSIS',
        body: "This recall was issued by the USDA's Food Safety and Inspection Service (FSIS), the agency responsible for meat, poultry, and processed egg products sold in the United States. FSIS conducts mandatory inspections at meat and poultry processing facilities and performs laboratory testing for pathogens including Salmonella, Listeria, and E. coli. When a product is found to pose a health risk, FSIS works with the company to conduct a recall and issues a public notice. USDA recalls use the same Class I / Class II / Class III system as FDA recalls: Class I means a reasonable probability of serious harm or death.",
        website: 'https://www.fsis.usda.gov/recalls',
      };
    case 'nhtsa':
      return {
        name: 'National Highway Traffic Safety Administration',
        abbreviation: 'NHTSA',
        body: 'This recall was issued by the National Highway Traffic Safety Administration (NHTSA), the federal agency responsible for motor vehicle and highway safety. Under the National Traffic and Motor Vehicle Safety Act, NHTSA can require manufacturers to notify owners and fix safety-related defects at no charge. That obligation extends to every owner — not just the original buyer. If you purchased this vehicle used, you are still entitled to a free repair. Once a recall is issued, manufacturers have 60 days to begin mailing notices to registered owners.',
        website: 'https://www.nhtsa.gov/recalls',
      };
    case 'cpsc':
      return {
        name: 'U.S. Consumer Product Safety Commission',
        abbreviation: 'CPSC',
        body: 'This recall was conducted in cooperation with the U.S. Consumer Product Safety Commission (CPSC), which oversees the safety of roughly 15,000 categories of consumer products — from electronics and furniture to toys, clothing, and small appliances. The CPSC works with manufacturers on voluntary recalls and can order mandatory recalls under the Consumer Product Safety Act. Consumers can report hazardous products and track all current recalls at CPSC.gov. Injuries involving recalled products can also be reported at SaferProducts.gov.',
        website: 'https://www.cpsc.gov/recalls',
      };
    case 'fda-drug':
      return {
        name: 'FDA Center for Drug Evaluation and Research',
        abbreviation: 'FDA CDER',
        body: "This recall was issued by or conducted in cooperation with the FDA's Center for Drug Evaluation and Research (CDER), which oversees prescription and over-the-counter medications sold in the United States. Drug recalls may be initiated voluntarily by the manufacturer or at FDA's request after a quality problem is identified through manufacturer testing, FDA inspection, or adverse event reports. Recalls are classified by severity: Class I involves products that may cause serious injury or death; Class II and III involve lower levels of risk. Do not stop a prescription medication due to a recall without first consulting your doctor or pharmacist.",
        website: 'https://www.fda.gov/drugs/drug-safety-and-availability/drug-recalls',
      };
    default: // fda-food
      return {
        name: 'FDA Center for Food Safety and Applied Nutrition',
        abbreviation: 'FDA CFSAN',
        body: "This recall was issued by the FDA's Center for Food Safety and Applied Nutrition (CFSAN), which oversees most packaged foods, produce, seafood, dietary supplements, and bottled water sold in the United States. The FDA monitors the food supply through facility inspections, laboratory testing, import screening, and consumer reports. When a contamination or labeling problem is found, the FDA works with the company on a voluntary recall or requests a mandatory one. Recalls are classified by severity: Class I (reasonable probability of serious harm or death), Class II (possible temporary adverse effects, remote probability of serious harm), Class III (unlikely to cause health effects, but violates regulations).",
        website: 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts',
      };
  }
}

// ─── Hazard-specific what-to-do steps ────────────────────────────────────────

export function getHazardWhatToDo(recall: {
  title: string;
  rawDescription: string;
  reason: string;
  category: string;
}): string[] {
  const text = `${recall.title} ${recall.rawDescription} ${recall.reason}`.toLowerCase();

  if (text.includes('listeria')) {
    return [
      'Stop consuming the product immediately — do not attempt to make it safe by cooking or reheating.',
      'Check your refrigerator and freezer for the specific lot numbers, best-by dates, and UPC codes listed in the recall notice.',
      'Dispose of the product or return it to the store for a full refund. Most grocers accept returns without a receipt.',
      'If you are pregnant, elderly, or immunocompromised and have recently consumed the product, contact your healthcare provider even without symptoms. Listeria symptoms can appear up to 70 days after exposure.',
      'Sanitize any surfaces, cutting boards, or containers that may have contacted the product.',
    ];
  }

  if (text.includes('salmonella')) {
    return [
      'Stop consuming the product and verify your package against the lot numbers and UPCs listed in the recall notice.',
      'Dispose of the product or return it to the store for a full refund.',
      'Wash your hands thoroughly with soap and water after handling the recalled product or its packaging.',
      'Disinfect any surfaces, utensils, or storage areas that came into contact with the product.',
      'If you develop diarrhea, fever, or stomach cramps within the next week, mention the recalled product to your doctor.',
    ];
  }

  if (text.includes('e. coli') || text.includes('e coli') || text.includes('escherichia')) {
    return [
      'Stop consuming the product immediately.',
      'Check your package against the specific lot numbers and UPC codes listed in the recall notice.',
      'Dispose of the product or return it to the store for a full refund.',
      'Seek medical attention if you develop severe stomach cramps, bloody diarrhea, or vomiting — these can signal a serious E. coli infection.',
      'Young children and elderly adults face a higher risk of complications including kidney failure. Do not wait for symptoms to worsen.',
    ];
  }

  const allergenKeywords = [
    'undeclared', 'allergen', 'peanut', 'tree nut', 'milk', 'wheat',
    'soy', 'shellfish', 'sesame', 'egg', 'fish', 'walnut', 'almond',
    'cashew', 'pecan', 'pistachio', 'hazelnut',
  ];
  if (allergenKeywords.some((k) => text.includes(k))) {
    return [
      'Check your pantry and refrigerator for the recalled product using the lot numbers and UPCs in the notice.',
      'If you or a household member has a known allergy to the undeclared ingredient, discard the product or return it to the store for a full refund.',
      'If you consumed the product and had an allergic reaction, seek medical attention.',
      'If you carry an epinephrine auto-injector and have recently eaten the product, keep it accessible and monitor for symptoms.',
      'Report any allergic reactions to the FDA at 1-800-FDA-1088.',
    ];
  }

  if (text.includes('fire') || text.includes('overheat') || text.includes('burn') || text.includes('ignit') || text.includes('combust')) {
    return [
      'Stop using the product and disconnect it from any power source immediately.',
      'Do not charge the product if it is battery-powered.',
      'Keep the product away from flammable materials in a ventilated area until you can return or dispose of it.',
      'Follow the manufacturer\'s instructions in the recall notice for the return or refund process.',
      'Do not attempt to disassemble a product recalled for fire or battery hazards.',
    ];
  }

  if (text.includes('chok') && (text.includes('hazard') || text.includes('child') || text.includes('infant'))) {
    return [
      'Remove the product from any area accessible to children immediately — do not wait until the refund is processed.',
      'Check the model number and date codes on your unit against those in the recall notice.',
      'Do not give the product to another family or donate it.',
      'Follow the manufacturer\'s refund or replacement instructions at the link in the official recall notice.',
    ];
  }

  if (text.includes('airbag') || text.includes('air bag') || text.includes('inflator')) {
    return [
      'Contact an authorized dealer for your vehicle\'s make to schedule a free airbag inflator replacement.',
      'Have your 17-character VIN ready — enter it at nhtsa.gov/recalls to confirm your vehicle is included.',
      'If you are in a hot, humid climate (Gulf Coast states, Florida, Hawaii), ask your dealer for priority scheduling. Heat and humidity accelerate inflator degradation.',
      'The repair is free by federal law regardless of the vehicle\'s age, mileage, or ownership history.',
      'If parts are on backorder, ask to be placed on the waiting list and request a loaner vehicle if available.',
    ];
  }

  if (recall.category === 'vehicles') {
    return [
      'Contact an authorized dealer for your vehicle\'s make to schedule a free recall repair.',
      'Enter your 17-character VIN at nhtsa.gov/recalls to confirm your specific vehicle is included.',
      'The repair is free by federal law, regardless of the vehicle\'s age, mileage, or whether you bought it new or used.',
      'You can go to any franchised dealership for your vehicle\'s make — you do not need to return to the original selling dealer.',
      'Note the NHTSA campaign number from this recall when you call to schedule.',
    ];
  }

  if (recall.category === 'medications') {
    return [
      'Check the lot number on your medication package against the specific lots listed in the recall notice — not every batch is always affected.',
      'Do not stop a prescription medication without first consulting your doctor or pharmacist. Abrupt discontinuation of some drugs carries serious risks.',
      'Contact your pharmacy — they can verify whether your dispensed lot is affected and arrange a replacement prescription.',
      'For most insurance plans, a replacement fill triggered by a recall is covered even before the normal refill date.',
      'Report any adverse effects to the FDA at 1-800-FDA-1088 or through MedWatch at fda.gov/safety/medwatch.',
    ];
  }

  if (recall.category === 'food') {
    return [
      'Check your pantry, refrigerator, and freezer for the specific lot numbers, best-by dates, and UPC codes listed in the recall notice.',
      'Do not consume the product — dispose of it or return it to the store for a full refund.',
      'Most grocery stores accept recalled food returns without a receipt.',
      'Wash any surfaces that may have contacted the recalled product.',
      'If you have already consumed the product and feel unwell, contact your healthcare provider.',
    ];
  }

  return [
    'Stop using the product immediately.',
    'Check the model number and any date codes or serial numbers against the specific units listed in the recall notice.',
    'Follow the manufacturer\'s instructions for the remedy at the link in the official recall notice.',
    'Do not donate or sell the recalled product.',
    'Keep children and pets away from the recalled item.',
  ];
}

// ─── Related articles ─────────────────────────────────────────────────────────

import { ARTICLES, getArticleBySlug } from './articles';
import type { Article } from './articles';

export function getRelatedArticles(recall: {
  title: string;
  rawDescription: string;
  reason: string;
  category: string;
}): Article[] {
  const text = `${recall.title} ${recall.rawDescription} ${recall.reason}`.toLowerCase();
  const seen = new Set<string>();
  const results: Article[] = [];

  function add(slug: string) {
    if (seen.has(slug)) return;
    const article = getArticleBySlug(slug);
    if (article) { seen.add(slug); results.push(article); }
  }

  if (text.includes('listeria')) add('what-is-listeria-food-recalls');
  if (text.includes('salmonella')) add('salmonella-food-recalls-explained');
  if (text.includes('e. coli') || text.includes('e coli')) add('e-coli-food-recalls-explained');
  if (['undeclared', 'allergen', 'peanut', 'tree nut', 'milk', 'wheat', 'soy', 'shellfish', 'sesame'].some((k) => text.includes(k))) add('undeclared-allergens-recall-risk');
  if (text.includes('mold') || text.includes('fungal') || text.includes('yeast')) add('mold-and-fungal-food-recalls');
  if (text.includes('airbag') || text.includes('inflator') || text.includes('takata')) add('takata-airbag-recall-history');
  if (text.includes('tire') || text.includes('tyre') || text.includes('wheel')) add('tire-and-wheel-recalls-what-to-know');
  if (text.includes('fire') || text.includes('battery') || text.includes('overheat')) add('electronics-fire-hazard-recalls');
  if (text.includes('child') || text.includes('infant') || text.includes('baby') || text.includes('toy')) add('childrens-products-recalls-parents-guide');
  if (text.includes('ndma') || text.includes('nitrosamine')) add('drug-contamination-ndma-nitrosamines');
  if (text.includes('class i') || text.includes('class ii') || text.includes('class iii')) add('recall-classes-explained');

  if (recall.category === 'vehicles') { add('vehicle-recall-repairs-how-they-work'); add('how-to-check-vin-for-recalls'); add('used-car-recalls-before-you-buy'); }
  if (recall.category === 'medications') add('medication-recall-lot-numbers');
  if (recall.category === 'food') add('returning-recalled-food-for-refund');
  if (recall.category === 'products') add('how-cpsc-recalls-work');

  return results.slice(0, 3);
}
