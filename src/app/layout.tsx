import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Portfolio | Thought Leader & Builder",
  description:
    "Personal portfolio showcasing AI applications, thought leadership, and insights on the future of artificial intelligence.",
  keywords: ["AI", "machine learning", "portfolio", "thought leadership", "artificial intelligence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-50">{children}</body>
    </html>
  );
}
