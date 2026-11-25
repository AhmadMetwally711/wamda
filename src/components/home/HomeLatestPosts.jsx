import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function HomeLatestPosts() {
  const latestPosts = posts.filter((post) => !post.featured).slice(0, 3);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-semibold text-[#24669E] bg-[#EAF6FF] border border-[#B9E3FF] rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3988C9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3988C9]" />
            </span>
            الأحدث
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#172B3A] mb-2">
            أحدث المقالات
          </h2>
          <p className="max-w-lg text-[#172B3A]/60">
            محتوى جديد طازج من المطبعة
          </p>
        </div>

        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-[#3988C9] font-semibold hover:text-[#24669E] transition-colors"
        >
          عرض جميع المقالات
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
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden border border-[#D8DEE5] hover:border-[#3988C9]/40 hover:shadow-lg transition-all duration-500"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#17324D]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-[#172B3A]/50 mb-3">
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
                  <span className="w-1 h-1 bg-[#D8DEE5] rounded-full" />
                  <span>{formatDate(post.date)}</span>
                </div>

                <h3 className="text-xl font-bold text-[#172B3A] mb-3 group-hover:text-[#3988C9] transition-colors duration-300 line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-[#172B3A]/70 mb-5 line-clamp-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#D8DEE5]">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#EAF6FF]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#172B3A]">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-[#172B3A]/50">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#3988C9]/10 flex items-center justify-center group-hover:bg-[#3988C9] transition-colors duration-300 border border-[#3988C9]/20 group-hover:border-transparent">
                    <svg
                      className="w-4 h-4 text-[#3988C9] group-hover:text-white transition-colors duration-300 rotate-180"
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
        ))}
      </div>
    </section>
  );
}
