import React, { useState } from "react";
import { posts } from "../../data";

export default function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const avatars = posts.slice(0, 3).map((post) => post.author.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-header">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-border p-8 md:p-12 lg:p-16 text-center">
          <div className="w-16 h-16 bg-linear-to-br/srgb from-primary to-primary-hover rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            اشترك في{" "}
            <span className="bg-linear-to-r/srgb from-primary to-primary-hover bg-clip-text text-transparent">
              نشرتنا الإخبارية
            </span>
          </h2>

          <p className="text-heading/70 text-lg mb-8 max-w-xl mx-auto">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-5 py-4 rounded-xl bg-white border border-border focus:outline-none focus:border-primary text-heading placeholder:text-heading/40 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r/srgb from-primary to-primary-hover text-white font-semibold rounded-xl hover:from-primary-hover hover:to-navy transition-all duration-300"
            >
              اشترك الآن
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-heading/50">
            <div className="flex items-center gap-4">
              <div className="flex">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className={`w-8 h-8 rounded-full object-cover border-2 border-white ${
                      i > 0 ? "-ms-2" : ""
                    }`}
                  />
                ))}
              </div>
              <span>
                انضم لـ{" "}
                <span className="text-heading font-medium">+10,000</span> مصور
              </span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <span>بدون إزعاج</span>
            <span className="hidden sm:inline text-border">•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}
