import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coisinhas da Beth',
  description: 'Coisinhas da Beth criou este site para que você, minha cliente, se sinta mais confortável e à vontade ao gerenciar suas contas e desfrutar de nossas variadas opções no catálogo. Nosso objetivo é facilitar suas compras e tornar sua experiência agradável. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  )
}
