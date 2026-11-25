import React from "react";
import { siteInfo } from "../data";

const LAST_UPDATED = "2026-11-22";

const sections = [
  {
    title: "قبول الشروط",
    text: `باستخدامك موقع ${siteInfo.name} فإنك توافق على هذه الشروط. إذا لم توافق عليها، فنرجو عدم استخدام الموقع.`,
  },
  {
    title: "استخدام الموقع",
    text: "يُسمح لك باستخدام الموقع لأغراض شخصية وتعليمية. ويُحظر:",
    items: [
      "استخدام الموقع بشكل مخالف للقانون.",
      "محاولة اختراق الموقع أو تعطيله أو الإضرار بأمانه.",
      "نسخ المحتوى بشكل آلي أو واسع النطاق دون إذن.",
    ],
  },
  {
    title: "الملكية الفكرية",
    text: "جميع المقالات والتصميمات والشعارات في الموقع مملوكة لنا أو لأصحابها. يمكنك مشاركة روابط المقالات، لكن لا يجوز نسخها أو إعادة نشرها كاملة دون إذن كتابي.",
  },
  {
    title: "دقة المحتوى",
    text: "نبذل جهدنا ليكون المحتوى دقيقاً ومفيداً، لكنه مقدَّم لأغراض تعليمية فقط، ولا نضمن خلوه من الأخطاء أو ملاءمته لكل حالة.",
  },
  {
    title: "الروابط الخارجية",
    text: "قد يحتوي الموقع على روابط لمواقع أخرى. نحن غير مسؤولين عن محتواها أو سياسات الخصوصية الخاصة بها.",
  },
  {
    title: "النشرة الإخبارية",
    text: "الاشتراك في النشرة اختياري، ويمكنك إلغاؤه في أي وقت. ولن نرسل لك رسائل غير مرغوب فيها.",
  },
  {
    title: "حدود المسؤولية",
    text: "يُقدَّم الموقع كما هو، ولا نتحمل مسؤولية أي خسارة أو ضرر ينتج عن استخدامه أو عن الاعتماد على محتواه.",
  },
  {
    title: "التعديل على الشروط",
    text: "نحتفظ بحق تعديل هذه الشروط في أي وقت، واستمرارك في استخدام الموقع بعد التعديل يعني موافقتك عليه.",
  },
];

export default function Terms() {
  const updated = new Date(LAST_UPDATED).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="border-b border-border bg-linear-to-b/srgb from-header to-body">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-heading md:text-5xl">
            شروط الخدمة
          </h1>
          <p className="text-sm text-text-secondary">آخر تحديث: {updated}</p>
        </div>
      </section>

      <section
        dir="rtl"
        className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
      >
        {sections.map((section, i) => (
          <div key={section.title} className="mb-10">
            <h2 className="mb-3 flex items-center gap-3 text-xl font-bold text-heading">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm text-primary">
                {(i + 1).toLocaleString("ar-EG")}
              </span>
              {section.title}
            </h2>

            {section.text && (
              <p className="leading-loose text-text">{section.text}</p>
            )}

            {section.items && (
              <ul className="mt-3 list-disc space-y-2 ps-6 leading-loose text-text">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="rounded-2xl border border-primary/20 bg-header p-6">
          <h2 className="mb-2 font-bold text-heading">تواصل معنا</h2>
          <p className="text-text-secondary">
            لأي استفسار حول هذه الشروط، راسلنا على{" "}
            <a
              href={`mailto:${siteInfo.email}`}
              className="font-medium text-primary"
            >
              {siteInfo.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
