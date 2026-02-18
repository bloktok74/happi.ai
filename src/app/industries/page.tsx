"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Stethoscope,
  HardHat,
  Landmark,
  Building2,
  CheckCircle2,
  Phone,
  Workflow,
} from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerChild } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";

const industries = [
  {
    id: "debt-relief",
    icon: Shield,
    name: "Debt Relief",
    tagline: "Automate intake, enrollment, and client follow-up",
    stat: "60%",
    statLabel: "faster processing",
    description:
      "Debt relief companies handle high volumes of distressed clients who need fast answers. Our AI agents and automations streamline the entire intake-to-enrollment pipeline.",
    voiceUses: [
      "Inbound call handling for new client inquiries",
      "Automated qualification — income, debt amount, state eligibility",
      "Outbound calls for document follow-ups and appointment reminders",
      "After-hours support for clients in financial crisis",
    ],
    automationUses: [
      "Intake form to CRM pipeline — automatic lead scoring and routing",
      "Enrollment document collection with automated reminders",
      "Multi-stage follow-up sequences for dropped-off applicants",
      "Compliance document tracking and expiry alerts",
      "Monthly client status report generation",
    ],
  },
  {
    id: "cosmetic-surgery",
    icon: Stethoscope,
    name: "Cosmetic Surgery",
    tagline: "Fill your schedule with qualified consultations",
    stat: "3x",
    statLabel: "more consultations booked",
    description:
      "Cosmetic surgery practices need to convert inquiries into consultations quickly. Our agents handle the high-touch communication that drives bookings.",
    voiceUses: [
      "24/7 consultation booking and rescheduling",
      "Pre-consultation questionnaire collection via phone",
      "Post-op check-in calls and follow-up reminders",
      "New patient inquiry handling with procedure-specific responses",
    ],
    automationUses: [
      "Lead capture to consultation booking pipeline",
      "Automated pre-op and post-op reminder sequences",
      "Before/after photo request workflows",
      "Review request campaigns for satisfied patients",
      "Referral tracking and reward automation",
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    name: "Construction",
    tagline: "Eliminate admin that eats up your week",
    stat: "15hrs",
    statLabel: "saved per week on admin",
    description:
      "Construction companies lose hours every week to bid tracking, subcontractor coordination, and progress reporting. We automate the back-office so you can focus on building.",
    voiceUses: [
      "Inbound call handling for project inquiries and bid requests",
      "Subcontractor coordination calls and scheduling",
      "Client progress update calls with real-time project data",
      "After-hours emergency line with smart escalation",
    ],
    automationUses: [
      "Bid tracking and follow-up automation",
      "Subcontractor availability and scheduling coordination",
      "Progress report generation from project management tools",
      "Milestone payment reminders and invoice workflows",
      "Material order tracking and delivery alerts",
    ],
  },
  {
    id: "financial-services",
    icon: Landmark,
    name: "Financial Services",
    tagline: "Streamline onboarding and stay compliant",
    stat: "70%",
    statLabel: "fewer manual touchpoints",
    description:
      "Financial services firms juggle compliance requirements, client onboarding paperwork, and portfolio communication. Our automation handles the process while you focus on the strategy.",
    voiceUses: [
      "Client onboarding calls — collect information and schedule meetings",
      "Quarterly review reminders and scheduling",
      "Document follow-up calls for KYC and compliance",
      "General inquiry handling with compliance-aware responses",
    ],
    automationUses: [
      "Client onboarding document collection and verification",
      "Compliance document tracking with expiry alerts",
      "Portfolio update notification workflows",
      "Quarterly report generation and distribution",
      "Referral program tracking and reward automation",
    ],
  },
  {
    id: "property-management",
    icon: Building2,
    name: "Property Management",
    tagline: "Manage 3x the properties with the same team",
    stat: "3x",
    statLabel: "properties per person",
    description:
      "Property management companies deal with constant tenant communication, maintenance requests, and lease management. Our AI handles the volume so you can scale your portfolio.",
    voiceUses: [
      "24/7 tenant call handling for maintenance and inquiries",
      "Automated leasing inquiry calls and tour scheduling",
      "Rent reminder calls and payment follow-ups",
      "Emergency maintenance triage with smart escalation",
    ],
    automationUses: [
      "Maintenance request intake, routing, and vendor assignment",
      "Lease renewal tracking and automated reminder sequences",
      "Tenant communication workflows — move-in, move-out, notices",
      "Rent collection tracking and late payment escalation",
      "Vacancy marketing automation across listing platforms",
    ],
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <FloatingOrbs count={4} />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Industries
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-inter)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Built for{" "}
                <span className="gradient-text">your industry</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Every business is different. That&apos;s why we build custom AI
                agents and automations tailored to the specific workflows,
                compliance requirements, and challenges of your vertical.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((industry, i) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-24 ${i % 2 === 0 ? "border-t border-border" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-16 lg:grid-cols-12">
              {/* Header */}
              <div className="lg:col-span-4">
                <FadeIn>
                  <div className="sticky top-32">
                    <industry.icon size={32} className="text-primary" />
                    <h2 className="mt-4 font-[family-name:var(--font-inter)] text-3xl font-semibold tracking-tight sm:text-4xl">
                      {industry.name}
                    </h2>
                    <p className="mt-2 text-lg text-muted">
                      {industry.tagline}
                    </p>
                    <div className="mt-6 inline-block rounded-xl border border-border bg-surface px-6 py-4">
                      <div className="font-[family-name:var(--font-inter)] text-3xl font-semibold gradient-text-warm">
                        {industry.stat}
                      </div>
                      <div className="mt-1 text-sm text-muted">
                        {industry.statLabel}
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-muted">
                      {industry.description}
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Use cases */}
              <div className="space-y-8 lg:col-span-8">
                <FadeIn>
                  <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <h3 className="text-lg font-semibold">
                        Voice AI Use Cases
                      </h3>
                    </div>
                    <div className="mt-6 space-y-3">
                      {industry.voiceUses.map((use) => (
                        <div key={use} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span className="text-sm text-muted">{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <Workflow size={20} className="text-accent" />
                      <h3 className="text-lg font-semibold">
                        Automation Use Cases
                      </h3>
                    </div>
                    <div className="mt-6 space-y-3">
                      {industry.automationUses.map((use) => (
                        <div key={use} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          <span className="text-sm text-muted">{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative border-t border-border py-32 overflow-hidden">
        <FloatingOrbs count={3} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-inter)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Don&apos;t see your industry?
            </h2>
            <p className="mt-4 text-lg text-muted">
              We build custom solutions for any industry. Tell us about your
              business and we&apos;ll show you what&apos;s possible.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Let&apos;s Talk
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
