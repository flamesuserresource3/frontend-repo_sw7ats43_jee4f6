import { useCallback } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'tools', label: 'Tools' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const handleNav = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" onClick={(e) => handleNav(e, 'home')} className="text-lg font-semibold tracking-tight text-white">
          <span className="text-white">Choplet</span>
          <span className="ml-1 rounded bg-gradient-to-r from-[#7a2cff] to-[#9945ff] px-1.5 py-0.5 text-sm font-bold text-white shadow-[0_0_12px_rgba(153,69,255,0.65)]">Studios</span>
        </a>
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNav(e, item.id)}
                className="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="rounded-full bg-[#1b0b33] px-3 py-1.5 text-sm text-zinc-200 ring-1 ring-[#9945ff]/30 transition hover:bg-[#2a1154] hover:text-white hover:shadow-[0_0_24px_rgba(153,69,255,0.55)]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
