import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Stairsky — Stories made of possibility",
  description: "An independent creative studio making films and digital worlds for brands with something to say.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en">
      <body suppressHydrationWarning><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
