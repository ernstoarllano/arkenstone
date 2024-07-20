import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

import { TRPCReactProvider } from '~/trpc/react'

export const metadata: Metadata = {
  title: 'Arkenstone',
  description:
    'Arkenstone is your personal job tracking board, designed to help you manage and track your applications as you search for your next precious opportunity in the tech industry.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
