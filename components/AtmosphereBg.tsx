// This is the ONE shared "atmosphere" image for the whole site -- the
// background overlay you mentioned wanting reused everywhere.
//
// To add your real photo: put the file at /public/brand-bg.jpg, then
// uncomment the <img> line below and delete the gradient-only version.
// Every page that uses <AtmosphereBg /> will then pick it up automatically
// -- you only ever have to add it in this one file.

export default function AtmosphereBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src="/brand-bg.jpg"
        alt=""
        className="h-full w-full object-cover object-top opacity-20 blur-sm"
      />
      <div className="absolute inset-0 bg-bg/60" />
    </div>
  );
}
