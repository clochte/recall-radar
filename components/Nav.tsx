import Link from 'next/link';

const links = [
  { href: '/food', label: 'Food' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/medications', label: 'Medications' },
  { href: '/products', label: 'Products' },
  { href: '/vin-lookup', label: 'VIN Lookup' },
  { href: '/weekly', label: 'This Week' },
  { href: '/brands', label: 'Brands' },
  { href: '/stats', label: 'Stats' },
  { href: '/safety-guide', label: 'Safety Guide' },
  { href: '/search', label: 'Search' },
];

export default function Nav() {
  return (
    <header className="bg-navy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-yellow-300">📡</span>
            <span>Recall Radar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded text-sm font-medium text-white/80 hover:text-white hover:bg-navy-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="ml-2 px-4 py-2 rounded bg-yellow-400 text-navy font-semibold text-sm hover:bg-yellow-300 transition-colors"
            >
              Get Alerts
            </Link>
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden items-center gap-1 overflow-x-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-1.5 rounded text-xs font-medium text-white/80 hover:text-white whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
