import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
})

export const metadata = {
  title: 'Asa Delta RJ',
  description: 'Maior grupo de Asa Delta do Brasil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
