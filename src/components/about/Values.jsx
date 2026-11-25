import React from "react";
import { values } from "../../data";

export default function Values() {
  return (
    <section className="border-y border-border bg-header py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-heading md:text-4xl">
            <span className="h-8 w-1.5 rounded-full bg-linear-to-b/srgb from-primary to-accent" />
            قيمنا
            <span className="h-8 w-1.5 rounded-full bg-linear-to-b/srgb from-accent to-primary" />
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              {/* Hover tint */}
              <div className="absolute inset-0 bg-linear-to-br/srgb from-primary to-primary-hover opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

              <div className="relative">
                <i
                  className={`fa-solid ${value.icon} mb-4 block text-4xl text-primary`}
                />
                <h3 className="mb-2 text-lg font-bold text-heading transition-colors group-hover:text-primary">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
