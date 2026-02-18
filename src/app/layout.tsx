import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TransitionOverlay } from "@/components/TransitionOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "happi agent — AI Voice Agents & Workflow Automation",
  description:
    "AI-powered voice agents and workflow automation that handle sales calls, customer support, and repetitive business processes 24/7. Built for debt relief, cosmetic surgery, construction, financial services, and property management.",
  keywords: [
    "AI voice agents",
    "workflow automation",
    "business automation",
    "AI agents",
    "sales automation",
    "customer service AI",
  ],
  openGraph: {
    title: "happi agent — AI Voice Agents & Workflow Automation",
    description:
      "AI-powered voice agents and workflow automation for growing businesses.",
    url: "https://happiagent.ai",
    siteName: "happi agent",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TransitionOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
