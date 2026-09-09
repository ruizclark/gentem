import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gentem - Unlocking people\'s agency in the era of AI',
  description: 'Gentem helps leaders and organizations navigate the human side of digital transformation—aligning people, strategy, and technology to transform outcomes.',
  generator: 'v0.app',
  icons: {
    icon: '/gentem-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f4f1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
