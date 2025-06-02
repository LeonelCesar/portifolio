"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contatos", label: "Contatos" },
];

 function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MeuPortfólio
        </Link>

        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar; 
