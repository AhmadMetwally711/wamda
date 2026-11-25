import React from "react";
import { Link } from "react-router-dom";
import { getHeadings } from "../../utils/parseContent";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
  });

export default function PostSidebar({ post }) {
  const headings = getHeadings(post.content);

  return (
    <aside dir="rtl" className="order-1 lg:order-2">
      <div className="lg:sticky lg:top-24 space-y-6">
        {/* Table of contents */}
        {headings.length > 0 && (
          <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                <i className="fa-solid fa-list text-primary" />
              </div>
              <h3 className="font-bold text-heading">محتويات المقال</h3>
            </div>

            <nav aria-label="محتويات المقال" className="space-y-2">
              {headings.map((heading, index) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="group flex items-center gap-3 p-3 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-header rounded-lg text-xs font-bold text-text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-sm">{heading.text}</span>
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Reading time + date */}
        <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-header rounded-xl">
              <i className="fa-regular fa-clock text-primary text-xl mb-2" />
              <p className="text-heading font-bold text-sm">{post.readTime}</p>
              <p className="text-text-secondary text-xs">وقت القراءة</p>
            </div>

            <div className="text-center p-4 bg-header rounded-xl">
              <i className="fa-regular fa-calendar text-primary text-xl mb-2" />
              <p className="text-heading font-bold text-sm">
                {formatDate(post.date)}
              </p>
              <p className="text-text-secondary text-xs">تاريخ النشر</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 bg-linear-to-br/srgb from-primary/10 to-accent/20 rounded-2xl border border-primary/20">
          <div className="text-center">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-envelope text-primary text-xl" />
            </div>
            <h3 className="font-bold text-heading mb-2">لا تفوّت جديدنا</h3>
            <p className="text-text-secondary text-sm mb-4">
              اشترك للحصول على أحدث المقالات
            </p>
            <Link
              to={`/blog?category=${encodeURIComponent(post.category)}`}
              className="block w-full py-3 bg-primary hover:bg-primary-hover text-white hover:text-white font-semibold rounded-xl transition-colors text-center"
            >
              تصفح المزيد
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
