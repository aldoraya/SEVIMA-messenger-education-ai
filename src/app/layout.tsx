import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger Education AI',
  description: 'Messenger with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">

          {/* sidebar */}

          {/* client provider - Notification */}

          <div className="bg-[#fff] flex flex-1 w-full min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}