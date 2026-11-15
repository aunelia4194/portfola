
interface SvgProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export default function StarIcon({ className, ...props }: SvgProps) {
  return (
    <svg
      // Couleur orange (#ea580c) injectée en brut directement par défaut
      className={`w-5 h-5 text-[#ea580c] drop-shadow-[0_0_8px_rgba(234,88,12,0.5)] shrink-0 ${className || ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8L8 14 2 9.2h7.6z" />
    </svg>
  );
}
