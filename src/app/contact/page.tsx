"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@happiagent.ai",
    href: "mailto:hello@happiagent.ai",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Irvine, CA",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "";

      if (!webhookUrl) {
        throw new Error("Webhook URL not configured");
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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

                {status === "success" && (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <CheckCircle size={20} className="shrink-0 text-green-600" />
                    <p className="text-sm font-medium text-green-800">
                      Message sent! We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle size={20} className="shrink-0 text-red-600" />
                    <p className="text-sm font-medium text-red-800">
                      {errorMessage || "Something went wrong. Please try again."}
                    </p>
                  </div>
                )}

                <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit}
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                      placeholder="Your phone number"
                    />
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
                      value={formData.company}
                      onChange={handleChange}
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
                      value={formData.industry}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select your industry</option>
                      <option value="Debt Relief">Debt Relief</option>
                      <option value="Cosmetic Surgery">Cosmetic Surgery</option>
                      <option value="Construction">Construction</option>
                      <option value="Financial Services">
                        Financial Services
                      </option>
                      <option value="Property Management">
                        Property Management
                      </option>
                      <option value="Other">Other</option>
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
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your business and what you'd like to automate..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
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
