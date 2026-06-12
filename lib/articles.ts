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
  {
    slug: 'e-coli-food-recalls-explained',
    title: 'E. coli in Food Recalls: The Different Strains and What the Risk Actually Means',
    metaDescription:
      'Not all E. coli is dangerous, but the strains that trigger food recalls can cause severe illness and kidney failure. Learn which strains are most hazardous, how they enter the food supply, and what to do when a recall affects your food.',
    publishedDate: '2026-01-10',
    readingMinutes: 6,
    category: 'Food Safety',
    intro:
      'E. coli is one of the most common bacterial triggers for food recalls — yet the name covers hundreds of strains with vastly different risk profiles. The E. coli in your gut right now is helping you digest food. The E. coli in a recall notice may be capable of causing bloody diarrhea, kidney failure, and death. Understanding the difference helps you interpret recalls accurately instead of either panicking or dismissing every notice.',
    sections: [
      {
        heading: 'Why E. coli is not a single pathogen',
        body: [
          'Escherichia coli is a species of bacteria that lives in the intestines of humans and many warm-blooded animals. Most strains are harmless or even beneficial. The strains that concern food safety regulators belong to a group called Shiga toxin-producing E. coli, or STEC — so named because they produce toxins capable of causing serious illness.',
          'The most well-known STEC strain is E. coli O157:H7, which gained public attention after a 1993 outbreak linked to undercooked hamburgers at a fast food chain killed four children and sickened hundreds. O157:H7 has since been the focus of extensive surveillance and testing in the beef industry. However, the FDA and USDA also monitor non-O157 STEC strains — including O26, O45, O103, O111, O121, and O145 — which can cause illness as severe as O157:H7 but were historically less likely to be detected by routine testing.',
          'When a food recall notice mentions E. coli O157:H7 or simply "STEC," you are looking at a Class I recall — the most serious level — because the potential for severe outcomes is real.',
        ],
      },
      {
        heading: 'How E. coli enters the food supply',
        body: [
          'STEC originates in the intestines of cattle and other ruminants and reaches food through fecal contamination. In meat production, this typically occurs during slaughter when intestinal contents come into contact with the carcass. Ground beef is particularly high-risk because the grinding process distributes any surface contamination throughout the entire product — a small contaminated area on a whole cut of meat becomes dispersed through pounds of ground beef.',
          'Produce contamination follows a different path. Fruits and vegetables become contaminated through irrigation water sourced from supplies contaminated by animal runoff, through direct contact with animal feces in fields, or through post-harvest cross-contamination during processing and packaging. Romaine lettuce, spinach, and other leafy greens have been involved in multiple major E. coli outbreaks because they are eaten raw without a cooking step that would kill the bacteria.',
          'Unpasteurized (raw) milk and juice represent another category where E. coli risk is well-documented. The FDA recommends against drinking unpasteurized products specifically because pathogens including E. coli O157:H7 survive in raw dairy and juice and are killed by pasteurization.',
        ],
      },
      {
        heading: 'What illness from STEC looks like',
        body: [
          'Symptoms of STEC infection typically appear 3 to 4 days after exposure, though the range is 1 to 10 days. The hallmark symptoms are severe stomach cramps, diarrhea that often becomes bloody, and vomiting. Fever is usually mild or absent — a distinguishing feature from many other foodborne illnesses.',
          'In most healthy adults, symptoms resolve within 5 to 7 days without treatment. Antibiotics are generally not recommended and may increase the risk of the most serious complication: hemolytic uremic syndrome, or HUS.',
          'HUS is a life-threatening condition in which STEC toxins damage the kidneys and cause the breakdown of red blood cells. It occurs in approximately 5 to 10 percent of STEC cases, most often in children under 5 and adults over 65. Symptoms include decreased urination, extreme fatigue, and pallor. HUS requires hospitalization and can result in kidney failure requiring dialysis. Long-term kidney damage occurs in some survivors. When a STEC recall involves an outbreak with confirmed HUS cases, this signals a particularly virulent strain or a high infectious dose in the affected product.',
        ],
      },
      {
        heading: 'Cooking eliminates the risk — with important caveats',
        body: [
          'Cooking ground beef to an internal temperature of 160°F kills E. coli O157:H7 and other STEC strains. This is why the primary risk from contaminated beef is from undercooked burgers — not from well-done ones. The USDA recommends using a meat thermometer rather than relying on color, because beef can appear brown before reaching a safe temperature.',
          'The caveat is ready-to-eat products. When E. coli recalls involve pre-made foods — salads, deli items, fresh-cut produce, raw flour, or snack foods — there is no cooking step that will make the product safe before consumption. For these items, the only safe response to a recall is to stop using the product. Do not assume that rinsing will adequately decontaminate produce involved in an E. coli recall.',
          'Raw flour is a frequently overlooked E. coli risk. Flour is a raw agricultural product made from wheat that has not been treated to kill pathogens. Eating raw cookie dough or cake batter, or handling raw flour and then touching your face, can cause infection. Several significant E. coli outbreaks have been linked to raw flour and flour-containing products like cookie dough.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current food recalls', href: '/food' },
      { label: 'What is Listeria?', href: '/articles/what-is-listeria-food-recalls' },
      { label: 'Salmonella food recalls explained', href: '/articles/salmonella-food-recalls-explained' },
      { label: 'Subscribe to food recall alerts', href: '/subscribe' },
    ],
  },
  {
    slug: 'how-cpsc-recalls-work',
    title: 'How Consumer Product Recalls Actually Work: From Complaint to CPSC Notice',
    metaDescription:
      'Most CPSC recalls start with consumer complaints, not government inspections. Learn how the CPSC process works, why it can take years, and what "voluntary" really means.',
    publishedDate: '2026-01-20',
    readingMinutes: 5,
    category: 'Consumer Products',
    intro:
      'The Consumer Product Safety Commission issues hundreds of recalls every year — for furniture that tips over, toys with hazardous magnets, baby products linked to infant deaths, and appliances that catch fire. But the process that leads from a consumer report to a formal recall is slower, more bureaucratic, and more dependent on corporate cooperation than most people realize. Understanding how CPSC recalls work helps you understand both why recalls happen and why dangerous products sometimes stay on the market longer than they should.',
    sections: [
      {
        heading: 'The CPSC\'s structure and authority',
        body: [
          'The Consumer Product Safety Commission is an independent federal agency created in 1972 to protect consumers from unreasonable risks of injury or death from consumer products. The CPSC has jurisdiction over roughly 15,000 types of consumer products — from toys and cribs to power tools, furniture, holiday lights, and household chemicals. It does not cover food, drugs, vehicles, firearms, tobacco, or medical devices, which are regulated by other agencies.',
          'The CPSC has two main recall mechanisms: voluntary recalls, in which the agency and a manufacturer or retailer agree to a recall action; and mandatory recalls, in which the CPSC can order a recall through a formal administrative process. In practice, the vast majority of recalls — more than 95 percent — are voluntary. Mandatory recalls are rare not because the CPSC lacks authority, but because the administrative process for a mandatory recall is lengthy, and companies typically agree to voluntary action to avoid it.',
        ],
      },
      {
        heading: 'How the CPSC learns about hazardous products',
        body: [
          'The CPSC receives information about potentially hazardous products from several sources. Consumers can file reports directly through SaferProducts.gov, the public product safety database. Retailers are required by law to report to the CPSC when they receive information that "reasonably supports the conclusion" that a product contains a defect that could create a substantial product hazard — a reporting requirement that many companies have historically interpreted narrowly.',
          'The CPSC also monitors death certificates, emergency room data, and news reports. The National Electronic Injury Surveillance System (NEISS) samples emergency department records from a network of hospitals to estimate injury rates for specific products. When NEISS data shows an unusual pattern of injuries associated with a product type, it can trigger a CPSC investigation.',
          'Consumer complaint volume matters significantly. A single report of a product failure may not trigger action, but a pattern of similar reports describing the same failure mode often does. This is why submitting reports to SaferProducts.gov is meaningful — the database is publicly searchable, and when multiple consumers describe the same problem independently, it creates a documented record that can accelerate a CPSC review.',
        ],
      },
      {
        heading: 'What "voluntary recall" really means',
        body: [
          'When a CPSC recall announcement says a company is "voluntarily" recalling a product "in cooperation with the CPSC," this phrasing can be misleading. In most cases, the recall is initiated after CPSC contact with the company — not because the company proactively identified a hazard and immediately notified the agency.',
          'The negotiation between the CPSC and a company typically involves the scope of the recall, the remedy offered to consumers (refund, replacement, or repair), and the consumer notification plan. The CPSC can press for a broader recall scope or a more generous remedy, but the agency\'s leverage is limited by the cost and duration of the mandatory recall alternative.',
          'The voluntary framework also means that recalls can take years from the time the CPSC first receives reports about a product to the date a recall is announced. The Fisher-Price Rock \'n Play Sleeper, recalled in 2019 after being linked to over 30 infant deaths, had been on the market for ten years and had generated consumer reports and media coverage before the recall was issued. This gap between emerging evidence and formal recall is one of the most criticized aspects of the CPSC system.',
        ],
      },
      {
        heading: 'What happens after a recall is announced',
        body: [
          'Once a recall is announced, the company is responsible for notifying consumers, which typically involves a press release, a notice on the company\'s website, notifications to retailers, and direct outreach to registered owners. The CPSC publishes the recall on cpsc.gov and through its social media accounts.',
          'Recall completion rates for consumer products are often low — many consumers never learn about a recall affecting a product they own, and some products are difficult to return or repair in a way that is convenient enough to motivate action. The CPSC monitors completion rates and can pressure companies to improve outreach, but the agency has limited tools to compel consumers to act.',
          'If you own a product and want to check whether it has been recalled, the CPSC\'s recall database at cpsc.gov/recalls is searchable by product type, brand, and hazard. You can also subscribe to CPSC recall email alerts filtered by product category.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse consumer product recalls', href: '/products' },
      { label: 'How to report an unsafe product', href: '/articles/how-to-report-unsafe-product' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Subscribe to product recall alerts', href: '/subscribe' },
    ],
  },
  {
    slug: 'drug-contamination-ndma-nitrosamines',
    title: 'NDMA and Nitrosamine Contamination: The Drug Recall Problem That Won\'t Go Away',
    metaDescription:
      'Since 2018, nitrosamine impurities including NDMA have triggered recalls of dozens of widely used medications. Learn what these compounds are, which drugs have been affected, and how to assess your risk.',
    publishedDate: '2026-02-05',
    readingMinutes: 6,
    category: 'Medication Safety',
    intro:
      'Starting in 2018, a string of recalls revealed that some of the most widely prescribed medications in the world had been contaminated with nitrosamine impurities — compounds classified as probable human carcinogens. The affected drugs included valsartan and losartan (blood pressure medications taken by millions), ranitidine (Zantac), and metformin (a first-line diabetes drug). Understanding what these compounds are, how they got into medications, and what the actual risk means for patients helps you make informed decisions if a drug you take is recalled for nitrosamine contamination.',
    sections: [
      {
        heading: 'What NDMA and nitrosamines are',
        body: [
          'N-nitrosodimethylamine, or NDMA, is a nitrosamine — a class of chemical compounds formed when secondary amines react with nitrous acid or other nitrosating agents under certain conditions. NDMA is classified by the International Agency for Research on Cancer (IARC) as a Group 2A carcinogen — meaning it is a probable human carcinogen based on evidence from animal studies and limited human epidemiological data.',
          'NDMA is not unique to pharmaceuticals. It occurs naturally in some foods — particularly cured and smoked meats, beer, and some cheeses — and can form in water treated with chloramines. The FDA has established that very low levels of NDMA (below 96 nanograms per day) are acceptable in drug products, based on a theoretical calculation of acceptable daily intake that reflects a one-in-100,000 lifetime cancer risk increase.',
          'The problem discovered in 2018 was that some medications contained NDMA at levels far above this acceptable daily intake threshold — in some cases hundreds of times higher — due to contamination introduced during manufacturing.',
        ],
      },
      {
        heading: 'How nitrosamines got into these drugs',
        body: [
          'The contamination pathways differ across affected drugs and are technically complex, but they share a common theme: manufacturing conditions that allowed nitrosamine formation as a byproduct of chemical synthesis or degradation.',
          'For valsartan and related blood pressure drugs (the sartan class), the contamination originated primarily at a Chinese manufacturer, Zhejiang Huahai, that had changed its manufacturing process in 2012. The new process created conditions that allowed NDMA to form during synthesis of the active pharmaceutical ingredient. Because the manufacturing change predated the realization that NDMA could form this way, and because routine finished-product testing did not specifically screen for NDMA, the contamination went undetected for years.',
          'Ranitidine (Zantac) was different: the contamination was inherent to the ranitidine molecule itself, which is chemically unstable and can degrade to form NDMA over time, particularly at elevated temperatures. This meant the problem was not specific to any manufacturer — all ranitidine products had this potential, and in 2020 the FDA withdrew approval for all ranitidine medications from the U.S. market entirely.',
          'Metformin contamination, discovered in 2020, involved NDMA formation during the manufacturing process in some production batches. Unlike ranitidine, metformin itself is not inherently unstable, but certain manufacturing conditions can generate NDMA as a process impurity.',
        ],
      },
      {
        heading: 'How to assess your personal risk',
        body: [
          'If a medication you take has been recalled for nitrosamine contamination, the most important step is to check whether your specific lot number is among the recalled lots. Not every batch of a medication is affected — recalls typically target specific production runs. Your pharmacy can identify the lot number of your dispensed medication and confirm whether it is included in a recall.',
          'For medications where your lot is recalled, do not abruptly stop a prescription medication without consulting your doctor or pharmacist, even if the contamination sounds alarming. For chronic conditions like hypertension and diabetes, the risks of untreated disease typically outweigh the theoretical cancer risk from a limited period of exposure to elevated NDMA — particularly because cancer risk from NDMA is cumulative and long-term, while the health consequences of stopping blood pressure or diabetes medication can be immediate.',
          'The FDA\'s public risk communications for NDMA recalls have consistently communicated that the increased cancer risk from short-term exposure — even at elevated levels — is low in absolute terms. The agency\'s statements typically note that exposure to the drug before the recall is identified is unlikely to cause harm but that continued long-term exposure above the acceptable daily intake threshold should be avoided. This framing is the right one to use when thinking about your own exposure.',
        ],
      },
      {
        heading: 'Why this problem persists',
        body: [
          'Despite years of regulatory attention since 2018, nitrosamine contamination in drugs remains an ongoing issue. The FDA has required pharmaceutical manufacturers to evaluate all drug products for potential nitrosamine impurities, and new manufacturing guidelines have been issued. But the analytical chemistry of detecting nitrosamines at trace levels in complex drug matrices is challenging, and the number of possible nitrosamine impurities (there are many besides NDMA) creates a large testing burden.',
          'New nitrosamine-related recalls continue to emerge as manufacturers identify previously uncharacterized impurities in their products. The FDA maintains a running list of drug product recalls related to nitrosamine contamination at its website, which is updated as new recalls are announced. If you take multiple prescription medications chronically, periodically checking whether any have been the subject of nitrosamine recalls is a reasonable precaution.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current medication recalls', href: '/medications' },
      { label: 'When your medication is recalled', href: '/articles/medication-recall-lot-numbers' },
      { label: 'Subscribe to medication recall alerts', href: '/subscribe' },
      { label: 'Medication recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'recall-classes-explained',
    title: 'Class I, Class II, Class III: What Recall Classifications Actually Mean',
    metaDescription:
      'Not all recalls are equally serious. The FDA and CPSC use a three-class system to indicate severity. Here is what each class means, which agency uses which system, and why classification matters.',
    publishedDate: '2026-02-15',
    readingMinutes: 4,
    category: 'Consumer Safety',
    intro:
      'When you see a recall described as "Class I" or "Class II," you are looking at a classification system that conveys how serious the agency considers the potential health risk to be. The system is not uniform across agencies — the FDA, USDA, and CPSC each use slightly different frameworks — and understanding what these labels mean helps you prioritize which recalls deserve immediate attention versus which represent lower-probability risks.',
    sections: [
      {
        heading: 'The FDA classification system',
        body: [
          'The FDA uses a three-class system for the recalls it oversees — food, drugs, medical devices, and cosmetics. Class I is the most serious: the agency has determined there is a reasonable probability that using or being exposed to the product will cause serious adverse health consequences or death. Examples include food contaminated with Listeria monocytogenes or E. coli O157:H7, drugs with incorrect potency that could cause life-threatening dosing errors, and medical devices with defects that could directly cause patient harm.',
          'Class II recalls involve products that may cause temporary adverse health consequences, or where the probability of serious harm is remote. An undeclared allergen in a product is often a Class II recall if the allergen involved is lower-risk; a potency variation in a drug that is unlikely to cause immediate harm may also fall into Class II.',
          'Class III recalls are the least serious — products that are unlikely to cause any adverse health consequences but that violate FDA regulations. These may involve labeling violations, minor manufacturing deviations, or technical regulatory non-compliance without direct health implications.',
        ],
      },
      {
        heading: 'The USDA system',
        body: [
          'The USDA Food Safety and Inspection Service uses the same three-class framework as the FDA, with the same definitions. Class I meat and poultry recalls — contaminated with Listeria, Salmonella, or E. coli, or containing undeclared allergens in high-risk categories — represent imminent health hazards. Class II involves remote probability of adverse effects. Class III is regulatory non-compliance with no direct safety consequence.',
          'USDA recalls almost always fall into Class I because the products involved are ready-to-eat meat and poultry where contamination with a pathogen at any level represents a genuine hazard. Class III USDA recalls are uncommon.',
        ],
      },
      {
        heading: 'CPSC and vehicle recalls: different frameworks',
        body: [
          'The CPSC does not use the Class I/II/III framework. Consumer product recalls are categorized by hazard type — fire hazard, choking hazard, fall hazard, electrical shock hazard, entrapment hazard, and so on — rather than a numerical severity class. Seriousness is conveyed by the nature of the hazard and the specific incidents or injuries reported.',
          'NHTSA vehicle recalls also do not use the FDA class system. NHTSA categorizes recalls by the nature of the safety defect — airbag, fuel system, brakes, steering, tires, and others — and the formal recall notice describes the specific failure mode and potential consequences. NHTSA uses a separate "safety risk" language in its communications that ranges from "unreasonable risk" to defects that can cause crashes or fires.',
        ],
      },
      {
        heading: 'Why classification matters for your response',
        body: [
          'Class I food and drug recalls warrant immediate action: stop using the product, check your lot numbers, and take the remediation steps in the official notice. These recalls represent hazards that the responsible agency has formally determined could cause serious harm.',
          'Class II recalls call for attention and a check of your specific lot, but the risk calculus is different. If you have already consumed some of a recalled food and feel well, the Class II designation suggests the risk was likely lower than a Class I scenario. For medications, a Class II recall may mean the agency recommends switching products at your next refill rather than stopping immediately.',
          'Class III recalls generally do not require immediate action but may require you to return a product or be aware of a labeling issue. They represent regulatory failures rather than imminent safety hazards.',
          'When a recall notice does not specify a class — which is common for CPSC and NHTSA recalls — assess severity from the specific hazard described. "Risk of fire" or "can cause vehicle to lose control" warrant the same immediate response as a Class I designation.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Recall glossary', href: '/glossary' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Recall FAQ', href: '/faq' },
      { label: 'Browse all recalls', href: '/' },
    ],
  },
  {
    slug: 'returning-recalled-food-for-refund',
    title: 'How to Return Recalled Food and Get Your Money Back',
    metaDescription:
      'Returning recalled food is usually straightforward even without a receipt. Learn how the refund process works at grocery stores, what to do with product you\'ve already opened, and how online orders are handled.',
    publishedDate: '2026-03-01',
    readingMinutes: 4,
    category: 'Food Safety',
    intro:
      'One of the most common questions after a food recall is simple: can I actually get my money back? The answer is almost always yes. Grocery stores have well-established processes for handling recalled products, and most will refund you even without a receipt, even for an opened package, even for a product bought weeks ago. Here is how the process works and what to expect.',
    sections: [
      {
        heading: 'The basics: what stores are required to do',
        body: [
          'When a food recall is issued, grocery stores and other retailers are required to remove the affected product from their shelves and notify consumers. Large chains with loyalty card programs often identify customers who purchased the recalled product and send email or phone notifications proactively. Stores post notices near where the product was displayed and, in some cases, at customer service.',
          'Retailers are not legally required to accept returns of recalled products in the same way that manufacturers are required to repair recalled vehicles, but in practice every major U.S. grocery chain accepts returns of recalled items. The retailer is typically reimbursed by the manufacturer or distributor, so there is no financial barrier from the store\'s perspective.',
        ],
      },
      {
        heading: 'What you need to bring',
        body: [
          'Most grocery stores do not require a receipt for recalled food returns. Because the specific lot numbers and UPC codes in the recall notice match unique products that the store stocked, customer service staff can identify that the product you have is one subject to the recall without a purchase record. Bring the product if you have it, or the packaging with the lot number and best-by date visible.',
          'If you have already opened or partially consumed the product, you can typically still get a refund. Stores understand that people open food they bought, and the recall notice does not require the product to be intact. Bring what you have, or just the packaging.',
          'If you purchased the item multiple times and have multiple packages, you can usually return all of them in a single trip. Keep a note of the lot numbers to compare against the recall notice before going to the store.',
        ],
      },
      {
        heading: 'Online orders and grocery delivery',
        body: [
          'Amazon, Walmart online, and similar retailers proactively email customers when a recalled product they ordered is identified in their purchase history. The email typically includes a refund or replacement option that does not require returning the product. For Amazon orders, a refund is usually processed automatically or with a single click in your orders page.',
          'Grocery delivery services (Instacart, Amazon Fresh, Kroger delivery) handle recalls similarly — you may receive an email or app notification, and credits or refunds are typically applied without requiring product return.',
          'If you ordered a recalled product online and did not receive a notification, check your order history and compare the product\'s UPC and lot number against the recall notice. Contact the retailer\'s customer service directly if your lot is affected.',
        ],
      },
      {
        heading: 'When the recall is for a restaurant or food service product',
        body: [
          'Some food recalls involve products sold primarily to restaurants, schools, or institutions rather than directly to consumers. In these cases, the public recall notice may describe a product you would not buy at a grocery store — a bulk ingredient, a food service package size, or an item with a restaurant-only label.',
          'If you have eaten at a restaurant that may have served the recalled product, you cannot return anything, but you can monitor for symptoms. If the recall involves a pathogen like Listeria or E. coli and you are in a high-risk category (pregnant, elderly, immunocompromised), consider mentioning the exposure to your healthcare provider, particularly if you develop symptoms consistent with foodborne illness.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current food recalls', href: '/food' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Subscribe to food recall alerts', href: '/subscribe' },
      { label: 'Food recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'tire-and-wheel-recalls-what-to-know',
    title: 'Tire and Wheel Recalls: What to Know and Why They Are Taken Seriously',
    metaDescription:
      'Tire and wheel recalls are among the most safety-critical vehicle recalls. Learn what causes them, how to check whether your tires are affected, and what the repair process looks like.',
    publishedDate: '2026-03-15',
    readingMinutes: 5,
    category: 'Vehicle Safety',
    intro:
      'Of all vehicle components, tires are one of the few where a sudden failure at highway speed can cause an immediate loss of vehicle control with little warning. Tire and wheel recalls are relatively uncommon compared to the volume of other vehicle recalls, but when they occur, NHTSA tends to treat them as high priority. Understanding what drives tire recalls and how to respond is worthwhile for any driver.',
    sections: [
      {
        heading: 'What causes tire recalls',
        body: [
          'Most tire recalls stem from manufacturing defects in specific production runs rather than design flaws. Common manufacturing issues include belt separations — where the steel belts embedded in the tire separate from the surrounding rubber, causing sudden blowout — and bead failures, where the bead that seals the tire to the wheel rim detaches under load.',
          'Tread separation is one of the most dangerous failure modes and was at the center of the Firestone/Ford Explorer recalls of 2000, which involved 14.4 million tires linked to hundreds of fatalities. The separations were influenced by a combination of manufacturing changes at the Decatur, Illinois plant, Firestone\'s recommended tire pressure guidance, and the Ford Explorer\'s higher center of gravity, which amplified the consequences of sudden tread loss.',
          'Tire recalls can also be triggered by compound issues — problems with the rubber formulation that affect durability — or labeling errors, such as incorrect load rating or speed rating markings that could lead consumers to operate tires outside their safe operating parameters.',
        ],
      },
      {
        heading: 'How to check if your tires are recalled',
        body: [
          'Tires are identified by their DOT code — a series of characters molded into the sidewall that identifies the manufacturer, plant, tire size, and the week and year of manufacture. The DOT code begins with "DOT" and ends with a four-digit number representing the week and year of manufacture (e.g., "2419" means the 24th week of 2019).',
          'NHTSA tire recalls specify the affected DOT code ranges. You can check your specific tires against a recall at nhtsa.gov/recalls. Enter your vehicle\'s VIN to find vehicle-level recalls, or search by tire brand and model separately to check aftermarket tires. If you have replaced your original tires with a different brand, check the replacement tires separately.',
          'Tire recalls sometimes affect only specific production plants or date ranges within a model line. Two tires of the same brand, model, and size bought at different times may have different DOT code ranges — one recalled, one not. Check each tire individually.',
        ],
      },
      {
        heading: 'The repair process',
        body: [
          'Unlike most vehicle recalls, which are handled at authorized dealerships, tire recalls typically go through the tire retailer network or the manufacturer\'s own service centers. Goodyear recalls, for example, may be handled at Goodyear retail locations as well as other participating tire dealers.',
          'The remedy in a tire recall is almost always replacement rather than repair. Tires with structural defects cannot be patched or balanced to fix the underlying issue. The manufacturer provides replacement tires to authorized retailers, and the swap is performed at no cost to the consumer.',
          'If your vehicle is under a recall because the manufacturer installed defective original equipment tires, the recall may be handled at the dealership. In this case, the procedure is similar to any vehicle recall: contact a franchised dealer, provide your VIN, confirm the recall applies to your vehicle, and schedule a replacement appointment.',
        ],
      },
      {
        heading: 'What to do while you wait',
        body: [
          'If you confirm your tires are under a recall and cannot immediately get a replacement appointment, read the recall notice carefully for interim guidance. For severe defects, NHTSA may advise against highway driving or driving above certain speeds until the tires are replaced. These interim instructions should be followed.',
          'Inspect your tires visually for bulges, sidewall irregularities, or visible belt lines showing through the rubber. These are signs of structural failure and indicate the tire should not be driven on regardless of recall status. Any tire showing these signs should be replaced immediately.',
          'Check your tire pressure regularly, particularly during a wait for a recall repair. Properly inflated tires are more resistant to the stress concentrations that can accelerate defect progression. Your vehicle\'s recommended tire pressure is on the sticker in the driver\'s door jamb or in the owner\'s manual — not on the tire sidewall, which shows the maximum pressure.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Check your VIN for open recalls', href: '/vin-lookup' },
      { label: 'Browse current vehicle recalls', href: '/vehicles' },
      { label: 'How vehicle recall repairs work', href: '/articles/vehicle-recall-repairs-how-they-work' },
      { label: 'Vehicle recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'electronics-fire-hazard-recalls',
    title: 'Electronics and Fire Hazard Recalls: What to Know About Batteries, Chargers, and Overheating',
    metaDescription:
      'Fire hazard recalls for electronics have become more common as lithium battery products proliferate. Learn what causes these hazards, which products are most often recalled, and what to do when your device is involved.',
    publishedDate: '2026-03-28',
    readingMinutes: 5,
    category: 'Consumer Products',
    intro:
      'Electronics fire hazard recalls — for laptops, e-bikes, hoverboards, power banks, and hundreds of other products — have become significantly more common over the past decade as lithium-ion batteries have spread into nearly every category of consumer electronics. The consequences of a lithium battery fire are not the same as a small electrical spark: thermal runaway in a lithium cell can produce intense heat, toxic gases, and fires that are difficult to extinguish with conventional methods. Understanding what causes these hazards and what to do when your device is recalled can prevent serious property damage and injury.',
    sections: [
      {
        heading: 'Lithium battery thermal runaway',
        body: [
          'The hazard in most electronics fire recalls is thermal runaway — a self-reinforcing chain reaction inside a lithium-ion or lithium-polymer battery cell. When a cell is overcharged, physically damaged, manufactured with a defect, or exposed to high heat, the internal chemistry can destabilize. This raises the cell temperature further, accelerating the chemical reaction, which raises the temperature more. Once thermal runaway begins, it can produce temperatures exceeding 1,000°F and may cause the cell to vent flammable gases, catch fire, or explode.',
          'Thermal runaway in one cell can propagate to adjacent cells in a battery pack, which is why a multi-cell battery (as found in laptops, e-bikes, and electric scooters) can produce a much larger fire than a single-cell device like a phone.',
          'The products most frequently involved in fire hazard recalls are e-bikes and e-scooters (which use large-capacity battery packs), power banks and portable chargers (which are often made with off-brand cells that may not meet quality standards), hoverboards (subject to a major wave of recalls in 2016), and laptops (particularly older models or non-OEM replacement batteries).',
        ],
      },
      {
        heading: 'How these recalls are identified',
        body: [
          'Electronics fire hazard recalls most often begin with incident reports — fires, burns, or property damage reported to the CPSC through SaferProducts.gov or through the retailer. When multiple reports describe the same failure in the same product, the CPSC investigates.',
          'For some product categories, the CPSC proactively screens products through its Import Safety program and lab testing. Products that fail to meet flammability standards or that show abnormal thermal behavior in testing can be recalled before any consumer incidents occur. This is less common than incident-triggered recalls, but it does happen.',
          'Media reports and social media have also become significant inputs — viral videos of a burning e-bike or exploding hoverboard can accelerate the CPSC\'s timeline for investigating a product even before formal incident reports accumulate.',
        ],
      },
      {
        heading: 'Why third-party and counterfeit batteries are higher risk',
        body: [
          'A significant proportion of electronics fire recalls involve third-party replacement batteries and chargers rather than original manufacturer equipment. Off-brand batteries sold as compatible replacements for laptops, phones, and tools may use cells that do not meet the quality or safety standards of the original manufacturer and may lack the battery management circuitry that prevents overcharging.',
          'Counterfeit chargers — particularly for phones and laptops — are another known hazard. Genuine Apple, Samsung, and other OEM chargers include safety circuitry that manages current and voltage precisely. Counterfeit chargers often omit this circuitry to reduce cost, creating overcharging risks.',
          'The practical guidance is to use OEM chargers and batteries where possible, and to buy replacements from established retailers with return policies rather than lowest-price marketplace listings, where counterfeit and substandard products are more common.',
        ],
      },
      {
        heading: 'What to do when your device is recalled',
        body: [
          'Stop using the recalled product immediately and do not charge it. If you must store it temporarily before returning it, keep it away from flammable materials and, if possible, store it outdoors or in a non-attached garage rather than inside living spaces.',
          'Do not attempt to dispose of lithium battery products in regular trash or recycling bins — damaged or defective lithium batteries are a fire hazard in waste facilities. The recall notice will specify how to return or dispose of the product. Most recalls provide a prepaid shipping label, a retailer return option, or access to a drop-off location.',
          'If a recalled device has already caused a fire or injury, report it to the CPSC at SaferProducts.gov and document the incident with photos before cleanup. Your report contributes to the incident data that informs future enforcement actions.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse consumer product recalls', href: '/products' },
      { label: 'How to report an unsafe product', href: '/articles/how-to-report-unsafe-product' },
      { label: 'How CPSC recalls work', href: '/articles/how-cpsc-recalls-work' },
      { label: 'Subscribe to product recall alerts', href: '/subscribe' },
    ],
  },
  {
    slug: 'takata-airbag-recall-history',
    title: 'The Takata Airbag Recall: The Largest Safety Recall in U.S. History',
    metaDescription:
      'The Takata airbag recall affected 67 million vehicles from 19 manufacturers and is still being completed. Learn what the defect is, why it took so long to resolve, and how to check if your car is affected.',
    publishedDate: '2026-04-05',
    readingMinutes: 6,
    category: 'Vehicle Safety',
    intro:
      'The Takata airbag inflator recall is the largest safety recall in the history of the automotive industry. At its peak, it involved approximately 67 million vehicles manufactured by 19 different automakers — covering model years from the early 2000s to 2019. The defect has been linked to at least 27 deaths in the United States and hundreds of injuries worldwide. More than a decade after the first recalls were issued and years after Takata filed for bankruptcy, vehicles with unrepaired Takata inflators remain on the road. If your vehicle was manufactured between approximately 2002 and 2015 and you have not had the airbags replaced, there is a real possibility you are affected.',
    sections: [
      {
        heading: 'What the defect is',
        body: [
          'Takata airbag inflators use ammonium nitrate as a propellant — the chemical that detonates to rapidly inflate the airbag in a crash. Over time, ammonium nitrate can degrade when exposed to heat and humidity fluctuations, causing it to burn faster than intended when the inflator deploys. Instead of a controlled inflation, the inflator can rupture explosively, sending metal shrapnel into the vehicle cabin at high velocity.',
          'The failure pattern is not a manufacturing defect in the traditional sense — the inflators were produced to specification, but the specification turned out to be inadequate for the range of environmental conditions the inflators would experience over their service lives. Inflators in vehicles sold in warm, humid climates or that were regularly exposed to significant temperature swings aged faster, making them more prone to rupture.',
          'The particular danger is that the failure can occur in relatively minor crashes — ones that would otherwise be non-life-threatening. In multiple cases, drivers and passengers were killed or severely injured by shrapnel from an exploding inflator in collisions that the vehicle itself survived with limited damage.',
        ],
      },
      {
        heading: 'Why the recall took so long to resolve',
        body: [
          'The Takata recall exposed severe weaknesses in both the vehicle recall system and the automotive parts supply chain. Several factors combined to make the remedy extraordinarily slow.',
          'First, the scale was unprecedented. Replacing 67 million airbag inflators required manufacturing tens of millions of replacement parts — a production challenge that took years to ramp up. At the peak of the recall, replacement inflators were allocated among automakers based on risk prioritization, meaning that vehicles in hot, humid states received parts first.',
          'Second, Takata\'s bankruptcy in 2017 created significant uncertainty about who would fund the ongoing recall remedies. NHTSA negotiated with successor entities and individual automakers to ensure repair funding continued, but the legal complexity slowed processes.',
          'Third, consumer compliance was lower than in typical vehicle recalls. Because the defect is not visible and the vehicle appears to function normally, many owners either did not receive notice or did not treat the recall with sufficient urgency. Thousands of drivers continued operating vehicles with unrepaired Takata inflators years after being notified.',
        ],
      },
      {
        heading: 'How to check if your vehicle is affected',
        body: [
          'Enter your vehicle\'s VIN at nhtsa.gov/recalls. The database will show whether your specific vehicle has any open Takata-related recall campaigns. Note that the same make, model, and year can have both affected and unaffected vehicles depending on which Takata inflator variant was installed — checking by VIN is more accurate than checking by model year alone.',
          'If your vehicle has an open Takata recall and you have not had the inflators replaced, contact your dealership to schedule the free repair. The replacement inflators use an alternative propellant formulation that does not have the same humidity degradation problem. All Takata recall repairs are free to the vehicle owner regardless of the vehicle\'s age, mileage, or warranty status.',
          'If you are considering purchasing a used vehicle, a Takata VIN check should be one of the first steps. The repair can sometimes be scheduled before purchase, or factored into your negotiation if you need to schedule it yourself after purchase.',
        ],
      },
      {
        heading: 'The status of the recall today',
        body: [
          'As of mid-2026, the Takata recall is largely but not fully complete. NHTSA estimates that millions of vehicles with open Takata recalls remain unrepaired, concentrated in older vehicles that have changed ownership multiple times and whose current owners may not have received notification.',
          'NHTSA has issued do-not-drive orders for a subset of particularly high-risk inflators — typically older inflators in vehicles registered in high-humidity states. These vehicles should not be driven until the inflators are replaced. The specific models and production years subject to do-not-drive orders are listed in NHTSA\'s recall database.',
          'Automakers and NHTSA continue to track unrepaired vehicles and send periodic reminder notices. If you receive a recall notice in the mail for a Takata-related campaign, do not discard it — the free repair remains available and the risk from delaying is not theoretical.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Check your VIN for open recalls', href: '/vin-lookup' },
      { label: 'How vehicle recall repairs work', href: '/articles/vehicle-recall-repairs-how-they-work' },
      { label: 'Browse current vehicle recalls', href: '/vehicles' },
      { label: 'How to check VIN for recalls', href: '/articles/how-to-check-vin-for-recalls' },
    ],
  },
  {
    slug: 'mold-and-fungal-food-recalls',
    title: 'Mold and Fungal Contamination in Food Recalls: When to Worry and When Not To',
    metaDescription:
      'Not all mold in food is recalled — but mycotoxin contamination is a serious food safety problem. Learn which molds trigger recalls, what mycotoxins are, and how to evaluate the risk.',
    publishedDate: '2026-04-18',
    readingMinutes: 5,
    category: 'Food Safety',
    intro:
      'Mold in food is something most people encounter without any lasting harm — a fuzzy patch on bread, a bit of visible growth on cheese or fruit. Most of this is unpleasant but not dangerous. But some mold contamination in food is serious enough to prompt recalls, and the reason is not the visible mold itself but invisible chemical compounds called mycotoxins that certain molds produce. Understanding the distinction helps you make sense of why some food recalls involve mold and why the risk is sometimes significant.',
    sections: [
      {
        heading: 'The difference between mold and mycotoxins',
        body: [
          'Mold is a type of fungus that grows in visible colonies. Many molds are harmless to humans; some are deliberately used in food production (the molds used to make brie and blue cheese are intentional). The food safety concern with mold is not usually the mold organism itself but mycotoxins — toxic chemical compounds produced by certain mold species under specific growth conditions.',
          'Mycotoxins are problematic because they are not destroyed by cooking. If a grain, nut, or spice has been contaminated by a mycotoxin-producing mold, processing or cooking the food does not render it safe. This is why mycotoxin contamination can affect processed foods made from contaminated raw materials — the toxin persists through manufacturing.',
          'The most commonly encountered mycotoxins in food recalls are aflatoxins (produced by Aspergillus species, typically in nuts, grains, corn, and spices), ochratoxin A (produced by Aspergillus and Penicillium species, found in cereals, coffee, and dried fruits), and patulin (produced by Penicillium and other molds, found in apple products).',
        ],
      },
      {
        heading: 'Which products are most often recalled for mold',
        body: [
          'Spices and dried herbs — particularly paprika, chili powder, cumin, and black pepper — are among the most common products recalled for aflatoxin or other mycotoxin contamination. The molds that produce aflatoxins thrive in the warm, humid conditions common in spice-growing regions, and inadequate drying or storage allows contamination to develop.',
          'Tree nuts and peanuts — particularly pistachios, almonds, and peanut butter — are also a recurrent category for aflatoxin recalls. The FDA sets strict maximum levels for aflatoxin in peanuts and tree nuts because aflatoxin B1 is a potent liver carcinogen.',
          'Apple juice, apple cider, and apple-based products have been recalled for patulin contamination. Patulin is produced by Penicillium expansum, the mold that causes brown rot in apples, and can concentrate in juice made from damaged or rotting fruit. The FDA has set an action level of 50 parts per billion for patulin in apple juice.',
        ],
      },
      {
        heading: 'The visible mold problem in bakery and produce',
        body: [
          'Visible mold in bread, produce, or other perishable foods typically does not trigger formal FDA recalls unless a specific pathogen or toxin is identified. The common guidance — discard moldy bread entirely, cut visible mold off hard cheese with at least an inch margin — addresses the risk of toxin migration in soft versus hard foods.',
          'Soft foods with visible mold should be discarded entirely: bread, soft cheeses, yogurt, soft fruits, and cooked foods. Mold hyphae can penetrate soft foods before visible growth appears on the surface, and mycotoxin contamination can extend beyond the visible growth.',
          'Hard cheeses and hard vegetables with small surface mold spots can generally have the affected portion cut away with a significant margin, as mold penetration is limited by the dense texture. However, if mold is visible throughout a product or if the product smells strongly of mold, discard it entirely.',
        ],
      },
      {
        heading: 'What to do when a food is recalled for mold or mycotoxins',
        body: [
          'Check the lot numbers, best-by dates, and UPC codes on your product against the recall notice. Because mycotoxin contamination typically originates in a specific ingredient batch or production run, not every unit of a product is affected.',
          'Do not taste the product to check whether it seems moldy. Mycotoxin contamination is not detectable by taste or smell — contaminated products may appear and smell completely normal. If your lot is recalled, dispose of the product or return it to the store.',
          'Acute toxicity from a single exposure to aflatoxin at levels typically found in recalled foods is unlikely in healthy adults. The primary concern with mycotoxin contamination is chronic exposure over time. This means that eating recalled peanut butter once before the recall was announced is unlikely to cause acute harm, but you should still discard or return remaining product and switch to an unaffected brand.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Browse current food recalls', href: '/food' },
      { label: 'What is Listeria?', href: '/articles/what-is-listeria-food-recalls' },
      { label: 'Subscribe to food recall alerts', href: '/subscribe' },
      { label: 'Food recall FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'track-all-your-product-recalls',
    title: 'How to Track Recalls on Everything You Own',
    metaDescription:
      'You own dozens of products that could be recalled at any time. Here is a practical system for staying on top of recalls across vehicles, appliances, electronics, food, and medications without spending hours checking databases.',
    publishedDate: '2026-05-02',
    readingMinutes: 4,
    category: 'Consumer Safety',
    intro:
      'Most people find out about recalls by accident — a news headline, a neighbor\'s mention, an email they almost deleted. This is not a reliable system for a household with vehicles, appliances, electronics, baby gear, and pantry staples that could all potentially be recalled. A five-minute setup can replace this accidental awareness with a reliable one.',
    sections: [
      {
        heading: 'Set up category-specific email alerts',
        body: [
          'The most effective baseline step is subscribing to recall alerts from the agencies with jurisdiction over the products you care about most. The FDA sends email alerts for food, drug, and medical device recalls — subscribe at fda.gov/safety/recalls. The CPSC sends consumer product recall alerts — subscribe at cpsc.gov/recalls. NHTSA sends vehicle safety recall alerts — subscribe at nhtsa.gov/recalls.',
          'Recall Radar aggregates all of these sources into a single daily or weekly digest filtered by the categories you choose. If you subscribe to Recall Radar\'s food and medication alerts, for example, you receive a single email that covers all FDA and USDA recalls in those categories rather than managing subscriptions to multiple government agencies.',
          'The key is to set up these subscriptions and not ignore them. Create a dedicated label or folder in your email for recall alerts and check it at least weekly. Recall notices that arrive during a busy week still matter when you get to them.',
        ],
      },
      {
        heading: 'Register your products',
        body: [
          'For vehicles, your registration with the DMV already connects your VIN to your address for recall notifications. Make sure your vehicle registration address is current when you move.',
          'For consumer products — particularly baby gear, major appliances, power tools, and electronics — look for a registration card in the packaging or visit the manufacturer\'s website. Registration takes five minutes and means the manufacturer can contact you directly if a recall is issued. This is especially important for products used by children, where the consequences of a missed recall can be severe.',
          'Keep a simple record of the make, model, and serial numbers of major appliances and electronics in a notes app or spreadsheet. When a recall is announced, you can quickly check whether your specific model is affected rather than searching through packaging you may have discarded.',
        ],
      },
      {
        heading: 'Check your VIN annually',
        body: [
          'Vehicle recalls accumulate over time. A car that had no open recalls when you checked a year ago may have one now. Checking your VIN at nhtsa.gov/recalls once a year — or whenever you buy or sell a vehicle — takes 30 seconds and tells you the current status of all outstanding recall campaigns for that specific vehicle.',
          'If you own multiple vehicles, check each one separately. The same make and model year can have different recall histories depending on assembly plant, production date, and equipment options.',
          'Before buying a used vehicle, run a VIN recall check as a standard part of your due diligence. Open recalls transfer to the new owner, and the free repair is available to you — but you should understand what you are buying and whether a repair appointment needs to be scheduled.',
        ],
      },
      {
        heading: 'Check medications when you refill',
        body: [
          'Medication recalls can affect the specific lot you have at home. Your pharmacist tracks lot numbers and can check whether your current dispensed lot is under recall. Many pharmacies proactively notify patients when a recalled lot has been dispensed to them, but not all do.',
          'If you take prescription medications chronically, ask your pharmacist at each refill whether the current lot has any active recalls. For over-the-counter medications you store in bulk — pain relievers, antihistamines, cold medicine — check the FDA recall database periodically, particularly for any product you have bought in large quantities.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Subscribe to recall alerts', href: '/subscribe' },
      { label: 'VIN lookup for vehicle recalls', href: '/vin-lookup' },
      { label: 'Why people never hear about recalls', href: '/articles/why-people-never-hear-about-recalls' },
      { label: 'How to register your products', href: '/safety-guide#register-products' },
    ],
  },
  {
    slug: 'how-to-read-a-recall-notice',
    title: 'How to Read a Recall Notice: Lot Numbers, UPCs, and Date Codes Explained',
    metaDescription:
      'Recall notices are full of numbers and codes that determine whether your specific product is affected. Learn how to find and match lot numbers, UPCs, best-by dates, and model codes before you throw anything away.',
    publishedDate: '2026-06-12',
    readingMinutes: 6,
    category: 'Consumer Safety',
    intro:
      'Most people who read a recall notice skip straight to the brand name, see it matches something in their pantry, and throw the product away — or they assume they\'re fine without checking the details. Both reactions are often wrong. A recall notice lists specific identifiers — lot numbers, UPC codes, best-by dates, model numbers, serial numbers — because recalls almost never cover an entire brand\'s product line. Knowing how to read those identifiers can save you from throwing away perfectly safe food, or from continuing to use a product that is actually recalled.',
    sections: [
      {
        heading: 'Why recalls use identifying codes instead of just naming the product',
        body: [
          'When a manufacturer or government agency identifies a safety problem, it is almost always traced to a specific production run — a particular batch made on a particular day in a particular facility. A food company might produce 50,000 cases of salsa per week. If contamination is found in one production run, the recall covers only those specific cases, not the entire product line.',
          'This specificity is intentional and consumer-protective, even if it makes recalls harder to act on quickly. Blanket recalls of entire product lines would waste enormous amounts of safe food and cost manufacturers and insurers billions. The tradeoff is that consumers have to do a bit of detective work to determine whether their specific product is affected.',
          'Understanding what each type of identifier means and where to find it on your product is the only way to know for certain whether you need to act.',
        ],
      },
      {
        heading: 'Lot numbers: the most common food recall identifier',
        body: [
          'A lot number (also called a lot code, batch number, or production code) identifies a specific manufacturing batch. For food products, lot numbers are usually printed or embossed on the packaging — often on the bottom of a can, the side crimp of a bag, or the end flap of a cardboard box. They may also appear near the best-by date.',
          'Lot numbers are not standardized across manufacturers. A lot number might look like "A4358B2," "LOT 24358," or just a series of digits with no label at all. The recall notice will show you exactly what the affected lot numbers look like — including any prefixes, dashes, or letter codes that are part of the identifier.',
          'If a recall lists multiple lot numbers, check your product against each one. Sometimes a recall covers a range (for example, all lots beginning with "L24" through "L31"), and the notice will explain how to read the range.',
          'If your product has a lot number not listed in the recall, it is not affected by that specific recall — even if it is the same product from the same brand. Keep it. You do not need to throw away food that matches the brand but not the specific lot.',
        ],
      },
      {
        heading: 'UPC codes: the barcode number on the package',
        body: [
          'A Universal Product Code (UPC) is the 12-digit number printed below the barcode on most packaged food and consumer products. In recalls, UPC codes are used to narrow down which specific SKUs (individual product variants) are affected. A manufacturer may sell a product in multiple package sizes — 8 oz, 16 oz, and 32 oz — each with a different UPC, and only one size might be recalled.',
          'To read a UPC, look for the number printed beneath the vertical bars of the barcode. The number typically starts with a manufacturer prefix, followed by a product code, and ends with a check digit. You do not need to decode the structure — just match the full 12-digit number against what is listed in the recall notice.',
          'Some recall notices list UPCs with leading zeros that may not appear on older packaging. If the notice shows "00012345678901" and your package shows "12345678901," these are the same number — the leading zeros are sometimes added for electronic data systems.',
        ],
      },
      {
        heading: 'Best-by, use-by, and sell-by dates',
        body: [
          'Best-by and use-by dates are not safety guarantees on their own, but they are frequently used in recall notices to narrow down the affected production window. If a recall covers products with a best-by date of January 15 through March 22, 2025, a product with a best-by date of March 23 is not included — even if the lot number is otherwise similar.',
          'Date code formats vary by manufacturer. Common formats include MM/DD/YY, DD/MM/YY, and YYYYMMDD. If you cannot determine the format from the date alone, look at the recall notice — it will typically spell out the format explicitly ("best by JAN 15 2025") to avoid ambiguity.',
          'Some products use Julian dates, which represent the day of the year as a number from 001 to 365. A Julian date of "026" means the 26th day of the year, or January 26. Julian dates are more common on commercial and institutional packaging than consumer retail packaging, but they do appear occasionally.',
          'When both a lot number and a best-by date are listed in a recall, both must match for your product to be affected. A product with the right lot number but the wrong date, or vice versa, is generally not included.',
        ],
      },
      {
        heading: 'Model numbers and serial numbers for consumer products',
        body: [
          'For consumer products — electronics, appliances, furniture, toys, and similar items — recalls use model numbers and, in some cases, serial numbers to identify affected units. Model numbers identify a product design or configuration; serial numbers identify a specific individual unit.',
          'Model numbers are typically found on a label on the back or bottom of a product, in the product\'s settings or about screen, or in the original documentation. For large appliances, the label is often inside a door or drawer. For power tools, it is usually on the housing near the motor.',
          'Serial numbers narrow recalls further when only certain production runs of a model are affected. A recall might cover a specific model but only units with serial numbers in a given range — for example, "Model XR-200, serial numbers 1000000 through 1249999." Units outside the serial number range are not recalled, even if they are the same model.',
          'When a CPSC product recall notice lists a model number, you can also look it up directly at SaferProducts.gov. The recall page usually includes photos of the product and the label location to help you confirm whether your unit is the right one.',
        ],
      },
      {
        heading: 'VIN numbers for vehicle recalls',
        body: [
          'Vehicle recalls use the Vehicle Identification Number (VIN) — a 17-character alphanumeric code unique to each vehicle — to determine whether a specific car, truck, or SUV is affected. Unlike other product recalls, vehicle recall notices typically do not list specific serial ranges in the notice itself. Instead, NHTSA maintains a lookup tool at nhtsa.gov/recalls where you enter your VIN to get a real-time answer.',
          'Your VIN is printed on the driver\'s side dashboard, visible through the windshield from outside the vehicle. It is also on the driver\'s side door jamb sticker, and on your vehicle registration documents and title. The number starts with a country code (1 or 4 for U.S., 2 for Canada, W for Germany, J for Japan, and so on), followed by a manufacturer identifier and vehicle descriptor codes, and ends with a sequential production number unique to your vehicle.',
          'Entering your full 17-character VIN at nhtsa.gov/recalls will show you all open safety recalls on that specific vehicle — not just the one that triggered you to check. It is worth running the lookup periodically, especially before buying a used vehicle.',
          'NHTSA also maintains a campaign number for each recall. When you contact a dealer to schedule a free recall repair, having the NHTSA campaign number ready (it appears on the recall notice and in the lookup results) helps the service department find the right parts and confirm your eligibility.',
        ],
      },
      {
        heading: 'Drug lot numbers and medication recalls',
        body: [
          'Prescription and over-the-counter drug recalls use lot numbers that appear on the label of the medication bottle, box, or blister pack — usually near the expiration date. The format varies by manufacturer, but the recall notice will show the exact lot number string to look for. Common formats include alphanumeric codes like "LN45872A" or numeric codes like "234567."',
          'For medications dispensed by a pharmacy, the lot number should appear on the prescription label affixed to the bottle. If it does not, your pharmacist can look up the lot number for your specific dispensed medication by checking their dispensing records — bring your bottle in and ask.',
          'Drug recalls also frequently specify the NDC (National Drug Code), a standardized 10-digit code that identifies the drug, its strength, dosage form, and the specific manufacturer\'s package size. NDC codes appear on drug packaging in the format XXXXX-XXXX-XX. If the recall notice lists an NDC, matching it against the NDC on your bottle is the most precise way to confirm whether your medication is affected.',
          'Before stopping any recalled prescription medication, call your doctor or pharmacist. For many drugs, abruptly stopping carries its own risks. Your pharmacy will typically arrange a replacement supply at no additional cost and can verify your lot number from their dispensing records if you no longer have the original bottle.',
        ],
      },
      {
        heading: 'What to do when the codes match',
        body: [
          'If you have confirmed that your product is included in a recall, stop using it immediately. For food, this means removing it from your kitchen and not consuming any remaining portions. Do not attempt to cook or heat food that has been recalled for bacterial contamination — standard cooking temperatures do not reliably eliminate all pathogens in all circumstances, and the recall notice exists for a reason.',
          'Take a photo of the identifying codes on the package before you dispose of it — lot number, UPC, best-by date. This documentation is useful if you are seeking a refund, if you later develop symptoms that may be related to the recalled product, or if you need to file an adverse event report with the FDA.',
          'Most grocery stores will accept returns of recalled food items without a receipt. Bring the product or, if you have already disposed of it, the photo documentation and the receipt if you have it. If the store is uncooperative, contact the manufacturer directly using the phone number or website listed in the recall notice.',
        ],
      },
      {
        heading: 'What to do when your codes do not match',
        body: [
          'If your product\'s lot number, UPC, or date code does not match the recall notice, your specific product is not included in this recall. You do not need to discard it, and there is no safety concern related to this particular recall.',
          'That said, it is worth keeping an eye on the product category. Recalls can be expanded after initial issuance if additional affected units are identified. Subscribing to recall alerts — through the FDA, CPSC, or a service like Recall Radar — means you will be notified if the scope of a recall is updated to include your product.',
          'If you are uncertain about how to read your product\'s codes, or if the recall notice is unclear, contact the manufacturer directly using the phone number listed in the official recall notice. They maintain hotlines specifically for this purpose during active recalls.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Recall classes explained (Class I, II, III)', href: '/articles/recall-classes-explained' },
      { label: 'How to return recalled food for a refund', href: '/articles/returning-recalled-food-for-refund' },
      { label: 'Recall glossary', href: '/glossary' },
    ],
  },
  {
    slug: 'voluntary-vs-mandatory-recall',
    title: 'Voluntary vs. Mandatory Recalls: What the Distinction Actually Means for Consumers',
    metaDescription:
      'Most recalls are voluntary — initiated by the company, not ordered by the government. Learn what that distinction means, whether voluntary recalls are less serious, and when the government can force a recall.',
    publishedDate: '2026-06-12',
    readingMinutes: 5,
    category: 'Consumer Safety',
    intro:
      'When a recall is described as "voluntary," many consumers assume it means the company found a minor problem and is being cautious. In practice, the word "voluntary" in a recall context is often misleading. Some of the deadliest recalls in U.S. history — including the Takata airbag inflator recall that killed more than 30 people — were technically voluntary. Understanding what voluntary and mandatory actually mean helps you assess how seriously to take a recall notice.',
    sections: [
      {
        heading: 'What "voluntary" means in a recall',
        body: [
          'A voluntary recall is one that a company initiates on its own, without being ordered to do so by a government agency. This does not mean the company discovered a trivial problem and decided to be proactive. It usually means one of two things: either the company found the problem through its own testing and quality systems and moved ahead of a government investigation, or the FDA, USDA, NHTSA, or CPSC identified the problem and asked the company to recall — and the company agreed rather than waiting for a formal order.',
          'The second scenario is extremely common. Government agencies often contact manufacturers when they identify a safety concern, explain what they have found, and request a voluntary recall. The manufacturer, facing the alternative of a public mandatory recall order (which is worse for its reputation and potentially triggers more regulatory scrutiny), agrees to cooperate. The result is labeled "voluntary," even though the practical difference between a requested voluntary recall and a mandatory one is close to zero from the consumer\'s perspective.',
          'The word "voluntary" in a recall notice does not signal that the recall is precautionary or that the hazard is minor. Read the recall classification (Class I, II, or III) and the reason for recall to understand the actual risk level.',
        ],
      },
      {
        heading: 'What a mandatory recall actually means',
        body: [
          'Mandatory recalls occur when a company refuses to voluntarily recall a product that an agency has determined poses a safety risk. This is relatively rare because most companies comply with government requests rather than face the legal, reputational, and financial consequences of a public fight with a federal agency.',
          'The FDA gained the authority to order mandatory food recalls in 2011 under the Food Safety Modernization Act (FSMA). Before that, the FDA could only request voluntary recalls for most food products. The CPSC has long had mandatory recall authority under the Consumer Product Safety Act. NHTSA can order mandatory vehicle recalls under the National Traffic and Motor Vehicle Safety Act.',
          'When you see a mandatory recall, it typically means there was a dispute between the manufacturer and the agency, or the manufacturer was unresponsive. The safety concern itself is usually the same whether the recall is voluntary or mandatory — the distinction reflects the legal mechanism, not the severity of the hazard.',
        ],
      },
      {
        heading: 'How recall classifications actually reflect severity',
        body: [
          'The more meaningful indicator of a recall\'s seriousness is its classification: Class I, Class II, or Class III. These classifications apply to FDA and USDA recalls and are based on the assessed health risk, not on whether the recall was voluntary or mandatory.',
          'A Class I recall means the agency has determined there is a reasonable probability that using or being exposed to the product will cause serious adverse health consequences or death. This is the most serious tier. Most food recalls involving Listeria, Salmonella, or E. coli are Class I. Most drug recalls involving dangerous contamination are Class I.',
          'A Class II recall means the product may cause temporary or medically reversible adverse health consequences, or that serious harm is possible but unlikely. Class III means the product is unlikely to cause any health consequences but violates regulations.',
          'NHTSA vehicle recalls and CPSC product recalls use different language — NHTSA does not use the Class I/II/III system — but NHTSA safety recalls are inherently serious because they involve defects that can impair vehicle operation.',
          'The bottom line: pay more attention to the recall class than to whether it is described as voluntary or mandatory.',
        ],
      },
      {
        heading: 'Market withdrawals: what they are and how they differ',
        body: [
          'A market withdrawal is distinct from both voluntary and mandatory recalls. It occurs when a company removes a product from the market for a reason that does not constitute a regulatory violation. The problem might be a quality issue — off flavor, discoloration, or a packaging defect — that does not pose a safety risk and does not violate FDA or USDA standards.',
          'Market withdrawals are not tracked by government agencies the same way recalls are, and they do not appear in official recall databases. Consumers typically learn about them through retailer communications or media coverage. Because there is no health risk involved, market withdrawals do not require the same consumer action as a recall.',
          'Safety alerts and public health notifications are also distinct from recalls. The FDA sometimes issues safety alerts about products that have not been recalled but pose a potential risk — for example, alerting consumers to fraudulent or counterfeit products in the market. These are not recalls and do not require the same response.',
        ],
      },
      {
        heading: 'Why voluntary recalls can still move slowly',
        body: [
          'Even when a company agrees to a voluntary recall, the process takes time. The company must identify the scope of the affected product — which lots, which date ranges, which distribution channels. It must arrange for the product to be pulled from store shelves, which requires coordinating with distributors and retailers across the country. And it must draft and submit the recall notice for FDA or USDA review before it can be published.',
          'This timeline can be frustrating when a safety risk has already been identified. The FDA tries to post recall notices within 24 hours of being notified, but the process of identifying the full scope of a recall and pulling product from shelves can take days or weeks. Products may remain on store shelves for a period after a recall is announced because the supply chain takes time to respond.',
          'If you learn about a recall and are concerned about a product you recently purchased, do not wait for the retailer to pull it. Check the recall notice directly and make your own determination based on the lot numbers and codes on your product.',
        ],
      },
      {
        heading: 'What to do regardless of recall type',
        body: [
          'Whether a recall is voluntary or mandatory, Class I or Class III, the consumer\'s response is the same: check whether your specific product is included (by lot number, UPC, model number, or date code), stop using it if it is, and follow the instructions in the notice for a refund, replacement, or free repair.',
          'The urgency of your response should be proportional to the class and the specific hazard. A Class I recall for Listeria contamination warrants immediate action. A Class III recall for a minor labeling discrepancy can be addressed at your next grocery trip.',
          'You can verify the current recall status and classification of any product by checking the relevant agency\'s database: FDA.gov for food and drugs, NHTSA.gov for vehicles, CPSC.gov for consumer products, and FSIS.USDA.gov for meat and poultry. Recall Radar aggregates all of these sources in one place.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Class I, Class II, Class III recalls explained', href: '/articles/recall-classes-explained' },
      { label: 'How to read a recall notice', href: '/articles/how-to-read-a-recall-notice' },
      { label: 'Consumer safety guide', href: '/safety-guide' },
      { label: 'Recall FAQ', href: '/faq' },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
