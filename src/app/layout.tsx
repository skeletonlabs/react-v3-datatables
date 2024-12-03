import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Data Tables",
  description: "React Tanstack Data Table Integrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="cerberus" className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
