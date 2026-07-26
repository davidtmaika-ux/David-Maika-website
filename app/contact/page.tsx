import type { Metadata } from "next";
import { Mail, ExternalLink, MapPin } from "lucide-react";
import PhotoSlot from "@/components/PhotoSlot";
import AtmosphereBg from "@/components/AtmosphereBg";

export const metadata: Metadata = {
  title: "Contact | David Maika",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <AtmosphereBg />
      <div className="relative z-10 mx-auto max-w-xl px-6 py-20 text-center md:px-8">
        <PhotoSlot
          src="/contact-photo.jpg"
          label="Contact page photo"
          className="mx-auto mb-8 aspect-square w-32 object-cover"
        />
        <div className="mb-3 font-mono text-xs font-semibold text-gold">CONTACT</div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
          Let&rsquo;s talk about your account health.
        </h1>
        <p className="mb-10 text-text-dim">
          Open to Customer Success and Operations roles -- reach out any time.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:david.t.maika@gmail.com"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-line bg-white/[0.02] px-5 py-3.5 text-sm font-semibold hover:border-gold"
          >
            <Mail size={16} /> david.t.maika@gmail.com
          </a>
          {/* Replace # with your real LinkedIn profile URL */}
          <a
            href="https://www.linkedin.com/in/david-maika/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-line bg-white/[0.02] px-5 py-3.5 text-sm font-semibold hover:border-gold"
          >
            <ExternalLink size={16} /> LinkedIn Profile
          </a>
          <div className="flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm text-text-dim">
            <MapPin size={16} /> Nigeria
          </div>
        </div>
      </div>
    </div>
  );
}
