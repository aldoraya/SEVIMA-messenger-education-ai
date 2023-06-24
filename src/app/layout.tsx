import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/Sidebar/SideBar';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from "../app/api/auth/[...nextauth]";
import Login from '@/components/Login/Login';

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

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <div className="flex">

            {/* sidebar */}
            <SideBar />
  
            {/* client provider - Notification */}
  
            <div className="bg-[#fff] flex flex-1 w-full min-h-screen">
              {children}
            </div>
          </div>
          )}
        {/* navbar */}
        </AuthProvider>
      </body>
    </html>
  )
}
