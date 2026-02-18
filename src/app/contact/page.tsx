"use client";

import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "blok@happiagent.ai",
    href: "mailto:blok@happiagent.ai",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <FloatingOrbs count={3} />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contact
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-inter)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Let&apos;s{" "}
                <span className="gradient-text">build together</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                15-minute call. No sales pitch. We&apos;ll listen to your
                challenges and show you exactly what we can automate.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <FadeIn>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="text-2xl font-semibold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted">
                  Tell us about your business and what you&apos;re looking to
                  automate.
                </p>

                <form
                  className="mt-8 space-y-6"
                  action="https://formspree.io/f/placeholder"
                  method="POST"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-foreground"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select your industry</option>
                      <option value="debt-relief">Debt Relief</option>
                      <option value="cosmetic-surgery">Cosmetic Surgery</option>
                      <option value="construction">Construction</option>
                      <option value="financial-services">
                        Financial Services
                      </option>
                      <option value="property-management">
                        Property Management
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-foreground"
                    >
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="voice-ai">Voice AI Agents</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="both">Both</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your business and what you'd like to automate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    Send Message
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Info sidebar */}
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-border bg-surface p-8">
                  <h3 className="text-lg font-semibold">
                    Prefer to book directly?
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Skip the form. Pick a time that works for you and we&apos;ll
                    have a quick call to discuss your needs.
                  </p>
                  <a
                    href="https://calendly.com/happiagents/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
                  >
                    Book a 15-min Call
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
                        <info.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-base text-foreground hover:text-primary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-base text-foreground">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="gradient-border p-8">
                  <div className="relative">
                    <h3 className="text-lg font-semibold">
                      What to expect
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-muted">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        15-minute discovery call — we listen, you talk
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        We identify 2-3 quick wins for automation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        Free proposal with clear ROI projections
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        No commitment required
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
