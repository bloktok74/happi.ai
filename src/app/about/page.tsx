"use client";

import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Handshake } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We measure success by your ROI, not by how impressive the tech sounds. Every solution we build has a clear, measurable outcome.",
  },
  {
    icon: Lightbulb,
    title: "Practical AI",
    description:
      "We don't chase hype. We build AI solutions that solve real business problems today — not theoretical ones that might work someday.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We're not a vendor. We embed with your team, learn your business, and continuously improve your systems as you grow.",
  },
];

const timeline = [
  {
    title: "The Problem We Saw",
    description:
      "Small and mid-size businesses were drowning in repetitive work — follow-up emails, phone calls, data entry, scheduling. They knew AI could help but didn't have the technical team to build it.",
  },
  {
    title: "The Solution We Built",
    description:
      "We created happi agent to bridge that gap. A team that combines AI expertise with deep business process understanding to deliver automation that actually works in the real world.",
  },
  {
    title: "Where We're Going",
    description:
      "Every business deserves the operational efficiency that AI can deliver. We're building toward a world where growing businesses can compete with enterprises — without the enterprise headcount.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <FloatingOrbs count={3} />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-inter)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              We build AI that
              <br />
              <span className="gradient-text">does the work</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              happi agent is an AI automation studio. We help growing
              businesses replace repetitive manual work with intelligent AI
              agents and automated workflows.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Story
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Why we exist
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {timeline.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                How We Work
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Our principles
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <FadeInStaggerChild key={value.title}>
                <div className="gradient-border p-8">
                  <div className="relative">
                    <value.icon size={28} className="text-primary" />
                    <h3 className="mt-4 text-xl font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </FadeInStaggerChild>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* What we offer */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                What We Offer
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Two core services,
                <br />
                infinite possibilities
              </h2>
              <p className="mt-4 text-lg text-muted">
                We specialize in two things and we do them exceptionally well.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn>
                <Link
                  href="/voice-ai"
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/30"
                >
                  <h3 className="text-xl font-semibold">Voice AI Agents</h3>
                  <p className="mt-2 text-sm text-muted">
                    AI that answers calls, qualifies leads, books appointments,
                    and handles customer support — 24/7.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Link
                  href="/automation"
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30"
                >
                  <h3 className="text-xl font-semibold">
                    Workflow Automation
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Automated email sequences, CRM pipelines, follow-ups,
                    reporting, and custom integrations.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="gradient-border glow p-10 sm:p-16">
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                  Let&apos;s build something
                </h2>
                <p className="mt-4 text-lg text-muted">
                  We&apos;re always looking for businesses ready to ditch the
                  manual work. If that&apos;s you, let&apos;s talk.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    Get in Touch
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
