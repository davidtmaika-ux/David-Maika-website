import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 font-mono text-sm font-semibold text-gold">404</div>
      <h1 className="mb-4 text-3xl font-extrabold">Page not found</h1>
      <p className="mb-8 text-text-dim">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-md bg-gold px-5 py-3 text-sm font-bold text-[#14110A]"
      >
        Back to Home
      </Link>
    </div>
  );
}
