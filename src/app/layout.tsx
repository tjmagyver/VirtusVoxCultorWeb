import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const inriaSans = Inria_Sans({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inriaSans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Virtus Vox Cultor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inriaSans.variable}>{children}</body>
      <ToastContainer />
    </html>
  )
}
