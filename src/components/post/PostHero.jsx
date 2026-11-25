// src/components/post/PostHero.jsx
import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function PostHero({ post }) {
  const heroImage = post.image.replace("w=800&h=400", "w=1600&h=900");
  const categoryLink = `/blog?category=${encodeURIComponent(post.category)}`;

  return (
    <div dir="rtl" className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt={post.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t/srgb from-navy via-navy/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r/srgb from-navy/30 to-transparent" />

      {/* Breadcrumb */}
      <div className="absolute left-8 right-8 top-8">
        <nav
          aria-label="مسار التنقل"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md"
        >
          <Link
            to="/"
            aria-label="الرئيسية"
            className="text-white/70 transition-colors hover:text-white"
          >
            <i className="fa-solid fa-home" />
          </Link>
          <i className="fa-solid fa-chevron-left text-xs text-white/30" />
          <Link
            to="/blog"
            className="text-white/70 transition-colors hover:text-white"
          >
            المدونة
          </Link>
          <i className="fa-solid fa-chevron-left text-xs text-white/30" />
          <span className="max-w-[200px] truncate font-medium text-accent">
            {post.category}
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Link
              to={categoryLink}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-hover hover:text-white"
            >
              {post.category}
            </Link>

            <div className="flex items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <i className="fa-regular fa-calendar" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-regular fa-clock" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-accent/50"
            />
            <div>
              <p className="font-bold text-white">{post.author.name}</p>
              <p className="text-sm text-white/60">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
