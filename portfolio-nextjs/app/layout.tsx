import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Shivam Kumar - Portfolio',
  description: 'Developer, Designer, and Photographer passionate about creating meaningful digital experiences.',
  keywords: ['portfolio', 'developer', 'photographer', 'RPA', 'UiPath', 'web development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
