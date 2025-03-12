import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DurakGO - Privacy Policy',
  description: 'Privacy Policy for DurakGO app - Metro schedules of Ankara',
  keywords: 'privacy policy, DurakGO, metro schedules, Ankara, app privacy',
  authors: [{ name: 'Onur Dursun' }],
  creator: 'Onur Dursun',
  publisher: 'Onur Dursun',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}