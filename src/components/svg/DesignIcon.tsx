import React from "react";
import { IconProps } from "@/src/types/ui";

export default function DesignIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.373-9.374a2.25 2.25 0 113.182 3.182l-9.373 9.373a4.5 4.5 0 01-2.25 1.254l-3.16.79a.75.75 0 01-.906-.906l.79-3.16a4.5 4.5 0 011.254-2.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.14 7.86l3 3" />
    </svg>
  );
}
