/*Jumbotron from flowbite */
import React from "react";
import { Link } from "react-router-dom";
import { posts, categories, siteInfo } from "../../data";

export default function HomeHero() {
  const authorsCount = new Set(posts.map((post) => post.author.name)).size;

  const stats = [
    { icon: "fa-newspaper", value: posts.length, label: "مقالة" },
    { icon: "fa-users", value: "+10 ألف", label: "قارئ" },
    { icon: "fa-folder-open", value: categories.length, label: "تصنيفات" },
    { icon: "fa-pen-nib", value: authorsCount, label: "كاتب" },
  ];

  return (
    <section
      dir="rtl"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-b/srgb from-header to-body"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(216,222,229,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,222,229,0.5)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black_30%,transparent)]" />
      <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/70 border border-accent backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary-hover">
              مرحباً بك في {siteInfo.name}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading mb-6 leading-tight tracking-tight">
            اكتشف
            <br />
            <span className="bg-linear-to-r/srgb from-primary to-navy bg-clip-text text-transparent">
              {siteInfo.tagline}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            {siteInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/blog"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-linear-to-br/srgb from-primary to-primary-hover transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              <span>استكشف المقالات</span>
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-heading bg-white/60 border border-border transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-3xl bg-white/70 border border-border backdrop-blur-xl hover:scale-105 transition-transform duration-300"
              >
                <i
                  className={`fa-solid ${stat.icon} text-2xl text-primary mb-1`}
                />
                <p className="text-2xl md:text-3xl font-bold bg-linear-to-r/srgb from-primary to-navy bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
