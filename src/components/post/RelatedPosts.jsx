import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data";

export default function RelatedPosts({ post }) {
  const sameCategory = posts.filter(
    (p) => p.id !== post.id && p.category === post.category,
  );
  const others = posts.filter(
    (p) => p.id !== post.id && p.category !== post.category,
  );
  const related = [...sameCategory, ...others].slice(0, 3);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="mt-20 border-t border-border pt-12">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <i className="fa-solid fa-images text-xl text-primary" />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-heading">مقالات قد تعجبك</h2>
            <p className="text-sm text-text-secondary">
              استكشف المزيد من المحتوى المميز
            </p>
          </div>
        </div>

        <Link
          to="/blog"
          className="group hidden items-center gap-2 text-primary transition-colors hover:text-primary-hover sm:flex"
        >
          عرض الكل
          <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.slug}`}
            onClick={scrollToTop}
            className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all duration-500 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t/srgb from-navy/40 to-transparent" />
              <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                {item.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="mb-3 line-clamp-2 font-bold text-heading transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-text-secondary">
                <span className="flex items-center gap-2">
                  <img
                    src={item.author.avatar}
                    alt={item.author.name}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  {item.author.name}
                </span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
