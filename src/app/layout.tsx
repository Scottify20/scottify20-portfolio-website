import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scottify',
  description: "Scott Fulguirinas' Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased pixelated-mask text-body`}>{children}</body>
    </html>
  );
}
