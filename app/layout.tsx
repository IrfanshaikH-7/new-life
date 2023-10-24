import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Syne } from 'next/font/google'

const fontt = Syne({ subsets: ['latin'], weight: ['500'] })

export const metadata: Metadata = {
  title: 'New life cranes',
  description: 'Crane rental - hydra cranes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" className='max-h-screen max-w-screen scroll-smooth no-scrollbar'>
      <body className={`${fontt.className} bg-[#fffff] m-0 p-0 `}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
