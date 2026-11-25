import React from "react";
import { Link } from "react-router-dom";
import { siteInfo } from "../../data";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br/srgb from-navy via-primary-hover to-primary py-20">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-accent/30 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
          تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${siteInfo.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-header hover:text-navy"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            تواصل معنا
          </a>

          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-navy"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
