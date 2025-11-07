import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Database Management Systems Course",
  description: "Interactive learning platform for Database Management Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
