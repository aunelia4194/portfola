import { CONTACT_INFO } from "@/src/constants/contact";
import React from "react";

interface ContactFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSuccess: boolean;
  onResetSuccess: () => void;
}

export default function ContactForm({
  onSubmit,
  isSubmitting,
  isSuccess,
  onResetSuccess,
}: ContactFormProps) {
  const { form } = CONTACT_INFO;

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-slate-900/20 dark:bg-black/30 border border-white/20 dark:border-blue-900/40 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white/70 dark:focus:border-amber-400/70 transition-colors";

  return (
    <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-5">
      {/* Champ anti-spam caché */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      {isSuccess ? (
        <div className="py-10 text-center space-y-3">
          <span className="text-4xl animate-bounce inline-block">
            {form.successIcon}
          </span>
          <h3 className="text-xl font-bold text-white font-serif">
            {form.successTitle}
          </h3>
          <p className="text-sm text-white max-w-md mx-auto">
            {form.successMessage}
          </p>
          <button
            type="button"
            onClick={onResetSuccess}
            className="mt-4 text-xs font-bold text-white hover:text-[#ffb7c5] dark:text-amber-400 dark:hover:text-orange-400 underline transition-colors cursor-pointer"
          >
            {form.successButton}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                {form.labelName}
              </label>
              <input
                type="text"
                name="name"
                required
                className={inputClasses}
                placeholder={form.placeholderName}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                {form.labelEmail}
              </label>
              <input
                type="email"
                name="email"
                required
                className={inputClasses}
                placeholder={form.placeholderEmail}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
              {form.labelSubject}
            </label>
            <div className="relative">
              <select
                name="subject"
                className={`${inputClasses} appearance-none pr-10 cursor-pointer`}
              >
                {form.subjects.map((subject) => (
                  <option
                    key={subject.value}
                    value={subject.value}
                    className="bg-slate-900 text-white"
                  >
                    {subject.label}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
              {form.labelMessage}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className={`${inputClasses} resize-none`}
              placeholder={form.placeholderMessage}
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="neon-button flex items-center justify-center gap-2 min-w-[180px]"
            >
              {isSubmitting ? form.buttonSubmitting : form.buttonSubmit}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
