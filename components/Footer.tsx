import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xs text-text-dim">
          David Maika &middot; Customer Success Strategist &middot; &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex gap-6 text-xs">
          <a
            href="mailto:david.t.maika@gmail.com"
            className="text-text-dim hover:text-gold"
          >
            Email
          </a>
          <Link href="/contact" className="text-text-dim hover:text-gold">
            Contact
          </Link>
          {/* Replace # with your real LinkedIn URL */}
          <a href="#" className="text-text-dim hover:text-gold">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
