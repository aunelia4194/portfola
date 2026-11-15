import React, { useState } from "react";
import { PROFILE_INFO } from "@/src/constants/profile";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://web3forms.com", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setErrorMessage(
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
      }
    } catch {
      setErrorMessage(
        "Impossible de joindre le serveur. Vérifiez votre connexion."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    isSuccess,
    errorMessage,
    setIsSuccess,
    handleSubmit,
    emailUser: PROFILE_INFO.emailUser,
    emailDomain: PROFILE_INFO.emailDomain,
    linkedinUrl: PROFILE_INFO.linkedinUrl,
    discordUsername: PROFILE_INFO.discordUsername,
  };
}
