import React from "react";
import { siteInfo } from "../data";

const LAST_UPDATED = "2026-11-22";

const sections = [
  {
    title: "مقدمة",
    text: `خصوصيتك تهمنا في ${siteInfo.name}. توضح هذه السياسة المعلومات التي قد نجمعها عند زيارتك للموقع، وكيف نستخدمها ونحميها.`,
  },
  {
    title: "المعلومات التي نجمعها",
    text: "نجمع الحد الأدنى من المعلومات اللازمة لتشغيل الموقع:",
    items: [
      "بريدك الإلكتروني عند اشتراكك في النشرة الإخبارية.",
      "معلومات تقنية عامة مثل نوع المتصفح والصفحات التي تزورها، إن استخدمنا أدوات تحليل.",
      "أي معلومات ترسلها لنا بنفسك عند التواصل معنا.",
    ],
  },
  {
    title: "كيف نستخدم معلوماتك",
    items: [
      "إرسال النشرة الإخبارية وأحدث المقالات لمن اشترك فيها.",
      "تحسين محتوى الموقع وتجربة القراءة.",
      "الرد على استفساراتك ورسائلك.",
    ],
  },
  {
    title: "مشاركة المعلومات",
    text: "لا نبيع بياناتك الشخصية ولا نؤجرها لأي جهة. وقد نشاركها فقط مع مزودي خدمات يساعدوننا في تشغيل الموقع، أو إذا طُلب منا ذلك بموجب القانون.",
  },
  {
    title: "ملفات تعريف الارتباط (Cookies)",
    text: "قد يستخدم الموقع ملفات تعريف الارتباط لتحسين التجربة. يمكنك التحكم فيها أو حذفها من إعدادات متصفحك في أي وقت.",
  },
  {
    title: "الخدمات الخارجية",
    text: "يعتمد الموقع على خدمات خارجية، منها خطوط Google Fonts وصور Unsplash ومكتبة الأيقونات Font Awesome. قد تجمع هذه الخدمات بيانات تقنية بسيطة وفق سياسات الخصوصية الخاصة بها.",
  },
  {
    title: "حماية البيانات",
    text: "نتخذ إجراءات معقولة لحماية معلوماتك، لكن لا توجد وسيلة نقل أو تخزين إلكتروني آمنة بنسبة مئة بالمئة.",
  },
  {
    title: "حقوقك",
    items: [
      "إلغاء الاشتراك في النشرة في أي وقت.",
      "طلب الاطلاع على بياناتك أو تصحيحها أو حذفها.",
    ],
  },
  {
    title: "التعديلات على السياسة",
    text: "قد نحدّث هذه السياسة من وقت لآخر، وسنعرض تاريخ آخر تحديث في أعلى الصفحة.",
  },
];

export default function Privacy() {
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
            سياسة الخصوصية
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
            لأي استفسار حول هذه السياسة، راسلنا على{" "}
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
