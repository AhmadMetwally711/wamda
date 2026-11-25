import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 6;

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function PostCard({ post, view }) {
  const isList = view === "list";

  return (
    <article className="group bg-white rounded-3xl border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
      <Link
        to={`/blog/${post.slug}`}
        className={isList ? "flex flex-col sm:flex-row" : "block"}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            isList ? "h-52 sm:h-auto sm:w-72 shrink-0" : "h-52"
          }`}
        >
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 ${isList ? "flex-1 flex flex-col" : ""}`}>
          <div className="flex items-center gap-3 text-sm text-text-secondary mb-3">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span>{formatDate(post.date)}</span>
          </div>

          <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          <p className="text-text-secondary mb-5 line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-header"
              />
              <div>
                <p className="text-sm font-medium text-heading">
                  {post.author.name}
                </p>
                <p className="text-xs text-text-secondary">
                  {post.author.role}
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-primary/20 group-hover:border-transparent">
              <svg
                className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300 rotate-180"
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
        </div>
      </Link>
    </article>
  );
}

export default function BlogPosts({ posts, category, search, onClearFilters }) {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid");
  const sectionRef = useRef(null);

  const hasFilters = Boolean(category || search.trim());

  // نرجع لأول صفحة لما البحث أو التصنيف يتغير
  useEffect(() => {
    setPage(1);
  }, [category, search]);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(start, start + POSTS_PER_PAGE);

  const goToPage = (p) => {
    setPage(p);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const viewBtn = (active) =>
    `p-2 rounded-lg transition-all duration-300 ${
      active
        ? "bg-primary text-white"
        : "text-text-secondary hover:text-primary"
    }`;

  const pageNavBtn = (disabled) =>
    `p-3 rounded-xl border transition-all duration-300 ${
      disabled
        ? "bg-body border-border text-text-secondary/50 cursor-not-allowed"
        : "bg-white border-border text-heading hover:border-primary/50 hover:bg-card-hover"
    }`;

  return (
    <section
      dir="rtl"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]"
    >
      {/* Top bar */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-text-secondary">
          عرض <span className="font-bold text-heading">{posts.length}</span>{" "}
          مقالات
          {category && (
            <span>
              {" "}
              في <span className="font-bold text-primary">{category}</span>
            </span>
          )}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white border border-border rounded-xl p-1">
            <button
              type="button"
              title="عرض شبكي"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
              className={viewBtn(view === "grid")}
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              type="button"
              title="عرض قائمة"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
              className={viewBtn(view === "list")}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-sm text-text-secondary hover:text-primary flex items-center gap-1 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              مسح الفلاتر
            </button>
          )}
        </div>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="text-center text-text-secondary py-20">
          لا توجد مقالات مطابقة
        </p>
      ) : (
        <div
          className={
            view === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }
        >
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} view={view} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <>
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              aria-label="الصفحة السابقة"
              className={pageNavBtn(currentPage === 1)}
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => goToPage(p)}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                    p === currentPage
                      ? "bg-linear-to-r/srgb from-primary to-primary-hover text-white"
                      : "bg-white text-text-secondary border border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              aria-label="الصفحة التالية"
              className={pageNavBtn(currentPage === totalPages)}
            >
              <svg
                className="w-5 h-5 rotate-180"
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
            </button>
          </div>

          <p className="text-center text-text-secondary mt-4 text-sm">
            صفحة {currentPage} من {totalPages}
          </p>
        </>
      )}
    </section>
  );
}
