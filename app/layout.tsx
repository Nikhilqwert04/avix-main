import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { Inter } from "next/font/google";
import FooterSection from "@/components/landing/FooterSection";

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-inter-display",
});

// const interDisplay = localFont({
//   src: [
//     {
//       path: "../public/ttf/InterDisplay-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-ThinItalic.ttf",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-ExtraLight.ttf",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-ExtraLightItalic.ttf",
//       weight: "200",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-LightItalic.ttf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-Italic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-MediumItalic.ttf",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-SemiBoldItalic.ttf",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-BoldItalic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-ExtraBoldItalic.ttf",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "../public/ttf/InterDisplay-Black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "../public/ttf/InterDisplay-BlackItalic.ttf",
//       weight: "900",
//       style: "italic",
//     },
//   ],
//   variable: "--font-inter-display",
// });

const siteUrl = "https://avix.com";
const siteName = "Avix";
const siteDescription =
  "Avix is a product engineering studio that ships MVPs in 6–8 weeks. Senior engineers, full code ownership, no lock-in — built to ship, not to bill.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avix — Product Engineering, Done Right",
    template: "%s | Avix",
  },
  description: siteDescription,
  keywords: [
    "product engineering",
    "software development agency",
    "MVP development",
    "startup engineering",
    "Next.js development",
    "React development",
    "web app development",
    "dedicated development team",
    "Avix",
  ],
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Avix — Product Engineering, Done Right",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avix — Product Engineering, Done Right",
    description: siteDescription,
    creator: "@avix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} h-full bg-black text-neutral-50 antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-hidden">
        <SmoothScroll>
          <Navbar />
          {children}
          <FooterSection />
        </SmoothScroll>
      </body>
    </html>
  );
}
