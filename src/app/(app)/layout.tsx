import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Funroad - Sell Digital Products with Ease",
  description:
    "Funroad is a modern platform for creators to sell digital products, memberships, and services. Start selling in minutes with our simple, creator-friendly tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NuqsAdapter>
        <TRPCReactProvider>
          <body className={`${dmSans.className} bg-white antialiased`}>
            {children}
            <Toaster richColors />
          </body>
        </TRPCReactProvider>
      </NuqsAdapter>
    </html>
  );
}
