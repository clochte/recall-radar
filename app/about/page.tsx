import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Recall Radar — Mission, Data Sources & Editorial Standards',
  description:
    'Recall Radar aggregates official U.S. government recall data from the FDA, NHTSA, USDA, and CPSC. Learn about our mission, how we source and verify data, our editorial standards, and how to contact us.',
};

const sources = [
  {
    name: 'FDA Food Safety Recalls',
    description: 'Food and beverage recalls including bacterial contamination, undeclared allergens, and mislabeling. Published via FDA RSS feed.',
    url: 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts',
    category: 'Food',
    update: 'Every few hours',
  },
  {
    name: 'USDA FSIS Recalls',
    description: 'Meat, poultry, and processed egg product recalls from the Food Safety and Inspection Service. Published via FSIS public API.',
    url: 'https://www.fsis.usda.gov/recalls',
    category: 'Food',
    update: 'Every few hours',
  },
  {
    name: 'FDA Drug Enforcement (openFDA)',
    description: 'Prescription and OTC drug recalls for contamination, potency issues, and labeling errors. Published via the openFDA drug enforcement API.',
    url: 'https://open.fda.gov/apis/drug/enforcement/',
    category: 'Medications',
    update: 'Every few hours',
  },
  {
    name: 'NHTSA Safety Recalls',
    description: 'Vehicle safety recalls for defects that affect safe operation. Published via NHTSA RSS feed.',
    url: 'https://www.nhtsa.gov/vehicle-safety/recalls',
    category: 'Vehicles',
    update: 'Every few hours',
  },
  {
    name: 'CPSC Recall Notices',
    description: 'Consumer product recalls for fire, injury, choking, and other hazards. Published via CPSC RSS feed.',
    url: 'https://www.cpsc.gov/recalls',
    category: 'Products',
    update: 'Every few hours',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 space-y-10">

      <div>
        <h1 className="text-2xl font-bold text-navy mb-3">About Recall Radar</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Recall Radar is a free public safety resource that consolidates official U.S. government recall
          data from four separate federal agencies into one searchable, up-to-date reference. It is built
          for anyone who wants to know whether a food product in their kitchen, a car in their driveway,
          a medication in their cabinet, or a product in their home has been recalled — without needing to
          know which government agency to contact first.
        </p>
      </div>

      <section id="who-we-are">
        <h2 className="text-lg font-semibold text-navy mb-3">Who we are</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Recall Radar was built out of a specific frustration: realizing that a food product already eaten
            had been recalled weeks earlier — and that finding out required knowing to check the FDA website
            first, then the USDA, then figuring out what lot number meant, then understanding why the label
            on the package didn't match any of the identifiers in the notice. That process is broken for
            most people, and the stakes are high enough that it shouldn't be.
          </p>
          <p>
            The editorial team monitors FDA, USDA FSIS, NHTSA, and CPSC recall feeds daily. Every article
            on this site is written against official government source material — statutes, agency guidance
            documents, published research, and the recall notices themselves — and reviewed for factual
            accuracy before publication. When a government agency updates its guidance, expands a recall,
            or reclassifies a notice, we update our content to reflect it. Our job is to explain what the
            official data means, not to editorialize beyond what it supports.
          </p>
          <p>
            We are not affiliated with any government agency and have no authority to issue or modify recalls.
            Every recall page links to the official source so you can always verify what we've written.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-3">The problem this solves</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            In the United States, product recalls are administered by four separate agencies with no shared
            consumer-facing interface: the FDA handles most food products, dietary supplements, and
            medications; NHTSA handles vehicles; the USDA's Food Safety and Inspection Service handles
            meat and poultry; and the CPSC handles consumer products from toys to appliances. Each
            maintains a separate database, search tool, and alert system.
          </p>
          <p>
            The result is that staying informed about recalls requires monitoring four different government
            websites — and most consumers don't know which agency is responsible for which product category
            until they need to find out. Recall Radar pulls all four sources into one feed, organized and
            searchable, so you can find what you need in one place.
          </p>
          <p>
            Every recall page links directly to the official government source. We do not alter, editorialize,
            or reinterpret recall information — our role is to surface it and make it findable, not to
            substitute for the official notice.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-3">How the data works</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Recall data is fetched from government RSS feeds and public APIs every few hours. We do not
            store copies of recall notices — pages are generated dynamically from the live government
            data so they reflect current status. When a recall is closed or amended by the issuing agency,
            that change will be reflected the next time data is fetched.
          </p>
          <p>
            Severity classification (Urgent / Voluntary / Notice) is assigned automatically based on
            keywords in the recall description. This is an approximation, not an official classification —
            not all government sources publish formal severity levels in their data feeds. Urgency indicators
            should be used as a first filter, not a definitive assessment. Always read the full official
            notice before acting on a recall.
          </p>
          <p>
            Lot numbers, model numbers, affected products, and remediation instructions are reproduced
            verbatim from the government source. We do not modify this information. If you find a
            discrepancy between what appears here and the official notice, the official source takes
            precedence.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-3">Editorial standards</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Beyond recall data aggregation, Recall Radar publishes original educational articles and guides
            about how the recall system works — how to read a recall notice, what recall classifications
            mean, how to check a vehicle VIN, how to get a refund on recalled food, and related topics.
          </p>
          <p>
            These articles are written with reference to official government guidance, peer-reviewed public
            health sources, and the relevant federal statutes. They are reviewed for factual accuracy before
            publication. We note when information is general in nature and recommend that readers consult
            official agency sources or licensed professionals for decisions affecting their health or safety.
          </p>
          <p>
            We do not accept payment to publish, suppress, or modify recall notices or educational content.
            Recall Radar is funded through advertising. Advertising does not influence which recalls are
            displayed, how they are classified, or the content of our articles and guides.
          </p>
          <p>
            If you find an error in our content — a factual mistake in an article, a mislabeled recall, or
            data that appears out of date — please{' '}
            <Link href="/contact" className="text-navy-light hover:underline">contact us</Link> and we will
            investigate and correct it promptly.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-4">Data sources</h2>
        <div className="space-y-3">
          {sources.map((source) => (
            <div key={source.name} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="font-semibold text-navy text-sm">{source.name}</p>
                <span className="text-xs bg-gray-100 text-muted px-2 py-0.5 rounded whitespace-nowrap shrink-0">
                  {source.category}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{source.description}</p>
              <div className="flex items-center justify-between mt-2">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-navy-light hover:underline"
                >
                  {source.url} →
                </a>
                <span className="text-xs text-muted">Updated: {source.update}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-3">Limitations and disclaimers</h2>
        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5 leading-relaxed">
          <li>Recall Radar is not affiliated with the FDA, NHTSA, USDA, CPSC, or any government agency.</li>
          <li>We do not issue recalls. We have no authority to order a product recall or to compel a manufacturer to take any action.</li>
          <li>We do not provide medical, legal, or financial advice. Consult a licensed professional for decisions affecting your health, legal rights, or finances.</li>
          <li>Data may occasionally be delayed, incomplete, or reflect recalls that have since been closed. Always verify recall status at the official source before acting.</li>
          <li>We do not store personal information beyond what is necessary to deliver email digests to subscribers. See our <Link href="/privacy" className="text-navy-light hover:underline">privacy policy</Link> for details.</li>
        </ul>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="bg-card border border-border rounded-lg p-4 text-sm text-gray-600">
          <p className="font-semibold text-navy mb-1">Get recall alerts</p>
          <p className="text-xs leading-relaxed mb-2">
            Subscribe for a free daily or weekly digest of the recall categories you care about.
          </p>
          <Link href="/subscribe" className="text-xs text-navy-light hover:underline font-medium">
            Subscribe to alerts →
          </Link>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-sm text-gray-600">
          <p className="font-semibold text-navy mb-1">Contact us</p>
          <p className="text-xs leading-relaxed mb-2">
            Found an error? Have a question about our data or methodology?
          </p>
          <Link href="/contact" className="text-xs text-navy-light hover:underline font-medium">
            Contact Recall Radar →
          </Link>
        </div>
      </div>

    </div>
  );
}
