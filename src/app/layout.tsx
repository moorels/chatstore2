import './globals.css'
import { Inter } from 'next/font/google'
import Chat from './components/Chat'
import Providers from './components/Providers'
import { Children } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sync Ai ',
  description: 'Sync Ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className='bg-slate-700'>
        <Chat/>
        {children}
        </body>
        </Providers>
    </html>
  )
}
