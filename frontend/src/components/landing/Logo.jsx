export const LogoMark = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#0C0C0C" stroke="rgba(255,255,255,0.15)" />
    <path d="M16 18h32l-20 20h20v8H16l20-20H16v-8z" fill="#FFFFFF" />
    <circle cx="50" cy="15" r="4" fill="#D4FF4F" />
  </svg>
);

export const Wordmark = () => (
  <div className="flex items-center gap-3">
    <LogoMark />
    <span className="font-display font-bold text-lg tracking-tight">
      Zeitix<span className="text-neutral-500"> Labs</span>
    </span>
  </div>
);
