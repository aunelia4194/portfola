"use client";

import { useContactForm } from "@/src/hooks/useContactForm";
import ContactForm from "@/src/components/contact/ContactForm";
import ContactCards from "@/src/components/contact/ContactCards";
import BackLink from "@/src/components/ui/BackLink";
import { CONTACT_INFO } from "@/src/constants/contact";

export default function ContactPage() {
  const {
    isSubmitting,
    isSuccess,
    errorMessage,
    setIsSuccess,
    handleSubmit,
    emailUser,
    emailDomain,
    linkedinUrl,
    discordUsername,
  } = useContactForm();

  return (
    <main className="min-h-screen relative text-white">
      <div className="page-container relative z-10">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <BackLink />

            <header className="mt-6 space-y-3">
              <h1 className="text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
                {CONTACT_INFO.headerTitle}
                <span className="text-[#ffb7c5] dark:text-orange-500">.</span>
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed">
                {CONTACT_INFO.headerDesc}
              </p>
            </header>
          </div>

          <div className="glass-panel rounded-3xl bg-white/5 dark:bg-slate-950/40 border border-white/20 dark:border-blue-900/40 shadow-xl backdrop-blur-md">
            <ContactForm
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              isSuccess={isSuccess}
              errorMessage={errorMessage}
              onResetSuccess={() => setIsSuccess(false)}
            />
          </div>

          <ContactCards
            emailUser={emailUser}
            emailDomain={emailDomain}
            linkedinUrl={linkedinUrl}
            discordUsername={discordUsername}
          />
        </div>
      </div>
    </main>
  );
}
