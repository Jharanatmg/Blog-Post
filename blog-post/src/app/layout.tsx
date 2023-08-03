import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import Navbar from './../components/navbar';






export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en">
     
      <body><Navbar/><ReduxProvider>{children}</ReduxProvider></body>
      
    </html>
  );
}
