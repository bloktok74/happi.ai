"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  MessageSquare,
  Calendar,
  Globe,
  BarChart3,
  Headphones,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import RetellCallButton from "@/components/RetellCallButton";

const AGENT_ID = "agent_454084f191fe28e0c6b0f2a8cb";

const capabilities = [
  {
    icon: PhoneCall,
    title: "Inbound Call Handling",
    description:
      "Answer every call instantly. Your AI agent greets callers, understands their needs, and routes or resolves — no hold times, no missed calls.",
  },
  {
    icon: Phone,
    title: "Outbound Sales Calls",
    description:
      "AI agents that make sales calls, qualify leads, pitch your services, and book meetings on your calendar — at scale.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Book, reschedule, and confirm appointments in real time. Syncs with your calendar and sends reminders automatically.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Handle FAQs, troubleshoot issues, process requests, and escalate when needed. Available 24/7 in multiple languages.",
  },
  {
    icon: MessageSquare,
    title: "Lead Qualification",
    description:
      "Ask the right questions, score leads based on your criteria, and send qualified prospects to your sales team ready to close.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Serve customers in English, Spanish, and more. Your AI agent adapts to the caller's language automatically.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "We Learn Your Business",
    description:
      "We study your call scripts, FAQs, services, and objection handling. Your AI agent is trained on your specific business context.",
  },
  {
    step: "02",
    title: "Build & Test Your Agent",
    description:
      "We build your custom voice AI agent, test it with real scenarios, and refine until it performs like your best employee.",
  },
  {
    step: "03",
    title: "Go Live & Monitor",
    description:
      "Deploy to your phone lines. We monitor performance, track metrics, and continuously improve your agent's responses.",
  },
];

const benefits = [
  "Answer 100% of calls — zero missed opportunities",
  "Cut support costs by up to 70%",
  "Qualify leads 24/7, even after hours",
  "Book 3x more appointments automatically",
  "Handle surge volume without hiring",
  "Consistent quality on every single call",
];

export default function VoiceAI() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <FloatingOrbs count={4} />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-muted backdrop-blur-sm">
              <Phone size={14} className="text-primary" />
              Voice AI Agents
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-inter)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Your best employee
              <br />
              <span className="gradient-text">never sleeps</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              AI voice agents that handle sales calls, customer support, and
              appointment scheduling — around the clock. Sounds human.
              Thinks fast. Never takes a day off.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="w-full max-w-xs">
                <RetellCallButton agentId={AGENT_ID} />
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface"
              >
                Industry Use Cases
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative border-t border-border py-32 overflow-hidden">
        <FloatingOrbs count={3} />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Capabilities
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Everything a phone team does.
                <br />
                Without the phone team.
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <FadeInStaggerChild key={cap.title}>
                <div className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/20">
                  <cap.icon size={24} className="text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {cap.description}
                  </p>
                </div>
              </FadeInStaggerChild>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Process
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Live in days, not months
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.15}>
                <div className="relative">
                  <div className="font-[family-name:var(--font-inter)] text-6xl font-semibold text-border">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Results
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                The numbers
                <br />
                speak for themselves
              </h2>
              <p className="mt-4 text-lg text-muted">
                Companies using happi agent see measurable improvements
                from day one.
              </p>
            </FadeIn>

            <FadeInStagger className="space-y-4">
              {benefits.map((benefit) => (
                <FadeInStaggerChild key={benefit}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-base">{benefit}</span>
                  </div>
                </FadeInStaggerChild>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="gradient-border glow p-10 sm:p-16">
              <div className="relative grid gap-10 sm:grid-cols-3">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-inter)] text-5xl font-semibold gradient-text-warm">
                    &lt;1s
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    Average response time
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-inter)] text-5xl font-semibold gradient-text-warm">
                    98%
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    Caller satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-inter)] text-5xl font-semibold gradient-text-warm">
                    24/7
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    Availability
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border py-32 overflow-hidden">
        <FloatingOrbs count={2} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <BarChart3 size={40} className="mx-auto text-primary" />
            <h2 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Hear the difference
            </h2>
            <p className="mt-4 text-lg text-muted">
              Book a 15-minute demo and hear your custom AI agent in action.
              We&apos;ll build a test agent for your exact use case.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book Your Demo
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
