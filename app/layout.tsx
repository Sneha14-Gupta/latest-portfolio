import type { Metadata } from "next"

import "./globals.css"
import { Montserrat } from "next/font/google" // Import Montserrat from next/font/google

const montserrat = Montserrat({ subsets: ["latin"] }) // Configure Montserrat font

export const metadata: Metadata = {
  title: "Sneha Gupta - Full Stack Developer",
  description: "Portfolio of Sneha Gupta - Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
