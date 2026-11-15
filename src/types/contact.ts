
import React from "react";

export interface ContactCardsProps {
  emailUser: string;
  emailDomain: string;
  linkedinUrl: string;
  discordUsername?: string;
}

export interface ContactFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage?: string | null;
  onResetSuccess: () => void;
}
