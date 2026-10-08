"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contatos", label: "Contactos" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const previousPathnameRef = useRef(pathname);

  const closeMenu = () => setIsOpen(false);

  // Fechar quando a rota muda.
  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  // Bloquear scroll e gerir teclado/foco.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";

    const menu = mobileNavRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );

    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="relative z-50 text-xl font-extrabold tracking-tight text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          onClick={closeMenu}
        >
          LC<span className="text-blue-600">.</span>
          <span className="sr-only">Página inicial</span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {label}

                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-blue-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contatos"
          className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:inline-flex"
        >
          Vamos conversar
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        {/* Mobile toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
        >
          {isOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Fechar menu de navegação"
            tabIndex={-1}
            onClick={closeMenu}
            className="absolute inset-0 bg-slate-950/40"
          />

          <nav
            id="mobile-navigation"
            ref={mobileNavRef}
            aria-label="Navegação mobile"
            className="absolute inset-y-0 right-0 flex w-[min(85vw,360px)] flex-col bg-white px-6 py-8 shadow-2xl"
          >
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navegação
            </p>

            <div className="flex flex-col">
              {NAV_LINKS.map(({ href, label }, index) => {
                const active = isActive(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-slate-100 py-5 text-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 ${
                      active
                        ? "text-blue-600"
                        : "text-slate-800 hover:text-blue-600"
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-xs font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <Link
                href="/contatos"
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Vamos conversar
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-center text-xs text-slate-400">
                Front-End Developer · Portfolio
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
