"use client";

import Link from "next/link";
import {
  Workflow,
  ArrowRight,
  Mail,
  Database,
  FileText,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  Plug,
  GitBranch,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const automations = [
  {
    icon: Mail,
    title: "Email Sequences",
    description:
      "Automated outreach, follow-ups, and nurture sequences that send the right message at the right time — personalized per prospect.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    description:
      "Auto-update deal stages, log activities, assign follow-ups, and keep your pipeline clean without lifting a finger.",
  },
  {
    icon: FileText,
    title: "Proposal Generation",
    description:
      "Auto-generate branded proposals with industry-specific content and send them to qualified leads instantly.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up Engine",
    description:
      "Multi-stage follow-up sequences that escalate through channels — email, SMS, and calls — until you get a response.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description:
      "Real-time pipeline dashboards, activity reports, and KPI tracking delivered to you automatically.",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Connect any tool in your stack — Airtable, Google Sheets, Slack, HubSpot, Calendly, and hundreds more.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Map Your Process",
    description:
      "We document every step of your current workflow — the manual ones, the bottlenecks, the things that fall through cracks.",
  },
  {
    step: "02",
    title: "Design the Automation",
    description:
      "We build the automated version using n8n, Airtable, and custom scripts. Every trigger, condition, and action mapped out.",
  },
  {
    step: "03",
    title: "Test & Deploy",
    description:
      "Rigorous testing with your real data. We deploy, monitor for a week, and fine-tune until it runs flawlessly.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    description:
      "As your business grows, your automations grow with it. We continuously optimize based on real performance data.",
  },
];

const tools = [
  "n8n",
  "Airtable",
  "Gmail",
  "Google Sheets",
  "Calendly",
  "Slack",
  "HubSpot",
  "PandaDoc",
  "Stripe",
  "Twilio",
  "Zapier",
  "Custom APIs",
];

export default function Automation() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <FloatingOrbs count={4} />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-muted backdrop-blur-sm">
              <Workflow size={14} className="text-accent" />
              Workflow Automation
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-inter)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Stop doing work
              <br />
              <span className="gradient-text">a machine should do</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              We build automated workflows that handle your email sequences,
              CRM updates, follow-ups, proposals, and reporting — so your
              team can focus on what actually matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get a Free Audit
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface"
              >
                See Examples
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we automate */}
      <section className="relative border-t border-border py-32 overflow-hidden">
        <FloatingOrbs count={3} />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Solutions
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                What we automate
              </h2>
              <p className="mt-4 text-lg text-muted">
                If it&apos;s repetitive, rule-based, or time-consuming — we can
                automate it.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {automations.map((item) => (
              <FadeInStaggerChild key={item.title}>
                <div className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/20">
                  <item.icon size={24} className="text-accent" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
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
                Our Process
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                From manual to automated
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="font-[family-name:var(--font-inter)] text-6xl font-semibold text-border">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Integrations
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
                Connects with your
                <br />
                existing tools
              </h2>
              <p className="mt-4 text-lg text-muted">
                We don&apos;t replace your stack — we supercharge it. Our
                automations plug into the tools you already use.
              </p>
            </FadeIn>

            <FadeInStagger className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <FadeInStaggerChild key={tool}>
                  <div className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium">
                    {tool}
                  </div>
                </FadeInStaggerChild>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Example workflow */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="gradient-border glow overflow-hidden p-8 sm:p-12">
              <div className="relative">
                <GitBranch size={32} className="text-accent" />
                <h3 className="mt-4 font-[family-name:var(--font-inter)] text-2xl font-semibold sm:text-3xl">
                  Example: Automated Sales Pipeline
                </h3>
                <p className="mt-3 max-w-2xl text-base text-muted">
                  Here&apos;s what a typical automation looks like for one of our
                  clients:
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "New lead enters CRM → personalized proposal sent automatically",
                    "3 days later → Follow-up #1 with industry-specific case study",
                    "5 days → Follow-up #2 with ROI stats",
                    "7 days → Final follow-up with soft close",
                    "Lead approves → Welcome email + project created",
                    "All activity logged, dashboard updated in real time",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span className="text-sm text-muted">{step}</span>
                    </div>
                  ))}
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
            <h2 className="font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
              What could you automate?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us about your workflow. We&apos;ll identify what can be
              automated and show you the ROI — for free.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get Your Free Audit
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
