'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-white font-semibold text-sm mb-2">📡 Recall Radar</p>
            <p className="text-xs leading-relaxed">
              A free public service aggregating official recall and safety alert data.
              Not affiliated with any government agency.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-2">Categories</p>
            <ul className="text-xs space-y-1">
              <li><Link href="/food" className="hover:text-white">Food Recalls</Link></li>
              <li><Link href="/vehicles" className="hover:text-white">Vehicle Recalls</Link></li>
              <li><Link href="/medications" className="hover:text-white">Medication Recalls</Link></li>
              <li><Link href="/products" className="hover:text-white">Product Recalls</Link></li>
              <li><Link href="/weekly" className="hover:text-white">New This Week</Link></li>
              <li><Link href="/states" className="hover:text-white">Recalls by State</Link></li>
              <li><Link href="/brands" className="hover:text-white">Recalls by Brand</Link></li>
              <li><Link href="/stats" className="hover:text-white">Statistics</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-2">Resources</p>
            <ul className="text-xs space-y-1">
              <li><Link href="/vin-lookup" className="hover:text-white">VIN Recall Lookup</Link></li>
              <li><Link href="/safety-guide" className="hover:text-white">Consumer Safety Guide</Link></li>
              <li><Link href="/glossary" className="hover:text-white">Recall Glossary</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white">About Recall Radar</Link></li>
              <li><Link href="/subscribe" className="hover:text-white">Email Alerts</Link></li>
              <li><Link href="/manage-subscription" className="hover:text-white">Manage Alerts</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-2">Data Sources</p>
            <ul className="text-xs space-y-1">
              <li><a href="https://www.fda.gov" target="_blank" rel="noopener noreferrer" className="hover:text-white">FDA (Food &amp; Drug)</a></li>
              <li><a href="https://www.nhtsa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-white">NHTSA (Vehicles)</a></li>
              <li><a href="https://www.cpsc.gov" target="_blank" rel="noopener noreferrer" className="hover:text-white">CPSC (Consumer Products)</a></li>
              <li><a href="https://www.fsis.usda.gov" target="_blank" rel="noopener noreferrer" className="hover:text-white">USDA FSIS (Meat &amp; Poultry)</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© 2025 Recall Radar. Data sourced from public government feeds.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/subscribe" className="hover:text-white">Subscribe</Link>
            <Link href="/manage-subscription" className="hover:text-white">Manage Alerts</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
