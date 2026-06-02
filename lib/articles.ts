export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  publishedDate: string;   // ISO date string
  readingMinutes: number;
  category: string;
  intro: string;
  sections: ArticleSection[];
  relatedLinks: { label: string; href: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'what-is-listeria-food-recalls',
    title: 'What Is Listeria and Why Is It Behind So Many Food Recalls?',
    metaDescription:
      'Listeria monocytogenes is one of the most serious food safety pathogens in the U.S. food supply. Learn why it triggers so many recalls, who is most at risk, and what to do if your food is affected.',
    publishedDate: '2025-05-10',
    readingMinutes: 6,
    category: 'Food Safety',
    intro:
      'Every few weeks, a new food recall mentions Listeria monocytogenes. Deli meats, cheeses, ice cream, hummus, sprouts, frozen vegetables — the range of implicated products is wide, and the pattern never seems to end. Understanding why Listeria is such a persistent problem helps you assess the real risk when a recall affects something in your kitchen.',
    sections: [
      {
        heading: 'What Listeria monocytogenes actually is',
        body: [
          'Listeria monocytogenes is a bacterium found widely in soil, water, and decaying plant material. Unlike many foodborne pathogens, it thrives at refrigerator temperatures — between 34°F and 40°F — which is precisely the temperature range where we store food to keep it safe from other bacteria. This cold tolerance is what makes Listeria so difficult to control in food processing facilities.',
          'The illness caused by Listeria, listeriosis, is relatively rare compared to Salmonella or E. coli infections. The CDC estimates about 1,600 cases per year in the United States. But it is disproportionately deadly: about one in five people who contract listeriosis dies from it, giving it one of the highest case-fatality rates of any foodborne illness. For comparison, Salmonella kills roughly 1% of those it infects; Listeria kills around 20%.',
          'Listeria disproportionately affects people with weakened immune systems, pregnant women, newborns, and adults over 65. For a healthy adult, ingesting a small amount of Listeria may cause no symptoms at all. For a pregnant woman, it can cause miscarriage, stillbirth, or severe illness in the newborn, often with no prior warning.',
        ],
      },
      {
        heading: 'Why Listeria keeps showing up in food processing',
        body: [
          'Most Listeria contamination in the food supply originates in processing facilities, not on farms. The bacteria can establish persistent colonies in hard-to-clean areas of processing equipment — floor drains, conveyor belt seams, cooler walls, and around cutting blades. Once established, it can contaminate products for months or years even with standard sanitation practices.',
          'Ready-to-eat foods are the highest risk category because they are not cooked before consumption. Deli meats, hot dogs, smoked fish, soft cheeses, cut melons, and bagged salads all reach consumers without a kill step that would destroy the bacteria. When FDA or USDA inspectors find Listeria in a facility, a recall is generally the only option because the affected products are already in grocery stores and refrigerators.',
          'Recalls for Listeria are almost always Class I — the most serious classification — because the potential for serious harm is real. Even if the probability of a consumer actually becoming ill from any given recalled package is low, the severity of outcomes for vulnerable people justifies the most urgent response.',
        ],
      },
      {
        heading: 'How to respond when a food is recalled for Listeria',
        body: [
          'The first step is to check the specific lot numbers, best-by dates, and UPC codes in the recall notice. Not every unit of a brand is usually affected — Listeria recalls typically target specific production runs, not an entire product line. The recall notice will list the exact identifying information to look for on your package.',
          'If your product matches the recall, do not eat it. Do not try to "cook it safe" — while heating food to 165°F does kill Listeria, this is not a reliable strategy for ready-to-eat foods that were already contaminated. Throw it away or return it to the store for a refund. Most major grocery chains accept returns of recalled items without a receipt.',
          'If you are pregnant or immunocompromised and have recently eaten a recalled product, contact your healthcare provider even if you feel fine. Listeria symptoms can take anywhere from 1 to 70 days to appear after exposure, and the illness may present as what seems like flu. Early diagnosis and antibiotic treatment significantly improve outcomes.',
        ],
      },
      {
        heading: 'The limits of routine testing',
        body: [
          'Food safety testing has real limitations that explain why Listeria contamination often goes undetected until someone becomes ill or a routine audit finds the bacteria in a facility. Finished product testing can only examine a small fraction of production output — sampling hundreds of packages from a production run of millions cannot catch every contaminated unit.',
          'Environmental monitoring — testing surfaces, drains, and equipment in food processing facilities — is generally more effective at identifying persistent Listeria contamination before it reaches products. FDA and USDA require environmental testing programs as part of facility sanitation controls, but inspection frequency varies and facilities primarily monitor themselves.',
          'When a Listeria outbreak is traced to a facility, it often reveals that the bacteria had been present for a long time. The 2011 cantaloupe outbreak that killed 33 people — the deadliest single foodborne illness outbreak in U.S. history at the time — involved a facility with serious sanitation deficiencies that had not been identified in prior inspections.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current food recalls', href: '/food' },
      { label: 'What to do when your food is recalled', href: '/safety-guide#what-to-do' },
      { label: 'Recall glossary: Class I, Class II, Class III', href: '/glossary' },
      { label: 'Food recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'vehicle-recall-repairs-how-they-work',
    title: 'How Vehicle Recall Repairs Work: Free Fixes, Wait Times, and What to Expect',
    metaDescription:
      'Vehicle recall repairs are free by law regardless of how old your car is or where you bought it. Learn how to schedule a recall repair, what the dealer is doing, and how long you might wait.',
    publishedDate: '2025-05-03',
    readingMinutes: 5,
    category: 'Vehicle Safety',
    intro:
      'One of the most common questions from drivers who discover their car has an open recall is whether the repair is really free. It is. Federal law requires manufacturers to fix safety defects at no cost to the owner, with no mileage limit, no age limit, and no requirement that you bought the car new. But there are things about the recall repair process that many people do not know — including why the wait can sometimes be months long.',
    sections: [
      {
        heading: 'The legal framework: why recalls are free',
        body: [
          'The National Traffic and Motor Vehicle Safety Act requires automakers to notify owners of safety-related defects and to remedy those defects at no charge. This obligation applies to the original owner and to every subsequent owner. If you bought a 15-year-old car with an open recall, you have the same right to a free repair as the person who bought it new.',
          'NHTSA, the National Highway Traffic Safety Administration, oversees the recall process. When a defect is identified — either through manufacturer investigation, consumer complaints, or NHTSA\'s own monitoring — NHTSA can issue a formal investigation, and the manufacturer can be ordered to conduct a recall. Once a recall is issued, the manufacturer has 60 days to notify registered owners by first-class mail.',
          'You can take your vehicle to any authorized franchised dealership for your vehicle\'s make, not just the dealer you bought it from. A Toyota recall can be repaired at any Toyota dealer. A Ford recall at any Ford dealer. The manufacturer reimburses the dealer for recall work, so there is no financial incentive for dealers to avoid or delay the repair.',
        ],
      },
      {
        heading: 'Why the parts are sometimes on backorder',
        body: [
          'The most frustrating part of vehicle recalls is that the remedy is not always immediately available. When NHTSA issues a recall affecting millions of vehicles simultaneously, parts manufacturers and automakers face an enormous demand spike that supply chains cannot always absorb quickly.',
          'The Takata airbag inflator recall — the largest vehicle safety recall in U.S. history, affecting roughly 67 million vehicles from 19 manufacturers — took years to fully remedy because the replacement parts had to be manufactured, distributed, and installed faster than had ever been attempted. Some vehicles waited five or more years for a repair appointment.',
          'For most recalls, parts availability is not a serious constraint. Smaller-scale recalls affecting a few thousand vehicles are generally resolved quickly. But for major defects affecting large production runs, it is worth calling ahead to check parts availability before scheduling an appointment, and to ask the dealer to place your name on a waiting list.',
        ],
      },
      {
        heading: 'What actually happens during the repair',
        body: [
          'Manufacturers provide dealers with a technical service bulletin (TSB) that specifies exactly what the recall repair entails. Some recalls are simple: a software update, a sensor replacement, a new bolt torqued to a different specification. Others involve removing and replacing major components like airbag inflators, fuel pump modules, or brake master cylinders.',
          'When you bring your vehicle in, the dealer will confirm that your VIN is included in the recall using NHTSA\'s database, verify that the recall repair has not already been completed on your vehicle, and perform the work as specified in the TSB. You should receive documentation that the recall was performed, including the recall campaign number.',
          'Save that documentation. It establishes that the recall repair has been completed on your specific vehicle, which can matter when selling the car and can protect you if a related issue arises later.',
        ],
      },
      {
        heading: 'What to do while waiting for a parts-delayed recall repair',
        body: [
          'Some recalls involve safety defects serious enough that NHTSA will advise owners to stop driving the vehicle or to take specific precautions while awaiting a repair. These advisories are included in the recall notice and the owner notification letter. If your recall falls into this category, take it seriously — the agency does not issue driving restrictions casually.',
          'For less severe defects, most vehicles can still be driven safely while waiting for a repair appointment. Read the recall notice carefully to understand the nature of the defect, the conditions under which it is likely to manifest, and any interim precautions the manufacturer recommends. If you cannot schedule a repair and the defect seems serious, contact NHTSA at 1-888-327-4236.',
          'Rental car reimbursement is not always available during a recall repair. Manufacturers are not legally required to provide a loaner vehicle for recall repairs, though some do as a goodwill gesture for lengthy repairs. Ask the dealer when you schedule your appointment.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Check your VIN for open recalls', href: '/vin-lookup' },
      { label: 'Browse current vehicle recalls', href: '/vehicles' },
      { label: 'Vehicle recall FAQ', href: '/faq' },
      { label: 'What NHTSA campaign numbers mean', href: '/glossary' },
    ],
  },
  {
    slug: 'undeclared-allergens-recall-risk',
    title: 'Undeclared Allergens: The Recall Risk That Sends People to the Hospital',
    metaDescription:
      'Undeclared allergen recalls are among the most common and most serious food recalls. Learn what they are, which allergens are most commonly involved, and how to protect yourself and your family.',
    publishedDate: '2025-04-25',
    readingMinutes: 5,
    category: 'Food Safety',
    intro:
      'If you scan through the FDA\'s food recall database on any given week, undeclared allergens will likely account for a substantial portion of what you see. They are one of the most common triggers for food recalls — and for people with serious food allergies, they are among the most dangerous. Understanding how undeclared allergen recalls happen helps you make sense of why they are so frequent and what you should do when one affects a product you use.',
    sections: [
      {
        heading: 'What an undeclared allergen is',
        body: [
          'An undeclared allergen is a food allergen present in a product that is not listed on the label. In the United States, the Food Allergen Labeling and Consumer Protection Act (FALCPA) and the FASTER Act require manufacturers to clearly declare the nine major allergens on food labels: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. If any of these allergens is present in a food — whether as an ingredient, an added flavor component, or through cross-contact during manufacturing — it must be disclosed.',
          'When a manufacturer fails to list an allergen that is actually present in the product, FDA can classify the recall as Class I — the highest severity level — because undeclared allergens can trigger anaphylaxis, a potentially fatal allergic reaction. This is why undeclared allergen recalls are almost always treated with the same urgency as bacterial contamination recalls.',
        ],
      },
      {
        heading: 'How undeclared allergens end up in products',
        body: [
          'The most common cause of undeclared allergen recalls is not malicious intent — it is labeling and manufacturing error. A product reformulation that adds a new ingredient gets put into production before the label is updated. A supplier changes an ingredient without notifying the manufacturer. A contract manufacturer uses shared equipment that has contact with allergen-containing products and fails to adequately control cross-contact.',
          'Peanuts and tree nuts are disproportionately represented in undeclared allergen recalls because they are widespread in food manufacturing facilities, extremely potent at low doses, and associated with the most severe allergic reactions. Milk and soy are also common culprits, partly because they appear in so many processed foods as ingredients or flavor enhancers.',
          'Multi-use production lines — where different products are made on the same equipment at different times — are a significant source of cross-contact. Even with cleaning protocols between production runs, trace amounts of allergens can remain on surfaces, in seals, or in hard-to-clean corners of equipment. Proper allergen control requires dedicated equipment for high-risk allergens, or rigorous validated cleaning procedures.',
        ],
      },
      {
        heading: 'Why label reading alone is not enough',
        body: [
          'People with food allergies learn early to read ingredient labels carefully. But undeclared allergen recalls reveal a fundamental gap: the label may not accurately reflect what is in the package. This is not a comforting reality for anyone managing a serious allergy, but it is the truth, and it underscores why monitoring food recalls is a genuine safety practice for allergic households, not just a precaution for the overly cautious.',
          'Setting up recall alerts filtered for food recalls is one of the most practical steps an allergic person or caregiver can take. When a recall is issued for a product containing an undeclared allergen, the notice typically goes out within days of the discovery. If you can identify the recalled product before eating it, you can avoid the exposure entirely.',
        ],
      },
      {
        heading: 'What to do when your product is recalled for undeclared allergens',
        body: [
          'Stop using the product and check the lot numbers and UPC codes against the recall notice to confirm your specific package is affected. Do not assume that because you have been eating the product safely for months, it is fine to continue — the contamination may be specific to a recent production batch that looks identical to earlier safe batches.',
          'If you or someone in your household has already eaten the recalled product and has a known allergy to the undeclared ingredient, seek medical attention promptly. Mild reactions can escalate to anaphylaxis quickly, particularly for people with peanut, tree nut, or shellfish allergies. If you have epinephrine (EpiPen), use it and call 911 if symptoms appear serious.',
          'For households without known allergies, undeclared allergen recalls are still worth taking seriously. Many people do not know they have a food allergy until an exposure triggers a reaction. If a recalled product is in your home, dispose of it even if you believe no one in your household has the relevant allergy.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current food recalls', href: '/food' },
      { label: 'Recall glossary: allergen terms', href: '/glossary' },
      { label: 'Subscribe to food recall alerts', href: '/subscribe' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
    ],
  },
  {
    slug: 'medication-recall-lot-numbers',
    title: 'When Your Medication Is Recalled: How to Check Your Lot Number and What to Do Next',
    metaDescription:
      'A prescription or OTC medication you take has been recalled. Here\'s exactly how to check whether your specific supply is affected, what to do before stopping medication, and how to get a replacement.',
    publishedDate: '2025-04-18',
    readingMinutes: 5,
    category: 'Medication Safety',
    intro:
      'Medication recalls are unsettling in a way that food and product recalls are not. The medication is something you depend on, often for a serious health condition, and the prospect of stopping it abruptly can feel as frightening as the contamination itself. Most people do not know how to find the lot number on their prescription bottle, do not know whether their specific supply is affected, and do not know the right steps to take. This guide walks through each of them.',
    sections: [
      {
        heading: 'How to find your lot number',
        body: [
          'Every drug product manufactured in the United States is assigned a lot number — a code that identifies the specific production batch. When the FDA issues a recall, it lists the exact lot numbers affected. If your lot number is not on the list, your supply is not part of the recall, even if it is the same drug and manufacturer.',
          'The lot number (sometimes labeled "Lot," "LOT," "Batch," or "BN") is printed on the drug\'s outer packaging — the box, if you still have it — and often on the label of the bottle itself. For a prescription bottle, it may be on the pharmacy label, which your pharmacist adds when dispensing the medication. If you cannot find the lot number on your bottle, your pharmacist can look it up.',
          'For blister pack medications, the lot number is typically on the back panel. For inhalers and other devices, it may be on the device body or a sticker. For eye drops and topical products, check the crimp at the bottom of the tube or the bottom of the bottle.',
        ],
      },
      {
        heading: 'What to do before you stop taking a prescription medication',
        body: [
          'This is the most important point in this guide: do not abruptly stop taking a prescription medication because of a recall without first consulting your doctor or pharmacist. For many medications — blood pressure drugs, antidepressants, diabetes medications, anticoagulants, steroids, and others — stopping suddenly can cause serious harm. The recall may represent a lower risk than the consequences of untreated disease or abrupt withdrawal.',
          'Call your pharmacy first. They can verify whether your specific dispensed lot is affected, arrange an emergency replacement prescription from an unaffected lot or a different manufacturer, and in most cases will not charge you for the replacement fill even if it comes before your normal refill date. Your insurance will generally cover an early replacement fill in a recall situation.',
          'If you cannot reach your pharmacy and believe your medication is affected, do not simply stop. Take your last available doses and contact a medical provider. The urgency of stopping depends entirely on the nature of the recall defect — a labeling error carries different risk than contamination with a toxic substance, and your provider can help you weigh those factors.',
        ],
      },
      {
        heading: 'Common reasons medications are recalled',
        body: [
          'FDA drug recalls happen for several distinct reasons, and understanding them helps calibrate the actual risk. Contamination with foreign particles — glass fragments, rubber from faulty vials, metal particulates from manufacturing equipment — represents a direct quality failure and is generally serious. Sub-potency or super-potency, where the dose is significantly lower or higher than labeled, matters enormously for drugs with narrow therapeutic windows like blood thinners and seizure medications.',
          'Many drug recalls involve NDMA or other nitrosamine impurities — compounds that can form during manufacturing and that are classified as probable human carcinogens. NDMA recalls became prominent starting around 2018 and affected widely used drugs including metformin, ranitidine (Zantac), valsartan, and losartan. For NDMA contamination, FDA has generally communicated that the risk from short-term exposure is low but that continued long-term exposure should be avoided.',
          'Labeling errors — incorrect dosing instructions, missing warnings, or mix-ups between similar product names — are also common recall triggers. The risk from a labeling error depends heavily on what information was wrong and whether a patient or caregiver would have acted on it.',
        ],
      },
      {
        heading: 'Getting a refund or replacement',
        body: [
          'For over-the-counter medications, the process is simple: return the product to the pharmacy or retailer where you bought it. Most pharmacies will accept OTC medication returns for recalled products even without a receipt. Some manufacturers also accept direct returns by mail and will reimburse shipping.',
          'For prescription medications, your pharmacy handles the replacement. If your pharmacist needs a new prescription from your provider to substitute a different manufacturer\'s product, they can usually arrange this quickly and may be able to contact your prescriber directly on your behalf.',
          'If you have difficulty getting a replacement for a recalled prescription medication, contact your state\'s board of pharmacy or the FDA\'s consumer complaint hotline. Patients experiencing difficulty getting urgent medication replaced during a recall have recourse through these channels.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current medication recalls', href: '/medications' },
      { label: 'Medication recall FAQ', href: '/faq' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Subscribe to medication recall alerts', href: '/subscribe' },
    ],
  },
  {
    slug: 'how-to-check-vin-for-recalls',
    title: 'How to Actually Check If Your Car Has an Open Recall (And What to Do About It)',
    metaDescription:
      'NHTSA\'s VIN lookup is free and takes 30 seconds. Here\'s how to use it, what the results mean, what to do if your car has an open recall, and why you should check before buying a used vehicle.',
    publishedDate: '2025-04-10',
    readingMinutes: 4,
    category: 'Vehicle Safety',
    intro:
      'Every day, millions of Americans drive cars with open safety recalls — defects that their manufacturer has already acknowledged and is required to fix for free. Many of these drivers do not know the recall exists. The NHTSA VIN lookup tool at nhtsa.gov/recalls is free, takes about 30 seconds, and tells you everything. Here is how to use it and what to do with what you find.',
    sections: [
      {
        heading: 'Where to find your VIN',
        body: [
          'Your Vehicle Identification Number (VIN) is a 17-character alphanumeric code unique to your specific vehicle. You will find it in three places that require no tools to access: on a sticker on the driver\'s side door frame (open the door and look for a label near the latch), on the dashboard visible through the windshield on the driver\'s lower left side (look from outside the car), and on your vehicle registration document and insurance card.',
          'If you are checking a vehicle you do not currently own — before a purchase, for example — the door frame sticker is usually the most accessible. The dashboard location (sometimes called the cowl plate) is also easy to read through the glass.',
        ],
      },
      {
        heading: 'How to use the NHTSA lookup',
        body: [
          'Go to nhtsa.gov/recalls and enter your 17-character VIN in the lookup field. NHTSA\'s database will check the VIN against all recall campaigns and show you any recalls that apply to your specific vehicle — not just the model and year, but your specific build, because some recalls within a model year only affect vehicles manufactured at certain plants or during certain date ranges.',
          'The results show all open recalls (repairs not yet completed on your vehicle) as well as completed recalls (where records show the repair has already been done). If you see an open recall, note the NHTSA campaign number — you will use that when you call the dealership to schedule the repair.',
          'If the lookup shows no recalls for a recently manufactured vehicle, check back periodically. New recalls are issued constantly, and a vehicle that has no open recalls today may have one next month.',
        ],
      },
      {
        heading: 'What "remedy not yet available" means',
        body: [
          'For some recalls, NHTSA\'s database will show that a remedy is not yet available. This means the manufacturer has been notified of the defect and a recall has been initiated, but the repair parts, replacement components, or updated software have not yet been produced and distributed to dealers.',
          'In these cases, NHTSA will notify you when the remedy becomes available. Your name and address are associated with your VIN in the manufacturer\'s system. If you bought the car used and your address is not on file, registering your ownership with the manufacturer (usually possible through their website) ensures you receive notification.',
          'When a remedy is unavailable and the defect is serious enough to affect safety in the near term, NHTSA sometimes advises interim safety measures — specific driving conditions to avoid, parts of the vehicle not to use, or precautions to take. Read the recall notice carefully if this applies to your vehicle.',
        ],
      },
      {
        heading: 'Checking before buying a used vehicle',
        body: [
          'Running a VIN check is one of the most important steps you can take before purchasing a used vehicle. Open recalls — defects the manufacturer acknowledges and must fix — are not always disclosed by private sellers, and dealers are not uniformly required to complete recall repairs before selling a vehicle (rules vary by state and dealer type).',
          'If a used vehicle has an open recall, the repair is still free for you as the new owner. But understanding what defects exist before you buy lets you factor in any repair wait time or interim restrictions. For serious safety defects, it may affect your decision.',
          'Paid services like Carfax and AutoCheck also show recall history, but NHTSA\'s lookup is free and authoritative. There is no reason to pay for recall information when the government provides it at no cost.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Look up your VIN on Recall Radar', href: '/vin-lookup' },
      { label: 'Browse current vehicle recalls', href: '/vehicles' },
      { label: 'How vehicle recall repairs work', href: '/articles/vehicle-recall-repairs-how-they-work' },
      { label: 'Vehicle recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'childrens-products-recalls-parents-guide',
    title: "Children's Products and Recalls: What Parents Need to Know",
    metaDescription:
      "Baby and children's products are recalled more often than almost any other category. Learn which product types carry the most risk, how to register baby gear, and why the CPSC prioritizes infant safety.",
    publishedDate: '2025-04-02',
    readingMinutes: 6,
    category: 'Consumer Products',
    intro:
      "Among all consumer product recalls, those involving children's products carry a particular weight. The CPSC has special authority and heightened standards for products intended for infants and young children — because the consequences of a product failure in this category are often catastrophic. New parents, grandparents, and caregivers who care for young children should understand both which products carry the most risk and what they can do to stay ahead of recalls.",
    sections: [
      {
        heading: 'Which products are recalled most often',
        body: [
          "Infant sleep products have generated some of the most significant recalls in recent CPSC history. Products like the Fisher-Price Rock 'n Play Sleeper, recalled in 2019 after being linked to more than 30 infant deaths, had been sold for a decade before enough incident data accumulated to trigger CPSC action. Inclined sleepers — products that position infants at an angle — have been associated with suffocation deaths when infants roll to an unsafe position.",
          "Strollers and high chairs are recalled for structural failures, entrapment hazards, and fall risks. Infant carriers and slings have been recalled for hardware failures and positioning risks that can restrict infant breathing. Baby monitors have been recalled when electrical components created fire or shock hazards.",
          "Toys are the most frequently recalled children's product category by volume, though many toy recalls involve choking hazards in products that were misclassified by age group rather than catastrophic failures. Small parts, strong magnets, and toxic surface coatings are the most common triggers.",
        ],
      },
      {
        heading: 'The importance of product registration',
        body: [
          "Children's product manufacturers are required by the Consumer Product Safety Improvement Act to include a registration card with many baby products — cribs, car seats, strollers, baby monitors, and infant carriers among them. These cards are how manufacturers build a list of who owns their product so they can notify owners directly when a recall is issued.",
          "Registration rates for infant products are low. Most parents receive the card, set it aside, and never fill it out. This is a meaningful safety gap: owners who are not registered often do not learn about a recall until weeks or months after it is issued, if at all. Taking five minutes to register new baby gear is one of the most concrete safety actions you can take.",
          "You can also register products online. Most major baby gear manufacturers — Graco, Chicco, Britax, Baby Trend, and others — have product registration pages on their websites. Keep the model number and date of manufacture handy when you register; you will need them.",
        ],
      },
      {
        heading: "The CPSC's special authority for baby products",
        body: [
          "Congress gave the CPSC specific authority under the Danny Keysar Child Product Safety Notification Act and subsequent legislation to set mandatory safety standards for many baby products. These standards — for cribs, bassinets, strollers, high chairs, and play yards — must be met for products to be legally sold in the United States.",
          "Despite mandatory standards, products still fail. Some failures are discovered through consumer reports to SaferProducts.gov — the CPSC's public product safety incident database where anyone can report an injury, near-miss, or safety concern. When enough reports describe the same problem with the same product, CPSC investigators open a review that can lead to a mandatory recall.",
          "The CPSC helpline is 1-800-638-2772. If your child has been injured by a product or you observe a safety hazard, reporting it matters. Several major recalls in the baby product category were triggered by reports from parents describing specific incident patterns.",
        ],
      },
      {
        heading: 'What to do with secondhand baby gear',
        body: [
          "Secondhand children's products — particularly car seats, cribs, and strollers — require extra scrutiny. Car seats should generally not be used if they are more than six years old (most have an expiration date printed on the base or shell) or if they have been in a car accident. Cribs made before 2011 may not meet current safety standards, and drop-side cribs are no longer legal to sell new in the United States.",
          "Always run a CPSC recall check before using secondhand baby gear. The CPSC's recall database at cpsc.gov/recalls and Recall Radar both list active consumer product recalls. If the product you have received is recalled, do not use it regardless of whether the defect has caused a visible problem — the remedy may involve a free replacement or repair through the manufacturer.",
          "Yard sales, Facebook Marketplace, and thrift stores all regularly sell recalled children's products because sellers do not always know about recalls and buyers do not always check. The safest rule is to verify any used baby product before putting a child in it.",
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse consumer product recalls', href: '/products' },
      { label: 'Report an unsafe product to the CPSC', href: '/safety-guide#report-unsafe' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Subscribe to product recall alerts', href: '/subscribe' },
    ],
  },
  {
    slug: 'why-people-never-hear-about-recalls',
    title: 'The Hidden Recall Problem: Why So Many People Never Find Out',
    metaDescription:
      'Millions of recalled products are still in homes and on roads across the United States. The notification system works better than it used to, but major gaps remain. Here is why recalls fail to reach people.',
    publishedDate: '2025-03-22',
    readingMinutes: 5,
    category: 'Consumer Safety',
    intro:
      'If the recall notification system worked perfectly, every person with a recalled product would receive timely, actionable notice and promptly get the remedy. In practice, recall completion rates — the percentage of affected units returned, repaired, or replaced — are often startlingly low. Food recalls may see only 10-15% of recalled units retrieved. Some vehicle recalls languish for years with completion rates below 50%. Understanding why helps you take recall awareness into your own hands.',
    sections: [
      {
        heading: 'The fundamental problem: contact information',
        body: [
          "For a recall notice to reach you, a manufacturer or government agency needs your contact information linked to the specific product you own. For vehicles, this connection exists through state vehicle registration databases. For most consumer products, it does not — unless you registered the product after purchase.",
          "The vast majority of consumer products are sold with no record of who bought them. A grocery store knows that a carton of eggs was sold on a Tuesday, but it does not know who bought it. An online retailer may know that an account holder purchased a specific item, and Amazon and some other large retailers now proactively contact customers about recalled products they purchased. But the infrastructure for contacting most product owners simply does not exist.",
        ],
      },
      {
        heading: 'How vehicle recall notifications work and where they fall short',
        body: [
          "Vehicle recalls have the best notification infrastructure of any product category because vehicle registration data links a specific VIN to a registered owner's address. Manufacturers are required to send first-class mail to the most recent registered owner within 60 days of a recall being issued. This is how most car owners first learn about a recall — an official-looking letter in the mail.",
          "But the mail system has gaps. Mail forwarding does not follow car owners who have moved. Vehicles that have been sold privately may have owner changes that were never registered with the DMV. Fleet vehicles and rental cars may have hundreds of owners over their lifetime, not all of whom will receive or act on recall notices.",
          "The typical vehicle recall completion rate is around 70-75% — meaning that for every 100 vehicles included in a recall, about 25 are never repaired. For older vehicles, the rates drop further: owners are harder to locate, vehicles have changed hands more often, and some vehicles have been scrapped.",
        ],
      },
      {
        heading: "Why food recall completion rates are so low",
        body: [
          "Food is typically consumed within days or weeks of purchase. By the time a recall is announced, much of the affected product has often already been eaten. This is not necessarily a safety disaster — the absence of illness in consumers who ate the product before the recall is real evidence, though not certainty, that the contamination risk was lower than feared or concentrated in specific batches.",
          "Retailers are required to remove recalled food from shelves and notify customers through several means. Larger grocery chains have loyalty card programs that allow them to identify purchasers of recalled items and send email or phone notifications. This system works reasonably well for large supermarkets, but cash purchases, small retailers, and food service establishments all represent gaps.",
          "Some of the most important work in food recall effectiveness happens before the product reaches consumers — when a manufacturer or the FDA catches contamination through environmental testing or routine audits before a product-related illness occurs. A recall issued before any confirmed illnesses is a sign the system is working.",
        ],
      },
      {
        heading: 'What you can do',
        body: [
          "Register products when you buy them. This is most important for baby gear, major appliances, and vehicles — categories where a recall could seriously harm you and where manufacturer registration systems exist to send direct notices.",
          "Set up email alerts for the product categories you care most about. The FDA, NHTSA, USDA, and CPSC all offer free email notification services for new recalls in their jurisdictions. Recall Radar aggregates all of these into a single daily or weekly digest, filtered to the categories you choose.",
          "Check recalls before buying secondhand goods, especially vehicles, baby gear, and children's products. Running a VIN check before purchasing a used vehicle takes 30 seconds and may reveal safety defects the seller is not aware of. Checking the CPSC database before buying a secondhand stroller or car seat is similarly quick and potentially life-saving.",
        ],
      },
    ],
    relatedLinks: [
      { label: 'Subscribe to recall alerts', href: '/subscribe' },
      { label: 'VIN lookup for vehicle recalls', href: '/vin-lookup' },
      { label: 'How to register your products', href: '/safety-guide#register-products' },
      { label: 'Recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'salmonella-food-recalls-explained',
    title: 'Salmonella in Food Recalls: How It Gets Into Food and What the Risk Actually Is',
    metaDescription:
      'Salmonella is one of the most common pathogens behind food recalls. Learn how it contaminates food, who is most at risk, and how to read a Salmonella recall notice.',
    publishedDate: '2025-03-15',
    readingMinutes: 5,
    category: 'Food Safety',
    intro:
      "After Listeria, Salmonella is the pathogen most frequently responsible for major food recalls in the United States. The CDC estimates roughly 1.35 million Salmonella infections occur each year, causing about 26,500 hospitalizations and 420 deaths. Most people have a general awareness that Salmonella is associated with raw chicken and eggs, but the range of foods implicated in recent Salmonella recalls is much broader than that.",
    sections: [
      {
        heading: 'Why Salmonella shows up in so many different foods',
        body: [
          "Salmonella is a genus of bacteria found in the intestinal tracts of many animals, including livestock, poultry, reptiles, and even some household pets. It enters the food supply through several routes: contaminated animal products (meat, poultry, eggs), contaminated irrigation water on produce farms, cross-contamination during food processing when animal products contact produce or equipment, and contaminated environmental surfaces in food processing facilities.",
          "In recent years, some of the largest Salmonella recalls have involved products that most consumers would not associate with bacterial contamination risk: peanut butter, cantaloupe, peppers, onions, tahini, sprouts, and packaged salads. These products may be contaminated by contaminated irrigation water, animal intrusion at farms, or cross-contamination during processing.",
          "Unlike Listeria, Salmonella does not grow at refrigerator temperatures — it requires warmer conditions. But this does not mean refrigerated products are safe from Salmonella: the bacteria can survive at refrigerator temperatures without multiplying, and when contaminated refrigerated food is eaten without cooking, the live bacteria can still cause illness.",
        ],
      },
      {
        heading: 'What Salmonella illness feels like',
        body: [
          "Salmonellosis — the illness caused by Salmonella — typically begins 6 to 72 hours after exposure. Symptoms include diarrhea (often severe or bloody), fever, stomach cramps, nausea, and vomiting. Most healthy adults recover within 4 to 7 days without medical treatment, though diarrhea may persist longer.",
          "Severe cases require hospitalization, particularly when Salmonella spreads beyond the intestines into the bloodstream — a condition called bacteremia that can be life-threatening. Children under 5, adults over 65, and immunocompromised individuals are at the highest risk of severe illness. Infants are at particular risk for bacteremia from non-typhoidal Salmonella.",
          "A subset of Salmonella infections leads to reactive arthritis — joint pain that develops 3 to 4 weeks after the initial infection and can persist for months or years. This long-term complication is not always recognized as stemming from a prior foodborne illness.",
        ],
      },
      {
        heading: 'How to read a Salmonella recall notice',
        body: [
          "Salmonella recall notices vary considerably in specificity. The most useful notices list the specific serotype of Salmonella involved (there are over 2,500 Salmonella serotypes; the most common in foodborne illness are Salmonella Typhimurium, Salmonella Enteritidis, and Salmonella Newport), the specific product lots affected, the distribution geography, and whether any illness cases have been confirmed.",
          "Recalls issued in connection with a confirmed outbreak — meaning illness cases have been traced to the product through epidemiological investigation — typically include this information. Recalls issued based on environmental or product testing, without associated illness cases, do not indicate that anyone has become sick but reflect preventive action.",
          "When checking whether your product is affected, compare the lot number, best-by date, and UPC code on your product to the specific codes in the recall notice. If your product is not in the affected lot range, it was produced in a different batch and is not part of the recall.",
        ],
      },
      {
        heading: 'When cooking makes recalled food safe',
        body: [
          "For most Salmonella-contaminated foods, thorough cooking — reaching an internal temperature of 165°F for poultry, 160°F for ground beef and eggs — does kill the bacteria. This is why the risk framework is different for recalled raw chicken than for recalled peanut butter or cantaloupe.",
          "Ready-to-eat foods contaminated with Salmonella present higher risk because there is no cooking step to kill the bacteria before consumption. The same applies to any product you eat raw or with minimal preparation. For these foods, the only safe response to a recall is to stop using the recalled product — do not attempt to make it safe by cooking.",
          "The most important caveat: if you have already eaten a recalled product and experience symptoms of foodborne illness, seek medical attention. This is especially important for young children, elderly individuals, and immunocompromised people. A stool culture can confirm Salmonella as the cause and may influence treatment decisions.",
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current food recalls', href: '/food' },
      { label: 'What is Listeria?', href: '/articles/what-is-listeria-food-recalls' },
      { label: 'Subscribe to food recall alerts', href: '/subscribe' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
    ],
  },
  {
    slug: 'how-to-report-unsafe-product',
    title: 'How to Report an Unsafe Product — And Why Your Report Can Matter',
    metaDescription:
      'Consumer reports to the CPSC, FDA, and NHTSA are how many recalls get started. Learn how to file a report, what information to include, and what happens after you submit it.',
    publishedDate: '2025-03-08',
    readingMinutes: 4,
    category: 'Consumer Safety',
    intro:
      "Most recalls do not begin with government inspectors discovering a problem — they begin with consumers reporting it. A single report may not trigger an investigation, but a pattern of similar reports about the same product can. If you have experienced a safety problem with a consumer product, food, vehicle, or medication, reporting it is one of the most direct public safety contributions you can make.",
    sections: [
      {
        heading: 'Reporting a consumer product to the CPSC',
        body: [
          "SaferProducts.gov is the CPSC's public product safety reporting database. Anyone can submit a report — you do not need to have been injured. Near-misses, property damage, and observed hazards are all worth reporting. Reports are reviewed by CPSC analysts and used to identify hazard patterns.",
          "When filing a report, include as much identifying information as possible: product name, brand, model number, the retailer where you purchased it, the approximate date of purchase, and a detailed description of what happened. If you have photos or videos, upload them — visual documentation is particularly valuable for reports involving structural failures, fires, or unusual behavior.",
          "The CPSC uses report data to determine whether to open an investigation, conduct testing, or pursue a company for a voluntary or mandatory recall. If you received a report confirmation number, keep it — you may be contacted for follow-up.",
        ],
      },
      {
        heading: 'Reporting a food safety issue to FDA or USDA',
        body: [
          "For food products other than meat and poultry, report to the FDA through the MedWatch Safety Reporting Portal at fda.gov/safety/medwatch, or call 1-800-FDA-1088 (1-800-332-1088). For meat, poultry, and egg products regulated by the USDA, call the USDA MPHOTLINE at 1-888-674-6854 or use the online reporting form at askfsis.usda.gov.",
          "When reporting a food safety concern, include the product name, brand, lot number, best-by date, UPC code, and a description of the concern. If you or someone in your household became ill, include the symptoms and timing. If you have the original packaging, keep it — FDA or USDA investigators may ask you to send it in or provide additional details.",
          "Food safety outbreak investigations often begin when health departments receive reports of illness from multiple people who ate the same product. By reporting your illness to your local or state health department in addition to FDA, you contribute to the epidemiological picture that can link a product to an outbreak.",
        ],
      },
      {
        heading: 'Reporting a vehicle safety defect to NHTSA',
        body: [
          "NHTSA's vehicle safety complaint database at nhtsa.gov/report-a-safety-problem accepts reports from vehicle owners, lessees, and renters. You do not need to have been in an accident — reports of near-misses, unexpected component behavior, and safety concerns are all accepted.",
          "Include your VIN, the vehicle's make, model, year, mileage at the time of the incident, and a detailed description of what happened. NHTSA\'s automated analysis looks for complaint patterns — when enough people report the same issue on the same vehicle model, a defect investigation is opened.",
          "If you believe your vehicle has a safety defect that should be investigated immediately, call NHTSA's hotline at 1-888-327-4236. For serious defects involving crashes or injuries, contact both NHTSA and your local police department.",
        ],
      },
      {
        heading: 'What happens to your report',
        body: [
          "Most individual reports do not immediately trigger an investigation or recall — the agencies receive thousands of reports and have limited investigative resources. What your report does is contribute to a dataset. When analysts see the same failure mode described repeatedly across a product model, it crosses a threshold that prompts action.",
          "For this reason, it is worth reporting even if you assume \"someone else has already reported this.\" If 50 people independently assume that and decide not to report, the agency may see three reports instead of fifty — a pattern that looks like an isolated problem rather than a systemic one.",
          "You can check whether a vehicle has received safety complaints on NHTSA\'s database even before a recall is issued. If you observe a problem with your vehicle and want to know whether others have reported the same thing, searching NHTSA\'s complaint database by make, model, and component is a useful starting point.",
        ],
      },
    ],
    relatedLinks: [
      { label: 'Consumer safety guide', href: '/safety-guide#report-unsafe' },
      { label: 'Browse current recalls', href: '/' },
      { label: 'Recall FAQ', href: '/faq' },
      { label: 'Subscribe to recall alerts', href: '/subscribe' },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
