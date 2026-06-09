"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "@/i18n/LangContext";

export const ContactForm = () => {
  const { t } = useLang();
  const f = t.contact.form;
  const [state, handleSubmit] = useForm("mzdqgdgn");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <div className="size-12 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center">
          <svg
            className="size-6 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-serif text-xl text-white">{f.successTitle}</p>
        <p className="text-white/60 text-sm">{f.successDesc}</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-white/60 text-sm">
            {f.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={f.namePlaceholder}
            className="bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-emerald-300/50 transition-colors"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-400 text-xs"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-white/60 text-sm">
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={f.emailPlaceholder}
            className="bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-emerald-300/50 transition-colors"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-400 text-xs"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="budget" className="text-white/60 text-sm">
          {f.budget}
        </label>
        <select
          id="budget"
          name="budget"
          className="bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white text-sm focus:outline-none focus:border-emerald-300/50 transition-colors appearance-none"
        >
          <option value="" className="bg-gray-900">
            {f.budgetPlaceholder}
          </option>
          <option value="<$500" className="bg-gray-900">
            Under $500
          </option>
          <option value="$500-$1000" className="bg-gray-900">
            $500 – $1,000
          </option>
          <option value="$1000-$3000" className="bg-gray-900">
            $1,000 – $3,000
          </option>
          <option value="$3000+" className="bg-gray-900">
            $3,000+
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-white/60 text-sm">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={f.messagePlaceholder}
          rows={4}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-emerald-300/50 transition-colors resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-xs"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="h-12 rounded-xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? f.sending : f.send}
      </button>
    </form>
  );
};
