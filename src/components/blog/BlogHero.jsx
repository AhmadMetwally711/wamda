import React from "react";
import { Link } from "react-router-dom";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b/srgb from-[var(--color-header)] to-[var(--color-body)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(216,222,229,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,222,229,0.5)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black_30%,transparent)]" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-accent)]/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8 lg:py-10">
        <Link
          to="/blog"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 p-1 pe-3 text-sm text-[var(--color-primary-hover)] transition-all duration-300 hover:border-[var(--color-primary)]/60"
        >
          <span className="rounded-full bg-[var(--color-primary)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-header)]">
            جديد
          </span>
          <span className="font-medium">اكتشف أحدث المقالات</span>
          <svg
            className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </Link>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[var(--color-heading)] md:text-5xl lg:text-6xl">
          مرحباً بك في{" "}
          <span className="bg-linear-to-r/srgb from-[var(--color-primary)] to-[var(--color-navy)] bg-clip-text text-transparent">
            عالم من ومضاتنا
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
          في ومضة نشارك معكم مقالاتٍ وأفكارًا تلهمكم وتطوّر مهاراتكم، لتبقوا
          دائمًا على اطلاع بكل جديد.
        </p>
      </div>
    </section>
  );
}
