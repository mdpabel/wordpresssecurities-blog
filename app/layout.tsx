import '../styles/globals.css';
import { Playfair_Display } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WordPress Securites | Your Source for WordPress Security',
  description:
    'Stay informed about the latest WordPress security best practices, vulnerabilities, and updates. Protect your WordPress website from hacks and cyber threats.',
  keywords:
    'WordPress security, website security, WordPress vulnerabilities, cyber threats',
  robots: 'index, follow',
  authors: [{ name: 'MD Pabel', url: 'https://mdpabel.com' }],
  category: 'Technology',
  abstract:
    'WordPress Securites provides valuable information and resources to help you enhance the security of your WordPress website. Stay up-to-date with the latest security best practices, learn about vulnerabilities, and safeguard your site against cyber threats.',
  applicationName: 'WordPress Securites',
  creator: 'MD Pabel',
  publisher: 'MD Pabel',
  verification: {
    google: 'mpslCEbhgCmYaHT2a_tiVmqBZGNLOojyMYxd69EdvAo',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  classification: 'WordPress Security Blog',
  generator: 'next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning={true} lang='en'>
        <body className={playfair.className}>
          <main className=''>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
