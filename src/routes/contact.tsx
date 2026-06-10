import { createFileRoute } from "@tanstack/react-router";
import { SectionOpener } from "@/components/SectionOpener";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — kamo, inc." },
      {
        name: "description",
        content: "Get in touch with kamo, inc. — Christopher Keener, principal. Tokyo, Japan.",
      },
      { property: "og:title", content: "Contact — kamo, inc." },
      { property: "og:description", content: "Get in touch." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a little more").max(2000),
  lists: z.array(z.string()).default([]),
});

const LISTS = [
  { id: "industry", label: "Industry X.0 updates" },
  { id: "coffee", label: "Coffee" },
  { id: "general", label: "General updates" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      message: String(fd.get("message") ?? ""),
      lists: LISTS.map((l) => l.id).filter((id) => fd.get(`list_${id}`) === "on"),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <main>
      <SectionOpener jp="お問い合わせ" en="Get in touch" kicker="05 — Contact" />

      <section className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 pb-24">
        <div className="space-y-8">
          <p className="text-lg text-ink/80 leading-relaxed">
            For project inquiries, partnerships, or speaking engagements — please reach out.
            Christopher responds personally.
          </p>

          <div className="aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center">
            <span className="block w-14 h-14 rounded-full bg-crimson/90 flex items-center justify-center text-paper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="border border-crimson/30 bg-crimson/5 p-8 animate-fade-up">
              <span className="block w-3 h-3 rounded-full bg-crimson mb-4" />
              <h2 className="font-serif text-2xl mb-2">Thank you.</h2>
              <p className="text-ink/70">
                Your message has been received. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              {(["name", "email", "organization"] as const).map((f) => (
                <div key={f}>
                  <label
                    className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-2"
                    htmlFor={f}
                  >
                    {f === "organization" ? "Organization (optional)" : f}
                  </label>
                  <input
                    id={f}
                    name={f}
                    type={f === "email" ? "email" : "text"}
                    className="w-full border border-ink/20 bg-transparent px-4 py-3 focus:bg-white focus:border-crimson focus:outline-none transition-colors duration-300"
                  />
                  {errors[f] && <p className="text-xs text-crimson mt-1">{errors[f]}</p>}
                </div>
              ))}

              <div>
                <label
                  className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border border-ink/20 bg-transparent px-4 py-3 focus:bg-white focus:border-crimson focus:outline-none resize-none transition-colors duration-300"
                />
                {errors.message && <p className="text-xs text-crimson mt-1">{errors.message}</p>}
              </div>

              <fieldset>
                <legend className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-3">
                  Mailing lists
                </legend>
                <div className="space-y-2">
                  {LISTS.map((l) => (
                    <label
                      key={l.id}
                      className="flex items-center gap-3 text-sm text-ink/80 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={`list_${l.id}`}
                        className="accent-crimson w-4 h-4"
                      />
                      {l.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-ink text-paper text-[12px] tracking-[0.2em] uppercase hover:bg-crimson transition-colors"
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
