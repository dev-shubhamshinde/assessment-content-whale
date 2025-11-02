import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- UPDATED METADATA BLOCK ---
export const metadata = {
  // Use a template for the title.
  // `%s` will be replaced by the page-specific title
  // (e.g., "End-to-End AR Follow Up Services | Qualigenix")
  title: {
    template: "%s",
    default: "Qualigenix - Medical Billing & AR Follow Up", // A fallback title
  },
  // Add a good default description for other pages
  description:
    "Qualigenix provides expert medical billing and AR follow up services to boost your revenue cycle.",
};
// -------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
