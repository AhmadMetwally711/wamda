import React from "react";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

const EXPLORE = [
  { name: "الرئيسية", to: "/" },
  { name: "المدونة", to: "/blog" },
  { name: "من نحن", to: "/about" },
];

const CATEGORIES = ["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"];

const SOCIALS = [
  {
    label: "twitter",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "github",
    href: "#",
    fillRule: "evenodd",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    label: "linkedin",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "youtube",
    href: "#",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const footerLinkClass =
  "group flex items-center gap-2 text-sm text-[var(--color-footer-text)]/70 transition-colors duration-300 hover:text-[var(--color-accent)]";
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 -mr-4 rotate-180 text-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function ColumnTitle({ children }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 font-semibold text-[var(--color-header)]">
      <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-[var(--color-footer-text)]/20 bg-[var(--color-footer)] text-[var(--color-footer-text)]"
    >
      {/* Background blobs */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="group mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] shadow-[0_4px_20px_rgba(57,136,201,0.3)] transition-all duration-300 group-hover:scale-105">
                {" "}
                <span className="text-xl font-bold text-[var(--color-header)]">
                  و
                </span>{" "}
              </div>
              <span className="text-xl font-bold text-[var(--color-header)]">
                ومضة
              </span>
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-[var(--color-footer-text)]/70">
              مدونه متخصصه في التصوير الفوتوجرافي، نجعلك ترى ومضات المحترفين
              ونصائح عمليه لتطوير مهاراتك.
            </p>

            <div className="flex gap-2">
              {SOCIALS.map(({ label, href, path, fillRule }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-footer-text)]/20 bg-[var(--color-footer-text)]/10 text-[var(--color-footer-text)]/70 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-[var(--color-primary)] hover:to-[var(--color-primary-hover)] hover:text-[var(--color-header)]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fillRule={fillRule} clipRule={fillRule} d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <ColumnTitle>استكشف</ColumnTitle>
            <ul className="space-y-4">
              {EXPLORE.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className={footerLinkClass}>
                    <ArrowIcon />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <ColumnTitle>التصنيفات</ColumnTitle>
            <ul className="space-y-4">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <Link
                    to={`/blog?category=${encodeURIComponent(category)}`}
                    className={footerLinkClass}
                    onClick={scrollToTop}
                  >
                    <ArrowIcon />
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <ColumnTitle>ابقى على اطلاع</ColumnTitle>
            <p className="mb-4 text-sm text-[var(--color-footer-text)]/70">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                required
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full rounded-xl border border-[var(--color-footer-text)]/20 bg-[var(--color-footer-text)]/10 px-4 py-3 text-sm text-[var(--color-header)] placeholder-[var(--color-footer-text)]/50 transition-all duration-300 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] px-8 py-3 text-sm font-semibold text-[var(--color-header)] transition-all duration-300 hover:-translate-y-0.5"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[var(--color-footer-text)]/20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="flex items-center gap-1.5 text-sm text-[var(--color-footer-text)]/60">
              © {new Date().getFullYear()} ومضة. صنع بكل
              <BsHeartFill className="h-3.5 w-3.5 text-[var(--color-accent)]" />
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-[var(--color-footer-text)]/60 transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/terms"
                className="text-sm text-[var(--color-footer-text)]/60 transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
