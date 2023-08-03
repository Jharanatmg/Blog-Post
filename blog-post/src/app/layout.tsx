import { ReduxProvider } from '@/redux/provider'
import './globals.css'






export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className='bg-slate-200'><ReduxProvider>{children}</ReduxProvider></body>
      
    </html>
  );
}
