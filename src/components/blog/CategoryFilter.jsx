import React from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../../data";

export default function CategoryFilter({ search, onSearchChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category") ?? "";

  const handleSelect = (name) => {
    const next = new URLSearchParams(searchParams);
    if (name) next.set("category", name);
    else next.delete("category");
    setSearchParams(next);
  };

  const baseBtn =
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300";
  const activeBtn =
    "bg-linear-to-r/srgb from-primary to-primary-hover text-white";
  const inactiveBtn =
    "bg-white text-text-secondary border border-border hover:border-primary/40 hover:text-primary";

  return (
    <div className="sticky top-20 z-40 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Search */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-full md:w-72"
          >
            <label htmlFor="search" className="sr-only">
              بحث
            </label>

            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
              <svg
                className="h-4 w-4 text-text-secondary"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="block w-full rounded-xl border border-border bg-white py-2 pe-3 ps-10 text-sm text-text transition-all duration-300 placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </form>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => handleSelect("")}
              aria-pressed={active === ""}
              className={`${baseBtn} ${active === "" ? activeBtn : inactiveBtn}`}
            >
              جميع المقالات
            </button>

            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => handleSelect(cat.name)}
                aria-pressed={active === cat.name}
                className={`${baseBtn} ${
                  active === cat.name ? activeBtn : inactiveBtn
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
