"use client";

import Link from "next/link";
import {
  Phone,
  Workflow,
  ArrowRight,
  Bot,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const services = [
  {
    icon: Phone,
    title: "Voice AI Agents",
    description:
      "AI agents that handle sales calls, qualify leads, book appointments, and manage customer support — 24/7, in any language.",
    href: "/voice-ai",
    gradient: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end business process automation — from lead intake and follow-ups to onboarding and reporting. Zero manual work.",
    href: "/automation",
    gradient: "from-orange-500/20 to-orange-600/5",
  },
];

const stats = [
  { value: "60%", label: "Faster processing" },
  { value: "24/7", label: "Always on" },
  { value: "70%", label: "Less manual work" },
  { value: "3x", label: "More capacity" },
];

const industries = [
  { name: "Debt Relief", icon: Shield },
  { name: "Cosmetic Surgery", icon: Users },
  { name: "Construction", icon: TrendingUp },
  { name: "Financial Services", icon: Zap },
  { name: "Property Management", icon: Clock },
];

const features = [
  {
    icon: Bot,
    title: "Intelligent Agents",
    description:
      "AI that understands context, remembers conversations, and makes decisions — not just scripted bots.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Go live in days, not months. We handle the integration with your existing tools and workflows.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Your AI workforce never sleeps. Handle calls, emails, and tasks around the clock.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Track every interaction. See exactly how much time and money you're saving.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg" />
        <FloatingOrbs count={4} />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-muted backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Now accepting new clients
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mx-auto max-w-5xl font-[family-name:var(--font-inter)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              AI agents that{" "}
              <span className="gradient-text">work for you</span>
              <br />
              around the clock
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Voice AI that answers calls and closes deals. Workflow automation
              that eliminates repetitive tasks. Built for businesses ready to
              scale.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book a Free Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/industries"
                className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface"
              >
                See Use Cases
              </Link>
            </div>
          </FadeIn>

          {/* Stats strip */}
          <FadeIn delay={0.4}>
            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[family-name:var(--font-inter)] text-3xl font-semibold gradient-text-warm sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-32 overflow-hidden">
        <FloatingOrbs count={2} />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                What we do
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Two ways to transform
                <br />
                your business
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-10"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <service.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="mt-6 font-[family-name:var(--font-inter)] text-2xl font-semibold sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative border-t border-border py-32 overflow-hidden">
        <FloatingOrbs count={3} />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Happi Agents
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Built different
              </h2>
              <p className="mt-4 text-lg text-muted">
                Not another chatbot. Real AI agents that understand your
                business.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FadeInStaggerChild key={feature.title}>
                <div className="gradient-border p-6">
                  <div className="relative">
                    <feature.icon size={24} className="text-primary" />
                    <h3 className="mt-4 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeInStaggerChild>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-32 overflow-hidden">
        <FloatingOrbs count={2} />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Industries
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Purpose-built for your industry
              </h2>
              <p className="mt-4 text-lg text-muted">
                Every solution is tailored to the specific workflows,
                regulations, and challenges of your vertical.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="mt-16 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <FadeInStaggerChild key={industry.name}>
                <Link
                  href={`/industries#${industry.name.toLowerCase().replace(/ /g, "-")}`}
                  className="group flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-3 transition-all hover:border-primary/30 hover:bg-surface-2"
                >
                  <industry.icon
                    size={18}
                    className="text-muted transition-colors group-hover:text-primary"
                  />
                  <span className="text-sm font-medium">{industry.name}</span>
                </Link>
              </FadeInStaggerChild>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                See all industry solutions
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border py-32 overflow-hidden">
        <FloatingOrbs count={3} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to put AI to work?
            </h2>
            <p className="mt-4 text-lg text-muted">
              15-minute call. No pressure. We&apos;ll show you exactly what we
              can automate for your business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book a Free Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
