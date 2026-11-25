import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data";

export default function HomeCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-semibold text-[#24669E] bg-[#EAF6FF] border border-[#B9E3FF] rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3988C9] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3988C9]" />
          </span>
          التصنيفات
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#172B3A] mb-2">
          استكشف حسب الموضوع
        </h2>
        <p className="max-w-lg mx-auto text-[#172B3A]/60">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>
      </div>

      <div dir="rtl" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/blog?category=${encodeURIComponent(cat.name)}`}
            className="group relative block p-6 rounded-2xl bg-white border border-[#D8DEE5] overflow-hidden hover:border-[#3988C9]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3988C9] to-[#24669E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#3988C9]/10 rounded-xl flex items-center justify-center mb-4 border border-[#3988C9]/20 group-hover:bg-white/20 group-hover:border-transparent transition-colors duration-300">
                <i
                  className={`fa-solid ${cat.icon} text-xl text-[#3988C9] group-hover:text-white transition-colors duration-300`}
                />
              </div>

              <h3 className="font-bold text-lg text-[#172B3A] group-hover:text-white transition-colors duration-300 mb-1">
                {cat.name}
              </h3>
              <p className="text-sm text-[#172B3A]/50 group-hover:text-white/80 transition-colors duration-300">
                {cat.count} مقالة
              </p>

              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#EAF6FF] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-[#3988C9] group-hover:text-white rotate-180"
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
