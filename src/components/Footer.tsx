import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Voice AI Agents", href: "/voice-ai" },
    { label: "Workflow Automation", href: "/automation" },
    { label: "Custom Solutions", href: "/contact" },
  ],
  Industries: [
    { label: "Debt Relief", href: "/industries#debt-relief" },
    { label: "Cosmetic Surgery", href: "/industries#cosmetic-surgery" },
    { label: "Construction", href: "/industries#construction" },
    { label: "Financial Services", href: "/industries#financial-services" },
    { label: "Property Management", href: "/industries#property-management" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="text-sm font-bold text-white">H</span>
              </div>
              <span className="font-[family-name:var(--font-inter)] text-lg font-semibold">
                Happi Agents
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI-powered voice agents and workflow automation that help
              businesses scale operations, close more deals, and never miss a
              follow-up.
            </p>
            <p className="mt-6 text-xs text-muted">
              &copy; {new Date().getFullYear()} Happi Agents. All rights
              reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
