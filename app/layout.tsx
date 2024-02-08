import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile List App',
  description: 'User Profile List App developed using Next 14',
  authors: [{ name: 'Rayne Mallari' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
