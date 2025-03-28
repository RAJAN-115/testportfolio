import '@/app/globals.css';
import { ChatbotButton } from '@/components/chatbot-button';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { StatusBanner } from '@/components/status-banner';
import { ThemeProvider } from '@/components/theme-provider';
import { VoiceNavigation } from '@/components/voice-navigation';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import type React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Rajan's Portfolio",
  description: 'AI-Powered Personal Portfolio of Rajan Prajapati',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <StatusBanner />
            <Footer />
            <ChatbotButton />
            <VoiceNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
