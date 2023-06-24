import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import ClientProvider from '@/components/ClientProvider/ClientProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger Education AI',
  description: 'Messenger with AI',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ClientProvider />
        {children}
        </AuthProvider>
      </body>
    </html>
  )
}
