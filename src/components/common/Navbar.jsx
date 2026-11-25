import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { name: "الرئيسية", href: "/" },
  { name: "المدونة", href: "/blog" },
  { name: "من نحن", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      dir="rtl"
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-header)] backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-xl ring-2 ring-[var(--color-border)] transition-all duration-300 group-hover:scale-105 group-hover:ring-[var(--color-primary)]/30">
              <img
                src="/favicon.svg"
                alt="Wamda Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--color-navy)]">
                ومضة
              </span>

              <span className="hidden text-xs tracking-wide text-[var(--color-text-secondary)] sm:block">
                نجعلك ترى بعيوننا
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <div className="flex items-center rounded-full border border-[var(--color-border)] bg-white p-1.5">
              {LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--color-primary)] text-[var(--color-header)] shadow-md"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-primary)]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="بحث"
              className="rounded-full border border-transparent p-3 text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-border)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-primary)]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <a
              href="/blog"
              className="rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-header)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
            >
              ابدأ القراءة
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-full border border-transparent p-3 text-[var(--color-heading)] transition-all duration-300 hover:border-[var(--color-border)] hover:bg-[var(--color-card-hover)] md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-md">
            <div className="flex flex-col">
              {LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-[var(--color-border)] px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--color-navy)] text-[var(--color-header)]"
                        : "text-[var(--color-text)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-primary)]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-full bg-[var(--color-primary)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-header)] transition-all duration-300 hover:bg-[var(--color-primary-hover)]"
              >
                ابدأ القراءة
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
