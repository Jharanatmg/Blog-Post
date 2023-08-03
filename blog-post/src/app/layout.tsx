<<<<<<< HEAD
import "./globals.css";
import { Inter } from "next/font/google";
=======
import { ReduxProvider } from '@/redux/provider'
import './globals.css'





>>>>>>> f2ae67bb469d0f5fb4f4580f3f331e393209647d

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
