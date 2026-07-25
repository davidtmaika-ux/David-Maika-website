// A single photo slot used for the DIFFERENT pictures you want in
// different places (the "Meet David" photo on About, a different one on
// Contact, and so on -- separate from the shared background in
// AtmosphereBg.tsx).
//
// To use a real photo: add the file to /public (e.g. /public/meet-david.jpg),
// then pass it in: <PhotoSlot src="/meet-david.jpg" label="David Maika" />
// Until you add a src, it shows a clean placeholder instead of a broken image.

export default function PhotoSlot({
  src,
  label,
  className = "",
}: {
  src?: string;
  label: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={`rounded-2xl border border-line object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line bg-white/[0.02] p-8 text-center ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-gold">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M21 15l-5-5-8 8" />
        </svg>
      </div>
      <p className="text-xs text-text-dim">Add your photo here</p>
      <p className="font-mono text-[10px] text-text-dim/70">{label}</p>
    </div>
  );
}
