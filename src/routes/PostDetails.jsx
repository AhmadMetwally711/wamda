import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { parseContent } from "../utils/parseContent";

function ShareCard({ title }) {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // المتصفح منع النسخ، مفيش حاجة نعملها
    }
  };

  const shareBtn =
    "flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-header text-text-secondary transition-all duration-300 hover:border-transparent hover:text-white";

  return (
    <div
      dir="rtl"
      className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <i className="fa-solid fa-share-nodes text-primary" />
          </div>
          <h3 className="font-bold text-heading">شارك المقال</h3>
        </div>

        <div className="flex gap-2">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شارك على X"
            className={`${shareBtn} hover:bg-[#1da1f2]`}
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شارك على لينكدإن"
            className={`${shareBtn} hover:bg-[#0077b5]`}
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شارك على واتساب"
            className={`${shareBtn} hover:bg-[#25d366]`}
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="نسخ الرابط"
            title={copied ? "تم النسخ" : "نسخ الرابط"}
            className={`${shareBtn} hover:bg-primary ${copied ? "bg-primary text-white" : ""}`}
          >
            <i className={copied ? "fa-solid fa-check" : "fa-solid fa-link"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PostDetails() {
  const { post } = useOutletContext();
  const blocks = parseContent(post.content);

  return (
    <article dir="rtl" id="content" className="scroll-mt-24">
      {/* Excerpt */}
      <div className="mb-10 rounded-2xl border border-primary/20 bg-linear-to-r/srgb from-primary/10 to-accent/20 p-6">
        <p className="text-lg italic leading-relaxed text-heading">
          “{post.excerpt}”
        </p>
      </div>

      {/* Content */}
      <div>
        {blocks.map((block, i) =>
          block.type === "heading" ? (
            <h2
              key={i}
              id={block.id}
              className="mb-6 mt-14 flex scroll-mt-28 items-center gap-4 text-2xl font-bold text-heading md:text-3xl"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <i className="fa-solid fa-camera text-primary" />
              </span>
              {block.text}
            </h2>
          ) : (
            <p key={i} className="mb-6 text-lg leading-relaxed text-text">
              {block.text}
            </p>
          ),
        )}
      </div>

      {/* Tags */}
      <div className="mt-14 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <i className="fa-solid fa-tags text-primary" />
          </div>
          <h3 className="font-bold text-heading">الوسوم</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-header px-4 py-2 text-sm text-text-secondary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Share */}
      <ShareCard title={post.title} />

      {/* Author */}
      <div className="mt-6 rounded-2xl border border-border bg-linear-to-br/srgb from-white to-header p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-24 w-24 rounded-2xl object-cover ring-4 ring-primary/20"
          />
          <div className="flex-1 text-center sm:text-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              كاتب المقال
            </span>
            <h3 className="mt-1 text-xl font-bold text-heading">
              {post.author.name}
            </h3>
            <p className="mb-3 text-sm text-text-secondary">
              {post.author.role}
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              {post.author.bio ??
                "مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي."}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
