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
